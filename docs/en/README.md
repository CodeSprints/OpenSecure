# OpenSecure documentation

OpenSecure combines personal finance, project management, and an encrypted password vault. It replaces the three Python interfaces with one Vue 3, TypeScript, Tailwind CSS 4, and Tauri 2 codebase.

The application is local-first. The web build stores data within its browser origin. Desktop and mobile builds write an application data file through a small Rust adapter.

## Modules

The dashboard summarizes cash flow, savings rate, budget usage, financial health, project progress, and vault status. Finance handles income, expenses, categories, accounts, goals, and investments. Tasks provides multiple boards, Kanban columns, cards, priorities, labels, due dates, members, checklists, comments, dependencies, search, and drag and drop.

Vault encrypts its complete payload with AES-256-GCM. A key is derived from the master password with PBKDF2-SHA-256, a random salt, and 600,000 iterations. The master password is never stored.

## Guides

- `ARCHITECTURE.md` explains layers and data flow.
- `SECURITY.md` documents the threat model.
- `TESTING.md` defines the quality strategy.
- `MIGRATION.md` maps features from the source repositories.
- `RUNNING.md` covers web, desktop, and mobile builds.
