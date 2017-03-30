'Start Appium and Android emulator'
Start-Process -FilePath emulator -ArgumentList "-avd Pixel_API_25" -NoNewWindow
Start-Process -FilePath appium -NoNewWindow