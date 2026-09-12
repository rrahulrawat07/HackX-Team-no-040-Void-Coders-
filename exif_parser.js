/**
 * ExifParser - Lightweight, zero-dependency client-side EXIF & GPS Metadata Extractor
 * Strictly adheres to EXIF 2.31 / TIFF 6.0 specification and Indian Smart City Civic OS standards.
 */

(function(global) {
  'use strict';

  const ExifParser = {
    /**
     * Converts DMS (Degrees, Minutes, Seconds) to Decimal Coordinates
     * @param {number} deg 
     * @param {number} min 
     * @param {number} sec 
     * @param {string} ref 'N', 'S', 'E', 'W'
     * @returns {number} Decimal degrees
     */
    convertDMSToDecimal(deg, min, sec, ref) {
      if (deg === null || deg === undefined) return null;
      const d = Number(deg) || 0;
      const m = Number(min) || 0;
      const s = Number(sec) || 0;
      let decimal = d + (m / 60.0) + (s / 3600.0);
      
      const cleanRef = String(ref || 'N').trim().toUpperCase();
      if (cleanRef === 'S' || cleanRef === 'W') {
        decimal = -decimal;
      }
      
      // Preserve full numeric precision up to 6 decimal places (10cm precision)
      return Number(decimal.toFixed(6));
    },

    /**
     * Parse binary ArrayBuffer of a JPEG file and extract EXIF & GPS metadata
     * @param {ArrayBuffer} arrayBuffer 
     * @returns {Object} Structured EXIF result conforming to Section 8 specifications
     */
    parse(arrayBuffer) {
      const defaultResult = {
        exif_found: false,
        gps_found: false,
        latitude: null,
        longitude: null,
        altitude: null,
        date_taken: null,
        camera_make: null,
        camera_model: null,
        orientation: 1,
        location_name: null,
        location_source: null
      };

      if (!arrayBuffer || arrayBuffer.byteLength < 16) {
        return defaultResult;
      }

      const view = new DataView(arrayBuffer);

      // Check JPEG SOI (Start of Image) marker: 0xFFD8
      if (view.getUint16(0) !== 0xFFD8) {
        return defaultResult;
      }

      let offset = 2;
      const length = view.byteLength;

      // Scan JPEG segments for APP1 (0xFFE1) EXIF marker
      while (offset < length - 4) {
        const marker = view.getUint16(offset);
        offset += 2;

        // Break on SOS (Start of Scan) or EOI (End of Image)
        if (marker === 0xFFDA || marker === 0xFFD9) {
          break;
        }

        const segmentLength = view.getUint16(offset);
        if (segmentLength < 2) break;

        // APP1 Marker: 0xFFE1
        if (marker === 0xFFE1) {
          const exifHeaderOffset = offset + 2;
          // Check for 'Exif\0\0' (0x45786966 0x0000)
          if (view.byteLength >= exifHeaderOffset + 6) {
            const headerStr = String.fromCharCode(
              view.getUint8(exifHeaderOffset),
              view.getUint8(exifHeaderOffset + 1),
              view.getUint8(exifHeaderOffset + 2),
              view.getUint8(exifHeaderOffset + 3)
            );

            if (headerStr === 'Exif') {
              const tiffOffset = exifHeaderOffset + 6;
              return this.parseTiff(view, tiffOffset, segmentLength - 8);
            }
          }
        }

        offset += segmentLength;
      }

      return defaultResult;
    },

    /**
     * Parse TIFF data block inside APP1 segment
     */
    parseTiff(view, tiffOffset, tiffLength) {
      const res = {
        exif_found: true,
        gps_found: false,
        latitude: null,
        longitude: null,
        altitude: null,
        date_taken: null,
        camera_make: null,
        camera_model: null,
        orientation: 1,
        location_name: null,
        location_source: null
      };

      if (tiffOffset + 8 > view.byteLength) return res;

      // Byte order: II (0x4949 = Little Endian) or MM (0x4D4D = Big Endian)
      const byteOrder = view.getUint16(tiffOffset);
      let littleEndian = false;
      if (byteOrder === 0x4949) {
        littleEndian = true;
      } else if (byteOrder === 0x4D4D) {
        littleEndian = false;
      } else {
        return res;
      }

      // Check TIFF magic number: 42 (0x002A)
      if (view.getUint16(tiffOffset + 2, littleEndian) !== 0x002A) {
        return res;
      }

      const firstIfdOffset = view.getUint32(tiffOffset + 4, littleEndian);
      if (firstIfdOffset < 8 || tiffOffset + firstIfdOffset >= view.byteLength) {
        return res;
      }

      let ifdOffset = tiffOffset + firstIfdOffset;
      let exifIfdOffset = null;
      let gpsIfdOffset = null;

      // Read 0th IFD
      const numEntries = view.getUint16(ifdOffset, littleEndian);
      ifdOffset += 2;

      for (let i = 0; i < numEntries && ifdOffset + 12 <= view.byteLength; i++) {
        const tag = view.getUint16(ifdOffset, littleEndian);
        const type = view.getUint16(ifdOffset + 2, littleEndian);
        const count = view.getUint32(ifdOffset + 4, littleEndian);
        const valueOffset = ifdOffset + 8;

        if (tag === 0x010F) { // Make
          res.camera_make = this.readString(view, tiffOffset, type, count, valueOffset, littleEndian);
        } else if (tag === 0x0110) { // Model
          res.camera_model = this.readString(view, tiffOffset, type, count, valueOffset, littleEndian);
        } else if (tag === 0x0112) { // Orientation
          res.orientation = view.getUint16(valueOffset, littleEndian);
        } else if (tag === 0x8769) { // Exif IFD Pointer
          exifIfdOffset = tiffOffset + view.getUint32(valueOffset, littleEndian);
        } else if (tag === 0x8825) { // GPS IFD Pointer
          gpsIfdOffset = tiffOffset + view.getUint32(valueOffset, littleEndian);
        }

        ifdOffset += 12;
      }

      // Read Exif IFD for DateTimeOriginal
      if (exifIfdOffset && exifIfdOffset + 2 <= view.byteLength) {
        const exifEntries = view.getUint16(exifIfdOffset, littleEndian);
        let entryOffset = exifIfdOffset + 2;
        for (let i = 0; i < exifEntries && entryOffset + 12 <= view.byteLength; i++) {
          const tag = view.getUint16(entryOffset, littleEndian);
          const type = view.getUint16(entryOffset + 2, littleEndian);
          const count = view.getUint32(entryOffset + 4, littleEndian);
          const valueOffset = entryOffset + 8;

          if (tag === 0x9003 || tag === 0x9004) { // DateTimeOriginal / DateTimeDigitized
            const dtStr = this.readString(view, tiffOffset, type, count, valueOffset, littleEndian);
            if (dtStr) {
              // Convert "YYYY:MM:DD HH:MM:SS" to ISO "YYYY-MM-DDTHH:MM:SS"
              const parts = dtStr.trim().split(' ');
              if (parts.length === 2) {
                res.date_taken = parts[0].replace(/:/g, '-') + 'T' + parts[1];
              } else {
                res.date_taken = dtStr;
              }
            }
          }

          entryOffset += 12;
        }
      }

      // Read GPS IFD for Latitude, Longitude, Altitude
      if (gpsIfdOffset && gpsIfdOffset + 2 <= view.byteLength) {
        const gpsEntries = view.getUint16(gpsIfdOffset, littleEndian);
        let entryOffset = gpsIfdOffset + 2;

        let latDms = null;
        let latRef = 'N';
        let lngDms = null;
        let lngRef = 'E';
        let altitude = null;

        for (let i = 0; i < gpsEntries && entryOffset + 12 <= view.byteLength; i++) {
          const tag = view.getUint16(entryOffset, littleEndian);
          const type = view.getUint16(entryOffset + 2, littleEndian);
          const count = view.getUint32(entryOffset + 4, littleEndian);
          const valueOffset = entryOffset + 8;

          if (tag === 0x0001) { // GPSLatitudeRef
            latRef = String.fromCharCode(view.getUint8(valueOffset)).toUpperCase();
          } else if (tag === 0x0002) { // GPSLatitude (3 RATIONALs)
            latDms = this.readRationals(view, tiffOffset, count, valueOffset, littleEndian);
          } else if (tag === 0x0003) { // GPSLongitudeRef
            lngRef = String.fromCharCode(view.getUint8(valueOffset)).toUpperCase();
          } else if (tag === 0x0004) { // GPSLongitude (3 RATIONALs)
            lngDms = this.readRationals(view, tiffOffset, count, valueOffset, littleEndian);
          } else if (tag === 0x0006) { // GPSAltitude
            const altRationals = this.readRationals(view, tiffOffset, 1, valueOffset, littleEndian);
            if (altRationals && altRationals.length > 0) {
              altitude = altRationals[0];
            }
          }

          entryOffset += 12;
        }

        if (latDms && latDms.length >= 3 && lngDms && lngDms.length >= 3) {
          const lat = this.convertDMSToDecimal(latDms[0], latDms[1], latDms[2], latRef);
          const lng = this.convertDMSToDecimal(lngDms[0], lngDms[1], lngDms[2], lngRef);

          if (lat !== null && lng !== null && !isNaN(lat) && !isNaN(lng)) {
            res.gps_found = true;
            res.latitude = lat;
            res.longitude = lng;
            res.altitude = altitude !== null ? Number(altitude.toFixed(1)) : null;
            res.location_source = 'PHOTO_EXIF';
          }
        }
      }

      return res;
    },

    readString(view, tiffOffset, type, count, valueOffset, littleEndian) {
      if (type !== 2) return null; // 2 = ASCII string
      let dataOffset = valueOffset;
      if (count > 4) {
        dataOffset = tiffOffset + view.getUint32(valueOffset, littleEndian);
      }
      if (dataOffset + count > view.byteLength) return null;

      let str = '';
      for (let i = 0; i < count - 1; i++) { // exclude null terminator
        const charCode = view.getUint8(dataOffset + i);
        if (charCode === 0) break;
        str += String.fromCharCode(charCode);
      }
      return str.trim();
    },

    readRationals(view, tiffOffset, count, valueOffset, littleEndian) {
      const offset = tiffOffset + view.getUint32(valueOffset, littleEndian);
      if (offset + count * 8 > view.byteLength) return null;

      const rationals = [];
      for (let i = 0; i < count; i++) {
        const num = view.getUint32(offset + i * 8, littleEndian);
        const den = view.getUint32(offset + i * 8 + 4, littleEndian);
        rationals.push(den === 0 ? 0 : num / den);
      }
      return rationals;
    },

    /**
     * Inspect a File or Blob object asynchronously
     * @param {File|Blob} file 
     * @returns {Promise<Object>} EXIF extraction result
     */
    inspectFile(file) {
      return new Promise((resolve) => {
        if (!file || !(file instanceof Blob)) {
          resolve({
            exif_found: false,
            gps_found: false,
            latitude: null,
            longitude: null,
            location_name: null,
            location_source: null
          });
          return;
        }

        const reader = new FileReader();
        reader.onload = (e) => {
          try {
            const buffer = e.target.result;
            const parsed = ExifParser.parse(buffer);
            resolve(parsed);
          } catch (err) {
            console.warn('[ExifParser] Parsing error:', err);
            resolve({
              exif_found: false,
              gps_found: false,
              latitude: null,
              longitude: null,
              location_name: null,
              location_source: null
            });
          }
        };
        reader.onerror = () => {
          resolve({
            exif_found: false,
            gps_found: false,
            latitude: null,
            longitude: null,
            location_name: null,
            location_source: null
          });
        };
        // Read the first 128KB which covers all standard EXIF APP1 headers
        const slice = file.slice(0, 131072);
        reader.readAsArrayBuffer(slice);
      });
    }
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = ExifParser;
  } else {
    global.ExifParser = ExifParser;
  }
})(typeof window !== 'undefined' ? window : globalThis);
