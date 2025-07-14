# Android Emulator Launcher Script
Write-Host "Starting Android Emulator..." -ForegroundColor Green

# Set environment variables
$env:ANDROID_HOME = "$env:LOCALAPPDATA\Android\Sdk"
$env:ANDROID_NDK_ROOT = "$env:LOCALAPPDATA\Android\Sdk\ndk\29.0.13599879"
$env:PATH += ";$env:ANDROID_HOME\emulator;$env:ANDROID_HOME\platform-tools"

# Check if Android SDK exists
if (-not (Test-Path $env:ANDROID_HOME)) {
    Write-Host "Android SDK not found!" -ForegroundColor Red
    exit 1
}

# List available AVDs
Write-Host "Available devices:" -ForegroundColor Cyan
$avds = & emulator -list-avds 2>$null
if ($avds) {
    $avds | ForEach-Object { Write-Host "  - $_" -ForegroundColor White }
    
    # Start first available AVD
    $selectedAvd = $avds[0]
    Write-Host "Starting: $selectedAvd" -ForegroundColor Green
    
    # Start emulator in background
    Start-Process -FilePath "emulator" -ArgumentList "-avd", $selectedAvd
    
    Write-Host "Waiting for emulator..." -ForegroundColor Yellow
    Start-Sleep -Seconds 5
    
    # Check connection
    Write-Host "Checking devices:" -ForegroundColor Cyan
    & adb devices
} else {
    Write-Host "No AVDs found!" -ForegroundColor Red
}
