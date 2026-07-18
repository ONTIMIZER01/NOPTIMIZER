# 📦 Convert to Other Formats

Not sure what "irm" means, but here are all common formats you might want!

---

## ❓ Did You Mean?

### 1. **MSI** (Windows Installer)?
Microsoft Installer package - professional installation

### 2. **ISO** (Disk Image)?
Bootable disk image file

### 3. **NSIS** (Installer)?
Nullsoft installer - like how programs install

### 4. **Portable EXE**?
Single file that runs without installation

### 5. **AppImage** (Linux)?
Linux portable application format

### 6. **DMG** (Mac)?
Mac disk image format

---

## 🎯 Most Likely: Windows Installer (MSI/NSIS)

### Create Professional Installer

This creates `Opnonti Pro Setup.exe` that installs like real software!

#### Method 1: Using Electron Builder (Best)

**1. Create `installer-package.json`:**

```json
{
  "name": "opnonti-pro-installer",
  "version": "3.0.0",
  "main": "electron-main.js",
  "scripts": {
    "build:installer": "electron-builder"
  },
  "devDependencies": {
    "electron": "^28.0.0",
    "electron-builder": "^24.9.1"
  },
  "build": {
    "appId": "com.opnonti.pro",
    "productName": "Opnonti Pro",
    "directories": {
      "output": "installers"
    },
    "win": {
      "target": [
        {
          "target": "nsis",
          "arch": ["x64"]
        },
        {
          "target": "msi",
          "arch": ["x64"]
        }
      ],
      "icon": "icon.ico"
    },
    "nsis": {
      "oneClick": false,
      "allowToChangeInstallationDirectory": true,
      "createDesktopShortcut": true,
      "createStartMenuShortcut": true,
      "shortcutName": "Opnonti Pro",
      "installerIcon": "icon.ico",
      "uninstallerIcon": "icon.ico",
      "installerHeaderIcon": "icon.ico"
    },
    "msi": {
      "createDesktopShortcut": true,
      "createStartMenuShortcut": true
    }
  }
}
```

**2. Create `electron-main.js`:**

```javascript
const { app, BrowserWindow } = require('electron')
const path = require('path')

function createWindow() {
  const win = new BrowserWindow({
    width: 1400,
    height: 900,
    icon: path.join(__dirname, 'icon.png'),
    autoHideMenuBar: true,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true
    }
  })

  win.loadFile('dist/index.html')
}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})
```

**3. Install dependencies:**

```bash
npm install --save-dev electron electron-builder
```

**4. Build installer:**

```bash
npx electron-builder
```

**5. Find installer:**

```
installers/
├── Opnonti Pro Setup 3.0.0.exe  ← NSIS Installer
└── Opnonti Pro 3.0.0.msi        ← MSI Installer
```

**Result:**
- Professional installer
- Adds to Programs list
- Creates Start Menu shortcut
- Uninstaller included
- ~150 MB installer

---

#### Method 2: NSIS (Nullsoft Installer)

**1. Download NSIS:**
- https://nsis.sourceforge.io/
- Install it

**2. Create `installer.nsi`:**

```nsis
!define APPNAME "Opnonti Pro"
!define COMPANYNAME "Opnonti"
!define DESCRIPTION "Advanced Input Optimization Suite"
!define VERSIONMAJOR 3
!define VERSIONMINOR 0
!define VERSIONBUILD 0

RequestExecutionLevel admin
InstallDir "$PROGRAMFILES\${APPNAME}"
Name "${APPNAME}"
Icon "icon.ico"
outFile "Opnonti Pro Setup.exe"

!include LogicLib.nsh

page directory
page instfiles

section "install"
    setOutPath $INSTDIR
    
    # Copy all files
    File /r "Opnonti Pro-win32-x64\*.*"
    
    # Create shortcuts
    createDirectory "$SMPROGRAMS\${APPNAME}"
    createShortCut "$SMPROGRAMS\${APPNAME}\${APPNAME}.lnk" "$INSTDIR\Opnonti Pro.exe"
    createShortCut "$DESKTOP\${APPNAME}.lnk" "$INSTDIR\Opnonti Pro.exe"
    
    # Write uninstaller
    writeUninstaller "$INSTDIR\uninstall.exe"
    
    # Add to Programs and Features
    WriteRegStr HKLM "Software\Microsoft\Windows\CurrentVersion\Uninstall\${APPNAME}" "DisplayName" "${APPNAME}"
    WriteRegStr HKLM "Software\Microsoft\Windows\CurrentVersion\Uninstall\${APPNAME}" "UninstallString" "$\"$INSTDIR\uninstall.exe$\""
    WriteRegStr HKLM "Software\Microsoft\Windows\CurrentVersion\Uninstall\${APPNAME}" "DisplayIcon" "$\"$INSTDIR\Opnonti Pro.exe$\""
    WriteRegStr HKLM "Software\Microsoft\Windows\CurrentVersion\Uninstall\${APPNAME}" "Publisher" "${COMPANYNAME}"
    WriteRegStr HKLM "Software\Microsoft\Windows\CurrentVersion\Uninstall\${APPNAME}" "DisplayVersion" "${VERSIONMAJOR}.${VERSIONMINOR}.${VERSIONBUILD}"
sectionEnd

section "uninstall"
    # Remove files
    delete "$INSTDIR\*.*"
    rmDir /r "$INSTDIR"
    
    # Remove shortcuts
    delete "$SMPROGRAMS\${APPNAME}\${APPNAME}.lnk"
    rmDir "$SMPROGRAMS\${APPNAME}"
    delete "$DESKTOP\${APPNAME}.lnk"
    
    # Remove from Programs and Features
    DeleteRegKey HKLM "Software\Microsoft\Windows\CurrentVersion\Uninstall\${APPNAME}"
sectionEnd
```

