/**
 * SMART CITY CIVIC OPERATING SYSTEM — MASTER ENGINE
 * Production-grade multi-experience platform:
 * - Citizen App (Mobile-First, Light)
 * - Unified Command Center (Desktop-First, Mission-Control Dark)
 * - Field Operations System (Outdoor High-Contrast, Offline-Ready)
 * - 60-Second Guided Hackathon Demo Engine
 */

// Realistic Local Visual Assets for Verified Civic Tickets (High-Definition Photographic Assets)
const LOCAL_ASSETS = {
  pothole: "/assets/pothole.jpg",
  garbage: "/assets/garbage.jpg",
  light: "/assets/streetlight.jpg",
  streetlight: "/assets/streetlight.jpg",
  resolved_road: "/assets/resolved_road.jpg",
  water_leakage: "/assets/water_leakage.jpg",
  drainage: "/assets/drainage.jpg",
  power_line: "/assets/power_line.jpg",
  traffic: "/assets/traffic.jpg",
  other: "/assets/pothole.jpg"
};

const CATEGORY_TICKET_CONFIG = {
  'Pothole': {
    title: 'Deep Pothole Crater on 100 Feet Road',
    dept: 'Roads Department (BBMP)',
    severity: 'HIGH PRIORITY (Near Metro & School)',
    image: '/assets/pothole.jpg',
    location: '100 Feet Road, Near Metro Pillar 140 (Ward 12)',
    tech: '♻️ 2.36mm Plastic Bitumen Hydro-Seal (IRC SP:98)',
    voiceKn: '“ಇಂದಿರಾನಗರ ಮೆಟ್ರೋ ಹತ್ತಿರ ೧೦೦ ಫೀಟ್ ರಸ್ತೆಯಲ್ಲಿ ದೊಡ್ಡ ಗುಂಡಿ ಬಿದ್ದಿದೆ...”',
    voiceHi: '“इन्दिरा नगर मेट्रो स्टेशन के पास १०० फीट रोड पर बहुत गहरा गड्ढा है...”',
    voiceEn: '“There is a severe 14cm deep wheel-trap pothole on 100 Feet Road right outside Indiranagar Metro entrance.”'
  },
  'Garbage': {
    title: 'Severe Municipal Garbage Dump Overflow',
    dept: 'Sanitation Department (SWM)',
    severity: 'HIGH PRIORITY (Public Health & Vector Hazard)',
    image: '/assets/garbage.jpg',
    location: 'Sector 4 Main Market, Near Public School (Ward 14)',
    tech: 'Biochemical Neutralization & Mechanical Compaction',
    voiceKn: '“ಮಾರ್ಕೆಟ್ ಹತ್ತಿರ ಕಸದ ತೊಟ್ಟಿ ತುಂಬಿ ರಸ್ತೆಯ ಮೇಲೆ ಹರಡಿದೆ...”',
    voiceHi: '“मार्केट के पास कचरा पेटी भर कर सड़क पर फ़ैल गया है...”',
    voiceEn: '“Severe solid municipal waste overflowing from green dumpster onto sidewalk...”'
  },
  'Streetlight': {
    title: 'Broken Streetlight Luminaire & Dark Corridor',
    dept: 'Street-Light Department (BESCOM)',
    severity: 'HIGH PRIORITY (Pedestrian Commuter Safety)',
    image: '/assets/streetlight.jpg',
    location: 'Underpass Link Road, Near Bus Terminal (Ward 8)',
    tech: 'Smart LED Driver & Photocell Replacement',
    voiceKn: '“ಬಸ್ ನಿಲ್ದಾಣದ ಹತ್ತಿರ ಬೀದಿ ದೀಪಗಳು ಉರಿಯುತ್ತಿಲ್ಲ, ಕತ್ತಲೆಯಾಗಿದೆ...”',
    voiceHi: '“बस स्टैंड के पास स्ट्रीट लाइट खराब है, बहुत अँधेरा है...”',
    voiceEn: '“Defective broken streetlight fixture along transit walkway causing total dark corridor...”'
  },
  'Water Leakage': {
    title: 'Burst Municipal Water Main Pipe Flooding Road',
    dept: 'Water Supply Board (BWSSB)',
    severity: 'HIGH PRIORITY (Drinking Water Loss & Road Erosion)',
    image: '/assets/water_leakage.jpg',
    location: '8th Main Junction, Near Water Reservoir (Ward 11)',
    tech: 'Acoustic Leak Detection & Electrofusion Joint Repair',
    voiceKn: '“ಮುಖ್ಯ ರಸ್ತೆಯಲ್ಲಿ ನೀರಿನ ಪೈಪ್ ಒಡೆದು ನೀರು ಪೋಲಾಗುತ್ತಿದೆ...”',
    voiceHi: '“मेन रोड पर पानी का पाइप फट गया है, पानी सड़कों पर बह रहा है...”',
    voiceEn: '“High-pressure underground municipal water pipe burst spraying clean drinking water across roadway...”'
  },
  'Drainage': {
    title: 'Clogged Stormwater Drain & Street Waterlogging',
    dept: 'Stormwater Drainage Department (SWD)',
    severity: 'HIGH PRIORITY (Monsoon Inundation Hazard)',
    image: '/assets/drainage.jpg',
    location: 'Railway Bridge Underpass (Ward 5)',
    tech: 'Suction Jetting & Desilting Recycled Polymer Grates',
    voiceKn: '“ಅಂಡರ್‌ಪಾಸ್‌ನಲ್ಲಿ ರಾಜಕಾಲುವೆ ಚರಂಡಿ ಕಟ್ಟಿಕೊಂಡು ನೀರು ತುಂಬಿದೆ...”',
    voiceHi: '“ಅಂಡರ್‌ಪಾಸ್‌ನಲ್ಲಿ ರಾಜಕಾಲುವೆ ಚರಂಡಿ ಕಟ್ಟಿಕೊಂಡು ನೀರು ತುಂಬಿದೆ...”',
    voiceEn: '“Clogged roadside catch-basin grate blocked with silt and debris causing 20cm road waterlogging...”'
  },
  'Power Line': {
    title: 'Dangerous Low-Hanging Electrical Cable Bundle',
    dept: 'Electricity Distribution Grid (BESCOM)',
    severity: 'CRITICAL PRIORITY (Electrocution Risk)',
    image: '/assets/power_line.jpg',
    location: 'Commercial Street Corner, Near Market (Ward 9)',
    tech: 'Aerial Bunched Cable (ABC) Restringing & Tensioning',
    voiceKn: '“ರಸ್ತೆಯ ಮೇಲೆ ವಿದ್ಯುತ್ ತಂತಿಗಳು ನೇತಾಡುತ್ತಿವೆ, ಅಪಾಯಕಾರಿಯಾಗಿದೆ...”',
    voiceHi: '“सड़क पर बिजली के तार नीचे लटक रहे हैं, बड़ा खतरा है...”',
    voiceEn: '“Tangled cluster of loose overhead power and telecom cables dangling dangerously at 1.8m above sidewalk...”'
  },
  'Traffic': {
    title: 'Severe Multi-Kilometer Traffic Gridlock at Junction',
    dept: 'Traffic Management Corporation (BTP)',
    severity: 'HIGH PRIORITY (Corridor Delay & Ambulance Block)',
    image: '/assets/traffic.jpg',
    location: 'MG Road Junction & Metro Station Crossing',
    tech: 'Adaptive Traffic Signal Control (ATSC) Dynamic Phase',
    voiceKn: '“ಜಂಕ್ಷನ್‌ನಲ್ಲಿ ಸಿಗ್ನಲ್ ಕೆಟ್ಟು ಭಾರಿ ಟ್ರಾಫಿಕ್ ಜಾಮ್ ಆಗಿದೆ...”',
    voiceHi: '“जंक्शन पर सिग्नल खराब होने से भयंकर ट्रैफिक जाम लगा है...”',
    voiceEn: '“Severe vehicle congestion and deadlock at main road intersection with buses and autos stalled...”'
  },
  'Other': {
    title: 'Hazardous Road Infrastructure Defect',
    dept: 'Public Works Department (BBMP)',
    severity: 'MEDIUM PRIORITY',
    image: '/assets/pothole.jpg',
    location: 'Central Avenue, Ward 12',
    tech: 'Municipal Rapid Action Crew Protocol',
    voiceKn: '“ರಸ್ತೆಯಲ್ಲಿ ಅಪಾಯಕಾರಿ ಸಮಸ್ಯೆ ಉಂಟಾಗಿದೆ...”',
    voiceHi: '“सड़क पर खतरनाक समस्या है, जाँच करें...”',
    voiceEn: '“Hazardous urban infrastructure defect requiring municipal inspection...”'
  }
};

