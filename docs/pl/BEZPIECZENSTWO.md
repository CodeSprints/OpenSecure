# Bezpieczeństwo

## Sejf

Zawartość sejfu jest serializowana, a następnie szyfrowana AES-256-GCM. Dla każdego zapisu powstaje nowy 96-bitowy wektor inicjalizujący. Sól ma 256 bitów. Klucz jest wyprowadzany przez PBKDF2-SHA-256 z 600 000 iteracji.

Weryfikator umożliwia szybkie odrzucenie błędnego hasła. W produkcji powinien zostać zastąpiony wartością uwierzytelnioną niezależnym kluczem, aby nie ujawniać skrótu zależnego od hasła. Aktualna koperta nie przechowuje hasła jawnie.

## Granice ochrony

Szyfrowanie chroni dane zapisane na dysku po zablokowaniu sejfu. Nie chroni przed złośliwym oprogramowaniem działającym z uprawnieniami użytkownika, przejętą przeglądarką, keyloggerem ani utratą hasła głównego. Skopiowane hasło może pozostać w schowku systemowym.

Dane finansów i zadań są lokalne, lecz nie są szyfrowane na poziomie aplikacji. Na urządzeniu współdzielonym należy włączyć szyfrowanie dysku i blokadę konta systemowego.

## Tauri

Polityka CSP zezwala domyślnie tylko na zasoby aplikacji. Backend udostępnia dwa polecenia o małej powierzchni: odczyt i zapis stanu. Zapis używa pliku tymczasowego i zmiany nazwy, aby ograniczyć ryzyko częściowego zapisu.

## Zalecenia wdrożeniowe

Wydania należy podpisywać, blokować wersje zależności plikiem lock, wykonywać audyt `npm audit` i `cargo audit`, generować SBOM oraz publikować sumy kontrolne. Przed synchronizacją chmurową trzeba dodać szyfrowanie całego dokumentu, wersjonowanie, rozwiązywanie konfliktów i uwierzytelnianie urządzeń.
