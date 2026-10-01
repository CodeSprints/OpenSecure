# Architektura

## Warstwy

`src/domain` zawiera modele oraz czyste reguły biznesowe. Nie importuje Vue ani Tauri.

`src/services` zawiera szyfrowanie, trwały zapis, import i eksport. Adapter pamięci wykrywa Tauri w czasie działania. Interfejs pozostaje taki sam na każdej platformie.

`src/stores` zarządza stanem aplikacji przez Pinia. Mutacje domenowe uruchamiają opóźniony zapis, aby ograniczyć operacje wejścia i wyjścia.

`src/views` oraz `src/components` tworzą prezentację Vue. Widoki korzystają ze sklepu i funkcji domenowych, bez bezpośredniej znajomości systemu plików.

`src-tauri` jest cienką powłoką natywną. Polecenia Rust odczytują i atomowo zapisują jeden dokument stanu w prywatnym katalogu aplikacji.

## Model danych

Korzeniem jest `AppData`. Zawiera `FinanceState`, `TaskState`, zaszyfrowaną kopertę sejfu i ustawienia. Identyfikatory są UUID. Daty są zapisane w ISO 8601. Kwoty są liczbami i w dalszej wersji produkcyjnej powinny przejść na jednostki najmniejsze waluty jako liczby całkowite.

## Spójna logika biznesowa

Trzy domeny łączy pulpit oraz wspólny cykl danych. Projekt może później odwoływać się do celu finansowego, a płatność może tworzyć zadanie kontrolne. Obecna architektura umożliwia dodanie takich automatyzacji jako jawnych zdarzeń domenowych bez zmiany UI i warstwy zapisu.

## RWD

Układ ma trzy progi zachowania. Desktop używa stałego panelu i wielokolumnowych siatek. Tablet ogranicza liczbę kolumn. Telefon używa dolnej nawigacji, wysuwanego menu, pełnej szerokości formularzy i poziomej tablicy Kanban. Minimalny wspierany rozmiar widoku to 320 px.

## WCAG

Interfejs używa semantycznych nagłówków, tabel, etykiet formularzy, nazw dostępności, widocznego fokusu i linku pomijającego. Każda funkcja ma obsługę klawiatury. Animacje respektują `prefers-reduced-motion`. Kolor nie jest jedynym nośnikiem informacji.
