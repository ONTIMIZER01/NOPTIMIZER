# Opnonti Pro - PowerShell Web Installer
# Usage: irm <url>/install.ps1 | iex

Write-Host "========================================================" -ForegroundColor Cyan
Write-Host "  OPNONTI PRO - WEB INSTALLER" -ForegroundColor Yellow
Write-Host "========================================================" -ForegroundColor Cyan
Write-Host ""

# Check if running as administrator
$isAdmin = ([Security.Principal.WindowsPrincipal][Security.Principal.WindowsIdentity]::GetCurrent()).IsInRole([Security.Principal.WindowsBuiltInRole]::Administrator)

if (-not $isAdmin) {
    Write-Host "⚠️  Not running as Administrator" -ForegroundColor Yellow
    Write-Host "Some features may require admin rights" -ForegroundColor Gray
    Write-Host ""
}

# Create install directory
$installPath = "$env:LOCALAPPDATA\OpnontiPro"
Write-Host "📁 Installation path: $installPath" -ForegroundColor Cyan

if (-not (Test-Path $installPath)) {
    New-Item -ItemType Directory -Path $installPath -Force | Out-Null
    Write-Host "✅ Created installation directory" -ForegroundColor Green
} else {
    Write-Host "✅ Installation directory exists" -ForegroundColor Green
}

# Download the application files
Write-Host ""
Write-Host "📥 Downloading Opnonti Pro..." -ForegroundColor Cyan

$htmlUrl = "https://raw.githubusercontent.com/YOUR_USERNAME/opnonti-pro/main/dist/index.html"
$htmlPath = "$installPath\opnonti-pro.html"

try {
    # Download main HTML file
    Invoke-WebRequest -Uri $htmlUrl -OutFile $htmlPath -UseBasicParsing
    Write-Host "✅ Downloaded application files" -ForegroundColor Green
} catch {
    Write-Host "❌ Failed to download files" -ForegroundColor Red
    Write-Host "Error: $_" -ForegroundColor Red
    Write-Host ""
    Write-Host "Manual installation:" -ForegroundColor Yellow
    Write-Host "  Download from: https://github.com/YOUR_USERNAME/opnonti-pro" -ForegroundColor Gray
    exit 1
}

# Create launcher script
$launcherPath = "$installPath\launch.ps1"
$launcherContent = @"
# Opnonti Pro Launcher
`$htmlPath = "$htmlPath"
`$chrome = "C:\Program Files\Google\Chrome\Application\chrome.exe"
`$edge = "C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe"

if (Test-Path `$chrome) {
    Start-Process `$chrome --app="file:///`$htmlPath" --window-size=1400,900
} elseif (Test-Path `$edge) {
    Start-Process `$edge --app="file:///`$htmlPath" --window-size=1400,900
} else {
    Start-Process `$htmlPath
}
"@

Set-Content -Path $launcherPath -Value $launcherContent
Write-Host "✅ Created launcher script" -ForegroundColor Green

# Create desktop shortcut
Write-Host ""
Write-Host "🔗 Creating shortcuts..." -ForegroundColor Cyan

$WshShell = New-Object -ComObject WScript.Shell
$desktopPath = [Environment]::GetFolderPath("Desktop")
$shortcutPath = "$desktopPath\Opnonti Pro.lnk"
$shortcut = $WshShell.CreateShortcut($shortcutPath)
$shortcut.TargetPath = "powershell.exe"
$shortcut.Arguments = "-ExecutionPolicy Bypass -WindowStyle Hidden -File `"$launcherPath`""
$shortcut.WorkingDirectory = $installPath
$shortcut.IconLocation = "C:\Windows\System32\shell32.dll,16"
$shortcut.Description = "Opnonti Pro - Advanced Input Optimization Suite"
$shortcut.Save()

Write-Host "✅ Created desktop shortcut" -ForegroundColor Green

# Create Start Menu shortcut
$startMenuPath = "$env:APPDATA\Microsoft\Windows\Start Menu\Programs"
$startShortcutPath = "$startMenuPath\Opnonti Pro.lnk"
$startShortcut = $WshShell.CreateShortcut($startShortcutPath)
$startShortcut.TargetPath = "powershell.exe"
$startShortcut.Arguments = "-ExecutionPolicy Bypass -WindowStyle Hidden -File `"$launcherPath`""
$startShortcut.WorkingDirectory = $installPath
$startShortcut.IconLocation = "C:\Windows\System32\shell32.dll,16"
$startShortcut.Description = "Opnonti Pro - Advanced Input Optimization Suite"
$startShortcut.Save()

Write-Host "✅ Created Start Menu shortcut" -ForegroundColor Green

# Installation complete
Write-Host ""
Write-Host "========================================================" -ForegroundColor Cyan
Write-Host "  ✨ INSTALLATION COMPLETE! ✨" -ForegroundColor Green
Write-Host "========================================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "Installed to: $installPath" -ForegroundColor Gray
Write-Host ""
Write-Host "How to use:" -ForegroundColor Yellow
Write-Host "  • Double-click 'Opnonti Pro' on Desktop" -ForegroundColor White
Write-Host "  • Or find it in Start Menu" -ForegroundColor White
Write-Host "  • Or run: powershell -File '$launcherPath'" -ForegroundColor White
Write-Host ""
Write-Host "Features:" -ForegroundColor Yellow
Write-Host "  ✅ 15 optimization features" -ForegroundColor White
Write-Host "  ✅ AI Drag Smoothing" -ForegroundColor White
Write-Host "  ✅ Free Fire Mode" -ForegroundColor White
Write-Host "  ✅ Sound effects & animations" -ForegroundColor White
Write-Host "  ✅ Timer Resolution optimization" -ForegroundColor White
Write-Host ""
Write-Host "To uninstall:" -ForegroundColor Yellow
Write-Host "  Remove folder: $installPath" -ForegroundColor Gray
Write-Host "  Delete shortcuts from Desktop and Start Menu" -ForegroundColor Gray
Write-Host ""
Write-Host "🎮 Enjoy Opnonti Pro!" -ForegroundColor Cyan
Write-Host ""

# Ask to launch
$response = Read-Host "Launch Opnonti Pro now? (Y/N)"
if ($response -eq "Y" -or $response -eq "y") {
    & $launcherPath
}