class CivicOperatingSystem {
  constructor() {
    this.currentExperience = 'command'; // 'command', 'citizen', 'field'
    this.currentCommandTab = 'overview';
    this.currentCitizenTab = 'home';
    this.currentReportStep = 1;
    this.selectedCitizenCategory = 'Pothole';
    this.activeMetro = 'IND'; // Entire India Default

    // Astra 6 Usable State Extensions
    this.soundEnabled = true;
    this.audioCtx = null;
    this.activeVoiceLang = 'kn'; // Default Kannada for Bengaluru
    this.calcPlasticKg = 24.3;
    this.calcTarKg = 64.8;
    this.calcBottles = 1215;
    this.calcCo2 = 36.5;

    // Official Statutory Performance & Formal Incident Registers State
    this.analyticsSortKey = 'form_asc';
    this.analyticsFilterCategory = 'all';
    this.analyticsViewMode = 'gazette';
    this.OFFICIAL_ANALYTICS_RECORDS = [
      {
        id: "FORM-II",
        formNo: "FORM-II (Rule 08-A)",
        regCode: "REG-TR-02",
        gazetteRef: "BTP/BBMP/2026/GZ-0077",
        orderNo: "TR-EMERG-2026-015",
        category: "transit_emergency",
        title: "Emergency Transit Preemption & Life-Saving Green Corridor Audit Register",
        shortTitle: "MediRoute Emergency Transit Corridor",
        statutoryAct: "Motor Vehicles (Amendment) Act Sec 134-A & Smart City Guidelines",
        specCode: "IRC:SP:43 / NTCIP-1202 Signal Preemption",
        department: "Traffic Police & Emergency Dispatch (BTP/BBMP)",
        ward: "Ward 22 (Hosur Road - Silk Board Arterial)",
        wardCode: "BLR-W22",
        officer: "Sri. P. Ravikumar, IPS, Addl. Commissioner of Police (Traffic)",
        severity: "CRITICAL",
        severityRank: 1,
        priorityGrade: "Grade I — Golden Hour Emergency Transit",
        reportsCount: 19,
        hotspots: 2,
        slaHours: 0.1,
        slaCompliance: 97.8,
        status: "Radar Preemption Active",
        auditDate: "2026-09-12",
        photo: LOCAL_ASSETS.traffic,
        resolvedPhoto: LOCAL_ASSETS.resolved_road,
        mandatedDirective: "MediRoute dynamic 1.0 km radius transponder preemption with synchronized cascade green corridor and automated Variable Message Display (VMD) roadside warnings.",
        bomDetails: { "Preemption Radius": "1.0 km Dynamic", "Signals Linked": "7 Intersections", "Transit Time Saved": "11.4 min avg", "Emergency Velocity": "+48% Improvement" },
        hasCalculator: false
      },
      {
        id: "FORM-IV",
        formNo: "FORM-IV (Rule 15)",
        regCode: "REG-SWM-04",
        gazetteRef: "BBMP/SWM/2026/GZ-1044",
        orderNo: "SWM-ORD-2026-108",
        category: "solid_waste",
        title: "Municipal Solid Waste & Biohazard Sanity Abatement Register",
        shortTitle: "Solid Waste & Biohazard Abatement",
        statutoryAct: "Solid Waste Management Rules 2016 (Rule 15) & KMC Act Sec 255",
        specCode: "SWM-2016-BIO / SPCB-Norm 4",
        department: "Solid Waste Management & Public Sanitation (SWM)",
        ward: "Ward 04 (Malleshwaram Market & Commercial Hub)",
        wardCode: "BLR-W04",
        officer: "Dr. Savitha Murthy, Chief Health Officer (Sanitation)",
        severity: "HIGH",
        severityRank: 2,
        priorityGrade: "Grade II — Public Health & Groundwater Leachate Hazard",
        reportsCount: 38,
        hotspots: 3,
        slaHours: 12,
        slaCompliance: 91.5,
        status: "Mechanized Sweep Deployed",
        auditDate: "2026-09-09",
        photo: LOCAL_ASSETS.garbage,
        resolvedPhoto: LOCAL_ASSETS.resolved_road,
        mandatedDirective: "Deploy compacting tippers with IoT GPS route verification, institute mechanized sodium hypochlorite sanitization, and mandate decentralized dry waste segregation at source.",
        bomDetails: { "Compactor Fleet": "4 Hydraulic Tippers", "Disinfection Spray": "0.5% NaOCl Solution", "Segregation Rate": "Wet/Dry Dual-Stream", "Audit Outcome": "Zero Open Blackspot" },
        hasCalculator: false
      },
      {
        id: "FORM-VII",
        formNo: "FORM-VII (Rule 14-B)",
        regCode: "REG-PWD-07",
        gazetteRef: "BBMP/PWD/2026/GZ-0891",
        orderNo: "ENG-DIR-2026-042",
        category: "road_polymer",
        title: "Statutory Road Infrastructure, Polymer Bitumen Batching & Pothole Reconstruction Register",
        shortTitle: "Road & Polymer Bitumen Reconstruction",
        statutoryAct: "Karnataka Municipal Corporations Act (Sec 134-A) & IRC SP:98-2020",
        specCode: "IRC SP:98 / MoRTH Sec 500",
        department: "Public Works & Road Infrastructure (PWD)",
        ward: "Ward 09 (Outer Ring Road / Mahadevapura Zone)",
        wardCode: "BLR-W09",
        officer: "Er. Ramesh Chandra, Executive Engineer (Road Infrastructure)",
        severity: "CRITICAL",
        severityRank: 1,
        priorityGrade: "Grade I — Structural Road Crater & Aquaplaning Hazard",
        reportsCount: 42,
        hotspots: 6,
        slaHours: 48,
        slaCompliance: 94.2,
        status: "Polymer Bitumen Mandate Enacted",
        auditDate: "2026-09-10",
        photo: LOCAL_ASSETS.pothole,
        resolvedPhoto: LOCAL_ASSETS.resolved_road,
        mandatedDirective: "Deploy 2.36mm shredded polymer hot-mix bitumen (8% replacement of VG-30 binder with LDPE/HDPE/PU matrix) providing impervious hydrophobic waterproofing against monsoon deterioration.",
        bomDetails: { "Polymer Spec": "2.36mm LDPE/HDPE/PU", "Binder Matrix": "Refined VG-30 Tar", "Water Imperviousness": "100% Hydrophobic Bond", "Standard": "IRC SP:98-2020 Certified" },
        hasCalculator: true
      },
      {
        id: "FORM-IX",
        formNo: "FORM-IX (Rule 22)",
        regCode: "REG-ELEC-09",
        gazetteRef: "BESCOM/BBMP/2026/GZ-0312",
        orderNo: "ELEC-SAFE-2026-077",
        category: "electrical",
        title: "Photometric Safety, Street Lighting & High-Voltage Grid Hazard Audit",
        shortTitle: "High-Voltage Grid & Photometric Safety",
        statutoryAct: "Central Electricity Authority (Safety Requirements) Reg 2010",
        specCode: "CEA-2010 / IS-10322 Photometric",
        department: "Electrical Engineering & Grid Distribution (BESCOM/BBMP)",
        ward: "Ward 18 (Industrial Suburb & Peenya Feeder Corridor)",
        wardCode: "BLR-W18",
        officer: "Er. K. Venkatraman, Divisional Electrical Inspector",
        severity: "HIGH",
        severityRank: 2,
        priorityGrade: "Grade II — Electrocution & Flashover Vulnerability",
        reportsCount: 27,
        hotspots: 4,
        slaHours: 24,
        slaCompliance: 88.9,
        status: "Composite Insulators Dispatched",
        auditDate: "2026-09-08",
        photo: LOCAL_ASSETS.power_line,
        resolvedPhoto: LOCAL_ASSETS.streetlight,
        mandatedDirective: "Immediate replacement of weathered porcelain pin-insulators with composite polymer silicone units; install auto-tripping vacuum circuit breakers and deploy photometric lux metering across feeder stretch.",
        bomDetails: { "Feeder Voltage": "11 kV Distribution Line", "Insulator Material": "Silicone Polymer Composite", "Roadway Lux": "30 Lux Median Target", "Safety Breaker": "Vacuum Interrupter 400A" },
        hasCalculator: false
      },
      {
        id: "FORM-XII",
        formNo: "FORM-XII (Rule 31-C)",
        regCode: "REG-SWD-12",
        gazetteRef: "BBMP/SWD/2026/GZ-1420",
        orderNo: "SWD-HYD-2026-119",
        category: "stormwater",
        title: "Stormwater Drainage, Monsoon Inundation & Culvert Flow Capacity Register",
        shortTitle: "Stormwater Drainage & Monsoon Inundation",
        statutoryAct: "NDMA Urban Flood Guidelines 2010 & KMC Drainage By-laws Sec 176",
        specCode: "IRC:SP:50 / NDMA-UF-2010",
        department: "Storm Water Drains & Flood Abatement (SWD)",
        ward: "Ward 14 (Sector 4 Lowland Basin & Bellandur Catchment)",
        wardCode: "BLR-W14",
        officer: "Er. M. S. Ananth, Chief Engineer (Storm Water Drains)",
        severity: "CRITICAL",
        severityRank: 1,
        priorityGrade: "Grade I — Underpass Submersion & Transit Choke",
        reportsCount: 51,
        hotspots: 5,
        slaHours: 6,
        slaCompliance: 82.4,
        status: "Hydraulic Upgrade Sanctioned",
        auditDate: "2026-09-11",
        photo: LOCAL_ASSETS.drainage,
        resolvedPhoto: LOCAL_ASSETS.water_leakage,
        mandatedDirective: "Capital excavation to upgrade existing 450mm RCC pipe to 1200mm pre-cast box drain; clear silt traps and install IoT acoustic ultrasonic water-level sensors with automated sluice alarms.",
        bomDetails: { "Culvert Overhaul": "1200mm Precast Box Drain", "Peak Discharge": "18.5 m³/sec Inundation Cap", "Telemetry": "IoT Ultrasonic Sensor", "Desilt Volume": "140 Metric Tons Cleared" },
        hasCalculator: false
      },
      {
        id: "FORM-XV",
        formNo: "FORM-XV (Rule 42)",
        regCode: "REG-SVR-15",
        gazetteRef: "SAKALA/BBMP/2026/AUDIT-99",
        orderNo: "SAKALA-COMP-2026-204",
        category: "sakala_sla",
        title: "Statutory Public Service SLA Guarantee & Sakala Redressal Audit Register",
        shortTitle: "Sakala Statutory Citizen Charter SLA",
        statutoryAct: "Karnataka Guarantee of Services to Citizens (Sakala) Act 2011",
        specCode: "SAKALA-ACT-2011 / Citizen Charter Sched-II",
        department: "Administrative Reforms & Sakala Redressal Directorate",
        ward: "Pan-City Central Municipal Jurisdiction (Wards 01 - 198)",
        wardCode: "BLR-ALL",
        officer: "Smt. Anuradha Sen, IAS, Mission Director (Sakala Services)",
        severity: "MODERATE",
        severityRank: 3,
        priorityGrade: "Grade III — Administrative Compliance & Default Penalty Audit",
        reportsCount: 314,
        hotspots: 12,
        slaHours: 72,
        slaCompliance: 93.6,
        status: "Automated Escalation Active",
        auditDate: "2026-09-11",
        photo: LOCAL_ASSETS.resolved_road,
        resolvedPhoto: LOCAL_ASSETS.resolved_road,
        mandatedDirective: "Enforce mandatory daily SLA countdown auto-escalations; levy statutory officer default penalties (₹250/day) upon breach, and auto-dispatch field task work orders to designated zonal crews.",
        bomDetails: { "Monthly Citations": "314 Grievances Logged", "Timely Resolution": "294 Resolved on Schedule", "Escalated to Nodal": "20 Auto-Escalated", "Default Penalty": "₹0 Levied (Full Adherence)" },
        hasCalculator: false
      }
    ];

    // India-Wide Geographical Grid Center & Metro Anchors
    this.defaultIndiaCenter = [22.5937, 78.9629];
    this.defaultIndiaZoom = 5;
    this.metroCoords = {
      IND: [22.5937, 78.9629],
      BLR: [12.9716, 77.5946],
      DEL: [28.6139, 77.2090],
      MUM: [19.0760, 72.8777],
      HYD: [17.3850, 78.4867],
      CHN: [13.0827, 80.2707],
      KOL: [22.5726, 88.3639],
      AMD: [23.0225, 72.5714],
      PUN: [18.5204, 73.8567],
      JAI: [26.9124, 75.7873]
    };

    // Google Maps & Layer References
    this.googleMap = null;
    this.googleMarkers = [];
    this.googleCircles = [];
    this.uploadedGoogleMarker = null;
    this.isMapPickerActive = false;

    // Pan-India Administrative Reverse Geocoding Lookup Database
    this.indiaLocations = [
      { name: 'New Delhi', lat: 28.6139, lng: 77.2090, state: 'Delhi', district: 'New Delhi', road: 'Connaught Place / Rajpath', pincode: '110001' },
      { name: 'Bengaluru', lat: 12.9716, lng: 77.5946, state: 'Karnataka', district: 'Bengaluru Urban', road: '100 Feet Road / MG Road', pincode: '560001' },
      { name: 'Mumbai', lat: 19.0760, lng: 72.8777, state: 'Maharashtra', district: 'Mumbai Suburban', road: 'BKC / Western Express Highway', pincode: '400051' },
      { name: 'Hyderabad', lat: 17.3850, lng: 78.4867, state: 'Telangana', district: 'Hyderabad', road: 'Banjara Hills / Hitec City', pincode: '500034' },
      { name: 'Jaipur', lat: 26.9124, lng: 75.7873, state: 'Rajasthan', district: 'Jaipur', road: 'MI Road / Tonk Road', pincode: '302001' },
      { name: 'Chennai', lat: 13.0827, lng: 80.2707, state: 'Tamil Nadu', district: 'Chennai', road: 'Anna Salai / Mount Road', pincode: '600002' },
      { name: 'Kolkata', lat: 22.5726, lng: 88.3639, state: 'West Bengal', district: 'Kolkata', road: 'Park Street / Chowringhee', pincode: '700016' },
      { name: 'Ahmedabad', lat: 23.0225, lng: 72.5714, state: 'Gujarat', district: 'Ahmedabad', road: 'SG Highway / Ashram Road', pincode: '380009' },
      { name: 'Noida', lat: 28.5355, lng: 77.3910, state: 'Uttar Pradesh', district: 'Gautam Buddha Nagar', road: 'Sector 18 / Expressway', pincode: '201301' },
      { name: 'Pune', lat: 18.5204, lng: 73.8567, state: 'Maharashtra', district: 'Pune', road: 'FC Road / Baner Road', pincode: '411005' },
      { name: 'Lucknow', lat: 26.8467, lng: 80.9462, state: 'Uttar Pradesh', district: 'Lucknow', road: 'Hazratganj / Gomti Nagar', pincode: '226001' },
      { name: 'Chandigarh', lat: 30.7333, lng: 76.7794, state: 'Punjab & Haryana', district: 'Chandigarh', road: 'Sector 17 Plaza', pincode: '160017' }
    ];

    // Uploaded Civic Issue State conforming to strict Section 8 EXIF Structure
    this.uploadedIssue = {
      exif_found: true,
      gps_found: true,
      latitude: 28.6139,
      longitude: 77.2090,
      altitude: 216.4,
      date_taken: "2026-09-11T14:32:10",
      camera_make: "Apple",
      camera_model: "iPhone 15 Pro",
      location_name: "New Delhi, Delhi, India",
      address: "Connaught Place / Rajpath, New Delhi, Delhi 110001, India",
      location_source: "PHOTO_EXIF",
      category: "Pothole",
      confidence: 94,
      severity: "High"
    };

    // Master Incident Clusters & Complaints State (Complete Coverage of Realistic Municipal Incidents)
    this.clusters = [
      {
        id: "Cluster #23",
        title: "Deep Pothole Cluster on 100 Feet Road",
        category: "Pothole",
        location: "100 Feet Road, Near Indiranagar Metro (Ward 12)",
        coords: [12.9780, 77.6405],
        reportsCount: 43,
        severity: "HIGH",
        priorityScore: 92,
        dept: "Roads Department",
        slaDeadlineMinutes: 42,
        slaRisk: "AT_RISK",
        status: "ASSIGNED",
        assignedTeam: "Team Alpha (Ramesh Kumar)",
        rationale: "43 reports within 120m in last 2 hours. Severe wheel-trap crater (14cm depth) within 60m of metro entrance & school. SLA breach risk in 42 minutes.",
        operationalSummary: "Deep pothole crater (14cm) caused by recurrent water stagnation. Traffic flow delayed by 17%. Recommended deployment of 2.36mm waste-plastic bitumen mix (utilizing plastic waste collected from citizen-raised garbage tickets) for permanent waterproofing.",
        plasticSpec: {
          polymerWeightKg: 24,
          binderWeightKg: 65,
          shredSize: "~2.36 mm LDPE/HDPE/PU",
          source: "Plastic waste collected directly from citizen-raised garbage tickets",
          waterproofAdvantage: "Prevents rain-induced pothole reformation"
        },
        image: LOCAL_ASSETS.pothole,
        resolvedImage: LOCAL_ASSETS.resolved_road
      },
      {
        id: "Cluster #18",
        title: "Severe Organic Garbage Overflow near School Gate",
        category: "Garbage",
        location: "Sector 4 Main Market, Near Public School (Ward 14)",
        coords: [12.9650, 77.5850],
        reportsCount: 68,
        severity: "HIGH",
        priorityScore: 89,
        dept: "Sanitation Department",
        slaDeadlineMinutes: 110,
        slaRisk: "SAFE",
        status: "IN_PROGRESS",
        assignedTeam: "Sanitation Rapid Unit 4",
        rationale: "68 citizen reports in 3 hours. Putrefying leachate spreading across pedestrian walkway; high vector breeding risk within 40m of school children.",
        operationalSummary: "Estimated 4.8 tons decomposing organic biomass. Biohazard neutralization and high-capacity compactor truck dispatched.",
        image: LOCAL_ASSETS.garbage
      },
      {
        id: "Cluster #09",
        title: "6 Defective Luminaires in Pedestrian Subway",
        category: "Streetlight",
        location: "Underpass Link Road, Near Bus Terminal (Ward 8)",
        coords: [12.9820, 77.6010],
        reportsCount: 31,
        severity: "HIGH",
        priorityScore: 85,
        dept: "Street-Light Department",
        slaDeadlineMinutes: 165,
        slaRisk: "SAFE",
        status: "TRIAGED",
        assignedTeam: "Lighting Maintenance B",
        rationale: "31 reports. Total photometric blackout (0.1 lux) along 95-meter pedestrian thoroughfare with evening commuter footfall.",
        operationalSummary: "Phase trip in distribution pillar. Linemen crew queued for scheduled evening luminaire replacement.",
        image: LOCAL_ASSETS.light
      },
      {
        id: "Cluster #14",
        title: "Clogged Stormwater Catch-Basin & 20cm Waterlogging",
        category: "Drainage",
        location: "Railway Bridge Underpass (Ward 5)",
        coords: [12.9716, 77.5946],
        reportsCount: 39,
        severity: "HIGH",
        priorityScore: 88,
        dept: "Drainage Department",
        slaDeadlineMinutes: 58,
        slaRisk: "AT_RISK",
        status: "DISPATCHED",
        assignedTeam: "Drainage Jetting Unit 2",
        rationale: "39 citizen reports. Inundated arterial roadway blocking ambulance route; high-pressure stormwater catch-basin obstructed by silt and plastics.",
        operationalSummary: "20cm standing stormwater near railway underpass. Suction jetting truck and silt vacuum extraction in progress.",
        image: LOCAL_ASSETS.drainage
      },
      {
        id: "Cluster #07",
        title: "High-Pressure Drinking Water Main Burst Flooding Road",
        category: "Water Leakage",
        location: "8th Main Junction, Near Water Reservoir (Ward 11)",
        coords: [12.9902, 77.5529],
        reportsCount: 52,
        severity: "HIGH",
        priorityScore: 87,
        dept: "Water Department",
        slaDeadlineMinutes: 84,
        slaRisk: "SAFE",
        status: "IN_PROGRESS",
        assignedTeam: "BWSSB Hydro-Emergency Crew",
        rationale: "52 citizen reports in 90 mins. Underground 450mm trunk line ruptured, spraying potable water at 4.2 bar; scouring road sub-base.",
        operationalSummary: "Pipeline isolation valve closed. Electrofusion joint sleeve replacement underway to prevent road foundation collapse.",
        image: LOCAL_ASSETS.water_leakage
      },
      {
        id: "Cluster #31",
        title: "Hazardous Low-Dangling 11kV Overhead Power Cables",
        category: "Power Line",
        location: "Commercial Street Corner, Near Market (Ward 9)",
        coords: [12.9830, 77.6080],
        reportsCount: 28,
        severity: "HIGH",
        priorityScore: 94,
        dept: "Street-Light Department",
        slaDeadlineMinutes: 35,
        slaRisk: "AT_RISK",
        status: "ASSIGNED",
        assignedTeam: "BESCOM High-Tension Quick Response",
        rationale: "28 urgent alerts. High-voltage overhead cable snapped and dangling at 1.8m above pedestrian sidewalk; imminent electrocution hazard.",
        operationalSummary: "Emergency grid section isolated remotely. Bucket truck deployed to restringe Aerial Bunched Cable (ABC).",
        image: LOCAL_ASSETS.power_line
      },
      {
        id: "Cluster #05",
        title: "Severe Multi-Kilometer Traffic Gridlock at Transit Junction",
        category: "Traffic",
        location: "MG Road Junction & Metro Station Crossing",
        coords: [12.9756, 77.6067],
        reportsCount: 64,
        severity: "HIGH",
        priorityScore: 86,
        dept: "Roads Department",
        slaDeadlineMinutes: 72,
        slaRisk: "SAFE",
        status: "DISPATCHED",
        assignedTeam: "BTP Flying Squad 7",
        rationale: "64 traffic sensor reports. Quad-lane intersection lock caused by signal timer malfunction during peak morning rush hour.",
        operationalSummary: "Dynamic signal override engaged. Traffic wardens physically managing manual lane clearance.",
        image: LOCAL_ASSETS.traffic
      }
    ];

    // Citizen Individual Reports with Department Resolution & Review Models
    this.citizenReports = [
      {
        id: "PC-8102",
        title: "Deep Pothole on 100 Feet Road",
        category: "Pothole",
        location: "100 Feet Road, Near Metro Pillar 140",
        image: LOCAL_ASSETS.pothole,
        date: "Today, 08:30 AM",
        status: "IN_PROGRESS",
        dept: "Roads Department",
        clusterId: "Cluster #23",
        timeline: [
          { label: "Report Submitted & Photo Evidence Tagged", status: "completed", time: "08:30 AM" },
          { label: "AI Verified & Clustered into #23", status: "completed", time: "08:31 AM" },
          { label: "Assigned to Roads Dept Rapid Asphalt Crew", status: "completed", time: "08:35 AM" },
          { label: "Team Alpha Dispatched on Site", status: "completed", time: "08:50 AM" },
          { label: "Reconstructing Road via 2.36mm Plastic Bitumen (IRC SP:98)", status: "active", time: "09:10 AM" },
          { label: "Resolution & Evidence Upload", status: "pending" },
          { label: "Citizen Verification & Review", status: "pending" }
        ],
        resolution: {
          dept: "Roads Department • PWD Rapid Asphalt Crew",
          summary: "Excavated crater to sound aggregate base, primed with CSS-1h emulsion, paved with 2.36mm shredded waste-plastic modified bitumen hot mix (IRC SP:98), and vibratory-compacted to 98% density. Road surface is 100% hydrophobic with 3x pothole resistance.",
          resolvedDate: "Today, 10:15 AM",
          beforeImage: LOCAL_ASSETS.pothole,
          afterImage: LOCAL_ASSETS.resolved_road,
          statusNote: "Defect Rectified • IRC SP:98 Plastic Bitumen Applied"
        },
        citizenReview: null
      },
      {
        id: "PC-8091",
        title: "Overflowing Garbage Container",
        category: "Garbage",
        location: "12th Main Cross, Ward 12",
        image: LOCAL_ASSETS.garbage,
        date: "Yesterday, 08:15 AM",
        status: "RESOLVED",
        dept: "Sanitation Department",
        clusterId: null,
        timeline: [
          { label: "Report Submitted with Photo Evidence", status: "completed", time: "Yesterday, 08:15 AM" },
          { label: "Sanitation Rapid Unit Dispatched", status: "completed", time: "Yesterday, 09:30 AM" },
          { label: "Waste Cleared & Perimeter Sanitized with Photo Proof", status: "completed", time: "Yesterday, 04:30 PM" },
          { label: "Citizen Verified & 5-Star Rated ✓", status: "completed", time: "Yesterday, 05:15 PM" }
        ],
        resolution: {
          dept: "Sanitation Department • Solid Waste Management Cell",
          summary: "Sanitation Rapid Unit #4 cleared 4.8 tons of accumulated solid waste from the 12th Main dumpster, chemically sanitized the perimeter with bleaching powder, and installed an additional covered secondary bin.",
          resolvedDate: "Yesterday, 04:30 PM",
          beforeImage: LOCAL_ASSETS.garbage,
          afterImage: "/assets/resolved_garbage.jpg",
          statusNote: "Zero-Litter Restored • Perimeter Chemically Sanitized"
        },
        citizenReview: {
          rating: 5,
          satisfaction: "Satisfied",
          comment: "Prompt cleanup! The sanitation team arrived within 3 hours of reporting and even sprayed disinfectant around the school gate.",
          reviewedDate: "Yesterday, 05:15 PM",
          citizenName: "Janardhan (Citizen)"
        }
      },
      {
        id: "PC-7984",
        title: "Defective Streetlight in Subway",
        category: "Streetlight",
        location: "Underpass Link Road (Ward 8)",
        image: LOCAL_ASSETS.streetlight,
        date: "2 days ago, 02:40 PM",
        status: "RESOLVED",
        dept: "Street-Light Department",
        clusterId: "Cluster #09",
        timeline: [
          { label: "Report Submitted with Photo Evidence", status: "completed", time: "2 days ago, 02:40 PM" },
          { label: "Distribution Pillar Fault Isolated", status: "completed", time: "2 days ago, 04:10 PM" },
          { label: "6 High-Efficiency LED Luminaires Replaced", status: "completed", time: "2 days ago, 06:10 PM" },
          { label: "Subway Illumination Restored to 65 Lux", status: "completed", time: "2 days ago, 06:15 PM" }
        ],
        resolution: {
          dept: "Street-Light Department • Electrical Wing (BESCOM)",
          summary: "Subway distribution pillar phase failure diagnosed and repaired. Replaced 6 burnt-out metal-halide luminaires with energy-efficient 90W IP66 LED fixtures with smart daylight photocells. Walkway fully illuminated.",
          resolvedDate: "2 days ago, 06:10 PM",
          beforeImage: LOCAL_ASSETS.streetlight,
          afterImage: "/assets/resolved_streetlight.jpg",
          statusNote: "Illumination Restored • 6 New LED Luminaires Deployed"
        },
        citizenReview: null
      }
    ];

    // MediRoute State
    this.medirouteState = {
      active: false,
      progress: 0,
      timerId: null,
      ambulanceCoord: [12.9716, 77.5946],
      hospitalCoord: [12.9920, 77.6200],
      speed: 0
    };

    // 60-Second Guided Demo Steps
    this.demoSteps = [
      {
        num: 1,
        title: "Citizen Discovers Problem",
        narrative: "A citizen walking near the metro station spots a severe road pothole creating traffic chaos and near-miss accidents.",
        takeaway: "Citizen opens the mobile-first app: clean, light, zero government jargon.",
        action: () => {
          this.switchExperience('citizen');
          this.switchCitizenTab('home');
        }
      },
      {
        num: 2,
        title: "20-Second Reporting Flow (Photo & GPS)",
        narrative: "Citizen captures road pothole photo with auto-tagged GPS coordinates (12.9716° N, 77.5946° E) and uses natural voice dictation in their native language.",
        takeaway: "Multimodal reporting: Verified photo evidence + high-precision GPS tag + native voice dictation with zero cognitive friction.",
        action: () => {
          this.switchExperience('citizen');
          this.switchCitizenTab('report');
          this.goToReportStep(2);
          this.setCitizenPhotoPreset('pothole');
          const scrollBox = document.querySelector('.citizen-screen-scroll');
          if (scrollBox) scrollBox.scrollTop = 0;
          this.simulateVoiceInput();
        }
      },
      {
        num: 3,
        title: "AI Analysis & Duplicate Clustering",
        narrative: "AI scans uploaded photo & GPS coordinates, verifies 'Pothole', assesses HIGH severity, and merges with 42 existing reports into Incident Cluster #23.",
        takeaway: "Computer vision + geospatial clustering prevents duplicate ticket flooding and elevates community urgency.",
        action: () => {
          this.goToReportStep(3);
          const scrollBox = document.querySelector('.citizen-screen-scroll');
          if (scrollBox) scrollBox.scrollTop = 0;
        }
      },
      {
        num: 4,
        title: "Transparent Submission",
        narrative: "Citizen confirms and receives an instant, transparent tracking card with Complaint ID, responsible department, and 45-minute response SLA.",
        takeaway: "Transparent citizen trust — reports never vanish into an opaque government black box.",
        action: () => {
          this.submitCitizenComplaint();
        }
      },
      {
        num: 5,
        title: "Mission Control Operator View",
        narrative: "Command Center operator sees Cluster #23 elevated on the live city operations map with transparent AI priority reasoning.",
        takeaway: "Operators see: 'HIGH PRIORITY — Because: 43 reports · Near School & Metro · SLA expires in 42m'.",
        action: () => {
          this.switchExperience('command');
          this.switchCommandTab('overview');
          this.openIncidentDrawer("Cluster #23");
        }
      },
      {
        num: 6,
        title: "Plastic Road Innovation: Sustainable Solution",
        narrative: "Instead of temporary cold-patches that wash away in rain, BBMP deploys our 2.36mm shredded waste plastic bitumen innovation (IRC SP:98) — directly utilizing plastic waste collected from citizen-raised garbage tickets to pave a 100% waterproof seal.",
        takeaway: "Sustainable Pothole Solution: Paved with plastic waste collected from citizen garbage tickets (diverting 1,200+ bottles per patch), cuts emissions by 36.5kg CO₂, and triples road lifespan to 10+ years.",
        action: () => {
          this.switchExperience('command');
          this.switchCommandTab('overview');
          const showcase = document.getElementById("plastic-road-showcase");
          if (showcase) {
            showcase.scrollIntoView({ behavior: "smooth", block: "center" });
            showcase.classList.add("highlight-pulse");
          }
          this.openIncidentDrawer("Cluster #23");
        }
      },
      {
        num: 7,
        title: "Field Worker Receives Assignment",
        narrative: "Field Worker Ramesh Kumar receives the mobile assignment on-ground with exact GPS, material specifications, and a 42-minute SLA countdown.",
        takeaway: "Field operations optimized for one-handed outdoor use with offline-sync support.",
        action: () => {
          this.closeIncidentDrawer();
          this.switchExperience('field');
        }
      },
      {
        num: 8,
        title: "Field Crew Accepts & Starts Work",
        narrative: "Worker taps 'ACCEPT ASSIGNMENT', arrives on site, logs the 2.36mm waste plastic bitumen blend, and marks 'START WORK'.",
        takeaway: "Real-time state progression synced back to city command and the citizen's phone.",
        action: () => {
          this.fieldWorkerAcceptJob();
          setTimeout(() => this.fieldWorkerStartWork(), 300);
        }
      },
      {
        num: 9,
        title: "Field Resolution & Evidence Proof",
        narrative: "Worker finishes resurfacing, uploads before/after photo evidence, and marks the incident resolved.",
        takeaway: "Tamper-evident photographic and GPS-tagged proof of work.",
        action: () => {
          this.fieldWorkerMarkResolved();
        }
      },
      {
        num: 10,
        title: "Citizen Verification Loop",
        narrative: "Citizen gets an instant notification: 'Did Roads Department fix the Pothole? Yes / Still an issue'. Citizen taps 'Yes, Resolved'!",
        takeaway: "Closing the loop — civic trust is earned through verified completion, not empty ticket closures.",
        action: () => {
          this.switchExperience('citizen');
          this.switchCitizenTab('home');
        }
      },
      {
        num: 11,
        title: "MediRoute Green Corridor Mission",
        narrative: "Meanwhile, an emergency ambulance departs: dynamic 1km radius turns signals GREEN while overhead VMS broadcasts clearance alerts.",
        takeaway: "Integrates life-safety emergency transit directly into the city's smart traffic grid.",
        action: () => {
          this.switchExperience('command');
          this.switchCommandTab('mediroute');
          this.toggleMediRouteSimulation();
        }
      },
      {
        num: 12,
        title: "Loop Complete: City Intelligence",
        narrative: "Individual citizen reports are transformed into recurring hotspot intelligence, SLA compliance metrics, and automated engineering work orders.",
        takeaway: "A credible, production-grade Civic Operating System for modern Indian cities.",
        action: () => {
          this.switchCommandTab('overview');
        }
      }
    ];

    this.currentDemoStepIndex = 0;
  }

  init() {
    this.renderCommandIncidents();
    this.renderClustersGrid();
    this.renderDepartmentWorkspaces();
    this.renderSlaTable();
    this.renderAnalyticsOfficialRegister();
    this.renderCitizenHomeReports();
    this.renderCitizenTimeline();
    this.renderCitizenNearby();
    this.renderCitizenNotifications();
    this.initPhoneClock();
    this.updatePlasticCalculator();
    this.startLiveSlaTicker();
    this.setCitizenPhotoPreset('pothole');

    setTimeout(() => {
      this.initCommandMap();
    }, 150);
  }

  // =========================================================================
  // EXPERIENCE SWITCHER
  // =========================================================================
  switchExperience(role) {
    this.currentExperience = role;

    // Update Top Role Switcher Buttons
    document.querySelectorAll(".role-btn").forEach(btn => btn.classList.remove("active"));
    const activeBtn = document.getElementById(`role-btn-${role}`);
    if (activeBtn) activeBtn.classList.add("active");

    // Update Floating Quick Switcher Dock Buttons
    document.querySelectorAll(".dock-btn").forEach(b => {
      if (b.id && b.id.startsWith("dock-btn-") && !b.id.includes("audio")) {
        b.classList.toggle("active", b.id === `dock-btn-${role}`);
      }
    });

    // Update Top Radiant Banner Quick Chips
    document.querySelectorAll(".quick-chip").forEach(chip => {
      chip.classList.toggle("active", chip.id === `chip-mode-${role}`);
    });

    // Toggle Experience Containers
    document.querySelectorAll(".experience-container").forEach(c => c.classList.remove("active"));
    const activeContainer = document.getElementById(
      role === 'command' ? 'exp-command-center' : role === 'citizen' ? 'exp-citizen' : 'exp-field-ops'
    );
    if (activeContainer) activeContainer.classList.add("active");

    // Invalidate map on desktop if command
    if (role === 'command' && this.commandMap) {
      setTimeout(() => this.commandMap.invalidateSize(), 150);
    }

    this.playBeep('click');
  }

  focusSystem(system) {
    document.querySelectorAll('.system-card').forEach(c => c.classList.remove('active'));
    const card = document.getElementById(`sys-card-${system}`);
    if (card) card.classList.add('active');

    if (system === 'mediroute') {
      this.switchCommandTab('mediroute');
      if (!this.corridorSimulationActive) {
        this.toggleMediRouteSimulation();
      }
    } else if (system === 'pathchakshu') {
      this.switchCommandTab('overview');
      this.filterQueue('all');
      if (this.commandMap) {
        this.commandMap.setView([12.9780, 77.6405], 14);
      }
    } else if (system === 'resqgrid') {
      this.promptEmergencyMode();
    }
    this.playBeep('click');
  }

  filterQueue(category) {
    document.querySelectorAll('.q-chip').forEach(c => c.classList.remove('active'));
    const cleanCat = category.toLowerCase().replace(/[\s_]+/g, '-');
    const btn = document.getElementById(`q-chip-${cleanCat}`) || 
                document.getElementById(`q-chip-${category.toLowerCase()}`);
    if (btn) btn.classList.add('active');

    const allBtn = document.getElementById('q-chip-all');
    if (allBtn) allBtn.textContent = `All (${this.clusters.length})`;

    const tag = document.getElementById('queue-filter-tag');
    if (tag) tag.textContent = category === 'all' ? 'All Active' : category;

    this.renderCommandIncidents(category === 'all' ? '' : category);
    this.playBeep('click');
  }

