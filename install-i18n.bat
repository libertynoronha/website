@echo off
REM Installation script for i18n packages
REM This script installs the required packages for internationalization support

echo Installing i18next and react-i18next packages...
npm install i18next react-i18next

if %errorlevel% equ 0 (
    echo.
    echo ✓ Packages installed successfully!
    echo.
    echo Next steps:
    echo 1. Run: npm run dev
    echo 2. Open your browser and check if there's a language switcher in the header
    echo 3. Test clicking the language buttons (🇧🇷 🇺🇸 🇪🇸)
    echo.
) else (
    echo.
    echo ✗ Installation failed. Please check the error above.
    echo.
    echo Try running manually:
    echo   npm install i18next react-i18next
    echo.
)

pause
