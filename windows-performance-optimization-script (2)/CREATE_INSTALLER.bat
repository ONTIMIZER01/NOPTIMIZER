@echo off
echo ========================================================
echo   OPNONTI PRO - PROFESSIONAL INSTALLER CREATOR
echo ========================================================
echo.
echo This creates a professional Windows installer (.exe)
echo that installs Opnonti Pro like real software!
echo.
echo What you'll get:
echo   - Professional setup.exe installer
echo   - Adds to Programs and Features
echo   - Creates Start Menu shortcuts
echo   - Desktop shortcut option
echo   - Uninstaller included
echo.
echo Requirements:
echo   - Node.js installed
echo   - Internet connection
echo   - About 10 minutes
echo.
pause

echo.
echo ========================================================
echo   STEP 1: Checking Node.js...
echo ========================================================
where node >nul 2>nul
if %errorlevel% neq 0 (
    echo ERROR: Node.js not found!
    echo Install from: https://nodejs.org/
    pause
    exit
)
echo Node.js found! ✓
node --version

echo.
echo ========================================================
echo   STEP 2: Installing build tools...
echo ========================================================
echo Installing Electron and Electron Builder...
echo This will take 3-5 minutes...
echo.

call npm install --save-dev electron@latest electron-builder@latest

if %errorlevel% neq 0 (
    echo ERROR: Failed to install tools
    pause
    exit
)
echo Build tools installed! ✓

echo.
echo ========================================================
echo   STEP 3: Creating Electron wrapper...
echo ========================================================

REM Create electron-main.js
(
echo const { app, BrowserWindow } = require('electron'^)
echo const path = require('path'^)
echo.
echo function createWindow(^) {
echo   const win = new BrowserWindow({
echo     width: 1400,
echo     height: 900,
echo     icon: path.join(__dirname, 'icon.png'^),
echo     autoHideMenuBar: true,
echo     webPreferences: {
echo       nodeIntegration: false,
echo       contextIsolation: true
echo     }
echo   }^)
echo   win.loadFile('dist/index.html'^)
echo }
echo.
echo app.whenReady(^).then(createWindow^)
echo.
echo app.on('window-all-closed', (^) =^> {
echo   if (process.platform !== 'darwin'^) app.quit(^)
echo }^)
) > electron-main.js

echo Electron wrapper created! ✓

echo.
echo ========================================================
echo   STEP 4: Configuring installer...
echo ========================================================

REM Update package.json
(
echo {
echo   "name": "opnonti-pro",
echo   "version": "3.0.0",
echo   "description": "Advanced Input Optimization Suite",
echo   "main": "electron-main.js",
echo   "scripts": {
echo     "start": "electron .",
echo     "build": "electron-builder"
echo   },
echo   "build": {
echo     "appId": "com.opnonti.pro",
echo     "productName": "Opnonti Pro",
echo     "directories": {
echo       "output": "installer"
echo     },
echo     "win": {
echo       "target": "nsis",
echo       "icon": "icon.png"
echo     },
echo     "nsis": {
echo       "oneClick": false,
echo       "allowToChangeInstallationDirectory": true,
echo       "createDesktopShortcut": true,
echo       "createStartMenuShortcut": true,
echo       "shortcutName": "Opnonti Pro"
echo     }
echo   }
echo }
) > package.json

echo Configuration complete! ✓

echo.
echo ========================================================
echo   STEP 5: Building installer...
echo ========================================================
echo This will take 5-7 minutes...
echo Please be patient...
echo.

call npm run build

if %errorlevel% neq 0 (
    echo ERROR: Build failed
    echo Check error messages above
    pause
    exit
)

echo.
echo ========================================================
echo   SUCCESS! ✓✓✓
echo ========================================================
echo.
echo Your professional installer has been created!
echo.
echo Location:
echo   %CD%\installer\Opnonti Pro Setup 3.0.0.exe
echo.
echo What you can do with it:
echo   1. Run it to install on your PC
echo   2. Share with others
echo   3. Distribute online
echo   4. Put on USB drives
echo.
echo When users run it:
echo   - Professional installation wizard
echo   - Installs to Program Files
echo   - Creates Start Menu entry
echo   - Creates Desktop shortcut
echo   - Adds to Programs and Features
echo   - Includes uninstaller
echo.
echo File size: ~150 MB
echo.
echo ========================================================

echo.
echo Do you want to open the installer folder? (Y/N^)
set /p choice=
if /i "%choice%"=="Y" (
    start "" "%CD%\installer"
)

echo.
echo Done! Press any key to exit...
pause >nul