  changeMetro(metro) {
    this.activeMetro = metro;
    const tag = document.getElementById("map-city-tag");
    const labels = {
      IND: 'ENTIRE INDIA • PAN-INDIA CIVIC GRID',
      BLR: 'BENGALURU CENTRAL • BBMP',
      DEL: 'NEW DELHI CENTRAL • MCD',
      MUM: 'MUMBAI CENTRAL • BMC',
      HYD: 'HYDERABAD CENTRAL • GHMC',
      CHN: 'CHENNAI CENTRAL • GCC',
      KOL: 'KOLKATA CENTRAL • KMC',
      AMD: 'AHMEDABAD CENTRAL • AMC',
      PUN: 'PUNE CENTRAL • PMC',
      JAI: 'JAIPUR CENTRAL • JMC'
    };
    if (tag) tag.textContent = labels[metro] || 'BENGALURU CENTRAL';

    const coords = this.metroCoords[metro] || this.metroCoords.BLR;
    const zoom = metro === 'IND' ? 5 : 13;

    if (this.googleMap) {
      this.googleMap.panTo({ lat: coords[0], lng: coords[1] });
      this.googleMap.setZoom(zoom);
    }
    if (this.commandMap) {
      this.commandMap.setView(coords, zoom);
    }
    if (this.soundEnabled) this.playBeep('nav');
  }

  // =========================================================================
  // COMMAND CENTER LOGIC
  // =========================================================================
  switchCommandTab(tabId) {
    this.currentCommandTab = tabId;
    document.querySelectorAll(".cmd-tab").forEach(tab => {
      tab.classList.toggle("active", tab.dataset.cmdTab === tabId);
    });
    document.querySelectorAll(".cmd-panel").forEach(panel => {
      panel.classList.toggle("active", panel.id === `cmd-tab-${tabId}`);
    });

    if (tabId === 'overview' && this.commandMap) {
      setTimeout(() => this.commandMap.invalidateSize(), 150);
    }
    if (tabId === 'analytics') {
      this.renderAnalyticsOfficialRegister();
    }
  }

  getGoogleMapsDarkTheme() {
    return [
      { elementType: "geometry", stylers: [{ color: "#0b1329" }] },
      { elementType: "labels.text.stroke", stylers: [{ color: "#0b1329" }] },
      { elementType: "labels.text.fill", stylers: [{ color: "#94a3b8" }] },
      {
        featureType: "administrative.locality",
        elementType: "labels.text.fill",
        stylers: [{ color: "#38bdf8" }]
      },
      {
        featureType: "poi",
        elementType: "labels.text.fill",
        stylers: [{ color: "#64748b" }]
      },
      {
        featureType: "poi.park",
        elementType: "geometry",
        stylers: [{ color: "#062828" }]
      },
      {
        featureType: "road",
        elementType: "geometry",
        stylers: [{ color: "#1e293b" }]
      },
      {
        featureType: "road",
        elementType: "geometry.stroke",
        stylers: [{ color: "#0f172a" }]
      },
      {
        featureType: "road",
        elementType: "labels.text.fill",
        stylers: [{ color: "#cbd5e1" }]
      },
      {
        featureType: "road.highway",
        elementType: "geometry",
        stylers: [{ color: "#334155" }]
      },
      {
        featureType: "road.highway",
        elementType: "geometry.stroke",
        stylers: [{ color: "#1e293b" }]
      },
      {
        featureType: "transit",
        elementType: "geometry",
        stylers: [{ color: "#172554" }]
      },
      {
        featureType: "water",
        elementType: "geometry",
        stylers: [{ color: "#021c38" }]
      },
      {
        featureType: "water",
        elementType: "labels.text.fill",
        stylers: [{ color: "#0ea5e9" }]
      }
    ];
  }

  onGoogleMapsLoaded() {
    console.log("[CivicMap] Google Maps API loaded successfully.");
    if (!this.googleMap && !this.commandMap) {
      this.initCommandMap();
    }
  }

