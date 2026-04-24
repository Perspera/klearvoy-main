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

function Is-LocalAssetRef([string]$value) {
  if ([string]::IsNullOrWhiteSpace($value)) { return $false }
  if ($value.StartsWith("#")) { return $false }
  if ($value -match '^(?i)(https?:)?//') { return $false }
  if ($value -match '^(?i)(mailto:|tel:|javascript:|data:)') { return $false }
  return $true
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

# Scan local asset refs from index.htm and ensure they exist.
$refPattern = '(?i)\b(?:src|href)\s*=\s*(["''])(?<url>[^"'']+)\1'
$refMatches = [regex]::Matches($index, $refPattern)
$missing = @()
$checked = New-Object 'System.Collections.Generic.HashSet[string]'

foreach ($m in $refMatches) {
  $url = $m.Groups['url'].Value.Trim()
  if (-not (Is-LocalAssetRef $url)) { continue }

  # Normalize /foo => foo so checks are always relative to repo root.
  $normalized = $url -replace '^\./', '' -replace '^/', ''
  if (-not $checked.Add($normalized)) { continue }

  if (-not (Test-Path -LiteralPath $normalized)) {
    $missing += $normalized
  }
}

if ($missing.Count -gt 0) {
  Write-Host ""
  Write-Host "Missing local assets referenced by index.htm:" -ForegroundColor Yellow
  foreach ($m in $missing) {
    Write-Host " - $m" -ForegroundColor Yellow
  }
  Fail "Found $($missing.Count) missing local asset(s)."
}
Pass "All local asset references in index.htm exist"

Write-Host ""
Write-Host "All checks passed." -ForegroundColor Green

