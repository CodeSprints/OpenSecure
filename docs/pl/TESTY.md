# Testy

## Poziomy

Testy jednostkowe Vitest obejmują metryki finansowe, agregację kategorii, wycenę portfela, ocenę hasła, postęp checklisty, wyszukiwanie kart, postęp tablicy, generator haseł oraz cykl szyfrowania i deszyfrowania sejfu.

Testy E2E Playwright sprawdzają uruchomienie, główną nawigację i najważniejsze widoki na pulpicie oraz profilu telefonu Pixel 7.

Kompilacja TypeScript w trybie ścisłym jest częścią polecenia budowy. ESLint odrzuca ostrzeżenia.

## Polecenia

```bash
npm run test
npm run test:watch
npm run test:e2e
npm run build
npm run lint
```

## Kryteria przed wydaniem

Wymagane są poprawne testy jednostkowe i E2E, brak błędów kompilatora i lintera, ręczny test klawiaturą, skan axe, kontrola kontrastu, test widoków 320, 768 i 1440 px oraz test aplikacji natywnej na docelowych systemach.
