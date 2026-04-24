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

function Warn([string]$msg) {
  Write-Host "WARN: $msg" -ForegroundColor Yellow
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

# 扫描 index.htm 中的本地资源引用，并确认文件存在。
$refPattern = '(?i)\b(?:src|href)\s*=\s*(["''])(?<url>[^"'']+)\1'
$refMatches = [regex]::Matches($index, $refPattern)
$missing = @()
$domainLinkWarnings = @()
$checked = New-Object 'System.Collections.Generic.HashSet[string]'
$checkedDomainLinks = New-Object 'System.Collections.Generic.HashSet[string]'

foreach ($m in $refMatches) {
  $url = $m.Groups["url"].Value.Trim()
  if ([string]::IsNullOrWhiteSpace($url)) { continue }

  # 外链仅检查 klearvoy 自有域名；不可用时仅告警，不直接失败。
  if ($url -match '^https://www\.klearvoy\.com/') {
    if (-not $checkedDomainLinks.Add($url)) { continue }
    try {
      $response = Invoke-WebRequest -Uri $url -Method Head -TimeoutSec 10 -ErrorAction Stop
      if ($response.StatusCode -ge 400) {
        $domainLinkWarnings += "$url (HTTP $($response.StatusCode))"
      }
    } catch {
      try {
        $response = Invoke-WebRequest -Uri $url -Method Get -TimeoutSec 10 -ErrorAction Stop
        if ($response.StatusCode -ge 400) {
          $domainLinkWarnings += "$url (HTTP $($response.StatusCode))"
        }
      } catch {
        $domainLinkWarnings += "$url ($($_.Exception.Message))"
      }
    }
    continue
  }

  # 忽略第三方链接及非文件协议。
  if (-not (Is-LocalAssetRef $url)) { continue }

  # 统一路径格式：将 /foo 转为 foo，始终以仓库根目录为基准检查。
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

if ($domainLinkWarnings.Count -gt 0) {
  Write-Host ""
  Warn "Klearvoy domain links with availability warnings (non-blocking):"
  foreach ($w in $domainLinkWarnings) {
    Warn " - $w"
  }
} elseif ($checkedDomainLinks.Count -gt 0) {
  Pass "Klearvoy domain links are reachable"
}

Write-Host ""
Write-Host "All checks passed." -ForegroundColor Green
