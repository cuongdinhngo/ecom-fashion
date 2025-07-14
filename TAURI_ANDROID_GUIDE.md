# Tauri Android Development Guide for Nuxt.js E-commerce App

This guide provides step-by-step instructions for setting up, building, and deploying a Nuxt.js e-commerce application as an Android app using Tauri.

## 📋 Prerequisites

### System Requirements
- **Operating System**: Windows 10/11 with Developer Mode enabled
- **Node.js**: Version 18 or higher
- **Bun**: Package manager (alternative to npm/yarn)
- **Android Studio**: Latest version with Android SDK
- **Java Development Kit**: JDK 17 or higher
- **Rust**: Latest stable version

### Android Development Setup
1. **Install Android Studio**
   - Download from [Android Studio website](https://developer.android.com/studio)
   - Install Android SDK, Android SDK Platform-Tools, and Android SDK Build-Tools
   - Install Android NDK (version 29.0.13599879 recommended)

2. **Set Environment Variables**
   ```powershell
   $env:ANDROID_HOME = "$env:LOCALAPPDATA\Android\Sdk"
   $env:ANDROID_NDK_ROOT = "$env:LOCALAPPDATA\Android\Sdk\ndk\29.0.13599879"
   ```

3. **Enable Windows Developer Mode**
   - Go to Settings → Update & Security → For developers
   - Turn on "Developer Mode"
   - This is required for symbolic links used in the build process

## 🚀 Project Setup

### 1. Initialize the Nuxt.js Project
```bash
# Create new Nuxt.js project
npx nuxi@latest init ecom-fashion
cd ecom-fashion

# Install dependencies with Bun
bun install

# Add required modules
bun add vuetify-nuxt-module @vueuse/nuxt nuxt-charts
bun add @mdi/font
```

### 2. Configure Nuxt.js for Mobile & Static Generation

Create/update `nuxt.config.ts`:
```typescript
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  modules: ['vuetify-nuxt-module', '@vueuse/nuxt', 'nuxt-charts'],
  css: [
    '~/assets/styles/main.scss',
    '@mdi/font/css/materialdesignicons.css',
  ],
  ssr: false,
  nitro: {
    preset: 'static',
    prerender: {
      routes: ['/']
    }
  },
  app: {
    baseURL: '',
    head: {
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no' },
        { name: 'theme-color', content: '#1976d2' },
        { name: 'apple-mobile-web-app-capable', content: 'yes' },
        { name: 'apple-mobile-web-app-status-bar-style', content: 'default' }
      ],
      link: [
        {
          rel: 'icon',
          type: 'image/svg+xml',
          href: '/logo.svg'
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;400;600;700&display=swap'
        }
      ]
    }
  },
  vuetify: {
    moduleOptions: {},
    vuetifyOptions: './vuetify.config.ts'
  }
})
```

### 3. Initialize Tauri
```bash
# Install Tauri CLI
bun add -D @tauri-apps/cli

# Initialize Tauri in the project
bun tauri init
```

### 4. Configure Tauri for Android

Update `src-tauri/tauri.conf.json`:
```json
{
  "$schema": "../node_modules/@tauri-apps/cli/config.schema.json",
  "productName": "Ecom Fashion",
  "version": "0.1.0",
  "identifier": "com.ecomfashion.mobile",
  "build": {
    "frontendDist": "../.output/public",
    "devUrl": "http://localhost:3000",
    "beforeDevCommand": "bun dev",
    "beforeBuildCommand": "bun run build"
  },
  "app": {
    "windows": [
      {
        "title": "Ecom Fashion",
        "width": 800,
        "height": 600,
        "resizable": true,
        "fullscreen": false
      }
    ],
    "security": {
      "csp": null
    }
  },
  "plugins": {},
  "bundle": {
    "active": true,
    "targets": "all",
    "icon": [
      "icons/32x32.png",
      "icons/128x128.png",
      "icons/128x128@2x.png",
      "icons/icon.icns",
      "icons/icon.ico"
    ]
  }
}
```

### 5. Configure Rust Entry Point

Update `src-tauri/src/lib.rs`:
```rust
// Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
#[tauri::command]
fn greet(name: &str) -> String {
    format!("Hello, {}! You've been greeted from Rust!", name)
}

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![greet])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
```

### 6. Update Package.json Scripts

Add the following scripts to `package.json`:
```json
{
  "scripts": {
    "tauri": "tauri",
    "tauri:dev": "tauri dev",
    "tauri:build": "tauri build",
    "tauri:android": "tauri android build --debug --target aarch64 --apk"
  }
}
```

## 🔧 Build Process

### 1. Build the Frontend
```bash
# Build the Nuxt.js application for static deployment
bun run build
```

This will create:
- `.output/public/index.html` - Main entry point
- `.output/public/_nuxt/` - Bundled assets
- `.output/public/images/` - Static images
- All other prerendered routes

### 2. Initialize Android Target
```bash
# Initialize Android development environment
bun tauri android init
```

### 3. Build Android APK
```bash
# Set environment variables and build APK
$env:ANDROID_HOME = "$env:LOCALAPPDATA\Android\Sdk"
$env:ANDROID_NDK_ROOT = "$env:LOCALAPPDATA\Android\Sdk\ndk\29.0.13599879"
bun tauri android build --debug --target aarch64 --apk
```

**Note**: The `.cargo/config.toml` file uses environment variables instead of hardcoded paths, making it portable across different machines and users.

## 📱 Testing & Deployment

### Alternative Emulator Options (No Android Studio Required)

#### 1. Command Line Emulator
```powershell
# Set environment variables
$env:ANDROID_HOME = "$env:LOCALAPPDATA\Android\Sdk"
$env:PATH += ";$env:ANDROID_HOME\emulator;$env:ANDROID_HOME\platform-tools"

# List available emulators
emulator -list-avds

# Start specific emulator
emulator -avd Your_AVD_Name
```

#### 2. Use the Provided Script
Run the included PowerShell script:
```powershell
powershell -ExecutionPolicy Bypass -File "start-emulator.ps1"
```

#### 3. Third-Party Emulators
- **Genymotion**: Fast, professional emulator (https://www.genymotion.com/)
- **BlueStacks**: User-friendly, gaming-focused (https://www.bluestacks.com/)
- **NoxPlayer**: Lightweight alternative (https://www.bignox.com/)
- **LDPlayer**: Another reliable option (https://www.ldplayer.net/)

### 1. Install on Android Device
```bash
# Install the APK on connected Android device
adb install -r "src-tauri\gen\android\app\build\outputs\apk\universal\debug\app-universal-debug.apk"
```

### 2. Launch the App
```bash
# Launch the installed app
adb shell am start -n com.ecomfashion.mobile/com.ecomfashion.mobile.MainActivity
```

### 3. Debug and Monitor
```bash
# Check if app is running
adb shell "ps | grep ecom"

# Monitor app logs
adb logcat | findstr -i "ecom\|tauri"

# Take screenshot for verification
adb shell screencap -p > screenshot.png
```

## 🛠️ Common Issues & Solutions

### Issue 1: "asset not found: index.html"
**Solution**: Ensure Nuxt.js is configured with static preset:
```typescript
nitro: {
  preset: 'static',
  prerender: {
    routes: ['/']
  }
}
```

### Issue 2: Build fails with symbolic link errors
**Solution**: Enable Windows Developer Mode in system settings.

### Issue 3: Android NDK not found
**Solution**: Install Android NDK through Android Studio and set environment variables:
```powershell
$env:ANDROID_NDK_ROOT = "$env:LOCALAPPDATA\Android\Sdk\ndk\29.0.13599879"
```

### Issue 4: Tauri log plugin crashes
**Solution**: Remove log plugin from `Cargo.toml` and `lib.rs` if not needed.

## 📊 Project Structure

```
ecom-fashion/
├── .output/
│   └── public/           # Static build output (Tauri frontend)
│       ├── index.html    # Main entry point
│       ├── _nuxt/       # Bundled assets
│       └── images/      # Static images
├── src-tauri/
│   ├── src/
│   │   └── lib.rs       # Rust entry point
│   ├── tauri.conf.json  # Tauri configuration
│   └── gen/android/     # Generated Android project
├── components/          # Vue components
├── pages/              # Nuxt.js pages
├── layouts/            # Layout components
├── composables/        # Composable functions
├── nuxt.config.ts      # Nuxt.js configuration
└── package.json        # Dependencies and scripts
```

## 🎯 Key Configuration Points

1. **Frontend Build Path**: `frontendDist: "../.output/public"`
2. **Static Generation**: `nitro: { preset: 'static' }`
3. **Mobile Meta Tags**: Viewport, theme-color, apple-mobile-web-app settings
4. **SSR Disabled**: `ssr: false` for SPA mode
5. **App Identifier**: `com.ecomfashion.mobile`

## 📝 Development Workflow

1. **Development**: `bun dev` - Start Nuxt.js development server
2. **Build Frontend**: `bun run build` - Generate static files
3. **Build Android**: `bun tauri android build --debug --target aarch64 --apk`
4. **Test**: Install APK and test on device
5. **Debug**: Use ADB logs and Chrome DevTools for debugging

## 🔍 Verification Steps

After successful build:
- ✅ APK file created in `src-tauri/gen/android/app/build/outputs/apk/`
- ✅ App installs and launches on Android device
- ✅ No "asset not found" errors in logs
- ✅ Web content displays correctly in mobile WebView
- ✅ All Vue.js components and Vuetify UI elements work

## 🚀 Production Deployment

For production builds:
1. Change `--debug` to `--release` in build command
2. Sign the APK with your keystore
3. Optimize assets and enable compression
4. Test on multiple Android devices and versions

---

This guide provides a complete workflow for developing and deploying a Nuxt.js e-commerce application as an Android app using Tauri. Follow these steps sequentially for best results.
