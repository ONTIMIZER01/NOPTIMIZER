# 🚀 Complete Guide: Upload to GitHub + IRM Installation

**Goal:** Users install Opnonti Pro with ONE command:
```powershell
irm bit.ly/opnonti | iex
```

---

## 📋 **WHAT YOU'LL DO:**

1. ✅ Create GitHub account (free)
2. ✅ Create repository
3. ✅ Upload your files
4. ✅ Get URLs for files
5. ✅ Create installer Gist
6. ✅ Test installation
7. ✅ Share with users

**Time needed:** 20-30 minutes (one-time setup)

---

## 🎯 **PART 1: CREATE GITHUB ACCOUNT (5 minutes)**

### Step 1: Go to GitHub
- Open browser
- Go to: **https://github.com**
- Click **"Sign up"** (top right corner)

### Step 2: Create Account
- Enter email: `your-email@gmail.com`
- Create password (remember it!)
- Choose username: `yourname` (example: `gamer123`)
- Click **"Create account"**
- Verify email (check inbox)
- Solve the puzzle
- Skip the questions or answer them

### Step 3: Login
- You're now logged in!
- **Remember your username!** (you'll use it everywhere)

---

## 🎯 **PART 2: CREATE REPOSITORY (5 minutes)**

### Step 4: Create New Repository

1. **Click the green "New" button**
   - Go to: **https://github.com/new**
   - Or: Click "+" icon (top right) → "New repository"

2. **Fill in details:**

```
Repository name: opnonti-pro
Description:     Advanced Input Optimization Suite (optional)
Visibility:      ○ Public    ← MUST BE PUBLIC!
                 ○ Private
```

3. **Check this box:**
   ```
   ✅ Add a README file
   ```

4. **Click green button:** "Create repository"

### ✅ You should now see your repo!

URL looks like:
```
https://github.com/YOUR_USERNAME/opnonti-pro
```

**Write down your username!** Example: `gamer123`

---

## 🎯 **PART 3: UPLOAD YOUR FILES (10 minutes)**

### Step 5: Upload index.html

1. **In your new repository page:**
   - Click **"Add file"** button (top)
   - Click **"Upload files"**

2. **Find this file on your computer:**
   ```
   Your project folder
   └── dist
       └── index.html  ← THIS FILE!
   ```

3. **Drag and drop** `index.html` into the upload area

4. **Scroll down**
   - You'll see: "Commit changes"
   - Leave default message: "Add index.html"
   - Click **"Commit changes"**

### ✅ index.html is now uploaded!

### Step 6: Upload install.ps1

1. **Click "Add file" → "Upload files"** again

2. **Find this file on your computer:**
   ```
   Your project folder
   └── install.ps1  ← THIS FILE!
   ```

3. **Drag and drop** `install.ps1`

4. **Scroll down** → Click **"Commit changes"**

### ✅ install.ps1 is now uploaded!

---

## 🎯 **PART 4: GET RAW URLs (5 minutes)**

### Step 7: Get index.html Raw URL

1. **Click on `index.html`** in your repo file list

2. **Click "Raw" button** (top right of file view)

3. **Look at browser address bar:**
   ```
   https://raw.githubusercontent.com/YOUR_USERNAME/opnonti-pro/main/index.html
   ```

4. **COPY THIS FULL URL** → Paste it into Notepad
   - **IMPORTANT:** Replace `YOUR_USERNAME` with your actual username!
   - Example: If username is `gamer123`:
   ```
   https://raw.githubusercontent.com/gamer123/opnonti-pro/main/index.html
   ```

5. **Save this URL!** You need it in Step 9

### ✅ You have the HTML URL!

### Step 8: Get install.ps1 Raw URL

1. **Click on `install.ps1`** in your repo file list

2. **Click "Raw" button** (top right)

3. **Look at browser address bar:**
   ```
   https://raw.githubusercontent.com/YOUR_USERNAME/opnonti-pro/main/install.ps1
   ```

4. **COPY THIS FULL URL** → Save it!

### ✅ You have the PS1 URL!

---

## 🎯 **PART 5: EDIT install.ps1 (5 minutes)**

### Step 9: Update Line 34 with Your URL

1. **Click on `install.ps1`** in your repo

2. **Click the pencil icon** (Edit file) - top right

3. **Use Ctrl+F** (Find) and search for:
   ```
   $htmlUrl
   ```

4. **You'll find this line (around line 34):**
   ```powershell
   $htmlUrl = "https://raw.githubusercontent.com/YOUR_USERNAME/opnonti-pro/main/dist/index.html"
   ```

5. **Replace it with YOUR URL** from Step 7:
   ```powershell
   $htmlUrl = "https://raw.githubusercontent.com/gamer123/opnonti-pro/main/index.html"
   ```
   - Replace `gamer123` with YOUR actual username!
   - Make sure URL matches exactly what you copied

6. **Scroll down**
   - You'll see "Commit changes"
   - Leave default message
   - Click **"Commit changes"**

### ✅ install.ps1 now has YOUR correct URL!

---

## 🎯 **PART 6: TEST THE INSTALL COMMAND (5 minutes)**

### Step 10: Test Installation

1. **Get your install URL** (from Step 8)
   - Should look like:
   ```
   https://raw.githubusercontent.com/YOUR_USERNAME/opnonti-pro/main/install.ps1
   ```

2. **Open PowerShell:**
   - Press **Windows + X**
   - Click **"Windows PowerShell"** or **"Terminal"**

3. **Type this command** (use YOUR URL):
   ```powershell
   irm https://raw.githubusercontent.com/YOUR_USERNAME/opnonti-pro/main/install.ps1 | iex
   ```

4. **Press Enter**

5. **Wait 30 seconds**

### ✅ You should see:

```
========================================================
  OPNONTI PRO - WEB INSTALLER
========================================================

📁 Installation path: C:\Users\...\AppData\Local\OpnontiPro
✅ Created installation directory
📥 Downloading Opnonti Pro...
✅ Downloaded application files
✅ Created launcher script

🔗 Creating shortcuts...
✅ Created desktop shortcut
✅ Created Start Menu shortcut

========================================================
  ✨ INSTALLATION COMPLETE! ✨
========================================================
```

### ✅ Check Your Desktop:
- You should see **"Opnonti Pro"** shortcut!

### ✅ Check Start Menu:
- Click Windows key
- Search "Opnonti Pro"
- Should appear!

### ✅ Double-click the shortcut:
- Opnonti Pro should open in Chrome/Edge!

---

## 🎯 **PART 7: CREATE SHORT URL (Optional - 5 minutes)**

### Step 11: Make URL Easy to Remember

Your current install command is LONG:
```powershell
irm https://raw.githubusercontent.com/gamer123/opnonti-pro/main/install.ps1 | iex
```

Let's make it SHORT!

1. **Go to:** https://bitly.com/

2. **Sign up** (free account)

3. **Paste your URL** in the box:
   ```
   https://raw.githubusercontent.com/gamer123/opnonti-pro/main/install.ps1
   ```

4. **Click "Create"** or **"Shorten"**

5. **Get short URL** like: `bit.ly/3xYz123`

6. **Optional - Customize:**
   - Click "Edit"
   - Change back-half to: `opnonti`
   - Save
   - Now you have: **`bit.ly/opnonti`**

### ✅ New install command:
```powershell
irm bit.ly/opnonti | iex
```

**Much easier to share!** 🎉

---

## 🎯 **PART 8: SHARE WITH USERS (2 minutes)**

### Step 12: Give Users This Command

**Tell your users:**

```
═══════════════════════════════════════════════════════
  INSTALL OPNONTI PRO IN ONE COMMAND
═══════════════════════════════════════════════════════

Open PowerShell and run:

  irm bit.ly/opnonti | iex

Wait 20 seconds. Done!

Find "Opnonti Pro" on your Desktop.

FEATURES:
  ✅ 15 optimization features
  ✅ AI drag smoothing
  ✅ Sound effects & animations
  ✅ Free Fire optimized
  ✅ Timer Resolution

UNINSTALL:
  Delete: C:\Users\NAME\AppData\Local\OpnontiPro
  Delete: Desktop shortcut
═══════════════════════════════════════════════════════
```

---

## ✅ **COMPLETE CHECKLIST**

### Account Setup:
- [ ] GitHub account created
- [ ] Username remembered
- [ ] Email verified

### Repository:
- [ ] Repo created: `opnonti-pro`
- [ ] Repo is PUBLIC
- [ ] README added

### Files:
- [ ] `index.html` uploaded
- [ ] `install.ps1` uploaded
- [ ] Line 34 in install.ps1 updated with YOUR URL

### URLs:
- [ ] Got raw URL for index.html
- [ ] Got raw URL for install.ps1
- [ ] Saved both URLs

### Testing:
- [ ] Install command works
- [ ] Desktop shortcut created
- [ ] App opens correctly
- [ ] All features work

### Sharing:
- [ ] (Optional) Created short URL
- [ ] Ready to share install command!

---

## 🎨 **VISUAL EXAMPLE**

### Let's say your username is: **gamer123**

**Step 4:** Create repo
```
Repository: opnonti-pro
URL: https://github.com/gamer123/opnonti-pro
```

**Step 7:** Get HTML URL
```
https://raw.githubusercontent.com/gamer123/opnonti-pro/main/index.html
```

**Step 9:** Edit line 34
```powershell
$htmlUrl = "https://raw.githubusercontent.com/gamer123/opnonti-pro/main/index.html"
```

**Step 10:** Install command
```powershell
irm https://raw.githubusercontent.com/gamer123/opnonti-pro/main/install.ps1 | iex
```

**Step 11:** Short URL
```
bit.ly/opnonti
```

**Step 12:** Share with users
```powershell
irm bit.ly/opnonti | iex
```

---

## 🐛 **TROUBLESHOOTING**

### Problem: "404 Not Found"
**Cause:** URL is wrong or file doesn't exist
**Fix:**
- Check spelling of username
- Make sure repo is PUBLIC
- Verify file was uploaded

### Problem: "irm is not recognized"
**Cause:** Old PowerShell version
**Fix:** Use full command:
```powershell
Invoke-RestMethod YOUR_URL | Invoke-Expression
```

### Problem: "Cannot download file"
**Cause:** Wrong URL in install.ps1 line 34
**Fix:**
- Open install.ps1 on GitHub
- Click pencil to edit
- Check line 34 URL is correct
- Commit changes

### Problem: "Access denied"
**Cause:** Repo or Gist is private
**Fix:**
- Go to repo settings
- Change to PUBLIC
- Save

### Problem: Install runs but no shortcut
**Cause:** Script failed silently
**Fix:**
- Check: `C:\Users\NAME\AppData\Local\OpnontiPro\`
- If files exist, create shortcut manually
- Or re-run install command

### Problem: App won't open from shortcut
**Cause:** Wrong browser path in launcher
**Fix:**
- Open PowerShell
- Run: `& "$env:LOCALAPPDATA\OpnontiPro\launch.ps1"`
- Check for errors

---

## 📊 **FINAL RESULT**

### Before (Manual Install):
```
1. Download ZIP from website
2. Extract files
3. Find installer
4. Run installer
5. Click Next Next Next
6. Wait for installation
7. Find shortcut
8. Launch

Time: 5 minutes | Steps: 8
```

### After (IRM Install):
```
1. irm bit.ly/opnonti | iex

Time: 20 seconds | Steps: 1
```

**That's 96% faster!** 🚀

---

## 🎉 **YOU'RE DONE!**

### What You Have Now:

✅ **Professional one-command installation**
✅ **GitHub repository** (free hosting)
✅ **Short URL** (easy to share)
✅ **Auto-installer** (creates shortcuts)
✅ **Works on any Windows PC**

### Your Install Command:
```powershell
irm bit.ly/opnonti | iex
```

**Users install instantly with ONE command!** ✨

---

## 📝 **COPY THIS TEMPLATE (For Sharing)**

```
═══════════════════════════════════════════════════════
  🎮 INSTALL OPNONTI PRO
═══════════════════════════════════════════════════════

One-command installation:

  irm bit.ly/opnonti | iex

(Open PowerShell and paste this command)

✨ What You Get:
  • 15 optimization features
  • AI-powered drag smoothing
  • Sound effects & animations
  • Free Fire optimized settings
  • Timer Resolution (0.5ms)
  • Windows Game Mode
  • GPU Scheduling

⏱️ Install time: 20 seconds
📦 Size: ~300 KB
🖥️ Works on: Windows 10/11

🔗 GitHub: github.com/YOUR_USERNAME/opnonti-pro

═══════════════════════════════════════════════════════
```

---

## 📚 **NEED MORE HELP?**

- **Visual guide:** `QUICK_VISUAL_GUIDE.txt`
- **Simple steps:** `SIMPLE_STEPS.txt`
- **Complete guide:** `STEP_BY_STEP_IRM.md`
- **Testing guide:** `HOW_TO_TEST.md`

---

## 🎯 **QUICK REFERENCE**

### Your URLs:
```
Repo:        https://github.com/YOUR_USERNAME/opnonti-pro
HTML Raw:    https://raw.githubusercontent.com/YOUR_USERNAME/opnonti-pro/main/index.html
PS1 Raw:     https://raw.githubusercontent.com/YOUR_USERNAME/opnonti-pro/main/install.ps1
Short URL:   bit.ly/opnonti (after creating)
```

### Your Commands:
```powershell
# Install
irm YOUR_URL | iex

# Or with short URL
irm bit.ly/opnonti | iex
```

### Installation Path:
```
C:\Users\USERNAME\AppData\Local\OpnontiPro\
```

---

## ✅ **SUCCESS = ALL CHECKED:**

- [ ] GitHub repo created & PUBLIC
- [ ] Files uploaded
- [ ] Line 34 edited
- [ ] Tested install command
- [ ] Shortcut created
- [ ] App launches
- [ ] Short URL created (optional)
- [ ] Ready to share!

**You now have professional-grade software distribution!** 🎉

---

**Questions?** Re-read the step that's confusing!

**Ready?** Start with Step 1 and follow along! 🚀
