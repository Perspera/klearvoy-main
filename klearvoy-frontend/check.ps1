$ErrorActionPreference = "Stop"

$root = Split-Path -Parent $MyInvocation.MyCommand.Path

function Fail([string]$msg) {
  Write-Host ""
  Write-Host "FAILED: $msg" -ForegroundColor Red
  exit 1
}

function Pass([string]$msg) {
  Write-Host "OK: $msg" -ForegroundColor Green
}

Set-Location $root

$required = @(
  "index.htm",
  "404.html",
  "robots.txt",
  "sitemap.xml",
  "favicon.svg"
)

foreach ($f in $required) {
  if (-not (Test-Path -LiteralPath $f)) { Fail "Missing $f" }
  Pass "Found $f"
}

$robots = Get-Content -LiteralPath "robots.txt" -Raw
if ($robots -notmatch "(?im)^\s*Sitemap:\s*https://www\.klearvoy\.com/sitemap\.xml\s*$") {
  Fail "robots.txt must contain: Sitemap: https://www.klearvoy.com/sitemap.xml"
}
Pass "robots.txt sitemap line looks correct"

$sitemap = Get-Content -LiteralPath "sitemap.xml" -Raw
if ($sitemap -notmatch "https://www\.klearvoy\.com/") {
  Fail "sitemap.xml must include https://www.klearvoy.com/"
}
Pass "sitemap.xml includes site url"

$notFound = Get-Content -LiteralPath "404.html" -Raw
if ($notFound -notmatch '(?i)<meta\s+name="robots"\s+content="noindex"\s*>') {
  Fail "404.html should include <meta name=\"robots\" content=\"noindex\">"
}
Pass "404.html has noindex meta"

$index = Get-Content -LiteralPath "index.htm" -Raw
if ($index -notmatch '(?i)<link\s+rel="icon"\s+href="/favicon\.svg"\s+type="image/svg\+xml"\s*>') {
  Fail "index.htm should include favicon link: /favicon.svg"
}
Pass "index.htm references favicon.svg"

Write-Host ""
Write-Host "All checks passed." -ForegroundColor Green

