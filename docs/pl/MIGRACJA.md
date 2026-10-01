# Migracja trzech repozytoriów

## CoinFlow

Przeniesiono wspólny model transakcji, kont, kategorii, celów i inwestycji oraz metryki salda, oszczędności, budżetu, kondycji i portfela. UI zapewnia pulpit oraz listę i formularz transakcji. Model zawiera wersję i osobną kolekcję wersji, przygotowaną pod pełne cofanie zmian.

Zaawansowane funkcje źródłowe, takie jak księga podwójna, import arkuszy, PDF, ML, wykrywanie anomalii, symulacje, reguły i roczne podsumowanie, wymagają kolejnych adapterów domenowych. Architektura przewiduje ich implementację bez powrotu do kodu Python.

## OpenTask

Przeniesiono workspace w postaci zestawu tablic, tablice, kolumny, karty, checklisty, komentarze, etykiety, terminy, członków, zależności, archiwizację, wyszukiwanie i drag and drop. Modele zachowują dane potrzebne dla widoków kalendarza, tabeli i osi czasu, które mogą zostać dodane jako alternatywne projekcje tego samego stanu.

## SecureVault-CLI

Przeniesiono inicjalizację sejfu, odblokowanie, dodawanie, listowanie i usuwanie wpisów, pokazywanie, kopiowanie, generator i ocenę siły hasła. Fernet zastąpiono natywnym dla przeglądarek AES-256-GCM. PBKDF2 ma 600 000 iteracji.

## Import starych danych

Automatyczny importer baz SQLite i plików JSON ze starych projektów nie jest częścią pierwszej wersji. Bezpieczna migracja wymaga jawnych migratorów schematu, walidacji Zod, raportu błędów i kopii źródła. Nie należy bezpośrednio kopiować baz do katalogu nowej aplikacji.
