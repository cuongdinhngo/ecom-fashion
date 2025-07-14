# 🚀 Android Build Commands - Quick Reference

This file contains the essential commands for building and testing your Android app.

## 📋 Prerequisites Setup
```powershell
# Set environment variables (run this first)
$env:ANDROID_HOME = "$env:LOCALAPPDATA\Android\Sdk"
$env:ANDROID_NDK_ROOT = "$env:LOCALAPPDATA\Android\Sdk\ndk\29.0.13599879"
```

## 🏗️ Build Commands

### Frontend Build
```powershell
bun run build
```

### Android APK Build (Debug)
```powershell
bun tauri android build --debug
```

### Android APK Build (Release)
```powershell
bun tauri android build --release
```

## 📱 Emulator & Testing

### Start Emulator
```powershell
# Option 1: Use the provided script
powershell -ExecutionPolicy Bypass -File "start-emulator.ps1"

# Option 2: Manual command
emulator -avd Medium_Phone_API_36.0
```

### Install & Test APK
```powershell
# Check connected devices
adb devices

# Install APK
adb install -r "src-tauri\gen\android\app\build\outputs\apk\universal\debug\app-universal-debug.apk"

# Launch app
adb shell am start -n com.ecomfashion.mobile/com.ecomfashion.mobile.MainActivity
```

## 🔧 All-in-One Build Script
```powershell
# Run the complete build and install process
powershell -ExecutionPolicy Bypass -File "build-android.ps1"
```

## 📂 Output Locations

### Debug APK
```
src-tauri\gen\android\app\build\outputs\apk\universal\debug\app-universal-debug.apk
```

### Release APK
```
src-tauri\gen\android\app\build\outputs\apk\universal\release\app-universal-release.apk
```

### AAB Bundle
```
src-tauri\gen\android\app\build\outputs\bundle\universalDebug\app-universal-debug.aab
```

## 🐛 Debug Commands
```powershell
# View app logs
adb logcat | findstr -i "ecom\|tauri"

# Take screenshot
adb shell screencap -p > screenshot.png

# Check running processes
adb shell "ps | grep ecom"
```

## ⚠️ Important Notes

1. **Environment Variables**: Always set `ANDROID_HOME` and `ANDROID_NDK_ROOT` before building
2. **Cargo Config**: The `.cargo/config.toml` file uses environment variables (no hardcoded paths)
3. **Debug vs Release**: Debug APKs are automatically signed for testing
4. **Emulator**: Must be running before installing APK
