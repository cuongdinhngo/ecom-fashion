# Android Build Script for Tauri App
# This script sets up environment and builds the Android APK

Write-Host "🚀 Building Android APK..." -ForegroundColor Green

# Set Android environment variables
$env:ANDROID_HOME = "$env:LOCALAPPDATA\Android\Sdk"
$env:ANDROID_NDK_ROOT = "$env:LOCALAPPDATA\Android\Sdk\ndk\29.0.13599879"
$env:PATH += ";$env:ANDROID_HOME\emulator;$env:ANDROID_HOME\platform-tools"

# Verify environment
Write-Host "📋 Environment Check:" -ForegroundColor Cyan
Write-Host "  ANDROID_HOME: $env:ANDROID_HOME" -ForegroundColor White
Write-Host "  ANDROID_NDK_ROOT: $env:ANDROID_NDK_ROOT" -ForegroundColor White

if (-not (Test-Path $env:ANDROID_HOME)) {
    Write-Host "❌ Android SDK not found!" -ForegroundColor Red
    exit 1
}

if (-not (Test-Path $env:ANDROID_NDK_ROOT)) {
    Write-Host "❌ Android NDK not found!" -ForegroundColor Red
    exit 1
}

Write-Host "✅ Environment ready!" -ForegroundColor Green

# Build frontend first
Write-Host "🏗️ Building frontend..." -ForegroundColor Yellow
& bun run build

if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Frontend build failed!" -ForegroundColor Red
    exit 1
}

Write-Host "✅ Frontend built successfully!" -ForegroundColor Green

# Build Android APK
Write-Host "📱 Building Android APK..." -ForegroundColor Yellow
& bun tauri android build --debug

if ($LASTEXITCODE -eq 0) {
    Write-Host "✅ Android APK built successfully!" -ForegroundColor Green
    Write-Host "📍 APK Location: src-tauri\gen\android\app\build\outputs\apk\universal\debug\" -ForegroundColor Cyan
    
    # Check if emulator is running
    $devices = & adb devices 2>$null | Select-String "emulator"
    if ($devices) {
        Write-Host "📱 Emulator detected! Installing APK..." -ForegroundColor Yellow
        & adb install -r "src-tauri\gen\android\app\build\outputs\apk\universal\debug\app-universal-debug.apk"
        
        if ($LASTEXITCODE -eq 0) {
            Write-Host "✅ APK installed successfully!" -ForegroundColor Green
            Write-Host "🚀 Launching app..." -ForegroundColor Yellow
            & adb shell am start -n com.ecomfashion.mobile/com.ecomfashion.mobile.MainActivity
        }
    } else {
        Write-Host "ℹ️ No emulator detected. APK ready for manual installation." -ForegroundColor Yellow
    }
} else {
    Write-Host "❌ Android build failed!" -ForegroundColor Red
    exit 1
}
