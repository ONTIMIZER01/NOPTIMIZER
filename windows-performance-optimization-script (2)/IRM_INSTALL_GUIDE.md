# 🚀 IRM PowerShell Installation

Install Opnonti Pro with one command, just like modern tools!

## ⚡ Quick Install (One-Liner)

### Method 1: From GitHub (Recommended)

```powershell
irm https://raw.githubusercontent.com/YOUR_USERNAME/opnonti-pro/main/install.ps1 | iex
```

### Method 2: Short URL (After setup)

```powershell
irm bit.ly/opnonti | iex
```

### Method 3: From Gist

```powershell
irm https://gist.githubusercontent.com/YOUR_USERNAME/GIST_ID/raw/install.ps1 | iex
```

---

## 📋 What Does It Do?

The installation script:
1. ✅ Downloads Opnonti Pro to `%LOCALAPPDATA%\OpnontiPro`
2. ✅ Creates desktop shortcut
3. ✅ Creates Start Menu entry
4. ✅ Creates launcher script
5. ✅ Offers to launch immediately

**No manual steps needed!**

---

## 🔧 Setup Instructions (For Distribution)

### Step 1: Host the Script

#### Option A: GitHub Repository (Best)

1. **Create GitHub repo:**
   ```bash
   # Create new repo on GitHub: opnonti-pro
   ```

2. **Upload files:**
   - Upload `dist/index.html`
   - Upload `install.ps1`
   - Commit and push

3. **Get raw URL:**
   ```
   https://raw.githubusercontent.com/YOUR_USERNAME/opnonti-pro/main/install.ps1
   ```

4. **Users install with:**
   ```powershell
   irm https://raw.githubusercontent.com/YOUR_USERNAME/opnonti-pro/main/install.ps1 | iex
   ```

---

#### Option B: GitHub Gist (Quick)

1. **Create Gist:**
   - Go to https://gist.github.com/
   - Paste `install.ps1` content
   - Name it: `opnonti-pro-install.ps1`
   - Create public gist

2. **Get raw URL:**
   - Click "Raw" button
   - Copy URL (like: `https://gist.githubusercontent.com/...`)

3. **Users install with:**
   ```powershell
   irm YOUR_GIST_RAW_URL | iex
   ```

---

#### Option C: Custom Domain (Professional)

1. **Upload to your server:**
   - Upload `install.ps1` to: `https://yourdomain.com/install.ps1`

2. **Users install with:**
   ```powershell
   irm https://yourdomain.com/install.ps1 | iex
   ```

---

#### Option D: Short URL (User-Friendly)

1. **Use bit.ly or TinyURL:**
   - Go to https://bitly.com/
   - Shorten your raw GitHub/Gist URL
   - Get short link like: `bit.ly/opnonti`

2. **Users install with:**
   ```powershell
   irm bit.ly/opnonti | iex
   ```

---

### Step 2: Update install.ps1

**Edit line 34 in install.ps1:**

```powershell
# Change this:
$htmlUrl = "https://raw.githubusercontent.com/YOUR_USERNAME/opnonti-pro/main/dist/index.html"

# To your actual URL:
$htmlUrl = "https://raw.githubusercontent.com/yourusername/opnonti-pro/main/dist/index.html"
```

---

## 🎯 Complete Setup Example (GitHub)

### 1. Create Repository

```bash
# On your computer
cd opnonti-pro
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/yourusername/opnonti-pro.git
git push -u origin main
```

### 2. Verify Files Are Uploaded

Check these exist on GitHub:
- ✅ `dist/index.html`
- ✅ `install.ps1`

### 3. Get Install Command

Your install command will be:
```powershell
irm https://raw.githubusercontent.com/yourusername/opnonti-pro/main/install.ps1 | iex
```

### 4. Test It

Open PowerShell and run your command!

---

## 📖 User Instructions

### Share This With Users:

```markdown
# Install Opnonti Pro

## Quick Install (PowerShell)

1. Open PowerShell (Windows + X, choose PowerShell)
2. Copy and paste this command:

irm https://your-url-here/install.ps1 | iex

3. Press Enter
4. Wait for installation
5. Launch from Desktop shortcut!

## What Gets Installed

- Opnonti Pro application
- Desktop shortcut
- Start Menu entry
- Auto-launcher

## Requirements

- Windows 10/11
- PowerShell
- Internet connection (for install only)
```

---

## 🔐 Security Note

**Users might see:**
```
"Do you want to run software from this untrusted publisher?"
```

**Tell them:**
- This is normal for PowerShell scripts
- They can view the script first at the URL
- It's safe - only downloads and creates shortcuts
- Open source - they can inspect the code

**To avoid prompt:**
```powershell
# View script first
irm https://your-url/install.ps1

# Then run
irm https://your-url/install.ps1 | iex
```

---

## 🛠️ Advanced: Auto-Update

### Create update.ps1:

