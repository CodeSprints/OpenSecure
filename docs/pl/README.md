# Dokumentacja OpenSecure

## Cel

OpenSecure jest prywatnym centrum codziennej pracy. Łączy trzy domeny:

- finanse z CoinFlow,
- projekty i zadania z OpenTask,
- bezpieczne dane dostępowe z SecureVault-CLI.

Aplikacja działa z jednego kodu jako witryna, PWA-ready frontend, program desktopowy Tauri oraz aplikacja mobilna Tauri. Dane pozostają lokalnie. W przeglądarce trafiają do pamięci origin, a w Tauri do katalogu danych aplikacji.

## Moduły

### Pulpit

Pulpit pokazuje saldo, poziom oszczędności, wykonanie budżetu, ocenę kondycji finansowej, strukturę wydatków, postęp projektu oraz stan sejfu.

### Finanse

Moduł obsługuje przychody i wydatki, kategorie, konta, cele i portfel inwestycyjny. Obliczenia domenowe nie zależą od interfejsu, dzięki czemu można je testować osobno.

### Zadania

Moduł zawiera wiele tablic, kolumny Kanban, karty, priorytety, etykiety, terminy, członków, checklisty, komentarze, zależności, wyszukiwanie i przenoszenie kart.

### Sejf

Sejf szyfruje cały zbiór wpisów przez AES-256-GCM. Klucz pochodzi z hasła głównego przy użyciu PBKDF2-SHA-256, losowej soli i 600 000 iteracji. Hasło główne nie jest zapisywane.

## Dokumenty

- `ARCHITEKTURA.md` opisuje warstwy i przepływ danych.
- `BEZPIECZENSTWO.md` opisuje model zagrożeń i ograniczenia.
- `TESTY.md` opisuje strategię jakości.
- `MIGRACJA.md` mapuje źródłowe funkcje na nową aplikację.
- `URUCHOMIENIE.md` prowadzi przez środowiska web, desktop i mobile.
