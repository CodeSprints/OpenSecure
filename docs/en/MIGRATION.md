# Repository migration

CoinFlow contributes transactions, accounts, categories, goals, investments, and core dashboard metrics. The model includes version fields and a version collection for future full rollback support. Advanced double-entry accounting, spreadsheet import, PDF reports, ML forecasts, anomaly detection, simulation, rules, and annual review need additional TypeScript domain adapters.

OpenTask contributes workspaces represented as boards, columns, cards, checklists, comments, labels, due dates, members, dependencies, archiving, search, and drag and drop. Calendar, table, and timeline can be added as projections of the same model.

SecureVault-CLI contributes vault initialization, unlocking, entry management, reveal, copy, password generation, and strength assessment. Browser-native AES-256-GCM replaces Fernet.

Legacy SQLite and JSON import is not automatic in this release. Safe migration requires explicit schema migrators, Zod validation, error reports, and source backups.