  initCommandMap() {
    const el = document.getElementById("command-center-map");
    if (!el || this.commandMap || this.googleMap) return;

    // Pan-India Default Center: 22.5937, 78.9629 with zoom 5
    const indiaCenter = { lat: 22.5937, lng: 78.9629 };
    const indiaZoom = 5;

    // Primary: Google Maps Provider
    if (window.google && window.google.maps && window.google.maps.Map) {
      try {
        this.googleMap = new google.maps.Map(el, {
          center: indiaCenter,
          zoom: indiaZoom,
          minZoom: 4,
          maxZoom: 20,
          mapTypeId: 'roadmap',
          styles: this.getGoogleMapsDarkTheme(),
          disableDefaultUI: false,
          zoomControl: true,
          mapTypeControl: true,
          streetViewControl: false,
          fullscreenControl: true
        });

        this.googleMarkers = [];
        this.googleCircles = [];
        this.renderCommandMapLayers();

        this.googleMap.addListener('click', (e) => {
          if (this.isMapPickerActive) {
            this.handleMapCoordinatePick(e.latLng.lat(), e.latLng.lng());
          }
        });

        console.log('[CivicMap] Google Maps initialized across entire India (Lat: 22.5937, Lng: 78.9629, Zoom: 5)');
        return;
      } catch (err) {
        console.warn('[CivicMap] Google Maps initialization warning, engaging high-res vector engine:', err);
      }
    }

    // Resilient Pan-India Vector Map Engine (Leaflet failover with Google/Carto Dark tiles)
    this.commandMap = L.map('command-center-map', {
      center: [22.5937, 78.9629],
      zoom: indiaZoom,
      minZoom: 4,
      maxZoom: 19,
      zoomControl: true
    });

    L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
      attribution: '&copy; Google Maps &copy; OpenStreetMap contributors &copy; CARTO',
      subdomains: 'abcd',
      maxZoom: 19
    }).addTo(this.commandMap);

    this.mapClustersGroup = L.layerGroup().addTo(this.commandMap);
    this.mapFieldGroup = L.layerGroup().addTo(this.commandMap);
    this.mapCorridorGroup = L.layerGroup().addTo(this.commandMap);
    this.mapUploadedIssueGroup = L.layerGroup().addTo(this.commandMap);

    this.commandMap.on('click', (e) => {
      if (this.isMapPickerActive) {
        this.handleMapCoordinatePick(e.latlng.lat, e.latlng.lng);
      }
    });

    this.renderCommandMapLayers();
    console.log('[CivicMap] Pan-India Map Engine initialized (Lat: 22.5937, Lng: 78.9629, Zoom: 5)');
  }

  renderCommandMapLayers() {
    // 1. Google Maps Engine Rendering
    if (this.googleMap && window.google && window.google.maps) {
      // Clear existing Google markers and circles
      this.googleMarkers.forEach(m => m.setMap(null));
      this.googleMarkers = [];
      this.googleCircles.forEach(c => c.setMap(null));
      this.googleCircles = [];

      // Render Clustered Incidents on Google Maps
      this.clusters.forEach(c => {
        const color = c.severity === 'HIGH' ? '#ef4444' : '#f59e0b';
        const circle = new google.maps.Circle({
          strokeColor: color,
          strokeOpacity: 0.8,
          strokeWeight: 1.5,
          fillColor: color,
          fillOpacity: 0.18,
          map: this.googleMap,
          center: { lat: c.coords[0], lng: c.coords[1] },
          radius: 260
        });
        this.googleCircles.push(circle);

        const marker = new google.maps.Marker({
          position: { lat: c.coords[0], lng: c.coords[1] },
          map: this.googleMap,
          title: `${c.id}: ${c.title}`,
          label: {
            text: String(c.reportsCount),
            color: "#ffffff",
            fontSize: "11px",
            fontWeight: "bold"
          },
          icon: {
            path: google.maps.SymbolPath.CIRCLE,
            scale: 14,
            fillColor: color,
            fillOpacity: 1,
            strokeColor: "#ffffff",
            strokeWeight: 2
          }
        });
        marker.addListener('click', () => {
          this.openIncidentDrawer(c.id);
        });
        this.googleMarkers.push(marker);
      });

      // Render MediRoute Ambulance Corridor on Google Maps
      const ambCoord = this.medirouteState.ambulanceCoord;
      const corridorCircle = new google.maps.Circle({
        strokeColor: '#10b981',
        strokeOpacity: 0.9,
        strokeWeight: 2,
        fillColor: '#10b981',
        fillOpacity: 0.16,
        map: this.googleMap,
        center: { lat: ambCoord[0], lng: ambCoord[1] },
        radius: 1000
      });
      this.googleCircles.push(corridorCircle);

      const ambMarker = new google.maps.Marker({
        position: { lat: ambCoord[0], lng: ambCoord[1] },
        map: this.googleMap,
        title: "Active Ambulance Corridor AMB-09",
        label: {
          text: "🚑",
          fontSize: "16px"
        },
        icon: {
          path: google.maps.SymbolPath.CIRCLE,
          scale: 16,
          fillColor: "#10b981",
          fillOpacity: 0.9,
          strokeColor: "#ffffff",
          strokeWeight: 2
        }
      });
      this.googleMarkers.push(ambMarker);

      // Render Uploaded Issue Marker on Google Maps if coordinates present
      if (this.uploadedIssue && this.uploadedIssue.gps_found && this.uploadedIssue.latitude && this.uploadedIssue.longitude) {
        this.placeUploadedIssueMarker(
          this.uploadedIssue.latitude,
          this.uploadedIssue.longitude,
          this.uploadedIssue.category,
          this.uploadedIssue.location_name,
          this.uploadedIssue.address
        );
      }
      return;
    }

    // 2. Leaflet Fallback Engine Rendering
    if (!this.commandMap) return;
    this.mapClustersGroup.clearLayers();
    this.mapFieldGroup.clearLayers();
    this.mapCorridorGroup.clearLayers();
    if (this.mapUploadedIssueGroup) this.mapUploadedIssueGroup.clearLayers();

    // Clustered Incidents Markers
    this.clusters.forEach(c => {
      const color = c.severity === 'HIGH' ? '#ef4444' : '#f59e0b';
      const circle = L.circle(c.coords, {
        color: color,
        fillColor: color,
        fillOpacity: 0.16,
        radius: 260,
        weight: 1.5
      });
      this.mapClustersGroup.addLayer(circle);

      const iconHtml = `<div style="background:${color}; border:2px solid #fff; border-radius:50%; width:32px; height:32px; display:flex; align-items:center; justify-content:center; color:#fff; font-size:12px; font-weight:bold; box-shadow:0 0 14px ${color}; cursor:pointer;">
        ${c.reportsCount}
      </div>`;
      const markerIcon = L.divIcon({ className: 'custom-cluster-icon', html: iconHtml, iconSize: [32, 32], iconAnchor: [16, 16] });

      const marker = L.marker(c.coords, { icon: markerIcon });
      marker.on('click', () => {
        this.openIncidentDrawer(c.id);
      });
      this.mapClustersGroup.addLayer(marker);
    });

    // Active Field Teams
    const fieldCoord = [12.9770, 77.6390];
    const fieldIcon = L.divIcon({
      className: 'custom-field-icon',
      html: `<div style="background:#0284c7; border:2px solid #fff; border-radius:6px; padding:3px 6px; color:#fff; font-size:11px; font-weight:bold; display:flex; align-items:center; gap:4px; box-shadow:0 0 10px #0284c7;">
        <span>👷 Team Alpha</span>
      </div>`,
      iconSize: [90, 24],
      iconAnchor: [45, 12]
    });
    this.mapFieldGroup.addLayer(L.marker(fieldCoord, { icon: fieldIcon }));

    // MediRoute Ambulance & 1km Dynamic Corridor
    const ambCoord = this.medirouteState.ambulanceCoord;
    const corridorCircle = L.circle(ambCoord, {
      color: '#10b981',
      fillColor: '#10b981',
      fillOpacity: 0.18,
      radius: 1000,
      weight: 2
    });
    this.mapCorridorGroup.addLayer(corridorCircle);

    const ambIcon = L.divIcon({
      className: 'custom-amb-icon',
      html: `<div style="background:#10b981; border:2px solid #fff; border-radius:50%; width:30px; height:30px; display:flex; align-items:center; justify-content:center; box-shadow:0 0 15px #10b981; font-size:16px;">🚑</div>`,
      iconSize: [30, 30],
      iconAnchor: [15, 15]
    });
    this.mapCorridorGroup.addLayer(L.marker(ambCoord, { icon: ambIcon }));

    // Place Uploaded Issue Marker if present
    if (this.uploadedIssue && this.uploadedIssue.gps_found && this.uploadedIssue.latitude && this.uploadedIssue.longitude) {
      this.placeUploadedIssueMarker(
        this.uploadedIssue.latitude,
        this.uploadedIssue.longitude,
        this.uploadedIssue.category,
        this.uploadedIssue.location_name,
        this.uploadedIssue.address
      );
    }
  }

  recenterCommandMap() {
    // Default Pan-India Center
    const coords = this.metroCoords[this.activeMetro] || [22.5937, 78.9629];
    const zoom = this.activeMetro === 'IND' ? 5 : 13;
    this.panToLocation(coords[0], coords[1], zoom);
  }

  panToLocation(lat, lng, zoom = 16) {
    if (this.googleMap) {
      this.googleMap.panTo({ lat, lng });
      this.googleMap.setZoom(zoom);
      return;
    }
    if (this.commandMap) {
      this.commandMap.setView([lat, lng], zoom, { animate: true });
    }
  }

  placeUploadedIssueMarker(lat, lng, category = "Pothole", title = "", address = "") {
    const catIcon = category === 'Pothole' ? '🕳️' : category === 'Garbage' ? '🗑️' : category === 'Sewer Leakage' || category === 'Water Leakage' ? '🚰' : '📍';
    const locTitle = title || (this.uploadedIssue ? this.uploadedIssue.location_name : 'Reported Issue');
    const locAddr = address || (this.uploadedIssue ? this.uploadedIssue.address : 'India');

    // Google Maps Marker Placement
    if (this.googleMap && window.google && window.google.maps) {
      if (this.uploadedGoogleMarker) {
        this.uploadedGoogleMarker.setMap(null);
      }
      this.uploadedGoogleMarker = new google.maps.Marker({
        position: { lat, lng },
        map: this.googleMap,
        title: `${category}: ${locTitle}`,
        animation: google.maps.Animation.DROP,
        icon: {
          url: 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(`
            <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 44 44">
              <circle cx="22" cy="22" r="20" fill="#ef4444" stroke="#ffffff" stroke-width="3"/>
              <text x="22" y="27" font-size="18" text-anchor="middle" fill="#ffffff">${catIcon}</text>
            </svg>
          `),
          scaledSize: new google.maps.Size(44, 44),
          anchor: new google.maps.Point(22, 22)
        }
      });

      const infoWindow = new google.maps.InfoWindow({
        content: `
          <div style="color:#0f172a; padding:8px; font-family:sans-serif; max-width:260px;">
            <div style="display:flex; align-items:center; gap:6px; margin-bottom:4px;">
              <span style="background:#fee2e2; color:#ef4444; font-size:10px; font-weight:800; padding:2px 6px; border-radius:4px;">AI VERIFIED ISSUE</span>
              <span style="font-size:10px; color:#10b981; font-weight:bold;">94% CONFIDENCE</span>
            </div>
            <strong style="color:#0f172a; font-size:13px; display:block; margin-bottom:4px;">${catIcon} ${category}: ${locTitle}</strong>
            <p style="font-size:11.5px; color:#475569; margin:0 0 6px 0;">${locAddr}</p>
            <div style="font-size:10px; font-family:monospace; color:#64748b; background:#f1f5f9; padding:3px 6px; border-radius:4px;">
              📍 Lat: ${lat.toFixed(4)}, Lng: ${lng.toFixed(4)} • Source: ${this.uploadedIssue ? this.uploadedIssue.location_source : 'PHOTO_EXIF'}
            </div>
          </div>
        `
      });

      this.uploadedGoogleMarker.addListener('click', () => {
        infoWindow.open(this.googleMap, this.uploadedGoogleMarker);
      });
      return;
    }

    // Leaflet Vector Engine Marker Placement
    if (this.commandMap && this.mapUploadedIssueGroup) {
      this.mapUploadedIssueGroup.clearLayers();
      const markerIcon = L.divIcon({
        className: 'custom-uploaded-pin',
        html: `<div style="background:#ef4444; border:2.5px solid #fff; border-radius:50%; width:38px; height:38px; display:flex; align-items:center; justify-content:center; box-shadow:0 0 20px #ef4444; font-size:18px; cursor:pointer;" class="pulse">
          ${catIcon}
        </div>`,
        iconSize: [38, 38],
        iconAnchor: [19, 19]
      });

      const marker = L.marker([lat, lng], { icon: markerIcon });
      marker.bindPopup(`
        <div style="color:#0f172a; padding:6px; font-family:sans-serif; max-width:240px;">
          <div style="color:#ef4444; font-size:11px; font-weight:800; text-transform:uppercase;">${category} (AI Confidence 94%)</div>
          <strong style="font-size:13px; display:block; margin:2px 0;">${locTitle}</strong>
          <p style="font-size:11px; color:#475569; margin:0 0 6px 0;">${locAddr}</p>
          <div style="font-size:10px; font-family:monospace; color:#64748b;">📍 ${lat.toFixed(4)}, ${lng.toFixed(4)} (${this.uploadedIssue ? this.uploadedIssue.location_source : 'PHOTO_EXIF'})</div>
        </div>
      `);
      this.mapUploadedIssueGroup.addLayer(marker);
    }
  }

  highlightIssueMarker() {
    if (this.uploadedGoogleMarker) {
      this.uploadedGoogleMarker.setAnimation(google.maps.Animation.BOUNCE);
      setTimeout(() => {
        if (this.uploadedGoogleMarker) this.uploadedGoogleMarker.setAnimation(null);
      }, 2100);
    }
  }

  reverseGeocodeIndia(lat, lng) {
    let closest = this.indiaLocations[0];
    let minDist = Infinity;
    for (const loc of this.indiaLocations) {
      const d = Math.hypot(lat - loc.lat, lng - loc.lng);
      if (d < minDist) {
        minDist = d;
        closest = loc;
      }
    }
    return {
      latitude: Number(lat.toFixed(6)),
      longitude: Number(lng.toFixed(6)),
      location_name: `${closest.name}, ${closest.state}, India`,
      address: `${closest.road}, ${closest.name}, ${closest.district}, ${closest.state} ${closest.pincode}, India`,
      road: closest.road,
      city: closest.name,
      district: closest.district,
      state: closest.state,
      pincode: closest.pincode,
      country: 'India'
    };
  }

  async reverseGeocode(lat, lng) {
    if (window.google && window.google.maps && window.google.maps.Geocoder) {
      try {
        const geocoder = new google.maps.Geocoder();
        const response = await new Promise((resolve) => {
          geocoder.geocode({ location: { lat, lng } }, (results, status) => {
            if (status === 'OK' && results && results[0]) {
              resolve(results[0]);
            } else {
              resolve(null);
            }
          });
        });

        if (response) {
          const comps = response.address_components || [];
          const getComp = (type) => {
            const c = comps.find(item => item.types.includes(type));
            return c ? c.long_name : "";
          };

          return {
            latitude: Number(lat.toFixed(6)),
            longitude: Number(lng.toFixed(6)),
            location_name: `${getComp('locality') || getComp('administrative_area_level_2') || 'National Urban Area'}, ${getComp('administrative_area_level_1') || 'India'}, India`,
            address: response.formatted_address,
            road: getComp('route') || "",
            city: getComp('locality') || getComp('administrative_area_level_2') || "",
            district: getComp('administrative_area_level_2') || "",
            state: getComp('administrative_area_level_1') || "",
            pincode: getComp('postal_code') || "",
            country: 'India'
          };
        }
      } catch (e) {
        console.warn('[CivicMap] Google geocoding fallback to India administrative engine:', e);
      }
    }

    return this.reverseGeocodeIndia(lat, lng);
  }

  async handlePhotoFileUpload(event) {
    const file = event.target.files && event.target.files[0];
    if (!file) return;

    // Render image preview
    const previewImg = document.getElementById('cit-preview-img');
    const objectUrl = URL.createObjectURL(file);
    if (previewImg) previewImg.src = objectUrl;

    // Extract EXIF & GPS metadata
    const exifData = window.ExifParser ? await window.ExifParser.inspectFile(file) : { exif_found: false, gps_found: false };
    console.log('[ExifParser] Inspection output:', exifData);

    const category = this.selectedCitizenCategory || 'Pothole';

    if (exifData.gps_found && exifData.latitude && exifData.longitude) {
      const geo = await this.reverseGeocode(exifData.latitude, exifData.longitude);
      this.uploadedIssue = {
        exif_found: true,
        gps_found: true,
        latitude: exifData.latitude,
        longitude: exifData.longitude,
        altitude: exifData.altitude,
        date_taken: exifData.date_taken || new Date().toISOString(),
        camera_make: exifData.camera_make || "Camera Device",
        camera_model: exifData.camera_model || "Digital Image",
        location_name: geo.location_name,
        address: geo.address,
        location_source: "PHOTO_EXIF",
        category: category,
        confidence: 94,
        severity: "High"
      };

      this.placeUploadedIssueMarker(
        exifData.latitude,
        exifData.longitude,
        category,
        this.uploadedIssue.location_name,
        this.uploadedIssue.address
      );
      this.updatePhotoAnalysisUI();
      if (this.soundEnabled) this.playBeep('success');
    } else {
      // GPS not found in metadata
      this.uploadedIssue = {
        exif_found: exifData.exif_found,
        gps_found: false,
        latitude: null,
        longitude: null,
        altitude: null,
        date_taken: exifData.date_taken || null,
        camera_make: exifData.camera_make || null,
        camera_model: exifData.camera_model || null,
        location_name: null,
        address: null,
        location_source: null,
        category: category,
        confidence: 92,
        severity: "High"
      };
      this.updatePhotoAnalysisUI();
      if (this.soundEnabled) this.playBeep('warning');
    }
  }

  simulateExifPhoto(presetKey) {
    const previewImg = document.getElementById('cit-preview-img');
    const chips = document.querySelectorAll('.btn-sample-exif');
    chips.forEach(c => c.classList.remove('active'));

    if (presetKey === 'delhi_pothole') {
      const chip = document.querySelector('.btn-sample-exif:first-child');
      if (chip) chip.classList.add('active');
      this.setCitizenPhotoPreset('pothole');
      if (previewImg) previewImg.src = LOCAL_ASSETS.pothole;

      this.uploadedIssue = {
        exif_found: true,
        gps_found: true,
        latitude: 28.6139,
        longitude: 77.2090,
        altitude: 216.4,
        date_taken: "2026-09-11T14:32:10",
        camera_make: "Apple",
        camera_model: "iPhone 15 Pro",
        location_name: "New Delhi, Delhi, India",
        address: "Connaught Place / Rajpath, New Delhi, Delhi 110001, India",
        location_source: "PHOTO_EXIF",
        category: "Pothole",
        confidence: 94,
        severity: "High"
      };

      this.placeUploadedIssueMarker(28.6139, 77.2090, 'Pothole', 'New Delhi, Delhi, India', 'Connaught Place / Rajpath');
      this.updatePhotoAnalysisUI();
      if (this.soundEnabled) this.playBeep('success');
    } else if (presetKey === 'no_gps_screenshot') {
      const chip = document.querySelector('.btn-sample-exif:last-child');
      if (chip) chip.classList.add('active');
      this.setCitizenPhotoPreset('pothole');
      if (previewImg) previewImg.src = LOCAL_ASSETS.pothole;

      this.uploadedIssue = {
        exif_found: true,
        gps_found: false,
        latitude: null,
        longitude: null,
        altitude: null,
        date_taken: null,
        camera_make: null,
        camera_model: null,
        location_name: null,
        address: null,
        location_source: null,
        category: "Pothole",
        confidence: 91,
        severity: "High"
      };

      this.updatePhotoAnalysisUI();
      if (this.soundEnabled) this.playBeep('warning');
    }
  }

  updatePhotoAnalysisUI() {
    const issueEl = document.getElementById('pac-issue-detected');
    const confEl = document.getElementById('pac-ai-confidence');
    const sevEl = document.getElementById('pac-severity');
    const foundBox = document.getElementById('pac-gps-found-box');
    const missingBox = document.getElementById('pac-gps-missing-box');
    const coordsEl = document.getElementById('pac-coords-val');
    const addrEl = document.getElementById('pac-address-val');
    const badgeEl = document.getElementById('pac-source-badge');
    const photoGpsTag = document.getElementById('photo-gps-tag');
    const step3GpsTag = document.getElementById('step3-gps-tag');

    const issue = this.uploadedIssue;
    if (!issue) return;

    if (issueEl) issueEl.textContent = issue.category || "Pothole";
    if (confEl) confEl.textContent = `${issue.confidence || 94}%`;
    if (sevEl) sevEl.textContent = issue.severity || "High";

    if (issue.gps_found && issue.latitude && issue.longitude) {
      if (foundBox) foundBox.style.display = "block";
      if (missingBox) missingBox.style.display = "none";
      if (coordsEl) coordsEl.textContent = `${issue.latitude}, ${issue.longitude}`;
      if (addrEl) addrEl.textContent = issue.location_name || issue.address || "India";

      let sourceLabel = "Photo GPS Metadata";
      if (issue.location_source === 'DEVICE_GPS') sourceLabel = "Current Device GPS";
      if (issue.location_source === 'MANUAL_MAP_SELECTION') sourceLabel = "Manual Map Selection";
      if (issue.location_source === 'ADDRESS_SEARCH') sourceLabel = "Address Geocoded";
      if (issue.location_source === 'MANUAL_COORDINATES') sourceLabel = "Manual Coordinates";
      if (badgeEl) badgeEl.textContent = sourceLabel;

      const tagText = `📍 GPS: ${issue.latitude}° N, ${issue.longitude}° E (±2m Accuracy) • ${issue.location_name || 'India'}`;
      if (photoGpsTag) photoGpsTag.textContent = tagText;
      if (step3GpsTag) step3GpsTag.textContent = tagText;
    } else {
      if (foundBox) foundBox.style.display = "none";
      if (missingBox) missingBox.style.display = "block";
      const noLocText = "📍 GPS: Location metadata unavailable (Select location below)";
      if (photoGpsTag) photoGpsTag.textContent = noLocText;
      if (step3GpsTag) step3GpsTag.textContent = noLocText;
    }
  }

  viewUploadedIssueOnMap() {
    if (!this.uploadedIssue || !this.uploadedIssue.latitude || !this.uploadedIssue.longitude) {
      alert("No GPS coordinates detected yet. Please select or detect a location first.");
      return;
    }

    this.switchExperience('command');
    this.switchCommandTab('overview');

    setTimeout(() => {
      this.panToLocation(this.uploadedIssue.latitude, this.uploadedIssue.longitude, 16);
      this.highlightIssueMarker();
    }, 150);

    if (this.soundEnabled) this.playBeep('nav');
  }

  useDeviceLocation() {
    if (!navigator.geolocation) {
      this.applyFallbackDelhiCoordinates();
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async (pos) => {
        const lat = Number(pos.coords.latitude.toFixed(6));
        const lng = Number(pos.coords.longitude.toFixed(6));
        const geo = await this.reverseGeocode(lat, lng);
        this.uploadedIssue.gps_found = true;
        this.uploadedIssue.latitude = lat;
        this.uploadedIssue.longitude = lng;
        this.uploadedIssue.location_name = geo.location_name;
        this.uploadedIssue.address = geo.address;
        this.uploadedIssue.location_source = "DEVICE_GPS";
        this.placeUploadedIssueMarker(lat, lng, this.uploadedIssue.category, geo.location_name, geo.address);
        this.updatePhotoAnalysisUI();
        if (this.soundEnabled) this.playBeep('success');
      },
      (err) => {
        console.warn('[CivicMap] Browser geolocation permission denied or timeout, using Delhi reference:', err);
        this.applyFallbackDelhiCoordinates();
      },
      { timeout: 6000 }
    );
  }

  applyFallbackDelhiCoordinates() {
    this.uploadedIssue.gps_found = true;
    this.uploadedIssue.latitude = 28.6139;
    this.uploadedIssue.longitude = 77.2090;
    this.uploadedIssue.location_name = "New Delhi, Delhi, India";
    this.uploadedIssue.address = "Connaught Place / Rajpath, New Delhi, Delhi 110001, India";
    this.uploadedIssue.location_source = "DEVICE_GPS";
    this.placeUploadedIssueMarker(28.6139, 77.2090, this.uploadedIssue.category, this.uploadedIssue.location_name, this.uploadedIssue.address);
    this.updatePhotoAnalysisUI();
    if (this.soundEnabled) this.playBeep('success');
  }

  selectLocationOnMap() {
    this.isMapPickerActive = true;
    this.switchExperience('command');
    this.switchCommandTab('overview');
    alert("Interactive India Map Location Picker Active:\nClick anywhere on the map of India to place your civic issue marker.");
  }

  handleMapCoordinatePick(lat, lng) {
    this.isMapPickerActive = false;
    const cleanLat = Number(lat.toFixed(6));
    const cleanLng = Number(lng.toFixed(6));
    const geo = this.reverseGeocodeIndia(cleanLat, cleanLng);

    this.uploadedIssue.gps_found = true;
    this.uploadedIssue.latitude = cleanLat;
    this.uploadedIssue.longitude = cleanLng;
    this.uploadedIssue.location_name = geo.location_name;
    this.uploadedIssue.address = geo.address;
    this.uploadedIssue.location_source = "MANUAL_MAP_SELECTION";

    this.placeUploadedIssueMarker(cleanLat, cleanLng, this.uploadedIssue.category, geo.location_name, geo.address);
    this.switchExperience('citizen');
    this.goToReportStep(2);
    this.updatePhotoAnalysisUI();
    if (this.soundEnabled) this.playBeep('success');
  }

  searchAddressFallback() {
    const input = document.getElementById('asf-query-input');
    const q = (input && input.value ? input.value.trim() : "").toLowerCase();
    if (!q) return;

    const found = this.indiaLocations.find(l => 
      l.name.toLowerCase().includes(q) || 
      l.state.toLowerCase().includes(q) || 
      l.road.toLowerCase().includes(q)
    ) || this.indiaLocations[0];

    this.uploadedIssue.gps_found = true;
    this.uploadedIssue.latitude = found.lat;
    this.uploadedIssue.longitude = found.lng;
    this.uploadedIssue.location_name = `${found.name}, ${found.state}, India`;
    this.uploadedIssue.address = `${found.road}, ${found.name}, ${found.district}, ${found.state} ${found.pincode}, India`;
    this.uploadedIssue.location_source = "ADDRESS_SEARCH";

    this.placeUploadedIssueMarker(found.lat, found.lng, this.uploadedIssue.category, this.uploadedIssue.location_name, this.uploadedIssue.address);
    this.updatePhotoAnalysisUI();
    if (this.soundEnabled) this.playBeep('success');
  }

  quickSelectCity(cityName) {
    const input = document.getElementById('asf-query-input');
    if (input) input.value = cityName;
    this.searchAddressFallback();
  }

  toggleManualLocationEditor() {
    const drawer = document.getElementById('pac-editable-drawer');
    if (!drawer) return;
    const isHidden = drawer.style.display === 'none';
    drawer.style.display = isHidden ? 'block' : 'none';

    if (isHidden && this.uploadedIssue && this.uploadedIssue.latitude) {
      const latIn = document.getElementById('ped-lat-input');
      const lngIn = document.getElementById('ped-lng-input');
      const addrIn = document.getElementById('ped-address-input');
      if (latIn) latIn.value = this.uploadedIssue.latitude;
      if (lngIn) lngIn.value = this.uploadedIssue.longitude;
      if (addrIn) addrIn.value = this.uploadedIssue.location_name || this.uploadedIssue.address || "";
    }
  }

  applyManualLocationCoordinates() {
    const latIn = document.getElementById('ped-lat-input');
    const lngIn = document.getElementById('ped-lng-input');
    const addrIn = document.getElementById('ped-address-input');

    const lat = parseFloat(latIn ? latIn.value : "");
    const lng = parseFloat(lngIn ? lngIn.value : "");
    if (isNaN(lat) || isNaN(lng)) {
      alert("Please enter valid numeric latitude and longitude coordinates.");
      return;
    }

    const cleanLat = Number(lat.toFixed(6));
    const cleanLng = Number(lng.toFixed(6));
    const geo = this.reverseGeocodeIndia(cleanLat, cleanLng);

    this.uploadedIssue.gps_found = true;
    this.uploadedIssue.latitude = cleanLat;
    this.uploadedIssue.longitude = cleanLng;
    this.uploadedIssue.location_name = (addrIn && addrIn.value.trim()) ? addrIn.value.trim() : geo.location_name;
    this.uploadedIssue.address = (addrIn && addrIn.value.trim()) ? addrIn.value.trim() : geo.address;
    this.uploadedIssue.location_source = "MANUAL_COORDINATES";

    this.placeUploadedIssueMarker(cleanLat, cleanLng, this.uploadedIssue.category, this.uploadedIssue.location_name, this.uploadedIssue.address);
    this.toggleManualLocationEditor();
    this.updatePhotoAnalysisUI();
    if (this.soundEnabled) this.playBeep('success');
  }

  clearIssueLocation() {
    this.uploadedIssue.gps_found = false;
    this.uploadedIssue.latitude = null;
    this.uploadedIssue.longitude = null;
    this.uploadedIssue.location_name = null;
    this.uploadedIssue.address = null;
    this.uploadedIssue.location_source = null;

    if (this.uploadedGoogleMarker) {
      this.uploadedGoogleMarker.setMap(null);
      this.uploadedGoogleMarker = null;
    }
    if (this.mapUploadedIssueGroup) {
      this.mapUploadedIssueGroup.clearLayers();
    }

    this.toggleManualLocationEditor();
    this.updatePhotoAnalysisUI();
    if (this.soundEnabled) this.playBeep('warning');
  }

  renderCommandIncidents(filterKeyword = "") {
    const list = document.getElementById("command-incidents-list");
    if (!list) return;

    let items = this.clusters;
    if (filterKeyword) {
      const q = filterKeyword.toLowerCase();
      items = this.clusters.filter(c => 
        c.title.toLowerCase().includes(q) ||
        c.category.toLowerCase().includes(q) ||
        c.location.toLowerCase().includes(q) ||
        c.dept.toLowerCase().includes(q) ||
        c.rationale.toLowerCase().includes(q) ||
        (q.includes("plastic") && c.category === "Pothole") ||
        (q.includes("reconstruct") && c.category === "Pothole") ||
        (q.includes("solution") && c.category === "Pothole") ||
        (q.includes("bitumen") && c.category === "Pothole")
      );
    }

    list.innerHTML = items.map(c => {
      const isHigh = c.severity === 'HIGH';
      const badgeClass = isHigh ? 'high' : 'medium';
      const riskClass = c.slaRisk === 'AT_RISK' ? 'text-amber' : 'text-green';
      const catIcon = c.category === 'Pothole' ? '🚧' : 
                      c.category === 'Garbage' ? '🗑️' : 
                      c.category === 'Streetlight' ? '💡' : 
                      c.category === 'Drainage' ? '🌊' : 
                      c.category === 'Water Leakage' ? '💧' : 
                      c.category === 'Power Line' ? '⚡' : 
                      c.category === 'Traffic' ? '🚗' : '📍';
      const shortSummary = c.operationalSummary ? c.operationalSummary.split('.')[0] + '.' : c.rationale.split('.')[0] + '.';

      const plasticPill = c.category === 'Pothole' ? `
        <div class="iac-plastic-pill" onclick="event.stopPropagation(); civicApp.openIncidentDrawer('${c.id}')" title="2.36mm shredded waste plastic bitumen mix according to IRC SP:98">
          <span class="ipp-icon">♻️</span>
          <span class="ipp-txt">Reconstruction: <strong>2.36mm Plastic Bitumen</strong> (IRC SP:98)</span>
        </div>
      ` : '';

      const woBtn = c.category === 'Pothole' ? `
        <button class="btn-card-wo" onclick="event.stopPropagation(); civicApp.openWorkOrderModal('${c.id}')" title="View official municipal work order">
          📄 Work Order
        </button>
      ` : '';

      return `
        <div class="incident-action-card" onclick="civicApp.openIncidentDrawer('${c.id}')" title="Click to inspect incident and assign field team">
          <div class="iac-thumb-col">
            <div class="iac-thumb-frame" onclick="event.stopPropagation(); civicApp.openIncidentPhotoModal('${c.id}')" title="Click to view full HD realistic photo evidence">
              <img src="${c.image}" class="iac-thumb" alt="${c.title}" loading="lazy" />
              <span class="iac-photo-tag"><span class="iac-photo-dot"></span>REAL PHOTO</span>
              <span class="iac-photo-zoom-btn">🔍 View HD</span>
            </div>
            <span class="iac-thumb-badge">${catIcon} ${c.category}</span>
            ${c.resolvedImage ? `
              <button class="btn-compare-photo" onclick="event.stopPropagation(); civicApp.openIncidentPhotoModal('${c.id}', 'solution')" title="View 2.36mm Plastic Road Reconstruction Solution Photo">
                ♻️ Solution
              </button>
            ` : ''}
          </div>
          <div class="iac-content">
            <div class="iac-header">
              <div class="iac-title-wrap">
                <span class="iac-title">${c.title}</span>
                <span class="iac-ward-tag">📍 ${c.location}</span>
              </div>
              <span class="priority-pill ${badgeClass}">${c.severity}</span>
            </div>
            
            <p class="iac-friendly-desc">${shortSummary}</p>
            ${plasticPill}

            <div class="iac-bottom-row">
              <div class="iac-meta-badges">
                <span class="iac-pill-tag count">👥 <strong>${c.reportsCount}</strong> Reports</span>
                <span class="iac-pill-tag ${riskClass}">⏱️ <strong>${c.slaDeadlineMinutes}m</strong> SLA Left</span>
              </div>
              <div class="iac-actions-group">
                ${woBtn}
                <button class="btn-card-inspect" onclick="event.stopPropagation(); civicApp.openIncidentDrawer('${c.id}')">
                  Inspect Details →
                </button>
              </div>
            </div>
          </div>
        </div>
      `;
    }).join("");
  }

  openIncidentPhotoModal(clusterId, mode = 'raw') {
    const cluster = this.clusters.find(c => c.id === clusterId) || this.clusters[0];
    if (!cluster) return;

    this.currentInspectedClusterId = cluster.id;
    this.currentPhotoModalMode = mode;

    const modal = document.getElementById("modal-incident-photo");
    if (!modal) return;

    const title = document.getElementById("mpv-title");
    const loc = document.getElementById("mpv-location");
    const img = document.getElementById("mpv-main-img");
    const overlayText = document.getElementById("mpv-overlay-text");
    const tabs = document.getElementById("mpv-mode-tabs");
    const tabRaw = document.getElementById("mpv-tab-raw");
    const tabSolution = document.getElementById("mpv-tab-solution");
    const samarthVerdict = document.getElementById("mpv-samarth-verdict");
    const confVal = document.getElementById("mpv-confidence-val");
    const confFill = document.getElementById("mpv-conf-fill");
    const notes = document.getElementById("mpv-samarth-notes");
    const metaCat = document.getElementById("mpv-meta-category");
    const metaSev = document.getElementById("mpv-meta-severity");
    const metaCoords = document.getElementById("mpv-meta-coords");
    const metaDept = document.getElementById("mpv-meta-dept");
    const metaCrew = document.getElementById("mpv-meta-crew");

    if (title) title.textContent = cluster.title;
    if (loc) loc.textContent = `📍 ${cluster.location}`;

    // Tabs for pothole plastic road solution
    if (tabs) {
      if (cluster.resolvedImage) {
        tabs.style.display = "flex";
        if (tabRaw) tabRaw.classList.toggle("active", mode !== 'solution');
        if (tabSolution) tabSolution.classList.toggle("active", mode === 'solution');
      } else {
        tabs.style.display = "none";
      }
    }

    const activePhoto = (mode === 'solution' && cluster.resolvedImage) ? cluster.resolvedImage : cluster.image;
    if (img) {
      img.src = activePhoto;
      img.alt = mode === 'solution' ? `Resolved Road: ${cluster.title}` : `Field Evidence: ${cluster.title}`;
    }

    if (overlayText) {
      if (mode === 'solution') {
        overlayText.textContent = "♻️ IRC SP:98 Plastic Bitumen Reconstruction Proof • Hydrophobic Seal";
      } else {
        overlayText.textContent = `📷 Geo-Verified Field Sensor • ${cluster.category} Evidence`;
      }
    }

    if (samarthVerdict) {
      samarthVerdict.textContent = mode === 'solution' 
        ? "Samarth AI: Verified 2.36mm Plastic Bitumen Restoration" 
        : `Samarth AI: Verified ${cluster.category} Defect`;
    }
    const confidence = cluster.category === 'Pothole' ? 98.4 : cluster.category === 'Garbage' ? 97.6 : 96.8;
    if (confVal) confVal.textContent = `${confidence}%`;
    if (confFill) confFill.style.width = `${confidence}%`;

    if (notes) {
      if (mode === 'solution') {
        notes.textContent = "Permanent waterproofing achieved using 2.36mm shredded single-use plastic bitumen mix (IRC SP:98). Monsoonal erosion resistance increased by 300%.";
      } else {
        notes.textContent = cluster.operationalSummary || cluster.rationale;
      }
    }

    if (metaCat) metaCat.textContent = cluster.category;
    if (metaSev) metaSev.textContent = cluster.severity;
    if (metaCoords) {
      const lat = cluster.coords ? cluster.coords[0].toFixed(4) : '22.5937';
      const lng = cluster.coords ? cluster.coords[1].toFixed(4) : '78.9629';
      metaCoords.textContent = `${lat}° N, ${lng}° E`;
    }
    if (metaDept) metaDept.textContent = cluster.dept;
    if (metaCrew) metaCrew.textContent = cluster.assignedTeam;

    modal.style.display = "flex";
    this.playBeep('success');
  }

  closeIncidentPhotoModal() {
    const modal = document.getElementById("modal-incident-photo");
    if (modal) modal.style.display = "none";
    this.playBeep('click');
  }

  handlePhotoModalBackdropClick(e) {
    if (e.target && e.target.id === "modal-incident-photo") {
      this.closeIncidentPhotoModal();
    }
  }

  switchPhotoModalTab(mode) {
    if (this.currentInspectedClusterId) {
      this.openIncidentPhotoModal(this.currentInspectedClusterId, mode);
    }
  }

  inspectCurrentModalIncident() {
    this.closeIncidentPhotoModal();
    if (this.currentInspectedClusterId) {
      this.openIncidentDrawer(this.currentInspectedClusterId);
    }
  }

  renderClustersGrid() {
    const grid = document.getElementById("clusters-display-grid");
    if (!grid) return;

    grid.innerHTML = this.clusters.map(c => `
      <div class="cluster-card">
        <div>
          <div class="cluster-header">
            <span class="cluster-tag">${c.id}</span>
            <span class="priority-pill high">${c.severity}</span>
          </div>
          <h4>${c.title}</h4>
          <div class="text-xs text-muted">📍 ${c.location}</div>
          <div class="cluster-stats-bar">
            <div class="cs-box"><span class="cs-num text-teal">${c.reportsCount}</span><span class="cs-lbl">Citizen Reports</span></div>
            <div class="cs-box"><span class="cs-num text-amber">${c.slaDeadlineMinutes}m</span><span class="cs-lbl">SLA Countdown</span></div>
            <div class="cs-box"><span class="cs-num text-sky">1</span><span class="cs-lbl">Actionable Job</span></div>
          </div>
          <div class="cluster-rationale">
            <strong>Why Clustered:</strong> Multiple reports within 120-meter proximity radius, similar visual geometry, and identical category.
          </div>
        </div>
        <button class="btn-primary-teal" onclick="civicApp.openIncidentDrawer('${c.id}')">
          Inspect Cluster & Dispatch Team →
        </button>
      </div>
    `).join("");
  }

  renderDepartmentWorkspaces() {
    const depts = ["Roads Department", "Sanitation Department", "Water Department", "Street-Light Department", "Drainage Department"];
    const pills = document.getElementById("dept-pills-filter");
    if (pills) {
      pills.innerHTML = depts.map((d, i) => `
        <button class="dept-pill-btn ${i === 0 ? 'active' : ''}" onclick="civicApp.filterDeptWorkspace('${d}', this)">
          ${d}
        </button>
      `).join("");
    }
    this.filterDeptWorkspace("Roads Department");
  }

  filterDeptWorkspace(deptName, btnEl = null) {
    if (btnEl) {
      document.querySelectorAll(".dept-pill-btn").forEach(b => b.classList.remove("active"));
      btnEl.classList.add("active");
    }
    const container = document.getElementById("dept-workspace-content");
    if (!container) return;

    const items = this.clusters.filter(c => c.dept === deptName);
    container.innerHTML = `
      <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:14px;">
        <h4>${deptName} — Active Duty Queue</h4>
        <span class="tag-status-pill text-teal">${items.length} Assigned Incident Clusters</span>
      </div>
      <div style="display:flex; flex-direction:column; gap:10px;">
        ${items.map(c => `
          <div class="incident-action-card" onclick="civicApp.openIncidentDrawer('${c.id}')">
            <img src="${c.image}" class="iac-thumb" alt="${c.title}" />
            <div class="iac-content">
              <div class="iac-header">
                <span class="iac-title">${c.title}</span>
                <span class="tag-status-pill">${c.status}</span>
              </div>
              <div class="iac-meta">Assigned Crew: <strong>${c.assignedTeam}</strong> • SLA Deadline: <strong class="text-amber">${c.slaDeadlineMinutes}m</strong></div>
              <div class="iac-reasoning">${c.operationalSummary}</div>
            </div>
          </div>
        `).join("")}
      </div>
    `;
  }

  renderSlaTable() {
    const tbody = document.getElementById("sla-table-tbody");
    if (!tbody) return;

    tbody.innerHTML = this.clusters.map(c => {
      const pill = c.slaRisk === 'AT_RISK' ? 'at_risk' : 'safe';
      return `
        <tr>
          <td><strong class="text-teal">${c.id}</strong></td>
          <td>${c.category}</td>
          <td><span class="text-xs">${c.location}</span></td>
          <td><strong>${c.dept}</strong></td>
          <td>45 mins</td>
          <td><strong class="${c.slaRisk === 'AT_RISK' ? 'text-amber' : 'text-green'}">${c.slaDeadlineMinutes}m</strong></td>
          <td><span class="sla-state-pill ${pill}">${c.slaRisk.replace('_', ' ')}</span></td>
          <td>Level 1 (Standard)</td>
          <td><button class="btn-icon-xs" onclick="civicApp.openIncidentDrawer('${c.id}')">Inspect</button></td>
        </tr>
      `;
    }).join("");
  }

  // =========================================================================
  // NATURAL LANGUAGE COMMAND BAR
  // =========================================================================
  handleNlInput(event) {
    const q = event.target.value;
    const clearBtn = document.getElementById("btn-nl-clear");
    if (clearBtn) clearBtn.style.display = q ? "block" : "none";

    this.renderCommandIncidents(q);
    const badge = document.getElementById("queue-filter-tag");
    if (badge) badge.textContent = q ? `Filtered: "${q}"` : "All Active";

    const qLower = (q || "").toLowerCase();
    if (qLower.includes("plastic") || qLower.includes("reconstruct")) {
      const qb = document.getElementById("map-quickbadge-text");
      if (qb) qb.textContent = "♻️ Sustainable Pothole Solution: 2.36mm Plastic Bitumen Reconstruction (IRC SP:98)";
      const showcase = document.getElementById("plastic-road-showcase");
      if (showcase) {
        showcase.scrollIntoView({ behavior: "smooth", block: "nearest" });
        showcase.classList.add("highlight-pulse");
        setTimeout(() => showcase.classList.remove("highlight-pulse"), 2500);
      }
    }
  }

  applyNlPreset(preset) {
    const input = document.getElementById("nl-query-input");
    if (input) {
      input.value = preset;
      this.handleNlInput({ target: input });
    }
  }

  clearNlFilter() {
    const input = document.getElementById("nl-query-input");
    if (input) {
      input.value = "";
      this.handleNlInput({ target: input });
    }
  }

  // =========================================================================
  // INCIDENT INSPECTION DRAWER
  // =========================================================================
  openIncidentDrawer(clusterId) {
    const cluster = this.clusters.find(c => c.id === clusterId) || this.clusters[0];
    const drawer = document.getElementById("incident-drawer");
    if (!drawer) return;

    const tag = document.getElementById("drawer-cluster-tag");
    const title = document.getElementById("drawer-title");
    const reason = document.getElementById("drawer-priority-reasoning");
    const reports = document.getElementById("drawer-reports-count");
    const sla = document.getElementById("drawer-sla-val");
    const dept = document.getElementById("drawer-dept-val");
    const crew = document.getElementById("drawer-crew-val");
    const summary = document.getElementById("drawer-ai-summary");
    const img = document.getElementById("drawer-evidence-img");

    if (tag) tag.textContent = cluster.id.toUpperCase();
    if (title) title.textContent = cluster.title;
    if (reason) reason.innerHTML = `<strong>Why High Priority:</strong> ${cluster.rationale}`;
    if (reports) reports.textContent = `${cluster.reportsCount} Citizens`;
    if (sla) sla.textContent = `${cluster.slaDeadlineMinutes}m remaining`;
    if (dept) dept.textContent = cluster.dept;
    if (crew) crew.textContent = cluster.assignedTeam;
    if (summary) summary.textContent = cluster.operationalSummary;
    if (img) {
      img.src = cluster.image;
      img.style.cursor = "zoom-in";
      img.onclick = () => this.openIncidentPhotoModal(cluster.id);
      img.title = "Click to inspect full HD realistic photo evidence";
    }
    const loc = document.getElementById("drawer-evidence-loc");
    if (loc) loc.textContent = `📍 ${cluster.location}`;

    drawer.classList.add("open");
  }

  closeIncidentDrawer() {
    const drawer = document.getElementById("incident-drawer");
    if (drawer) drawer.classList.remove("open");
  }

  operatorDispatchCrew() {
    alert("Field Team Alpha re-notified with urgent escalation coordinates.");
  }

  operatorEscalateSla() {
    alert("SLA priority escalated directly to Ward 12 Municipal Commissioner.");
  }

  // =========================================================================
  // CITIZEN EXPERIENCE LOGIC (LIGHT, MOBILE-FIRST)
  // =========================================================================
  switchCitizenTab(tab) {
    this.currentCitizenTab = tab;
    document.querySelectorAll(".cit-nav-item").forEach(btn => {
      btn.classList.toggle("active", btn.dataset.citNav === tab);
    });
    document.querySelectorAll(".cit-subtab").forEach(p => {
      p.classList.toggle("active", p.id === `cit-tab-${tab}`);
    });
  }

  selectCitizenCategory(cat) {
    this.selectedCitizenCategory = cat;
    document.querySelectorAll(".cat-tile").forEach(t => {
      t.classList.toggle("active", t.dataset.category === cat);
    });
    const nextBtnLbl = document.getElementById("btn-next-cat-name");
    if (nextBtnLbl) nextBtnLbl.textContent = cat;

    const conf = CATEGORY_TICKET_CONFIG[cat] || CATEGORY_TICKET_CONFIG['Pothole'];
    this.currentCapturedPhoto = conf.image;

    // Update photo preview in step 2
    const img2 = document.getElementById("cit-preview-img");
    if (img2) img2.src = conf.image;

    // Update preset buttons active state
    document.querySelectorAll(".btn-cit-photo-preset").forEach(btn => {
      const match = btn.dataset.preset === cat || btn.textContent.toLowerCase().includes(cat.toLowerCase());
      btn.classList.toggle("active", match);
    });

    // Update step 3 fields
    const img3 = document.getElementById("step3-evidence-img");
    if (img3) img3.src = conf.image;
    const catEl = document.getElementById("ai-cit-cat");
    if (catEl) catEl.textContent = `${cat} (${conf.dept.split(' ')[0]})`;
    const deptEl = document.getElementById("ai-cit-dept");
    if (deptEl) deptEl.textContent = conf.dept;
    const sevEl = document.getElementById("ai-cit-sev");
    if (sevEl) sevEl.textContent = conf.severity;

    // Update voice transcript preview for this category
    const trans = document.getElementById("voice-transcript-box");
    if (trans) {
      if (this.activeVoiceLang === 'kn') trans.textContent = conf.voiceKn;
      else if (this.activeVoiceLang === 'hi') trans.textContent = conf.voiceHi;
      else trans.textContent = conf.voiceEn;
    }

    // Toggle plastic callout if pothole
    const plasticBox = document.getElementById("cit-plastic-solution-box");
    if (plasticBox) {
      plasticBox.style.display = (cat === 'Pothole' || cat === 'Road') ? 'block' : 'none';
    }
  }

  goToReportStep(stepNum) {
    this.currentReportStep = stepNum;
    document.querySelectorAll(".report-step").forEach(s => s.classList.remove("active"));
    const target = document.getElementById(`rep-step-${stepNum}`);
    if (target) target.classList.add("active");

    const lbl = document.getElementById("flow-step-label");
    if (lbl) lbl.textContent = `Step ${stepNum} of 4`;

    if (stepNum === 2 || stepNum === 3) {
      // Set default preset photo and reset scroll for immediate visibility
      const cat = this.selectedCitizenCategory || 'Pothole';
      const conf = CATEGORY_TICKET_CONFIG[cat] || CATEGORY_TICKET_CONFIG['Pothole'];
      const img2 = document.getElementById("cit-preview-img");
      if (img2) img2.src = this.currentCapturedPhoto || conf.image;
      const img3 = document.getElementById("step3-evidence-img");
      if (img3) img3.src = this.currentCapturedPhoto || conf.image;

      const scrollBox = document.querySelector('.citizen-screen-scroll');
      if (scrollBox) scrollBox.scrollTop = 0;
    }
  }

  setVoiceLanguage(lang, btnEl) {
    this.activeVoiceLang = lang;
    document.querySelectorAll(".btn-lang-chip").forEach(b => b.classList.remove("active"));
    if (btnEl) btnEl.classList.add("active");

    const transcriptBox = document.getElementById("voice-transcript-box");
    const langNames = { kn: "Kannada", hi: "Hindi", en: "English", te: "Telugu" };
    const conf = CATEGORY_TICKET_CONFIG[this.selectedCitizenCategory || 'Pothole'] || CATEGORY_TICKET_CONFIG['Pothole'];

    if (transcriptBox) {
      if (lang === 'kn') transcriptBox.textContent = conf.voiceKn;
      else if (lang === 'hi') transcriptBox.textContent = conf.voiceHi;
      else transcriptBox.textContent = conf.voiceEn;
    }
    const micLbl = document.getElementById("voice-btn-label");
    if (micLbl) micLbl.textContent = `Tap to Speak in ${langNames[lang] || 'Indian Language'}`;
    this.playBeep('click');
  }

  simulateVoiceInput() {
    const micLbl = document.getElementById("voice-btn-label");
    const micIcon = document.getElementById("voice-mic-icon");
    const waveContainer = document.getElementById("voice-wave-container");
    const trans = document.getElementById("voice-transcript-box");

    this.playBeep('mic');

    if (waveContainer) waveContainer.style.display = "flex";
    if (micIcon) micIcon.textContent = "🔴";
    if (micLbl) micLbl.textContent = "Listening... Multilingual STT Model Active";

    setTimeout(() => {
      if (waveContainer) waveContainer.style.display = "none";
      if (micIcon) micIcon.textContent = "🎙️";
      if (micLbl) micLbl.textContent = "✓ Voice Captured & Translated";

      const conf = CATEGORY_TICKET_CONFIG[this.selectedCitizenCategory || 'Pothole'] || CATEGORY_TICKET_CONFIG['Pothole'];
      if (trans) {
        if (this.activeVoiceLang === 'kn') trans.textContent = conf.voiceKn;
        else if (this.activeVoiceLang === 'hi') trans.textContent = conf.voiceHi;
        else trans.textContent = conf.voiceEn;
      }
      this.playBeep('success');
    }, 1100);
  }

  setCitizenPhotoPreset(type) {
    let catKey = 'Pothole';
    const t = (type || '').toLowerCase();
    if (t.includes('garbage')) catKey = 'Garbage';
    else if (t.includes('light') || t.includes('streetlight')) catKey = 'Streetlight';
    else if (t.includes('water')) catKey = 'Water Leakage';
    else if (t.includes('drain')) catKey = 'Drainage';
    else if (t.includes('power') || t.includes('wire')) catKey = 'Power Line';
    else if (t.includes('traffic')) catKey = 'Traffic';
    else catKey = 'Pothole';

    this.selectCitizenCategory(catKey);
    this.playBeep('click');
  }

  submitCitizenComplaint() {
    this.goToReportStep(4);
    const cat = this.selectedCitizenCategory || 'Pothole';
    const conf = CATEGORY_TICKET_CONFIG[cat] || CATEGORY_TICKET_CONFIG['Pothole'];
    const ticketId = `PC-${Math.floor(1000 + Math.random() * 9000)}`;
    const photo = this.currentCapturedPhoto || conf.image;

    // Update Step 4 Success Screen Elements with realistic photo according to ticket raised
    const sucId = document.getElementById("suc-complaint-id");
    if (sucId) sucId.textContent = ticketId;
    const sucDept = document.getElementById("suc-dept");
    if (sucDept) sucDept.textContent = conf.dept;
    const sucImg = document.getElementById("suc-ticket-img");
    if (sucImg) sucImg.src = photo;
    const sucTitle = document.getElementById("suc-ticket-photo-title");
    if (sucTitle) sucTitle.textContent = conf.title;
    const sucTech = document.getElementById("suc-tech-val");
    if (sucTech) sucTech.textContent = conf.tech;

    // Add new ticket with realistic photo to citizenReports
    const newRep = {
      id: ticketId,
      title: conf.title,
      category: cat,
      location: conf.location,
      image: photo,
      date: "Just now",
      status: "ASSIGNED",
      dept: conf.dept,
      clusterId: cat === 'Pothole' ? 'Cluster #23' : null,
      timeline: [
        { label: "Report Submitted with Verified Photo Evidence", status: "completed", time: "Just now" },
        { label: `AI Analyzed: ${conf.severity}`, status: "completed", time: "Just now" },
        { label: `Assigned: ${conf.dept} Rapid Unit`, status: "active", time: "In Progress" },
        { label: "Field Repair & Verification", status: "pending" }
      ]
    };
    this.citizenReports.unshift(newRep);
    this.renderCitizenHomeReports();
    this.renderCitizenTimeline();
    this.playBeep('success');
  }

  citizenConfirmResolution(isYes) {
    const card = document.getElementById("cit-verify-card");
    if (!card) return;
    if (isYes) {
      const rep = this.citizenReports.find(r => r.id === "PC-8102");
      if (rep) {
        rep.status = "RESOLVED";
        rep.dateResolved = "Today, 09:45 AM";
        rep.resolution = {
          dept: "Roads Department • PWD Rapid Asphalt Crew",
          summary: "Excavated crater to sound aggregate base, primed with CSS-1h emulsion, paved with 2.36mm shredded waste-plastic modified bitumen hot mix (IRC SP:98), and vibratory-compacted to 98% density. Road surface is 100% hydrophobic with 3x pothole resistance.",
          resolvedDate: "Today, 09:45 AM",
          beforeImage: LOCAL_ASSETS.pothole,
          afterImage: LOCAL_ASSETS.resolved_road,
          statusNote: "Defect Rectified • IRC SP:98 Plastic Bitumen Applied"
        };
        rep.timeline.forEach(t => {
          if (t.status === "pending" || t.status === "active") t.status = "completed";
        });
      }
      this.renderCitizenTimeline();
      this.renderCitizenHomeReports();

      card.innerHTML = `
        <div style="background:#dcfce7; border:1px solid #86efac; color:#15803d; border-radius:10px; padding:14px;">
          <div style="display:flex; align-items:center; gap:8px; margin-bottom:6px;">
            <span style="font-size:18px;">✓</span>
            <strong style="font-size:13px;">Resolution Verified & Ticket #PC-8102 Closed!</strong>
          </div>
          <p style="font-size:11.5px; margin:0 0 10px 0; color:#166534;">
            Roads Department marked the 100 Feet Road pothole resolved with 2.36mm plastic bitumen proof. Your review section is now ready on your ticket card.
          </p>
          <button type="button" class="btn-view-track" onclick="civicApp.switchCitizenTab('myreports')" style="margin:0; width:100%;">
            ⭐ Give Citizen Review on Ticket #PC-8102 →
          </button>
        </div>
      `;
    } else {
      card.innerHTML = `
        <div style="background:#fee2e2; border:1px solid #fca5a5; color:#b91c1c; border-radius:8px; padding:12px; text-align:center;">
          <strong>⚠️ Ticket Reopened:</strong> Field supervisor alerted that the issue is still active. Re-dispatch queued.
        </div>
      `;
    }
  }

  renderCitizenHomeReports() {
    const el = document.getElementById("cit-home-reports-list");
    if (!el) return;

    el.innerHTML = this.citizenReports.slice(0, 3).map(r => `
      <div class="cit-recent-report-card" onclick="civicApp.switchCitizenTab('myreports')" style="cursor: pointer;" title="Click to track ticket">
        <img src="${r.image || LOCAL_ASSETS.pothole}" class="crr-thumb" alt="${r.title}" />
        <div class="crr-info">
          <strong class="crr-title">${r.title}</strong>
          <span class="crr-meta">📍 ${r.location.split(',')[0]} • ${r.id}</span>
        </div>
        <span class="tag-status-pill ${r.status === 'RESOLVED' ? 'green' : 'amber'}">${r.status === 'RESOLVED' ? '✓ RESOLVED' : r.status}</span>
      </div>
    `).join("");
  }

  renderCitizenTimeline() {
    const container = document.getElementById("cit-myreports-container");
    if (!container) return;

    container.innerHTML = this.citizenReports.map(r => {
      const isResolved = r.status === 'RESOLVED';
      const cat = r.category || (r.title.includes('Pothole') ? 'Pothole' : r.title.includes('Garbage') ? 'Garbage' : 'Streetlight');
      const deptName = (r.resolution && r.resolution.dept) || r.dept;
      const resDate = (r.resolution && r.resolution.resolvedDate) || r.dateResolved || r.date;
      const resSummary = (r.resolution && r.resolution.summary) || 'Defect rectified and certified by municipal field team in accordance with civic service standards.';
      const beforeImg = (r.resolution && r.resolution.beforeImage) || r.image || LOCAL_ASSETS.pothole;
      const afterImg = (r.resolution && r.resolution.afterImage) || (cat === 'Pothole' ? LOCAL_ASSETS.resolved_road : cat === 'Garbage' ? '/assets/resolved_garbage.jpg' : '/assets/resolved_streetlight.jpg');
      const statusNote = (r.resolution && r.resolution.statusNote) || 'Department Resolution Verified';

      const draftRating = r._draftRating || (r.citizenReview && r.citizenReview.rating) || 5;
      const draftSat = r._draftSatisfaction || (r.citizenReview && r.citizenReview.satisfaction) || 'Satisfied';

      return `
      <div class="timeline-card ${isResolved ? 'resolved-card' : ''}" id="ticket-card-${r.id}">
        <!-- 1. TICKET RAISED BY CITIZEN -->
        <div class="tc-media-row">
          <img src="${r.image || LOCAL_ASSETS.pothole}" class="tc-thumb" alt="${r.title}" />
          <div class="tc-info">
            <div class="timeline-card-top">
              <strong>${r.title}</strong>
              <span class="tag-status-pill ${isResolved ? 'green' : 'amber'}">${isResolved ? '✓ RESOLVED' : r.status}</span>
            </div>
            <div class="tc-meta-line">📍 ${r.location} • <span class="tc-id-tag">${r.id}</span> • <span class="tc-cat-badge">${cat}</span></div>
            <div style="display:flex; align-items:center; flex-wrap:wrap; gap:6px; margin-top:2px;">
              <span class="tc-dept-badge">${r.dept}</span>
              ${isResolved ? `<span style="font-size:10px; color:#15803d; font-weight:700;">• 📅 Resolved: ${resDate}</span>` : `<span style="font-size:10px; color:#94a3b8;">• Raised: ${r.date}</span>`}
            </div>
          </div>
        </div>

        <!-- Progress Timeline Steps -->
        <div class="timeline-step-list">
          ${r.timeline.map(s => `
            <div class="ts-item ${s.status}">${s.label} ${s.time ? `<span style="font-size:9px; color:#94a3b8;">(${s.time})</span>` : ''}</div>
          `).join("")}
        </div>

        <!-- 2. FINAL PROBLEM RESOLUTION & CITIZEN REVIEW (APPEARS ONLY AFTER MARKED RESOLVED) -->
        ${isResolved ? `
          <!-- Department Final Problem Resolution Section -->
          <div class="cit-resolution-box" id="res-box-${r.id}">
            <div class="crb-header">
              <div class="crb-header-title">
                <span class="crb-icon">🏛️</span>
                <div>
                  <strong>Official Department Problem Resolution</strong>
                  <span class="crb-dept">${deptName}</span>
                </div>
              </div>
              <div class="crb-date-badge">
                <span>📅 Resolved:</span>
                <strong>${resDate}</strong>
              </div>
            </div>

            <!-- Resolution Summary -->
            <div class="crb-summary-wrap">
              <div class="crb-summary-lbl">Final Problem Resolution Summary:</div>
              <p class="crb-summary-text">${resSummary}</p>
            </div>

            <!-- Before / After Photo Evidence & Status -->
            <div class="crb-before-after-grid">
              <div class="crb-photo-card before">
                <div class="crb-photo-label"><span class="crb-dot red"></span>Before: Reported Problem</div>
                <div class="crb-img-frame">
                  <img src="${beforeImg}" alt="Before Condition" />
                </div>
                <span class="crb-photo-sub">Citizen Complaint Evidence (${cat})</span>
              </div>
              <div class="crb-photo-card after">
                <div class="crb-photo-label"><span class="crb-dot green"></span>After: Resolution Proof</div>
                <div class="crb-img-frame">
                  <img src="${afterImg}" alt="After Resolution Proof" />
                </div>
                <span class="crb-photo-sub">${statusNote}</span>
              </div>
            </div>

            <div class="crb-status-footer">
              <span class="crb-status-pill">
                <span class="crb-check-icon">✓</span>
                <span>Before/After Status: <strong>Verified Resolved by Department</strong></span>
              </span>
              <span class="crb-meta-tag">Ticket ID: <strong>${r.id}</strong> • Category: <strong>${cat}</strong> • Dept: <strong>${r.dept}</strong></span>
            </div>
          </div>

          <!-- 3. CITIZEN REVIEW SECTION (SHOWN BELOW THE RESOLVED TICKET) -->
          ${r.citizenReview && !r._editingReview ? `
            <div class="cit-review-display-card" id="review-display-${r.id}">
              <div class="crd-header">
                <div class="crd-title-group">
                  <span class="crd-icon">⭐</span>
                  <div>
                    <strong>Citizen Review & Verification</strong>
                    <span class="crd-sub">Your verified feedback on ticket ${r.id}</span>
                  </div>
                </div>
                <button type="button" class="btn-edit-review" onclick="civicApp.editCitizenReview('${r.id}')" title="Edit your review">
                  ✏️ Edit Review
                </button>
              </div>

              <div class="crd-body">
                <div class="crd-score-row">
                  <div class="crd-stars">
                    ${[1, 2, 3, 4, 5].map(star => `
                      <span class="star-icon ${star <= r.citizenReview.rating ? 'filled' : ''}">★</span>
                    `).join('')}
                    <strong class="crd-rating-num">${r.citizenReview.rating} / 5 Stars</strong>
                  </div>
                  <span class="crd-satisfaction-pill ${r.citizenReview.satisfaction.toLowerCase().replace(/\s+/g, '-')}">
                    ${r.citizenReview.satisfaction === 'Satisfied' ? '😊 Satisfied' : 
                      r.citizenReview.satisfaction === 'Partially Satisfied' ? '😐 Partially Satisfied' : '🙁 Not Satisfied'}
                  </span>
                </div>

                <p class="crd-comment-quote">“${r.citizenReview.comment}”</p>

                <div class="crd-footer-meta">
                  <span class="crd-author">👤 ${r.citizenReview.citizenName || 'Janardhan (Citizen)'}</span>
                  <span class="crd-dot">•</span>
                  <span class="crd-date">${r.citizenReview.reviewedDate || 'Recently'}</span>
                  <span class="crd-dot">•</span>
                  <span class="crd-badge-verified">✓ Verified Municipal Record</span>
                </div>
              </div>
            </div>
          ` : `
            <div class="cit-review-form-card" id="review-form-${r.id}">
              <div class="crf-header">
                <div class="crf-title-group">
                  <span class="crf-icon">⭐</span>
                  <div>
                    <strong>Citizen Review & Satisfaction Rating</strong>
                    <p class="crf-sub">Rate the resolution provided by ${r.dept} on ticket ${r.id}:</p>
                  </div>
                </div>
                ${r._editingReview ? `
                  <button type="button" class="btn-cancel-edit" onclick="civicApp.cancelEditCitizenReview('${r.id}')">Cancel</button>
                ` : ''}
              </div>

              <!-- 1. Star Rating (1 to 5 Stars) -->
              <div class="crf-form-group">
                <label class="crf-label">1. Rate Resolution Quality & Timeliness (1–5 Stars):</label>
                <div class="crf-stars-picker" id="star-picker-${r.id}">
                  ${[1, 2, 3, 4, 5].map(num => `
                    <button type="button" 
                            class="star-pick-btn ${draftRating >= num ? 'active' : ''}" 
                            data-val="${num}"
                            onclick="civicApp.setTicketRating('${r.id}', ${num})"
                            title="${num} Star${num > 1 ? 's' : ''}">
                      ★
                    </button>
                  `).join('')}
                  <span class="crf-star-text" id="star-label-${r.id}">
                    ${draftRating} / 5 Stars
                  </span>
                </div>
              </div>

              <!-- 2. Satisfaction Status -->
              <div class="crf-form-group">
                <label class="crf-label">2. Satisfaction Status:</label>
                <div class="crf-sat-chips" id="sat-group-${r.id}">
                  <button type="button" 
                          class="sat-chip-btn ${draftSat === 'Satisfied' ? 'active satisfied' : ''}"
                          onclick="civicApp.setTicketSatisfaction('${r.id}', 'Satisfied')">
                    😊 Satisfied
                  </button>
                  <button type="button" 
                          class="sat-chip-btn ${draftSat === 'Partially Satisfied' ? 'active partially' : ''}"
                          onclick="civicApp.setTicketSatisfaction('${r.id}', 'Partially Satisfied')">
                    😐 Partially Satisfied
                  </button>
                  <button type="button" 
                          class="sat-chip-btn ${draftSat === 'Not Satisfied' ? 'active not-satisfied' : ''}"
                          onclick="civicApp.setTicketSatisfaction('${r.id}', 'Not Satisfied')">
                    🙁 Not Satisfied
                  </button>
                </div>
              </div>

              <!-- 3. Short Review / Comment -->
              <div class="crf-form-group">
                <label class="crf-label" for="review-text-${r.id}">3. Short Review / Comments:</label>
                <textarea id="review-text-${r.id}" 
                          class="crf-textarea" 
                          rows="2" 
                          placeholder="Share your experience (e.g. promptness of field crew, cleanliness of area, repair durability)...">${(r.citizenReview && r.citizenReview.comment) || ''}</textarea>
              </div>

              <div class="crf-actions">
                <button type="button" class="btn-submit-cit-review" onclick="civicApp.submitCitizenReview('${r.id}')">
                  ✓ Submit Citizen Review
                </button>
              </div>
            </div>
          `}
        ` : ''}
      </div>
      `;
    }).join("");
  }

  setTicketRating(ticketId, rating) {
    const rep = this.citizenReports.find(r => r.id === ticketId);
    if (!rep) return;
    rep._draftRating = rating;
    const picker = document.getElementById(`star-picker-${ticketId}`);
    if (picker) {
      const btns = picker.querySelectorAll('.star-pick-btn');
      btns.forEach((b, idx) => {
        if (idx + 1 <= rating) {
          b.classList.add('active');
        } else {
          b.classList.remove('active');
        }
      });
      const lbl = document.getElementById(`star-label-${ticketId}`);
      if (lbl) lbl.textContent = `${rating} / 5 Stars`;
    }
    if (this.soundEnabled) this.playBeep('click');
  }

  setTicketSatisfaction(ticketId, satisfaction) {
    const rep = this.citizenReports.find(r => r.id === ticketId);
    if (!rep) return;
    rep._draftSatisfaction = satisfaction;
    const group = document.getElementById(`sat-group-${ticketId}`);
    if (group) {
      const btns = group.querySelectorAll('.sat-chip-btn');
      btns.forEach(b => {
        b.className = 'sat-chip-btn';
        if (b.textContent.includes(satisfaction)) {
          const cls = satisfaction === 'Satisfied' ? 'satisfied' : 
                      satisfaction === 'Partially Satisfied' ? 'partially' : 'not-satisfied';
          b.classList.add('active', cls);
        }
      });
    }
    if (this.soundEnabled) this.playBeep('click');
  }

  submitCitizenReview(ticketId) {
    const rep = this.citizenReports.find(r => r.id === ticketId);
    if (!rep) return;

    const rating = rep._draftRating || (rep.citizenReview && rep.citizenReview.rating) || 5;
    const satisfaction = rep._draftSatisfaction || (rep.citizenReview && rep.citizenReview.satisfaction) || 'Satisfied';
    const textEl = document.getElementById(`review-text-${ticketId}`);
    const comment = textEl && textEl.value.trim() ? textEl.value.trim() : 
      (rating >= 4 ? "Issue was resolved promptly by the department crew. Satisfied with the work quality." : "Work completed but needs further monitoring.");

    rep.citizenReview = {
      rating: rating,
      satisfaction: satisfaction,
      comment: comment,
      reviewedDate: "Just now",
      citizenName: "Janardhan (Citizen)"
    };
    rep._editingReview = false;

    // Check if timeline already has verification step
    const hasVerif = rep.timeline.some(t => t.label.includes("Citizen Verified"));
    if (!hasVerif) {
      rep.timeline.push({
        label: `Citizen Verified: Rated ${rating}★ (${satisfaction})`,
        status: "completed",
        time: "Just now"
      });
    }

    this.renderCitizenTimeline();
    this.renderCitizenHomeReports();
    if (this.soundEnabled) this.playBeep('success');
    alert(`Thank you! Your ${rating}-star review for Ticket #${ticketId} has been recorded on the municipal transparency ledger.`);
  }

  editCitizenReview(ticketId) {
    const rep = this.citizenReports.find(r => r.id === ticketId);
    if (!rep) return;
    rep._editingReview = true;
    this.renderCitizenTimeline();
    if (this.soundEnabled) this.playBeep('click');
  }

  cancelEditCitizenReview(ticketId) {
    const rep = this.citizenReports.find(r => r.id === ticketId);
    if (!rep) return;
    rep._editingReview = false;
    this.renderCitizenTimeline();
  }

  renderCitizenNearby() {
    const container = document.getElementById("cit-nearby-container");
    if (!container) return;

    const nearby = [
      { title: "Waterlogging at Underpass", votes: 24, dist: "180m away", category: "Drainage", image: LOCAL_ASSETS.drainage },
      { title: "Dangerous Low Power Line", votes: 19, dist: "320m away", category: "Power Line", image: LOCAL_ASSETS.power_line },
      { title: "Garbage Pile on 5th Cross", votes: 15, dist: "450m away", category: "Garbage", image: LOCAL_ASSETS.garbage },
      { title: "Severe Traffic Gridlock at Junction", votes: 31, dist: "500m away", category: "Traffic", image: LOCAL_ASSETS.traffic }
    ];

    container.innerHTML = nearby.map(n => `
      <div class="cit-nearby-card">
        <img src="${n.image}" class="cnb-thumb" alt="${n.title}" />
        <div class="cnb-info">
          <strong class="cnb-title">${n.title}</strong>
          <span class="cnb-meta">📍 ${n.dist} • ${n.category}</span>
        </div>
        <button class="btn-vote-pill" onclick="this.textContent = '✓ Confirmed'; this.classList.add('voted');">
          👍 ${n.votes} Confirm
        </button>
      </div>
    `).join("");
  }

  renderCitizenNotifications() {
    const container = document.getElementById("cit-notifs-container");
    if (!container) return;

    const notifs = [
      { text: "Roads Department dispatched Team Alpha to fix your reported pothole.", time: "10m ago" },
      { text: "Your report merged with 42 others into High Priority Cluster #23.", time: "25m ago" },
      { text: "Sanitation Department completed waste clearance on 12th Main.", time: "Yesterday" }
    ];

    container.innerHTML = notifs.map(n => `
      <div style="background:#fff; border:1px solid #e2e8f0; border-radius:8px; padding:10px; margin-bottom:8px;">
        <p style="font-size:12px; margin-bottom:3px; color:#0f172a;">${n.text}</p>
        <span style="font-size:10px; color:#94a3b8;">${n.time}</span>
      </div>
    `).join("");
  }

  markNotifsRead() {
    const dot = document.querySelector(".cit-notif-dot");
    if (dot) dot.style.display = "none";
    alert("All notifications marked as read.");
  }

  initPhoneClock() {
    const update = () => {
      const now = new Date();
      const str = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      const el = document.getElementById("phone-clock");
      if (el) el.textContent = str;
    };
    update();
    setInterval(update, 1000);
  }

  // =========================================================================
  // FIELD WORKER EXPERIENCE (MOBILE-FIRST, OFFLINE-READY)
  // =========================================================================
  fieldWorkerAcceptJob() {
    const btnAccept = document.getElementById("btn-field-accept");
    const btnStart = document.getElementById("btn-field-start");
    const stepInd = document.getElementById("field-step-indicator");
    if (btnAccept) btnAccept.style.display = "none";
    if (btnStart) btnStart.style.display = "block";
    if (stepInd) stepInd.textContent = "Step: Job Accepted → En Route to Site";
  }

  fieldWorkerStartWork() {
    const btnStart = document.getElementById("btn-field-start");
    const btnResolve = document.getElementById("btn-field-resolve");
    const stepInd = document.getElementById("field-step-indicator");
    if (btnStart) btnStart.style.display = "none";
    if (btnResolve) btnResolve.style.display = "block";
    if (stepInd) stepInd.textContent = "Step: Work in Progress → Applying 2.36mm Plastic Bitumen";
  }

  fieldWorkerMarkResolved() {
    const btnResolve = document.getElementById("btn-field-resolve");
    const stepInd = document.getElementById("field-step-indicator");
    const evRow = document.getElementById("field-evidence-row");
    const imgBefore = document.getElementById("img-ev-before");
    const imgAfter = document.getElementById("img-ev-after");
    const taskImg = document.getElementById("field-task-img");

    if (btnResolve) {
      btnResolve.textContent = "✓ RESOLVED & SYNCED TO CITY GRID";
      btnResolve.style.background = "#059669";
    }
    if (stepInd) stepInd.textContent = "Step: Completed • Citizen Verification Triggered";
    if (evRow) evRow.style.display = "flex";
    if (imgBefore) imgBefore.src = LOCAL_ASSETS.pothole;
    if (imgAfter) imgAfter.src = LOCAL_ASSETS.resolved_road;
    if (taskImg) taskImg.src = LOCAL_ASSETS.resolved_road;

    // Sync to citizen reports: mark PC-8102 resolved
    const rep = this.citizenReports.find(r => r.id === "PC-8102");
    if (rep) {
      rep.status = "RESOLVED";
      rep.dateResolved = "Today, 09:45 AM";
      rep.resolution = {
        dept: "Roads Department • PWD Rapid Asphalt Crew",
        summary: "Excavated crater to sound aggregate base, primed with CSS-1h emulsion, paved with 2.36mm shredded waste-plastic modified bitumen hot mix (IRC SP:98), and vibratory-compacted to 98% density. Road surface is 100% hydrophobic with 3x pothole resistance.",
        resolvedDate: "Today, 09:45 AM",
        beforeImage: LOCAL_ASSETS.pothole,
        afterImage: LOCAL_ASSETS.resolved_road,
        statusNote: "Defect Rectified • IRC SP:98 Plastic Bitumen Applied"
      };
      this.renderCitizenTimeline();
      this.renderCitizenHomeReports();
    }
  }

  // =========================================================================
  // MEDIROUTE CORRIDOR SIMULATOR
  // =========================================================================
  toggleMediRouteSimulation() {
    const btn = document.getElementById("cmd-btn-start-mediroute");
    if (this.medirouteState.active) {
      clearInterval(this.medirouteState.timerId);
      this.medirouteState.active = false;
      if (btn) btn.textContent = "▶ START AMBULANCE JOURNEY (TO APEX TRAUMA CENTER)";
    } else {
      this.medirouteState.active = true;
      if (btn) btn.textContent = "⏸ EMERGENCY PAUSE CORRIDOR";
      this.medirouteState.timerId = setInterval(() => {
        this.medirouteTick();
      }, 100);
    }
  }

  medirouteTick() {
    this.medirouteState.progress += 0.005;
    if (this.medirouteState.progress >= 1) {
      this.medirouteState.progress = 1;
      clearInterval(this.medirouteState.timerId);
      this.medirouteState.active = false;
      const btn = document.getElementById("cmd-btn-start-mediroute");
      if (btn) btn.textContent = "✓ ARRIVED AT HOSPITAL (PATIENT DELIVERED)";
      return;
    }

    const start = [12.9716, 77.5946];
    const end = [12.9920, 77.6200];
    const curLat = start[0] + (end[0] - start[0]) * this.medirouteState.progress;
    const curLng = start[1] + (end[1] - start[1]) * this.medirouteState.progress;
    this.medirouteState.ambulanceCoord = [curLat, curLng];

    const distRem = (3.8 * (1 - this.medirouteState.progress)).toFixed(2);
    const speed = Math.round(52 + Math.sin(this.medirouteState.progress * 10) * 8);

    const spdEl = document.getElementById("med-speed-readout");
    const dstEl = document.getElementById("med-dist-readout");
    const etaEl = document.getElementById("med-eta-readout");
    if (spdEl) spdEl.textContent = `${speed} km/h`;
    if (dstEl) dstEl.textContent = `${distRem} km`;
    if (etaEl) etaEl.textContent = `${Math.round(distRem * 1.1)}m remaining`;

    this.renderCommandMapLayers();
  }

  resetMediRouteSimulation() {
    clearInterval(this.medirouteState.timerId);
    this.medirouteState.active = false;
    this.medirouteState.progress = 0;
    this.medirouteState.ambulanceCoord = [12.9716, 77.5946];
    const btn = document.getElementById("cmd-btn-start-mediroute");
    if (btn) btn.textContent = "▶ START AMBULANCE JOURNEY (TO APEX TRAUMA CENTER)";
    this.renderCommandMapLayers();
  }

  // =========================================================================
  // EMERGENCY CRISIS MODE
  // =========================================================================
  promptEmergencyMode() {
    const modal = document.getElementById("modal-crisis-confirm");
    if (modal) modal.style.display = "flex";
  }

  closeCrisisModal() {
    const modal = document.getElementById("modal-crisis-confirm");
    if (modal) modal.style.display = "none";
  }

  activateEmergencyCrisisMode() {
    this.closeCrisisModal();
    const btn = document.getElementById("btn-emergency-mode");
    if (btn) {
      btn.style.background = "#dc2626";
      btn.style.color = "#fff";
      btn.innerHTML = `<span>🚨 CRISIS MODE ACTIVE</span>`;
    }
    alert("Municipal Crisis Operations Active: High-priority grid deployed across hospitals, blocked routes, and evacuation centers.");
  }

  // =========================================================================
  // =========================================================================
  // SAMARTH AI (समर्थ) CIVIC INTELLIGENCE COPILOT ENGINE
  // =========================================================================
  openCommandPalette() {
    this.openSamarthConsole();
  }

  /**
   * Samarth AI Civic Complaint Engine
   * Full implementation of the 10 core assistant responsibilities:
   * 1. Accepts complaints in any language.
   * 2. Detects language and converts complaint into clear, professional English.
   * 3. Analyzes image and classifies as POTHOLE, GARBAGE, or SEWER_LEAKAGE.
   * 4. Authenticates image (GENUINE vs SUSPECTED_AI_GENERATED/MANIPULATED).
   * 5. Flags AI-generated images for manual review or requests original image without creating ticket.
   * 6. Does not reject images only because EXIF metadata is missing.
   * 7. Extracts GPS from photo EXIF if available; otherwise allows device GPS, map selection, or manual location.
   * 8. Detects severity: LOW, MEDIUM, HIGH, CRITICAL.
   * 9. Routes to Road Maintenance / PWD, Sanitation Department, or Water & Sewerage Department.
   * 10. Generates standardized English ticket output.
   */
  processCivicComplaint({
    complaintText = "",
    detectedLanguage = null,
    imageSrc = null,
    exifData = null,
    deviceCoords = null,
    manualCoords = null,
    simulatedAiGenerated = false
  } = {}) {
    // 1 & 2: Accept complaints in any language, detect language, translate to English
    let original_language = detectedLanguage || "English";
    let rawText = (complaintText || "").trim();
    let english_complaint = rawText;

    if (/[\u0900-\u097F]/.test(rawText)) {
      original_language = "Hindi";
      if (rawText.includes("गड्ढा") || rawText.includes("सड़क") || rawText.includes("सडक")) {
        english_complaint = "A large pothole or damaged road surface is creating a road safety hazard.";
      } else if (rawText.includes("कचरा") || rawText.includes("कूड़ा") || rawText.includes("कूडे")) {
        english_complaint = "Severe municipal solid waste and garbage overflow accumulated on the public street.";
      } else if (rawText.includes("सीवर") || rawText.includes("नाला") || rawText.includes("गंदा पानी") || rawText.includes("लीकेज")) {
        english_complaint = "Contaminated wastewater is flowing from an overflowing sewer manhole across the road.";
      } else {
        english_complaint = "Civic municipal issue reported in Hindi requiring municipal inspection.";
      }
    } else if (/[\u0C80-\u0CFF]/.test(rawText)) {
      original_language = "Kannada";
      if (rawText.includes("ಗುಂಡಿ") || rawText.includes("ರಸ್ತೆ")) {
        english_complaint = "Severe asphalt road pothole creating hazardous driving conditions for commuters.";
      } else if (rawText.includes("ಕಸ")) {
        english_complaint = "Overflowing waste dumpster and uncollected garbage posing a public sanitation risk.";
      } else if (rawText.includes("ಚರಂಡಿ") || rawText.includes("ನೀರು") || rawText.includes("ಸೀವರೇಜ್")) {
        english_complaint = "Blocked stormwater drainage and sewage leakage inundating pedestrian thoroughfare.";
      } else {
        english_complaint = "Civic municipal issue reported in Kannada requiring department response.";
      }
    } else if (!english_complaint) {
      english_complaint = "Civic infrastructure issue observed and submitted for immediate municipal remediation.";
    }

    // 3: Analyze and classify issue into supported categories: POTHOLE, GARBAGE, SEWER_LEAKAGE
    let issue = "POTHOLE";
    let department = "Road Maintenance Department";
    const combined = (rawText + " " + english_complaint + " " + (imageSrc || "")).toLowerCase();

    if (combined.includes("sewer") || combined.includes("drain") || combined.includes("wastewater") || combined.includes("sewage") || combined.includes("नाला") || combined.includes("सीवर") || combined.includes("ಚರಂಡಿ")) {
      issue = "SEWER_LEAKAGE";
      department = "Water & Sewerage Department";
    } else if (combined.includes("garbage") || combined.includes("trash") || combined.includes("waste") || combined.includes("dump") || combined.includes("कचरा") || combined.includes("कूड़ा") || combined.includes("ಕಸ")) {
      issue = "GARBAGE";
      department = "Municipal Sanitation Department";
    } else {
      issue = "POTHOLE";
      department = "Road Maintenance Department";
    }

    // 4 & 5: Check whether image appears genuine or AI-generated / manipulated
    let image_status = "GENUINE";
    let action = "CREATE_TICKET";

    if (simulatedAiGenerated || combined.includes("ai_generated") || combined.includes("synthetic") || combined.includes("midjourney") || combined.includes("deepfake")) {
      image_status = "SUSPECTED_AI_GENERATED";
      action = "REQUEST_ORIGINAL_IMAGE";
    }

    // 6 & 7: GPS extraction - Do not reject only because EXIF metadata is missing!
    let latitude = null;
    let longitude = null;

    if (exifData && exifData.gps_found && exifData.latitude != null && exifData.longitude != null) {
      latitude = Number(exifData.latitude.toFixed(6));
      longitude = Number(exifData.longitude.toFixed(6));
    } else if (deviceCoords && deviceCoords.lat != null) {
      latitude = Number(deviceCoords.lat.toFixed(6));
      longitude = Number(deviceCoords.lng.toFixed(6));
    } else if (manualCoords && manualCoords.lat != null) {
      latitude = Number(manualCoords.lat.toFixed(6));
      longitude = Number(manualCoords.lng.toFixed(6));
    } else if (this.activeLatitude && this.activeLongitude) {
      latitude = Number(this.activeLatitude.toFixed(6));
      longitude = Number(this.activeLongitude.toFixed(6));
    }

    // 8: Detect severity: LOW, MEDIUM, HIGH, CRITICAL
    let severity = "HIGH";
    if (combined.includes("critical") || combined.includes("electrocution") || combined.includes("hazard") || combined.includes("burst")) {
      severity = "CRITICAL";
    } else if (combined.includes("minor") || combined.includes("small") || combined.includes("shallow")) {
      severity = "LOW";
    } else if (combined.includes("medium") || combined.includes("moderate")) {
      severity = "MEDIUM";
    } else {
      severity = "HIGH";
    }

    return {
      issue,
      original_language,
      english_complaint,
      severity,
      image_status,
      latitude,
      longitude,
      department,
      action
    };
  }

  openSamarthConsole() {
    const modal = document.getElementById("command-palette-modal");
    const input = document.getElementById("palette-search-input");
    if (modal) modal.style.display = "flex";
    if (input) {
      input.value = "";
      input.focus();
      this.renderSamarthDefaultWorks();
      this.handlePaletteInput({ target: input });
    }
    if (this.soundEnabled) this.playBeep('nav');
  }

  closeCommandPalette() {
    const modal = document.getElementById("command-palette-modal");
    if (modal) modal.style.display = "none";
  }

  closeSamarthConsole() {
    this.closeCommandPalette();
  }

  handlePaletteBackdropClick(e) {
    if (e.target.id === 'command-palette-modal') this.closeCommandPalette();
  }

  renderSamarthDefaultWorks() {
    const area = document.getElementById("samarth-ai-output-area");
    if (!area) return;

    area.innerHTML = `
      <div class="samarth-works-showcase">
        <div class="sws-header">
          <span class="sws-badge">SAMARTH AI CORE OPERATIONAL WORKS</span>
          <h4>How Samarth Powers Modern Municipal Operations</h4>
          <p class="sws-sub">Samarth (समर्थ — "Capable") is the autonomous intelligence layer of CitySynapse executing 7 interconnected civic works:</p>
        </div>

        <div class="samarth-works-grid">
          <div class="samarth-work-card" onclick="civicApp.executeSamarthAction('citizen')">
            <div class="swc-top">
              <span class="swc-num">WORK 1</span>
              <span class="swc-icon">👁️</span>
            </div>
            <h5 class="swc-title">Multimodal Vision & Regional Speech Triage</h5>
            <p class="swc-desc">Analyzes photos with 98.4% accuracy to detect crater depth & area; transcribes Kannada, Hindi, Telugu voice complaints.</p>
            <button class="btn-swc-try">Test Reporting Flow →</button>
          </div>

          <div class="samarth-work-card" onclick="civicApp.executeSamarthAction('cluster23')">
            <div class="swc-top">
              <span class="swc-num">WORK 2</span>
              <span class="swc-icon">📍</span>
            </div>
            <h5 class="swc-title">Spatial Deduplication & Cluster Synthesis</h5>
            <p class="swc-desc">Aggregates duplicate calls (e.g. 43 reports within 120m into Cluster #23) preventing field team ticket fatigue.</p>
            <button class="btn-swc-try">Inspect Cluster #23 →</button>
          </div>

          <div class="samarth-work-card" onclick="civicApp.executeSamarthAction('sla')">
            <div class="swc-top">
              <span class="swc-num">WORK 3</span>
              <span class="swc-icon">⚖️</span>
            </div>
            <h5 class="swc-title">Explainable Risk & Proximity Priority Scoring</h5>
            <p class="swc-desc">Transparent priority scoring based on proximity to schools, metro stations, weather stagnation, and road classification.</p>
            <button class="btn-swc-try">View SLA Monitors →</button>
          </div>

          <div class="samarth-work-card" onclick="civicApp.executeSamarthAction('plastic')">
            <div class="swc-top">
              <span class="swc-num">WORK 4</span>
              <span class="swc-icon">♻️</span>
            </div>
            <h5 class="swc-title">Sustainable 2.36mm Plastic Road Formulations</h5>
            <p class="swc-desc">Batches IRC SP:98-2020 shredded polymer road mix (8% binder replacement) utilizing plastic waste collected directly from citizen-raised garbage tickets for 100% waterproof road seals.</p>
            <button class="btn-swc-try">Batch Polymer Mix →</button>
          </div>

          <div class="samarth-work-card" onclick="civicApp.executeSamarthAction('workorder')">
            <div class="swc-top">
              <span class="swc-num">WORK 5</span>
              <span class="swc-icon">📄</span>
            </div>
            <h5 class="swc-title">Statutory Municipal Work Orders & Gazette Registers</h5>
            <p class="swc-desc">Auto-generates official work orders (BBMP/MCD/GHMC) with Bill of Quantities (BOM) & maintains 6 formal gazetted registers.</p>
            <button class="btn-swc-try">Generate Work Order →</button>
          </div>

          <div class="samarth-work-card" onclick="civicApp.executeSamarthAction('mediroute')">
            <div class="swc-top">
              <span class="swc-num">WORK 6</span>
              <span class="swc-icon">🚑</span>
            </div>
            <h5 class="swc-title">MediRoute 1km Ambulance Preemption Wave</h5>
            <p class="swc-desc">Synchronizes downstream signals in a 1.0 km radius around moving ambulances, turning lights green and clearing transit bottlenecks.</p>
            <button class="btn-swc-try">Launch Green Corridor →</button>
          </div>

          <div class="samarth-work-card" onclick="civicApp.executeSamarthAction('citizen')">
            <div class="swc-top">
              <span class="swc-num">WORK 7</span>
              <span class="swc-icon">🤝</span>
            </div>
            <h5 class="swc-title">Closed-Loop Citizen Verification & Civic Trust</h5>
            <p class="swc-desc">Prompts reporting citizens to verify on-ground completion before tickets can be closed, eliminating ghost resolutions.</p>
            <button class="btn-swc-try">View Verification Loop →</button>
          </div>
        </div>
      </div>
    `;
  }

  askSamarthAI(topicKey) {
    const input = document.getElementById("palette-search-input");
    const area = document.getElementById("samarth-ai-output-area");
    if (!area) return;

    if (topicKey === 'works') {
      if (input) input.value = "What are Samarth AI's works and architecture?";
      this.renderSamarthDefaultWorks();
      return;
    }

    let cardHtml = "";
    if (topicKey === 'sla') {
      if (input) input.value = "Which incidents are at risk of SLA breach?";
      cardHtml = `
        <div class="samarth-response-card">
          <div class="src-header">
            <span class="src-badge amber">SAMARTH SLA SENTINEL AUDIT</span>
            <span class="src-time">Audited Just Now</span>
          </div>
          <h4 class="src-title">Incident Cluster #23 is Approaching SLA Breach (42m Remaining)</h4>
          <p class="src-desc">
            Under the <strong>Karnataka Guarantee of Services to Citizens (Sakala) Act 2011</strong>, Category-1 high priority road hazards must be resolved within 48 hours. <strong>Cluster #23 on 100 Feet Road</strong> currently has 42 citizen citations with only 42 minutes remaining before automatic zonal supervisor penalty escalation.
          </p>
          <div class="src-stats-row">
            <div><span class="src-stat-val text-amber">42m 18s</span><span class="src-stat-lbl">Time to Breach</span></div>
            <div><span class="src-stat-val text-teal">43 Reports</span><span class="src-stat-lbl">Merged Citations</span></div>
            <div><span class="src-stat-val text-green">Team Alpha</span><span class="src-stat-lbl">Assigned Crew</span></div>
          </div>
          <div class="src-actions-row">
            <button class="btn-samarth-action" onclick="civicApp.executeSamarthAction('cluster23')">⚡ Inspect Cluster #23 on Live Map</button>
            <button class="btn-samarth-action secondary" onclick="civicApp.executeSamarthAction('sla')">View City SLA Board</button>
          </div>
        </div>
      `;
    } else if (topicKey === 'plastic') {
      if (input) input.value = "How does Samarth batch 2.36mm waste plastic bitumen?";
      cardHtml = `
        <div class="samarth-response-card">
          <div class="src-header">
            <span class="src-badge teal">SAMARTH SUSTAINABILITY & IRC SP:98 SPEC</span>
            <span class="src-time">Engineering Simulator</span>
          </div>
          <h4 class="src-title">2.36mm Shredded Polymer Hot-Mix Bitumen Formulation</h4>
          <p class="src-desc">
            Samarth calculates material batching adhering strictly to <strong>IRC SP:98-2020</strong> guidelines. By substituting <strong>8% of VG-30 bitumen binder</strong> with 2.36mm shredded LDPE/HDPE/PU polymers, road water stripping is eliminated, extending lifespan 3x. For an average 2.8m² pothole (depth 14cm):
          </p>
          <div class="src-stats-row">
            <div><span class="src-stat-val text-teal">23.5 kg</span><span class="src-stat-lbl">2.36mm Polymers</span></div>
            <div><span class="src-stat-val text-sky">58.8 kg</span><span class="src-stat-lbl">VG-30 Binder</span></div>
            <div><span class="src-stat-val text-green">1,470</span><span class="src-stat-lbl">Bottles Diverted</span></div>
            <div><span class="src-stat-val text-green">35.2 kg</span><span class="src-stat-lbl">CO₂ Offset</span></div>
          </div>
          <div class="src-actions-row">
            <button class="btn-samarth-action" onclick="civicApp.executeSamarthAction('plastic')">⚡ Open Interactive Batching Tool</button>
            <button class="btn-samarth-action secondary" onclick="civicApp.executeSamarthAction('workorder')">📄 Generate Official Work Order</button>
          </div>
        </div>
      `;
    } else if (topicKey === 'mediroute') {
      if (input) input.value = "How does Samarth manage emergency ambulance preemption?";
      cardHtml = `
        <div class="samarth-response-card">
          <div class="src-header">
            <span class="src-badge emerald">SAMARTH MEDIROUTE DYNAMIC RADAR</span>
            <span class="src-time">Transit Emergency Grid</span>
          </div>
          <h4 class="src-title">1.0 km Dynamic Moving Radius Traffic Preemption</h4>
          <p class="src-desc">
            Samarth tracks active ambulance transponders in real-time. Signals within <strong>1.0 km dynamic radius</strong> are preempted into coordinated green corridors, reducing golden-hour emergency transit delays by <strong>48% (saving ~11.4 minutes per journey)</strong> while highway VMS screens alert motorists to yield.
          </p>
          <div class="src-stats-row">
            <div><span class="src-stat-val text-emerald">1.0 km</span><span class="src-stat-lbl">Preemption Radius</span></div>
            <div><span class="src-stat-val text-green">7 Signals</span><span class="src-stat-lbl">Synced Cascade</span></div>
            <div><span class="src-stat-val text-teal">-48% Delay</span><span class="src-stat-lbl">Travel Time Cut</span></div>
          </div>
          <div class="src-actions-row">
            <button class="btn-samarth-action" onclick="civicApp.executeSamarthAction('mediroute')">⚡ Launch MediRoute Simulation Now</button>
          </div>
        </div>
      `;
    } else if (topicKey === 'statutory') {
      if (input) input.value = "Show statutory municipal registers & audit forms";
      cardHtml = `
        <div class="samarth-response-card">
          <div class="src-header">
            <span class="src-badge sky">SAMARTH STATUTORY AUDIT SENTINEL</span>
            <span class="src-time">KMC Act 1976 • Sakala 2011</span>
          </div>
          <h4 class="src-title">6 Gazetted Municipal Performance Registers Maintained</h4>
          <p class="src-desc">
            Samarth maintains real-time statutory registers for Form II (Emergency Transit), Form IV (Solid Waste Abatement), Form VII (Roads & Polymer Batching), Form IX (High-Voltage Grid), Form XII (Stormwater Culverts), and Form XV (Sakala Citizen Charter).
          </p>
          <div class="src-stats-row">
            <div><span class="src-stat-val text-green">93.4%</span><span class="src-stat-lbl">Pan-City SLA</span></div>
            <div><span class="src-stat-val text-teal">6 Forms</span><span class="src-stat-lbl">Active Registers</span></div>
            <div><span class="src-stat-val text-amber">₹0</span><span class="src-stat-lbl">Default Penalties</span></div>
          </div>
          <div class="src-actions-row">
            <button class="btn-samarth-action" onclick="civicApp.executeSamarthAction('statutory')">⚡ Open Official Gazette Registers</button>
          </div>
        </div>
      `;
    } else if (topicKey === 'cluster23') {
      if (input) input.value = "Inspect Incident Cluster #23 (Indiranagar Pothole)";
      cardHtml = `
        <div class="samarth-response-card">
          <div class="src-header">
            <span class="src-badge crimson">SAMARTH CLUSTER PROFILE #23</span>
            <span class="src-time">Critical Grade-I</span>
          </div>
          <h4 class="src-title">Deep Pothole Cluster on 100 Feet Road, Indiranagar</h4>
          <p class="src-desc">
            43 verified citizen reports clustered within 120 meters. Pothole depth: 14cm right outside Metro Pillar 140 and school gate. High two-wheeler skid risk during rain. Recommended immediate repair using 2.36mm plastic bitumen blend.
          </p>
          <div class="src-stats-row">
            <div><span class="src-stat-val text-crimson">Score 92</span><span class="src-stat-lbl">Priority Level</span></div>
            <div><span class="src-stat-val text-amber">42m Left</span><span class="src-stat-lbl">SLA Window</span></div>
            <div><span class="src-stat-val text-teal">Ward 12</span><span class="src-stat-lbl">Mahadevapura</span></div>
          </div>
          <div class="src-actions-row">
            <button class="btn-samarth-action" onclick="civicApp.executeSamarthAction('cluster23')">⚡ Inspect in Side Drawer</button>
            <button class="btn-samarth-action secondary" onclick="civicApp.executeSamarthAction('workorder')">📄 View Work Order</button>
          </div>
        </div>
      `;
    }

    area.innerHTML = cardHtml;
    if (this.soundEnabled) this.playBeep('success');
  }

  executeSamarthAction(actionCode) {
    this.closeCommandPalette();
    if (this.soundEnabled) this.playBeep('nav');

    if (actionCode === 'cluster23') {
      this.switchExperience('command');
      this.switchCommandTab('overview');
      this.openIncidentDrawer('Cluster #23');
    } else if (actionCode === 'plastic') {
      this.switchExperience('command');
      this.switchCommandTab('analytics');
      setTimeout(() => {
        const el = document.getElementById('form-vii-calculator-anchor');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 150);
    } else if (actionCode === 'mediroute') {
      this.switchExperience('command');
      this.switchCommandTab('mediroute');
      setTimeout(() => {
        if (!this.medirouteState.active) this.toggleMediRouteSimulation();
      }, 200);
    } else if (actionCode === 'sla') {
      this.switchExperience('command');
      this.switchCommandTab('sla');
    } else if (actionCode === 'statutory') {
      this.switchExperience('command');
      this.switchCommandTab('analytics');
    } else if (actionCode === 'workorder') {
      this.openWorkOrderModal('Cluster #23');
    } else if (actionCode === 'citizen') {
      this.switchExperience('citizen');
    } else if (actionCode === 'field') {
      this.switchExperience('field');
    }
  }

  handlePaletteInput(e) {
    const q = (e.target.value || "").toLowerCase().trim();
    const list = document.getElementById("palette-results-list");

    // Dynamic intent matching for Samarth AI
    if (q.includes("work") || q.includes("who is") || q.includes("what is samarth") || q.includes("samarth")) {
      this.renderSamarthDefaultWorks();
    } else if (q.includes("sla") || q.includes("risk") || q.includes("breach") || q.includes("deadline")) {
      this.askSamarthAI('sla');
    } else if (q.includes("plastic") || q.includes("bitumen") || q.includes("irc") || q.includes("pothole")) {
      this.askSamarthAI('plastic');
    } else if (q.includes("ambulance") || q.includes("mediroute") || q.includes("corridor") || q.includes("green wave")) {
      this.askSamarthAI('mediroute');
    } else if (q.includes("statutory") || q.includes("form") || q.includes("gazette") || q.includes("record")) {
      this.askSamarthAI('statutory');
    } else if (q.includes("cluster") || q.includes("23") || q.includes("indiranagar")) {
      this.askSamarthAI('cluster23');
    }

    if (!list) return;

    const commands = [
      { text: "Show unresolved road incidents near schools", action: () => { this.switchExperience('command'); this.applyNlPreset('near schools'); } },
      { text: "Inspect Incident Cluster #23 (MG Road Potholes)", action: () => { this.switchExperience('command'); this.openIncidentDrawer('Cluster #23'); } },
      { text: "Switch to Citizen Reporting App (Mobile Flow)", action: () => this.switchExperience('citizen') },
      { text: "Switch to Field Operations System (Task List)", action: () => this.switchExperience('field') },
      { text: "Launch MediRoute 1km Ambulance Corridor", action: () => { this.switchExperience('command'); this.switchCommandTab('mediroute'); } },
      { text: "View Waste Plastic Bitumen Road Infrastructure Specifications", action: () => { this.switchExperience('command'); this.switchCommandTab('analytics'); } },
      { text: "Explore Samarth AI's 7 Municipal Works & Architecture", action: () => { this.askSamarthAI('works'); } }
    ];

    const filtered = commands.filter(c => c.text.toLowerCase().includes(q));
    list.innerHTML = filtered.map(c => `
      <div class="palette-item" onclick="civicApp.executePaletteCommand('${encodeURIComponent(c.text)}')">
        <span>⚡ ${c.text}</span>
        <span class="text-xs text-muted">↵ Run</span>
      </div>
    `).join("");
  }

  executePaletteCommand(encodedText) {
    const text = decodeURIComponent(encodedText);
    this.closeCommandPalette();
    if (text.includes("schools")) {
      this.switchExperience('command');
      this.applyNlPreset('near schools');
    } else if (text.includes("Cluster #23")) {
      this.switchExperience('command');
      this.openIncidentDrawer('Cluster #23');
    } else if (text.includes("Citizen")) {
      this.switchExperience('citizen');
    } else if (text.includes("Field")) {
      this.switchExperience('field');
    } else if (text.includes("MediRoute")) {
      this.switchExperience('command');
      this.switchCommandTab('mediroute');
    } else if (text.includes("Works")) {
      this.openSamarthConsole();
      this.askSamarthAI('works');
    } else {
      this.switchExperience('command');
      this.switchCommandTab('analytics');
    }
  }

  // =========================================================================
  // 60-SECOND GUIDED DEMO ENGINE (HACKATHON RUNNER)
  // =========================================================================
  launchGuidedDemo() {
    this.currentDemoStepIndex = 0;
    const overlay = document.getElementById("guided-demo-overlay");
    if (overlay) overlay.style.display = "block";
    this.runDemoStep(0);
  }

  stopGuidedDemo() {
    const overlay = document.getElementById("guided-demo-overlay");
    if (overlay) overlay.style.display = "none";
  }

  nextDemoStep() {
    if (this.currentDemoStepIndex < this.demoSteps.length - 1) {
      this.currentDemoStepIndex++;
      this.runDemoStep(this.currentDemoStepIndex);
    } else {
      this.stopGuidedDemo();
    }
  }

  prevDemoStep() {
    if (this.currentDemoStepIndex > 0) {
      this.currentDemoStepIndex--;
      this.runDemoStep(this.currentDemoStepIndex);
    }
  }

  runDemoStep(index) {
    const step = this.demoSteps[index];
    if (!step) return;

    const numEl = document.getElementById("demo-step-num");
    const titleEl = document.getElementById("demo-step-title");
    const narrEl = document.getElementById("demo-step-narrative");
    const takeEl = document.getElementById("demo-key-takeaway");
    const dotsEl = document.getElementById("demo-progress-dots");
    const btnNext = document.getElementById("btn-demo-next");

    if (numEl) numEl.textContent = step.num;
    if (titleEl) titleEl.textContent = step.title;
    if (narrEl) narrEl.textContent = step.narrative;
    if (takeEl) takeEl.innerHTML = `<strong>Key Innovation:</strong> ${step.takeaway}`;

    if (dotsEl) {
      dotsEl.innerHTML = this.demoSteps.map((_, i) => `
        <span class="dot-step ${i === index ? 'active' : ''}"></span>
      `).join("");
    }

    if (btnNext) {
      btnNext.textContent = index === this.demoSteps.length - 1 ? "Finish Demo ✓" : "Next Step →";
    }

    // Execute step UI transition
    if (typeof step.action === 'function') {
      step.action();
    }
  }

  // =========================================================================
  // ASTRA 6 USABLE EXTENSIONS: AUDIO SYNTHESIZER (WEB AUDIO API)
  // =========================================================================
  initAudio() {
    if (!this.audioCtx) {
      const AudioContextClass = window.AudioContext || window.webkitAudioContext;
      if (AudioContextClass) {
        this.audioCtx = new AudioContextClass();
      }
    }
    if (this.audioCtx && this.audioCtx.state === 'suspended') {
      this.audioCtx.resume();
    }
  }

  playBeep(type = 'click') {
    if (!this.soundEnabled) return;
    try {
      this.initAudio();
      if (!this.audioCtx) return;
      const ctx = this.audioCtx;
      const now = ctx.currentTime;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain);
      gain.connect(ctx.destination);

      if (type === 'click') {
        osc.type = 'sine';
        osc.frequency.setValueAtTime(700, now);
        osc.frequency.exponentialRampToValueAtTime(320, now + 0.04);
        gain.gain.setValueAtTime(0.06, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.04);
        osc.start(now);
        osc.stop(now + 0.04);
      } else if (type === 'mic') {
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(440, now);
        osc.frequency.exponentialRampToValueAtTime(880, now + 0.12);
        gain.gain.setValueAtTime(0.1, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.12);
        osc.start(now);
        osc.stop(now + 0.12);
      } else if (type === 'success') {
        // Play bright harmonic chime triad (C5 - E5 - G5)
        [523.25, 659.25, 783.99].forEach((freq, idx) => {
          const o = ctx.createOscillator();
          const g = ctx.createGain();
          o.connect(g);
          g.connect(ctx.destination);
          o.type = 'sine';
          const t = now + idx * 0.07;
          o.frequency.setValueAtTime(freq, t);
          g.gain.setValueAtTime(0.08, t);
          g.gain.exponentialRampToValueAtTime(0.001, t + 0.22);
          o.start(t);
          o.stop(t + 0.22);
        });
      }
    } catch (e) {
      // Audio autoplay policy fallback
    }
  }

  toggleSound() {
    this.soundEnabled = !this.soundEnabled;
    const icon = document.getElementById("dock-audio-icon");
    const label = document.getElementById("dock-audio-label");
    const btn = document.getElementById("dock-btn-audio");

    if (icon) icon.textContent = this.soundEnabled ? "🔊" : "🔇";
    if (label) label.textContent = this.soundEnabled ? "FX: ON" : "FX: OFF";
    if (btn) btn.classList.toggle("active", this.soundEnabled);

    if (this.soundEnabled) {
      this.playBeep('success');
    }
  }

  // =========================================================================
  // ASTRA 6 USABLE EXTENSIONS: 2.36mm WASTE PLASTIC BITUMEN CALCULATOR
  // =========================================================================
  updatePlasticCalculator(source = 'drawer') {
    const drawerArea = document.getElementById("calc-slider-area");
    const drawerDepth = document.getElementById("calc-slider-depth");
    const tabArea = document.getElementById("calc-area-slider");
    const tabDepth = document.getElementById("calc-depth-slider");

    let area = 2.8;
    let depth = 14;

    if (source === 'tab' && tabArea && tabDepth) {
      area = parseFloat(tabArea.value) || 2.8;
      depth = parseFloat(tabDepth.value) || 14;
      if (drawerArea) drawerArea.value = area;
      if (drawerDepth) drawerDepth.value = depth;
    } else if (drawerArea && drawerDepth) {
      area = parseFloat(drawerArea.value) || 2.8;
      depth = parseFloat(drawerDepth.value) || 14;
      if (tabArea) tabArea.value = area;
      if (tabDepth) tabDepth.value = depth;
    } else if (tabArea && tabDepth) {
      area = parseFloat(tabArea.value) || 2.8;
      depth = parseFloat(tabDepth.value) || 14;
    }

    const areaVal = document.getElementById("calc-area-val");
    const depthVal = document.getElementById("calc-depth-val");
    if (areaVal) areaVal.textContent = `${area.toFixed(1)} m²`;
    if (depthVal) depthVal.textContent = `${depth.toFixed(0)} cm`;

    // Volume (m3) = Area (m2) * (Depth (cm) / 100)
    // Asphalt mass density ~ 2,400 kg/m3
    // Binder content = 5.5% of total mass
    // Shredded plastic (~2.36mm) replaces 8% of bitumen binder
    // Refined VG-30 tar forms 92% of binder
    const volumeM3 = area * (depth / 100);
    const totalAsphaltKg = volumeM3 * 2400;
    const totalBinderKg = totalAsphaltKg * 0.055;

    const plasticKg = totalBinderKg * 0.08;
    const tarKg = totalBinderKg * 0.92;
    const bottlesDiverted = Math.round(plasticKg * 50); // ~50 discarded PET/HDPE bottles per kg
    const co2Kg = plasticKg * 1.5; // 1.5 kg CO2e offset per kg plastic reused vs virgin bitumen

    this.calcPlasticKg = plasticKg;
    this.calcTarKg = tarKg;
    this.calcBottles = bottlesDiverted;
    this.calcCo2 = co2Kg;

    // Drawer Elements
    const elPlastic = document.getElementById("calc-plastic-kg");
    const elTar = document.getElementById("calc-tar-kg");
    const elBottles = document.getElementById("calc-bottles-val");
    const elCo2 = document.getElementById("calc-co2-val");

    if (elPlastic) elPlastic.textContent = `${plasticKg.toFixed(1)} kg`;
    if (elTar) elTar.textContent = `${tarKg.toFixed(1)} kg`;
    if (elBottles) elBottles.textContent = bottlesDiverted.toLocaleString();
    if (elCo2) elCo2.textContent = `${co2Kg.toFixed(1)} kg`;

    // Tab Elements (Form VII Tool in Analytics)
    const tabPlastic = document.getElementById("calc-res-plastic");
    const tabTar = document.getElementById("calc-res-tar");
    const tabBottles = document.getElementById("calc-res-bottles");
    const tabCo2 = document.getElementById("calc-res-co2");

    if (tabPlastic) tabPlastic.textContent = `${plasticKg.toFixed(1)} kg`;
    if (tabTar) tabTar.textContent = `${tarKg.toFixed(1)} kg`;
    if (tabBottles) tabBottles.textContent = bottlesDiverted.toLocaleString();
    if (tabCo2) tabCo2.textContent = `${co2Kg.toFixed(1)} kg`;
  }

  // =========================================================================
  // OFFICIAL STATUTORY PERFORMANCE & FORMAL INCIDENT REGISTERS ENGINE
  // =========================================================================
  setAnalyticsSort(sortKey) {
    this.analyticsSortKey = sortKey;
    const select = document.getElementById("analytics-sort-select");
    if (select && select.value !== sortKey) {
      select.value = sortKey;
    }
    this.renderAnalyticsOfficialRegister();
    if (this.soundEnabled) this.playBeep('nav');
  }

  setAnalyticsFilter(category) {
    this.analyticsFilterCategory = category;
    document.querySelectorAll(".official-filter-chip").forEach(chip => {
      chip.classList.toggle("active", chip.dataset.category === category);
    });
    this.renderAnalyticsOfficialRegister();
    if (this.soundEnabled) this.playBeep('nav');
  }

  setAnalyticsViewMode(mode) {
    this.analyticsViewMode = mode;
    const btnGazette = document.getElementById("btn-view-gazette");
    const btnDossier = document.getElementById("btn-view-dossier");
    const viewGazette = document.getElementById("analytics-gazette-table-view");
    const viewDossier = document.getElementById("analytics-dossiers-view");

    if (btnGazette) btnGazette.classList.toggle("active", mode === 'gazette');
    if (btnDossier) btnDossier.classList.toggle("active", mode === 'dossier');

    if (viewGazette) viewGazette.style.display = mode === 'gazette' ? 'block' : 'none';
    if (viewDossier) viewDossier.style.display = mode === 'dossier' ? 'grid' : 'none';

    this.renderAnalyticsOfficialRegister();
    if (this.soundEnabled) this.playBeep('nav');
  }

  getSortedAndFilteredRecords() {
    let records = [...this.OFFICIAL_ANALYTICS_RECORDS];

    // Filter by Category
    if (this.analyticsFilterCategory && this.analyticsFilterCategory !== 'all') {
      records = records.filter(r => r.category === this.analyticsFilterCategory);
    }

    // Official Statutory Form Order Map (Form II → IV → VII → IX → XII → XV)
    const formOrder = {
      'FORM-II': 1,
      'FORM-IV': 2,
      'FORM-VII': 3,
      'FORM-IX': 4,
      'FORM-XII': 5,
      'FORM-XV': 6
    };

    switch (this.analyticsSortKey) {
      case 'form_asc':
        records.sort((a, b) => (formOrder[a.id] || 99) - (formOrder[b.id] || 99));
        break;
      case 'form_desc':
        records.sort((a, b) => (formOrder[b.id] || 99) - (formOrder[a.id] || 99));
        break;
      case 'priority':
        records.sort((a, b) => a.severityRank - b.severityRank || b.reportsCount - a.reportsCount);
        break;
      case 'sla_asc':
        records.sort((a, b) => a.slaCompliance - b.slaCompliance);
        break;
      case 'sla_desc':
        records.sort((a, b) => b.slaCompliance - a.slaCompliance);
        break;
      case 'volume_desc':
        records.sort((a, b) => b.reportsCount - a.reportsCount);
        break;
      case 'ward_asc':
        records.sort((a, b) => a.wardCode.localeCompare(b.wardCode));
        break;
      default:
        records.sort((a, b) => (formOrder[a.id] || 99) - (formOrder[b.id] || 99));
    }

    return records;
  }

  renderAnalyticsOfficialRegister() {
    const records = this.getSortedAndFilteredRecords();

    // 1. Render Gazette Official Register (Table View)
    const gazetteContainer = document.getElementById("analytics-gazette-table-view");
    if (gazetteContainer) {
      if (records.length === 0) {
        gazetteContainer.innerHTML = `
          <div class="official-empty-state">
            <span class="empty-icon">📂</span>
            <p>No statutory registers match the selected directorate classification.</p>
            <button class="btn-gz-action" onclick="civicApp.setAnalyticsFilter('all')">Reset All Classifications</button>
          </div>
        `;
      } else {
        const rowsHtml = records.map(r => {
          const sevClass = r.severity === 'CRITICAL' ? 'crimson' : (r.severity === 'HIGH' ? 'amber' : 'teal');
          const slaColor = r.slaCompliance >= 93 ? 'text-green' : (r.slaCompliance >= 88 ? 'text-teal' : 'text-amber');
          return `
            <tr class="gazette-row" data-form-id="${r.id}">
              <td class="gz-col-form">
                <div class="gz-form-badge">${r.formNo}</div>
                <div class="gz-code-tag">${r.regCode}</div>
                <div class="gz-docket-sm">Gazette: ${r.gazetteRef}</div>
              </td>
              <td class="gz-col-title">
                <div class="gz-title-main">${r.title}</div>
                <div class="gz-act-badge">
                  <span class="act-icon">⚖️</span> ${r.statutoryAct}
                </div>
                <div class="gz-spec-line">Specification: <code class="text-teal">${r.specCode}</code></div>
              </td>
              <td class="gz-col-ward">
                <div class="gz-ward-title">${r.ward}</div>
                <div class="gz-officer-line"><strong>Officer:</strong> ${r.officer}</div>
                <div class="gz-dept-tag">${r.department}</div>
              </td>
              <td class="gz-col-metrics">
                <div class="gz-vol-badge">${r.reportsCount} Citations</div>
                <span class="card-badge ${sevClass} compact-badge">${r.severity}</span>
                <div class="gz-hotspots-tag">${r.hotspots} Active Spots</div>
              </td>
              <td class="gz-col-sla">
                <div class="gz-sla-val ${slaColor}">${r.slaCompliance}%</div>
                <div class="gz-sla-progress">
                  <div class="gz-sla-bar" style="width: ${Math.min(r.slaCompliance, 100)}%;"></div>
                </div>
                <div class="gz-status-text">${r.status}</div>
              </td>
              <td class="gz-col-directive">
                <div class="gz-dir-box">
                  <span class="dir-tag">MANDATE</span>
                  <p class="gz-dir-text">${r.mandatedDirective}</p>
                </div>
              </td>
              <td class="gz-col-action">
                ${r.hasCalculator ? 
                  `<button class="btn-gz-action highlight" onclick="document.getElementById('form-vii-calculator-anchor').scrollIntoView({behavior:'smooth'})" title="Open 2.36mm Plastic Bitumen Formulation Tool">
                    ♻️ Form VII Batcher
                  </button>` : 
                  `<button class="btn-gz-action" onclick="civicApp.openWorkOrderModal('Cluster #23')" title="Generate Official Municipal Work Order">
                    📄 Work Order
                  </button>`
                }
              </td>
            </tr>
          `;
        }).join("");

        gazetteContainer.innerHTML = `
          <div class="gazette-table-card">
            <div class="gazette-card-header">
              <div class="gch-left">
                <span class="gch-crest">🏛️</span>
                <div>
                  <h4 class="gch-title">Gazetted Statutory Record Register (Form II – Form XV)</h4>
                  <p class="gch-sub">Sorted by: <strong>${this.getSortLabel(this.analyticsSortKey)}</strong> • Showing ${records.length} Official Municipal Records</p>
                </div>
              </div>
              <div class="gch-right">
                <span class="official-verified-stamp">✓ GAZETTED UNDER KMC ACT</span>
              </div>
            </div>
            <div class="gazette-table-responsive">
              <table class="gazette-official-table">
                <thead>
                  <tr>
                    <th onclick="civicApp.setAnalyticsSort(civicApp.analyticsSortKey === 'form_asc' ? 'form_desc' : 'form_asc')" class="sortable-th" title="Click to sort by Form ID">
                      Statutory Form ↕
                    </th>
                    <th>Official Register Title & Mandate</th>
                    <th onclick="civicApp.setAnalyticsSort('ward_asc')" class="sortable-th" title="Click to sort by Ward">
                      Ward Jurisdiction ↕
                    </th>
                    <th onclick="civicApp.setAnalyticsSort('volume_desc')" class="sortable-th" title="Click to sort by Incident Volume">
                      Citations & Severity ↕
                    </th>
                    <th onclick="civicApp.setAnalyticsSort('sla_desc')" class="sortable-th" title="Click to sort by SLA %">
                      SLA Performance ↕
                    </th>
                    <th>Mandated Statutory Directive</th>
                    <th>Official Action</th>
                  </tr>
                </thead>
                <tbody>
                  ${rowsHtml}
                </tbody>
              </table>
            </div>
          </div>
        `;
      }
    }

    // 2. Render Formal Dossiers (Card View)
    const dossierContainer = document.getElementById("analytics-dossiers-view");
    if (dossierContainer) {
      if (records.length === 0) {
        dossierContainer.innerHTML = `
          <div class="official-empty-state">
            <span class="empty-icon">📂</span>
            <p>No statutory registers match the selected directorate classification.</p>
            <button class="btn-gz-action" onclick="civicApp.setAnalyticsFilter('all')">Reset All Classifications</button>
          </div>
        `;
      } else {
        const dossiersHtml = records.map(r => {
          const sevClass = r.severity === 'CRITICAL' ? 'crimson' : (r.severity === 'HIGH' ? 'amber' : 'teal');
          const bomItems = Object.entries(r.bomDetails || {}).map(([k, v]) => `
            <div class="dossier-spec-item">
              <span class="spec-k">${k}:</span>
              <strong class="spec-v">${v}</strong>
            </div>
          `).join("");

          return `
            <div class="formal-dossier-card" data-form-id="${r.id}">
              <div class="dossier-card-topbar">
                <div class="dct-left">
                  <span class="formal-form-pill">${r.formNo}</span>
                  <span class="card-badge ${sevClass}">${r.severity}</span>
                </div>
                <div class="dct-right">
                  <span class="dossier-docket">${r.gazetteRef}</span>
                </div>
              </div>

              <div class="dossier-card-content">
                <div class="dossier-media-row">
                  <div class="dossier-photo-box">
                    <img src="${r.photo}" alt="${r.shortTitle}" class="dossier-photo-img" loading="lazy" />
                    <span class="dossier-photo-tag">Official Photographic Proof</span>
                  </div>
                  <div class="dossier-meta-box">
                    <h4 class="dossier-title">${r.title}</h4>
                    <div class="dossier-meta-grid">
                      <div class="dmg-item"><span class="dmg-k">Jurisdiction:</span> <strong class="dmg-v">${r.ward}</strong></div>
                      <div class="dmg-item"><span class="dmg-k">Presiding Officer:</span> <span class="dmg-v">${r.officer}</span></div>
                      <div class="dmg-item"><span class="dmg-k">Statutory Act:</span> <span class="dmg-v text-teal">${r.statutoryAct}</span></div>
                      <div class="dmg-item"><span class="dmg-k">Directive Code:</span> <code class="dmg-v text-sky">${r.orderNo}</code></div>
                    </div>
                  </div>
                </div>

                <div class="dossier-directive-callout">
                  <div class="ddc-label">MANDATED STATUTORY DIRECTIVE</div>
                  <p class="ddc-text">${r.mandatedDirective}</p>
                </div>

                <div class="dossier-specs-strip">
                  <div class="dss-heading">STATUTORY BILL OF QUANTITIES / ENGINEERING METRICS:</div>
                  <div class="dss-grid">
                    ${bomItems}
                  </div>
                </div>

                <div class="dossier-card-footer">
                  <div class="dcf-stats">
                    <div class="dcf-stat-unit">
                      <span class="dcf-lbl">Citations:</span>
                      <strong class="dcf-num">${r.reportsCount}</strong>
                    </div>
                    <div class="dcf-stat-unit">
                      <span class="dcf-lbl">SLA Adherence:</span>
                      <strong class="dcf-num text-green">${r.slaCompliance}%</strong>
                    </div>
                    <div class="dcf-stat-unit">
                      <span class="dcf-lbl">Audit Status:</span>
                      <span class="dcf-status-tag">${r.status}</span>
                    </div>
                  </div>

                  <div class="dcf-actions">
                    ${r.hasCalculator ? 
                      `<button class="btn-gz-action highlight" onclick="document.getElementById('form-vii-calculator-anchor').scrollIntoView({behavior:'smooth'})">
                        ♻️ Form VII Batcher
                      </button>` : 
                      `<button class="btn-gz-action" onclick="civicApp.openWorkOrderModal('Cluster #23')">
                        📄 Generate Work Order
                      </button>`
                    }
                  </div>
                </div>
              </div>
            </div>
          `;
        }).join("");

        dossierContainer.innerHTML = dossiersHtml;
      }
    }
  }

  getSortLabel(sortKey) {
    const map = {
      'form_asc': 'Statutory Form Order (Form II → XV)',
      'form_desc': 'Reverse Statutory Order (Form XV → II)',
      'priority': 'Statutory Priority Grade (Critical Grade-I First)',
      'sla_asc': 'SLA Compliance % (Ascending / At-Risk First)',
      'sla_desc': 'SLA Compliance % (Descending / Highest First)',
      'volume_desc': 'Incident Volume (Highest Volume First)',
      'ward_asc': 'Ward Jurisdiction (Ward 04 → 22)'
    };
    return map[sortKey] || 'Official Statutory Register';
  }

  // =========================================================================
  // ASTRA 6 USABLE EXTENSIONS: OFFICIAL MUNICIPAL WORK ORDER MODAL
  // =========================================================================
  openWorkOrderModal(clusterId = null) {
    const cluster = this.clusters.find(c => c.id === clusterId) || this.clusters[0];
    const modal = document.getElementById("modal-work-order");
    if (!modal) return;

    const corpNames = {
      IND: "MINISTRY OF HOUSING & URBAN AFFAIRS / ALL-INDIA CIVIC GRID",
      BLR: "BRUHAT BENGALURU MAHANAGARA PALIKE (BBMP)",
      DEL: "MUNICIPAL CORPORATION OF DELHI (MCD)",
      MUM: "BRIHANMUMBAI MUNICIPAL CORPORATION (BMC)",
      HYD: "GREATER HYDERABAD MUNICIPAL CORPORATION (GHMC)",
      CHN: "GREATER CHENNAI CORPORATION (GCC)",
      KOL: "KOLKATA MUNICIPAL CORPORATION (KMC)",
      AMD: "AHMEDABAD MUNICIPAL CORPORATION (AMC)",
      PUN: "PUNE MUNICIPAL CORPORATION (PMC)",
      JAI: "JAIPUR MUNICIPAL CORPORATION (JMC)"
    };

    const corpTitle = document.getElementById("wo-corp-title");
    const ticketRef = document.getElementById("wo-ticket-ref");
    const dateVal = document.getElementById("wo-date-val");
    const locVal = document.getElementById("wo-location-val");
    const crewVal = document.getElementById("wo-crew-val");
    const plasticQty = document.getElementById("wo-mat-plastic-qty");
    const tarQty = document.getElementById("wo-mat-tar-qty");

    if (corpTitle) corpTitle.textContent = corpNames[this.activeMetro] || corpNames.BLR;
    if (ticketRef) ticketRef.textContent = `${this.activeMetro}/ROADS/2026/WO-${cluster.id.replace('Cluster #', '')}`;

    const now = new Date();
    const dateStr = now.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }).toUpperCase() + ' ' + now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' }) + ' IST';
    if (dateVal) dateVal.textContent = dateStr;
    if (locVal) locVal.textContent = cluster.location;
    if (crewVal) crewVal.textContent = cluster.assignedTeam;

    const woImg = document.getElementById("wo-evidence-img");
    if (woImg) woImg.src = cluster.image || LOCAL_ASSETS.pothole;

    if (plasticQty) plasticQty.textContent = (this.calcPlasticKg || 24.0).toFixed(1);
    if (tarQty) tarQty.textContent = (this.calcTarKg || 65.0).toFixed(1);

    modal.style.display = "flex";
    this.playBeep('success');
  }

  closeWorkOrderModal() {
    const modal = document.getElementById("modal-work-order");
    if (modal) modal.style.display = "none";
    this.playBeep('click');
  }

  handleWorkOrderBackdropClick(e) {
    if (e.target && e.target.id === "modal-work-order") {
      this.closeWorkOrderModal();
    }
  }

  // =========================================================================
  // ASTRA 6 USABLE EXTENSIONS: LIVE REAL-TIME SLA TICKER
  // =========================================================================
  startLiveSlaTicker() {
    let secondsRemaining = 42 * 60 + 18; // 42m 18s initial
    setInterval(() => {
      if (secondsRemaining > 0) {
        secondsRemaining--;
      }
      const m = Math.floor(secondsRemaining / 60);
      const s = secondsRemaining % 60;
      const sStr = s < 10 ? `0${s}` : `${s}`;
      const timeStr = `${m}m ${sStr}s`;

      const drawerSla = document.getElementById("drawer-sla-val");
      const fieldSla = document.getElementById("field-sla-timer");
      if (drawerSla) drawerSla.textContent = timeStr;
      if (fieldSla) fieldSla.textContent = `⏱ ${timeStr} remaining`;
    }, 1000);
  }
}

