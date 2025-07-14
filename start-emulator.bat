@echo off
title Android Emulator Launcher
echo Starting Android Emulator...

REM Set Android SDK path
set ANDROID_HOME=%LOCALAPPDATA%\Android\Sdk
set PATH=%PATH%;%ANDROID_HOME%\emulator;%ANDROID_HOME%\platform-tools

REM Check if Android SDK exists
if not exist "%ANDROID_HOME%" (
    echo ERROR: Android SDK not found at %ANDROID_HOME%
    pause
    exit /b 1
)

REM List and start emulator
echo Available emulators:
emulator -list-avds

REM Start the first available emulator
for /f "tokens=*" %%i in ('emulator -list-avds') do (
    echo Starting emulator: %%i
    start "" emulator -avd %%i
    goto :started
)

:started
echo Waiting for emulator to start...
timeout /t 5 /nobreak >nul

echo Checking connected devices:
adb devices

echo.
echo Emulator should be starting now!
echo You can close this window.
pause
