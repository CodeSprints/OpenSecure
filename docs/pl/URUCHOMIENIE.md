# Uruchomienie i wydania

## Wymagania

Potrzebne są Node.js 22 lub nowszy i npm 10 lub nowszy. Dla Tauri potrzebny jest stabilny Rust oraz zależności systemowe opisane w dokumentacji Tauri 2.

## Web

`npm install` instaluje zależności. `npm run dev` uruchamia środowisko developerskie. `npm run build` tworzy statyczny pakiet. Serwer produkcyjny musi kierować cały ruch do `index.html` lub korzystać z zastosowanego routingu hash.

## Desktop

`npm run tauri dev` uruchamia powłokę natywną. `npm run tauri build` buduje instalator bieżącego systemu. Identyfikator pakietu to `pl.xmausix.opensecure`.

## Android i iOS

Pierwsze przygotowanie wykonują `npm run tauri android init` i `npm run tauri ios init`. Następnie używa się poleceń `tauri android dev`, `tauri android build`, `tauri ios dev` i `tauri ios build`. iOS można budować tylko na macOS.