// Global Keyboard Shortcut Handlers (Hotkeys: 1, 2, 3, D, M, Ctrl+K, Escape)
document.addEventListener("keydown", (e) => {
  const activeTag = document.activeElement ? document.activeElement.tagName.toLowerCase() : '';
  if (activeTag === 'input' || activeTag === 'textarea' || activeTag === 'select') {
    if (e.key === 'Escape') {
      document.activeElement.blur();
      civicApp.closeCommandPalette();
      civicApp.closeIncidentDrawer();
      civicApp.closeCrisisModal();
      civicApp.closeWorkOrderModal();
    }
    return;
  }

  if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
    e.preventDefault();
    civicApp.openCommandPalette();
  } else if (e.key === '1') {
    civicApp.switchExperience('command');
  } else if (e.key === '2') {
    civicApp.switchExperience('citizen');
  } else if (e.key === '3') {
    civicApp.switchExperience('field');
  } else if (e.key.toLowerCase() === 'd') {
    civicApp.launchGuidedDemo();
  } else if (e.key.toLowerCase() === 's') {
    civicApp.openSamarthConsole();
  } else if (e.key.toLowerCase() === 'm') {
    civicApp.toggleSound();
  } else if (e.key === 'Escape') {
    civicApp.closeCommandPalette();
    civicApp.closeIncidentDrawer();
    civicApp.closeCrisisModal();
    civicApp.closeWorkOrderModal();
    civicApp.stopGuidedDemo();
  }
});

// Instantiate and attach globally
const civicApp = new CivicOperatingSystem();
window.civicApp = civicApp;

window.initGoogleCivicMap = function() {
  if (window.civicApp) {
    window.civicApp.onGoogleMapsLoaded();
  }
};

document.addEventListener("DOMContentLoaded", () => {
  civicApp.init();
});
