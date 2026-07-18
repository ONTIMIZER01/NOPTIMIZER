@echo off
echo ========================================================
echo   OPNONTI PRO - AUTOMATIC .EXE CREATOR
echo ========================================================
echo.
echo This will convert Opnonti Pro into a standalone .exe
echo.
echo Requirements:
echo   - Node.js must be installed
echo   - Internet connection for first-time setup
echo.
echo Press any key to start...
pause >nul

echo.
echo ========================================================
echo   STEP 1: Checking Node.js...
echo ========================================================
where node >nul 2>nul
if %errorlevel% neq 0 (
    echo.
    echo ERROR: Node.js not found!
    echo.
    echo Please install Node.js first:
    echo   1. Go to https://nodejs.org/
    echo   2. Download and install the LTS version
    echo   3. Restart your computer
    echo   4. Run this script again
    echo.
    pause
    exit
)
echo Node.js found! ✓
node --version

echo.
echo ========================================================
echo   STEP 2: Installing Nativefier...
echo ========================================================
echo This may take 1-2 minutes...
echo.
call npm install -g nativefier
if %errorlevel% neq 0 (
    echo.
    echo ERROR: Failed to install Nativefier
    echo Please check your internet connection
    echo.
    pause
    exit
)
echo Nativefier installed! ✓

echo.
echo ========================================================
echo   STEP 3: Creating .exe application...
echo ========================================================
echo This may take 2-3 minutes...
echo Please wait...
echo.

REM Get current directory
set "currentDir=%CD%"

REM Create the exe
call nativefier "file:///%currentDir%/dist/index.html" --name "Opnonti Pro" --width 1400 --height 900 --icon "%currentDir%/icon.png"

if %errorlevel% neq 0 (
    echo.
    echo Creating without icon...
    call nativefier "file:///%currentDir%/dist/index.html" --name "Opnonti Pro" --width 1400 --height 900
)

if %errorlevel% neq 0 (
    echo.
    echo ERROR: Failed to create .exe
    echo.
    pause
    exit
)

echo.
echo ========================================================
echo   SUCCESS! ✓
echo ========================================================
echo.
echo Your .exe has been created!
echo.
echo Location:
echo   %currentDir%\Opnonti Pro-win32-x64\Opnonti Pro.exe
echo.
echo What to do next:
echo   1. Open the "Opnonti Pro-win32-x64" folder
echo   2. Double-click "Opnonti Pro.exe" to run
echo   3. Create a desktop shortcut if you want
echo   4. Enjoy!
echo.
echo ========================================================

echo.
echo Do you want to open the folder now? (Y/N)
set /p choice=
if /i "%choice%"=="Y" (
    start "" "%currentDir%\Opnonti Pro-win32-x64"
)

echo.
echo Done! Press any key to exit...
pause >nul
