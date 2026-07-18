# Opnonti Pro - Automatic .exe Creator
# PowerShell version for better compatibility

Write-Host "========================================================" -ForegroundColor Cyan
Write-Host "  OPNONTI PRO - AUTOMATIC .EXE CREATOR" -ForegroundColor Yellow
Write-Host "========================================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "This will convert Opnonti Pro into a standalone .exe"
Write-Host ""
Write-Host "Requirements:" -ForegroundColor Green
Write-Host "  - Node.js must be installed"
Write-Host "  - Internet connection for first-time setup"
Write-Host ""
Write-Host "Press any key to start..." -ForegroundColor Yellow
$null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")

# Step 1: Check Node.js
Write-Host ""
Write-Host "========================================================" -ForegroundColor Cyan
Write-Host "  STEP 1: Checking Node.js..." -ForegroundColor Yellow
Write-Host "========================================================" -ForegroundColor Cyan

try {
    $nodeVersion = node --version
    Write-Host "Node.js found! ✓" -ForegroundColor Green
    Write-Host "Version: $nodeVersion" -ForegroundColor Gray
} catch {
    Write-Host ""
    Write-Host "ERROR: Node.js not found!" -ForegroundColor Red
    Write-Host ""
    Write-Host "Please install Node.js first:" -ForegroundColor Yellow
    Write-Host "  1. Go to https://nodejs.org/"
    Write-Host "  2. Download and install the LTS version"
    Write-Host "  3. Restart your computer"
    Write-Host "  4. Run this script again"
    Write-Host ""
    Write-Host "Press any key to exit..."
    $null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")
    exit
}

# Step 2: Install Nativefier
Write-Host ""
Write-Host "========================================================" -ForegroundColor Cyan
Write-Host "  STEP 2: Installing Nativefier..." -ForegroundColor Yellow
Write-Host "========================================================" -ForegroundColor Cyan
Write-Host "This may take 1-2 minutes..." -ForegroundColor Gray
Write-Host ""

try {
    npm install -g nativefier
    Write-Host "Nativefier installed! ✓" -ForegroundColor Green
} catch {
    Write-Host ""
    Write-Host "ERROR: Failed to install Nativefier" -ForegroundColor Red
    Write-Host "Please check your internet connection" -ForegroundColor Yellow
    Write-Host ""
    Write-Host "Press any key to exit..."
    $null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")
    exit
}

# Step 3: Create .exe
Write-Host ""
Write-Host "========================================================" -ForegroundColor Cyan
Write-Host "  STEP 3: Creating .exe application..." -ForegroundColor Yellow
Write-Host "========================================================" -ForegroundColor Cyan
Write-Host "This may take 2-3 minutes..." -ForegroundColor Gray
Write-Host "Please wait..." -ForegroundColor Gray
Write-Host ""

$currentDir = Get-Location
$htmlPath = Join-Path $currentDir "dist\index.html"
$iconPath = Join-Path $currentDir "icon.png"

# Convert to file URL
$fileUrl = "file:///$($htmlPath -replace '\\', '/')"

try {
    if (Test-Path $iconPath) {
        nativefier $fileUrl --name "Opnonti Pro" --width 1400 --height 900 --icon $iconPath
    } else {
        Write-Host "Note: No icon found, creating without icon..." -ForegroundColor Yellow
        nativefier $fileUrl --name "Opnonti Pro" --width 1400 --height 900
    }
    
    Write-Host ""
    Write-Host "========================================================" -ForegroundColor Cyan
    Write-Host "  SUCCESS! ✓" -ForegroundColor Green
    Write-Host "========================================================" -ForegroundColor Cyan
    Write-Host ""
    Write-Host "Your .exe has been created!" -ForegroundColor Green
    Write-Host ""
    Write-Host "Location:" -ForegroundColor Yellow
    Write-Host "  $currentDir\Opnonti Pro-win32-x64\Opnonti Pro.exe" -ForegroundColor Gray
    Write-Host ""
    Write-Host "What to do next:" -ForegroundColor Yellow
    Write-Host "  1. Open the 'Opnonti Pro-win32-x64' folder"
    Write-Host "  2. Double-click 'Opnonti Pro.exe' to run"
    Write-Host "  3. Create a desktop shortcut if you want"
    Write-Host "  4. Enjoy!"
    Write-Host ""
    Write-Host "========================================================" -ForegroundColor Cyan
    
    # Ask to open folder
    Write-Host ""
    $response = Read-Host "Do you want to open the folder now? (Y/N)"
    if ($response -eq "Y" -or $response -eq "y") {
        $folderPath = Join-Path $currentDir "Opnonti Pro-win32-x64"
        if (Test-Path $folderPath) {
            Start-Process $folderPath
        }
    }
    
} catch {
    Write-Host ""
    Write-Host "ERROR: Failed to create .exe" -ForegroundColor Red
    Write-Host "Error details: $_" -ForegroundColor Red
    Write-Host ""
}

Write-Host ""
Write-Host "Done! Press any key to exit..." -ForegroundColor Yellow
$null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")
