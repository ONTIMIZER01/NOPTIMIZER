# 📋 Step-by-Step: Setup PowerShell IRM Installation

Complete guide to set up one-command installation for Opnonti Pro.

---

## 🎯 Goal

Users will be able to install with one command:
```powershell
irm your-url-here/install.ps1 | iex
```

---

## 📝 Method 1: GitHub Gist (EASIEST - 10 Minutes)

### Step 1: Prepare Files

**1.1** - Find these two files in your project:
- `install.ps1` (the installer script)
- `dist/index.html` (the app)

**1.2** - Open `install.ps1` in a text editor (Notepad)

---

### Step 2: Upload dist/index.html to GitHub

**2.1** - Go to https://github.com/

**2.2** - Click your profile picture → "Your repositories"

**2.3** - Click green "New" button

**2.4** - Repository name: `opnonti-pro`

**2.5** - Make it **Public** ✅

**2.6** - Click "Create repository"

**2.7** - Click "uploading an existing file"

**2.8** - Drag `dist/index.html` to the upload area

**2.9** - Click "Commit changes"

**2.10** - Click on `index.html` in the file list

**2.11** - Click "Raw" button (top right)

**2.12** - **Copy the full URL** from address bar
- Should look like: `https://raw.githubusercontent.com/YOUR_USERNAME/opnonti-pro/main/index.html`
- **Save this URL!** You need it next.

---

### Step 3: Create Gist for Installer

**3.1** - Go to https://gist.github.com/

**3.2** - You'll see:
```
Filename including extension...
[                            ]

[        Large text box      ]
```

**3.3** - In "Filename" box, type:
```
install.ps1
```

**3.4** - Open your `install.ps1` file in Notepad

**3.5** - Select ALL text (Ctrl+A)

**3.6** - Copy it (Ctrl+C)

**3.7** - Back in Gist, paste into the large text box (Ctrl+V)

**3.8** - **IMPORTANT:** Find this line (around line 34):
```powershell
$htmlUrl = "https://raw.githubusercontent.com/YOUR_USERNAME/opnonti-pro/main/dist/index.html"
```

**3.9** - Replace the URL with YOUR URL from Step 2.12

**Example:**
```powershell
# Change this:
$htmlUrl = "https://raw.githubusercontent.com/YOUR_USERNAME/opnonti-pro/main/dist/index.html"

# To (using YOUR username):
$htmlUrl = "https://raw.githubusercontent.com/johnsmith/opnonti-pro/main/index.html"
```

**3.10** - Scroll down, click green "Create public gist" button

---

### Step 4: Get Install Command

**4.1** - After creating gist, you'll see your script

**4.2** - Top right, click "Raw" button

**4.3** - **Copy the FULL URL** from address bar
- Should look like: `https://gist.githubusercontent.com/YOUR_USERNAME/abc123def456/raw/install.ps1`

**4.4** - **This is your install URL!** Save it!

---

### Step 5: Test It

**5.1** - Open PowerShell
- Press `Windows + X`
- Click "Windows PowerShell" or "Terminal"

**5.2** - Type this command (using YOUR URL):
```powershell
irm https://gist.githubusercontent.com/YOUR_USERNAME/abc123/raw/install.ps1 | iex
```

**5.3** - Press Enter

**5.4** - Wait 10-30 seconds

**5.5** - You should see installation messages

**5.6** - Check your Desktop - "Opnonti Pro" shortcut should appear!

**5.7** - Double-click it to test

**✅ It works!** You now have one-command installation!

---

### Step 6: Share with Users

Give users this command (with YOUR actual URL):

```powershell
irm https://gist.githubusercontent.com/YOUR_USERNAME/abc123/raw/install.ps1 | iex
```

**Tell them:**
1. Open PowerShell
2. Paste the command
3. Press Enter
4. Wait for installation
5. Find "Opnonti Pro" on Desktop!

---

## 🎨 Method 2: Create Short URL (OPTIONAL)

Make the command easier to remember!

### Step 1: Go to Bitly

**1.1** - Go to https://bitly.com/

**1.2** - Click "Sign up" (or "Log in" if you have account)

**1.3** - Create free account (use Google/Email)

---

### Step 2: Shorten URL

**2.1** - After login, you'll see:
```
[ Paste long URL here ]  [Shorten]
```