```powershell
# Opnonti Pro Updater
$installPath = "$env:LOCALAPPDATA\OpnontiPro"
$htmlUrl = "https://raw.githubusercontent.com/YOUR_USERNAME/opnonti-pro/main/dist/index.html"
$htmlPath = "$installPath\opnonti-pro.html"

Write-Host "Updating Opnonti Pro..." -ForegroundColor Cyan
Invoke-WebRequest -Uri $htmlUrl -OutFile $htmlPath -UseBasicParsing
Write-Host "✅ Updated successfully!" -ForegroundColor Green
```

**Users update with:**
```powershell
irm https://your-url/update.ps1 | iex
```

---

## 📊 Usage Statistics

### Track Installs (Optional)

Add to `install.ps1`:

```powershell
# Anonymous usage stats
try {
    Invoke-WebRequest -Uri "https://your-analytics.com/install?app=opnonti&ver=3.0" -Method GET -UseBasicParsing | Out-Null
} catch {}
```

---

## 🎨 Customize Installation

### Change Install Location

In `install.ps1`, change:
```powershell
$installPath = "$env:LOCALAPPDATA\OpnontiPro"
# To:
$installPath = "C:\Program Files\OpnontiPro"  # Requires admin
```

### Add Custom Icon

```powershell
# Download custom icon
$iconUrl = "https://your-url/icon.ico"
$iconPath = "$installPath\icon.ico"
Invoke-WebRequest -Uri $iconUrl -OutFile $iconPath

# Use in shortcut
$shortcut.IconLocation = $iconPath
```

### Add Uninstaller

Create `uninstall.ps1`:

```powershell
# Opnonti Pro Uninstaller
$installPath = "$env:LOCALAPPDATA\OpnontiPro"
$desktopShortcut = "$env:USERPROFILE\Desktop\Opnonti Pro.lnk"
$startMenuShortcut = "$env:APPDATA\Microsoft\Windows\Start Menu\Programs\Opnonti Pro.lnk"

Write-Host "Uninstalling Opnonti Pro..." -ForegroundColor Yellow

# Remove files
if (Test-Path $installPath) {
    Remove-Item -Path $installPath -Recurse -Force
    Write-Host "✅ Removed files" -ForegroundColor Green
}

# Remove shortcuts
if (Test-Path $desktopShortcut) {
    Remove-Item -Path $desktopShortcut -Force
    Write-Host "✅ Removed desktop shortcut" -ForegroundColor Green
}

if (Test-Path $startMenuShortcut) {
    Remove-Item -Path $startMenuShortcut -Force
    Write-Host "✅ Removed Start Menu shortcut" -ForegroundColor Green
}

Write-Host "✅ Uninstall complete!" -ForegroundColor Green
```

**Uninstall command:**
```powershell
irm https://your-url/uninstall.ps1 | iex
```

---

## 🌐 Example URLs

### Popular Pattern:

```powershell
# Scoop package manager
irm get.scoop.sh | iex

# Oh My Posh
irm ohmyposh.dev/install.ps1 | iex

# Your tool
irm yourdomain.com/install.ps1 | iex
```

---

## ✅ Checklist for Distribution

- [ ] Upload `install.ps1` to GitHub/Gist
- [ ] Upload `dist/index.html` to same location
- [ ] Update `$htmlUrl` in install.ps1
- [ ] Test installation on clean Windows
- [ ] Create short URL (optional)
- [ ] Write user instructions
- [ ] Share install command!

---

## 🎯 Final Install Commands

### After Setup:

**Full Command:**
```powershell
irm https://raw.githubusercontent.com/YOUR_USERNAME/opnonti-pro/main/install.ps1 | iex
```

**Short URL:**
```powershell
irm bit.ly/opnonti | iex
```

**Custom Domain:**
```powershell
irm opnonti.pro/install | iex
```

---

## 💡 Pro Tips

1. **Test First:**
   ```powershell
   # View script before running
   irm your-url/install.ps1
   ```

2. **Silent Install:**
   ```powershell
   irm your-url/install.ps1 | iex -NoProfile
   ```

3. **Force Update:**
   ```powershell
   # Add to install.ps1
   -Force parameter to overwrite existing
   ```

4. **Version Check:**
   ```powershell
   # Add version comparison
   # Only update if newer
   ```

---

## 📝 Marketing Copy

**Share this with users:**

> ### Install Opnonti Pro in One Command
> 
> Open PowerShell and run:
> ```powershell
> irm opnonti.pro/install | iex
> ```
> 
> That's it! Desktop shortcut created automatically.
> 
> **Features:**
> - 15 optimization features
> - AI drag smoothing
> - Sound effects & animations
> - Free Fire optimized
> 
> **Uninstall anytime:**
> ```powershell
> irm opnonti.pro/uninstall | iex
> ```

---

## 🚀 Ready to Deploy!

1. Choose hosting (GitHub recommended)
2. Upload files
3. Update URLs in install.ps1
4. Test the install command
5. Share with users!

**Your install command:**
```powershell
irm YOUR_URL_HERE/install.ps1 | iex
```

---

**Now users can install Opnonti Pro with one command, just like professional tools!** 🎉