**3. Build:**
- Right-click `installer.nsi`
- Choose "Compile NSIS Script"

**4. Get installer:**
- `Opnonti Pro Setup.exe` created

---

### 2. **ISO File** (Bootable Disk Image)

**Not recommended for this app**, but if you want:

**Using ImgBurn:**
1. Download ImgBurn
2. Create new ISO
3. Add your files
4. Burn to ISO

**Better option:** Just use ZIP file instead!

---

### 3. **Portable Single EXE**

**One file, no installation needed**

#### Using NSIS Portable:

```nsis
!define APPNAME "OpnontiProPortable"
outFile "OpnontiPro-Portable.exe"

SilentInstall silent
RequestExecutionLevel user

Section ""
    SetOutPath $TEMP\OpnontiPro
    File /r "Opnonti Pro-win32-x64\*.*"
    Exec "$TEMP\OpnontiPro\Opnonti Pro.exe"
SectionEnd
```

**Result:**
- Single .exe file
- Runs without installation
- Extracts to temp folder
- ~150 MB file

---

### 4. **ZIP/RAR Archive** (Simplest!)

**Just compress the folder:**

**Windows:**
```
Right-click "Opnonti Pro-win32-x64"
→ Send to → Compressed (zipped) folder
→ Get "Opnonti Pro.zip"
```

**Advantages:**
- ✅ Easiest method
- ✅ Everyone can extract
- ✅ No tools needed
- ✅ Smallest download

**To use:**
- Download ZIP
- Extract
- Run .exe

---

### 5. **Self-Extracting Archive**

**ZIP that auto-extracts:**

**Using WinRAR:**
1. Right-click folder
2. Add to archive
3. Check "Create SFX archive"
4. Advanced → SFX options
5. Set program to run: `Opnonti Pro.exe`

**Using 7-Zip:**
1. Right-click folder
2. 7-Zip → Add to archive
3. Archive format: 7z
4. Check "Create SFX archive"

**Result:**
- Single .exe file
- Auto-extracts and runs
- User-friendly

---

## 📊 Format Comparison

| Format | File Size | User-Friendly | Professional | Setup Time |
|--------|-----------|---------------|--------------|------------|
| **NSIS Installer** | 150 MB | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | 30 min |
| **MSI Installer** | 150 MB | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | 30 min |
| **Portable EXE** | 150 MB | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ | 20 min |
| **ZIP Archive** | 130 MB | ⭐⭐⭐ | ⭐⭐ | 1 min |
| **Self-Extract** | 145 MB | ⭐⭐⭐⭐ | ⭐⭐⭐ | 5 min |
| **ISO** | 200 MB | ⭐⭐ | ⭐⭐ | 10 min |

---

## 🎯 Recommended

### For Distribution:
**Use NSIS Installer (Method 1)**
- Most professional
- Adds to Programs list
- Creates shortcuts
- Includes uninstaller

### For Sharing with Friends:
**Use ZIP Archive**
- Simplest
- Smallest
- Everyone knows how to use

### For Portable Use:
**Use Portable EXE**
- Single file
- No installation
- Run from USB

---

## 🚀 Quick Auto-Installer Script

**Create `BUILD_INSTALLER.bat`:**

```batch
@echo off
echo Creating Opnonti Pro Installer...
echo.

REM Check if electron-builder is installed
npm list -g electron-builder >nul 2>&1
if %errorlevel% neq 0 (
    echo Installing electron-builder...
    npm install -g electron-builder
)

REM Build installer
echo Building installer...
npx electron-builder

echo.
echo Done! Check the "installers" folder
pause
```

---

## 💡 What Format Do You Actually Need?

Please tell me:
1. **IRM** - What does this mean? Where did you see this?
2. **Installer** - Want setup.exe that installs program?
3. **Portable** - Want single .exe file?
4. **Archive** - Want .zip file?
5. **Something else** - Please explain!

---

## ✨ Summary

**Most Common Formats:**

### Professional Distribution:
```
NSIS Installer → setup.exe
MSI Installer → .msi file
```

### Simple Sharing:
```
ZIP Archive → .zip file
Self-Extracting → .exe that extracts
```

### Portable:
```
Portable EXE → single .exe
Nativefier → folder with .exe
```

---

**Tell me what "irm" means and I'll help you create exactly what you need!** 🎯

**Or if you want a professional installer, use Method 1 (Electron Builder)!** 🚀
