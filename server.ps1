$port = 8080
$prefix = "http://localhost:$port/"
$listener = New-Object System.Net.HttpListener
$listener.Prefixes.Add($prefix)

try {
    $listener.Start()
    Write-Output "HTTP server listening on $prefix"
    $basePath = "c:\Users\Asus\OneDrive\Documents\hackathon"

    while ($listener.IsListening) {
        $context = $listener.GetContext()
        $request = $context.Request
        $response = $context.Response

        try {
            $rawPath = $request.Url.LocalPath.TrimStart('/')
            if ([string]::IsNullOrWhiteSpace($rawPath)) {
                $rawPath = "index.html"
            }
            # Decode URL
            $urlPath = [System.Uri]::UnescapeDataString($rawPath)
            $filePath = Join-Path $basePath $urlPath

            if (Test-Path $filePath -PathType Leaf) {
                $ext = [System.IO.Path]::GetExtension($filePath).ToLower()
                $contentType = switch ($ext) {
                    ".html" { "text/html; charset=utf-8" }
                    ".css"  { "text/css; charset=utf-8" }
                    ".js"   { "application/javascript; charset=utf-8" }
                    ".json" { "application/json; charset=utf-8" }
                    ".jpg"  { "image/jpeg" }
                    ".jpeg" { "image/jpeg" }
                    ".png"  { "image/png" }
                    ".svg"  { "image/svg+xml" }
                    ".pdf"  { "application/pdf" }
                    default { "application/octet-stream" }
                }

                $bytes = [System.IO.File]::ReadAllBytes($filePath)
                $response.ContentType = $contentType
                $response.ContentLength64 = $bytes.LongLength
                $response.AddHeader("Cache-Control", "no-cache, no-store, must-revalidate, max-age=0")
                $response.AddHeader("Pragma", "no-cache")
                $response.AddHeader("Expires", "0")
                $response.OutputStream.Write($bytes, 0, $bytes.Length)
                $response.StatusCode = 200
            } else {
                $response.StatusCode = 404
                $buffer = [System.Text.Encoding]::UTF8.GetBytes("404 Not Found")
                $response.ContentLength64 = $buffer.LongLength
                $response.OutputStream.Write($buffer, 0, $buffer.Length)
            }
        } catch {
            Write-Host "Error handling request: $_"
        } finally {
            $response.OutputStream.Close()
            $response.Close()
        }
    }
} finally {
    $listener.Stop()
}
