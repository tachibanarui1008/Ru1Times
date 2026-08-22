param(
  [string]$ProjectRoot = "F:\RuiDaily\site"
)

$resolvedRoot = (Resolve-Path -LiteralPath $ProjectRoot -ErrorAction Stop).Path
$required = @("package.json", "app/report-types.ts", "app/data.ts")
foreach ($relativePath in $required) {
  if (-not (Test-Path -LiteralPath (Join-Path $resolvedRoot $relativePath))) {
    throw "Not a Ru1Times application root: missing $relativePath"
  }
}
$channels = @(
  @{ Name = "daily"; Directory = "app/reports"; Registry = "app/data.ts"; Exclude = "demo.ts" },
  @{ Name = "weekly"; Directory = "app/weekly-reports"; Registry = "app/weekly-data.ts"; Exclude = "" },
  @{ Name = "commentary"; Directory = "app/commentary-reports"; Registry = "app/commentary-data.ts"; Exclude = "" },
  @{ Name = "finance"; Directory = "app/finance-reports"; Registry = "app/finance-data.ts"; Exclude = "" }
)

Write-Output "root=$resolvedRoot"
Write-Output "hosting=$([bool](Test-Path -LiteralPath (Join-Path $resolvedRoot '.openai/hosting.json')))"
foreach ($channel in $channels) {
  $directory = Join-Path $resolvedRoot $channel.Directory
  $files = if (Test-Path -LiteralPath $directory) {
    @(Get-ChildItem -LiteralPath $directory -Filter "*.ts" -File |
      Where-Object { -not $channel.Exclude -or $_.Name -ne $channel.Exclude } |
      Sort-Object Name -Descending)
  } else { @() }
  $latest = if ($files.Count -gt 0) { $files[0].Name } else { "missing" }
  $credit = if ($files.Count -gt 0) { [bool](Select-String -LiteralPath $files[0].FullName -Pattern "ai_credit" -Quiet) } else { $false }
  Write-Output "$($channel.Name): latest=$latest ai_credit=$credit registry=$($channel.Registry)"
}

$git = Get-Command git -ErrorAction SilentlyContinue
if ($git) {
  Push-Location $resolvedRoot
  try {
    Write-Output "worktree:"
    git status --short
  } finally {
    Pop-Location
  }
}