**2.2** - Paste your Gist raw URL:
```
https://gist.githubusercontent.com/YOUR_USERNAME/abc123/raw/install.ps1
```

**2.3** - Click "Shorten"

**2.4** - You get short URL like: `bit.ly/3xYz123`

**2.5** - **Optional:** Click "Edit" to customize
- Change to something like: `bit.ly/opnonti`
- (if available)

---

### Step 3: New Install Command

Now users can install with:
```powershell
irm bit.ly/opnonti | iex
```

**Much easier to remember!** ✨

---

## 📖 Complete Example

Let's say your GitHub username is "johndoe"

### Your Files:
1. GitHub repo: `https://github.com/johndoe/opnonti-pro`
2. Raw HTML: `https://raw.githubusercontent.com/johndoe/opnonti-pro/main/index.html`
3. Gist URL: `https://gist.githubusercontent.com/johndoe/abc123def456/raw/install.ps1`
4. Short URL: `bit.ly/opnonti`

### Your Install Command:
```powershell
irm bit.ly/opnonti | iex
```

### Users Do:
1. Open PowerShell
2. Type: `irm bit.ly/opnonti | iex`
3. Press Enter
4. Wait 20 seconds
5. Done!

---

## 🔧 Troubleshooting

### Problem: "Cannot find index.html"

**Solution:**
- Check the URL in install.ps1 line 34
- Make sure it's the RAW GitHub URL
- Should have `raw.githubusercontent.com` in it

---

### Problem: "Access denied"

**Solution:**
- Make sure GitHub repo is PUBLIC, not private
- Make sure Gist is PUBLIC, not secret

---

### Problem: "irm is not recognized"

**Solution:**
User needs to use full command:
```powershell
Invoke-RestMethod YOUR_URL | Invoke-Expression
```

Or update to PowerShell 7:
```powershell
winget install Microsoft.PowerShell
```

---

### Problem: "Script not found"

**Solution:**
- Check URL is correct
- Click Raw button on Gist
- Make sure URL ends with `/raw/install.ps1`

---

## ✅ Verification Checklist

Before sharing with users:

- [ ] GitHub repo created and PUBLIC
- [ ] index.html uploaded to GitHub
- [ ] Got raw URL for index.html
- [ ] Created Gist with install.ps1
- [ ] Updated line 34 with YOUR index.html URL
- [ ] Gist is PUBLIC
- [ ] Got raw URL for Gist
- [ ] Tested install command yourself
- [ ] Shortcut appeared on Desktop
- [ ] App launches successfully
- [ ] (Optional) Created short URL
- [ ] Ready to share!

---

## 📱 What to Tell Users

### Copy this message:

```
Install Opnonti Pro with one command!

1. Open PowerShell (Windows + X, choose PowerShell)
2. Copy and paste this:

   irm YOUR_URL_HERE | iex

3. Press Enter
4. Wait 20 seconds
5. Find "Opnonti Pro" on your Desktop!

Features:
• 15 optimization features
• AI drag smoothing for Free Fire
• Sound effects & animations
• Windows Game Mode
• Timer Resolution (0.5ms)

Uninstall anytime by deleting:
C:\Users\YOUR_NAME\AppData\Local\OpnontiPro
```

---

## 🎯 Quick Summary

### What You Did:
1. ✅ Uploaded index.html to GitHub
2. ✅ Created Gist with install.ps1
3. ✅ Updated URLs in install.ps1
4. ✅ Got install command
5. ✅ (Optional) Made short URL

### What Users Do:
1. Open PowerShell
2. Run: `irm your-url | iex`
3. Done!

### Installation Time:
- Setup: 10 minutes (one time)
- User install: 20 seconds
- Launches: Instantly

---

## 🎊 You're Done!

**You now have professional one-command installation!**

**Your install command:**
```powershell
irm [YOUR_URL_HERE] | iex
```

**Users install instantly with one line!** 🚀

---

## 📚 Need More Help?

- **Simple guide:** QUICK_IRM_SETUP.txt
- **Detailed guide:** IRM_INSTALL_GUIDE.md
- **All methods:** INSTALLATION.md

**Questions?** Re-read the step that's unclear!

**Ready to share?** Give users your install command! ✨
