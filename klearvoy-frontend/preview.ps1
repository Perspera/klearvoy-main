$ErrorActionPreference = "Stop"

$port = 5500
if ($args.Count -ge 1 -and $args[0] -match '^\d+$') {
  $port = [int]$args[0]
}

function Has-Command([string]$name) {
  return $null -ne (Get-Command $name -ErrorAction SilentlyContinue)
}

Write-Host "Serving klearvoy-frontend at http://localhost:$port/index.htm"
Write-Host "Press Ctrl+C to stop."

if (Has-Command "python") {
  python -m http.server $port
  exit 0
}

if (Has-Command "py") {
  py -m http.server $port
  exit 0
}

if (Has-Command "node") {
  if (Has-Command "npx") {
    npx --yes http-server . -p $port -c-1
    exit 0
  }
}

throw "No server runtime found. Install Python (recommended) or Node.js (for npx http-server)."

