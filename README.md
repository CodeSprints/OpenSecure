# OpenSecure

OpenSecure łączy finanse osobiste, zarządzanie projektami i szyfrowany menedżer haseł w jednej aplikacji local-first. Projekt zastępuje interfejsy Tkinter i CLI wspólnym kodem Vue 3 + TypeScript + Tailwind CSS 4, opakowanym przez Tauri 2 dla systemów desktopowych i mobilnych.

## Start

```bash
npm install
npm run dev
```

## Jakość

```bash
npm run build
npm run test
npm run lint
npm run test:e2e
```

## Aplikacje natywne

```bash
npm run tauri dev
npm run tauri build
npm run tauri android init
npm run tauri ios init
```

Budowa Androida wymaga Android Studio i odpowiedniego SDK. Budowa iOS wymaga macOS oraz Xcode.

## Dokumentacja

- [Dokumentacja polska](docs/pl/README.md)
- [English documentation](docs/en/README.md)
- [Architektura](docs/pl/ARCHITEKTURA.md)
- [Bezpieczeństwo](docs/pl/BEZPIECZENSTWO.md)
- [Testy](docs/pl/TESTY.md)
- [Migracja funkcji](docs/pl/MIGRACJA.md)
