# 💿 Installation & Usage Guide

## 🚀 Quick Start (2 Methods)

### Method 1: Open Built Version (Easiest - No Installation!)

**Just open the file:**
1. Navigate to the `dist` folder
2. Find `index.html`
3. **Double-click** `index.html` 
4. It opens in your browser
5. Start using Opnonti Pro! 🎉

**That's it!** The app runs entirely in your browser, no installation needed.

---

### Method 2: Run Development Server (For developers)

**Requirements:**
- Node.js (version 16 or higher)
- npm (comes with Node.js)

**Steps:**

1. **Install Node.js** (if you don't have it)
   - Go to https://nodejs.org/
   - Download and install the LTS version
   - Verify: Open terminal/command prompt and type:
     ```bash
     node --version
     npm --version
     ```

2. **Navigate to project folder**
   ```bash
   cd path/to/opnonti-pro
   ```

3. **Install dependencies**
   ```bash
   npm install
   ```
   (This may take 1-2 minutes)

4. **Start development server**
   ```bash
   npm run dev
   ```

5. **Open in browser**
   - The terminal will show: `Local: http://localhost:5173/`
   - Open that URL in your browser
   - The app will load!

6. **Stop the server**
   - Press `Ctrl + C` in the terminal

---

## 📂 Project Structure

```
opnonti-pro/
├── dist/
│   └── index.html          ← Open this file to use the app!
├── src/
│   ├── components/         ← React components
│   ├── App.tsx            ← Main application
│   └── index.css          ← Styles
├── index.html             ← Template file
├── package.json           ← Dependencies
└── README.md              ← Documentation
```

---

## 🌐 Method 1 Details: Using the Built Version

### Step-by-Step:

1. **Locate the file:**
   - Find the project folder
   - Open the `dist` folder
   - You'll see `index.html`

2. **Open it:**
   - **Windows:** Right-click → Open with → Choose your browser (Chrome, Firefox, Edge)
   - **Mac:** Right-click → Open With → Choose your browser (Chrome, Safari, Firefox)
   - **Linux:** Right-click → Open With → Choose your browser
   - **OR:** Just drag and drop `index.html` into an open browser window

3. **That's it!**
   - The app loads in your browser
   - No internet connection needed
   - No server required
   - Works 100% offline

### What You'll See:

```
┌─────────────────────────────────────────┐
│  ⚡ OPNONTI PRO                         │
│  Advanced Input Optimization Suite      │
│                                         │
│  [Gaming] [General] [Custom]           │
│  Status: STANDARD                       │
│  [▶ Activate]                          │
└─────────────────────────────────────────┘
```

---

## 🛠️ Method 2 Details: Development Server

### Why use this method?
- Live reload when you change code
- Better for development/customization
- Access to hot module replacement

### Installation Commands:

**Windows (Command Prompt or PowerShell):**
```cmd
# Navigate to project
cd C:\Users\YourName\Downloads\opnonti-pro

# Install dependencies
npm install

# Start server
npm run dev
```

**Mac/Linux (Terminal):**
```bash
# Navigate to project
cd ~/Downloads/opnonti-pro

# Install dependencies
npm install

# Start server
npm run dev
```

### After `npm run dev`:

You'll see:
```
VITE v7.3.2  ready in 123 ms

➜  Local:   http://localhost:5173/
➜  Network: use --host to expose
```

**Open the Local URL** in your browser!

---

## 🔧 Building (Optional)

If you want to rebuild the app after making changes:

```bash
npm run build
```

This creates a new `dist/index.html` file with your changes.

---

## 📱 Opening the App

### Recommended Browsers:
- ✅ Google Chrome (recommended)
- ✅ Microsoft Edge
- ✅ Firefox
- ✅ Safari (Mac)
- ✅ Brave
- ✅ Opera

### NOT Recommended:
- ❌ Internet Explorer (too old)
- ❌ Very old browser versions

---

## 🎮 First Time Setup

Once the app opens:

1. **Select Profile:**
   - Click **"Gaming"** (recommended for Free Fire)

2. **Configure Features:**
   - Toggle **"AI Drag Smoothing"** ON
   - Toggle **"Free Fire Mode"** ON
   - Set smoothing to **70%**
   - Set prediction to **45%**

3. **Activate:**
   - Click the big **"▶ Activate"** button
   - Status changes to "OPTIMIZED"

4. **Done!**
   - Your settings are now active
   - Start gaming with optimized input

---

## 📋 Troubleshooting

### "npm is not recognized"
**Problem:** Node.js not installed or not in PATH

**Solution:**
1. Install Node.js from https://nodejs.org/
2. Restart your terminal/command prompt
3. Try again

---

### "Module not found" errors
**Problem:** Dependencies not installed

**Solution:**
```bash
npm install
```

---

### "Port 5173 already in use"
**Problem:** Another app using that port

**Solution:**
- Close other apps using port 5173
- OR change the port in `vite.config.ts`
- OR just use Method 1 (open dist/index.html)

---

### App doesn't load / blank page
**Problem:** Browser compatibility or file path issue

**Solution:**
1. Try a different browser (Chrome recommended)
2. Make sure you're opening `dist/index.html` (not just `index.html`)
3. Check browser console (F12) for errors

---

### Features don't work
**Problem:** This is a frontend demo - it doesn't actually change system settings

**Solution:**
- This is a UI demonstration
- It shows how the tool would work
- To actually optimize your system, you'd need the Windows PowerShell version or a native app
- This web version is for visualizing and configuring settings

---

## 🖥️ System Requirements

### Minimum:
- **OS:** Windows 7+, macOS 10.12+, Linux (any recent)
- **Browser:** Chrome 90+, Firefox 88+, Safari 14+, Edge 90+
- **RAM:** 2GB
- **Storage:** 1MB for the app

### Recommended (for dev server):
- **OS:** Windows 10+, macOS 11+, Linux (recent)
- **Browser:** Latest Chrome or Edge
- **Node.js:** Version 16 or higher
- **RAM:** 4GB
- **Storage:** 500MB for dependencies

---

## 🎯 Quick Reference

### Just Want to Use It:
```
1. Open: dist/index.html
2. Configure: Toggle features
3. Activate: Click activate button
4. Done!
```

### Want to Develop:
```bash
npm install
npm run dev
# Open http://localhost:5173/
```

### Want to Build:
```bash
npm run build
# Check dist/index.html
```

---

## 📞 Need Help?

### Check these in order:

1. **Read the error message** - It usually tells you what's wrong
2. **Check browser console** - Press F12, click Console tab
3. **Try different browser** - Chrome recommended
4. **Use Method 1** - dist/index.html always works
5. **Check documentation** - README.md has more info

---

## 🎉 Success!

If you can see the Opnonti Pro interface with the gold theme and all the buttons, **you're all set!**

Start optimizing your Free Fire gameplay! 🔥🎮

---

## 📝 Quick Start Commands

**Just using it:**
```
Open: dist/index.html in browser
```

**Development:**
```bash
npm install
npm run dev
```

**Building:**
```bash
npm run build
```

That's it! 🚀
