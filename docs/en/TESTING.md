# Testing

Vitest unit tests cover finance metrics, category aggregation, portfolio valuation, password scoring, checklist and board progress, card search, password generation, and vault encryption round trips.

Playwright checks startup and navigation on desktop Chromium and a Pixel 7 profile. TypeScript strict compilation and ESLint with zero tolerated warnings are release gates.

Run `npm run test`, `npm run test:e2e`, `npm run build`, and `npm run lint`. Before release, also test keyboard-only operation, axe results, contrast, 320, 768, and 1440 pixel layouts, and native builds on each target platform.
