# Architecture

`src/domain` contains framework-independent models and pure business rules. `src/services` provides encryption and platform storage adapters. `src/stores` owns reactive application state and persistence. `src/views` and `src/components` form the accessible Vue presentation layer. `src-tauri` is a narrow native shell with commands for atomic state loading and saving.

`AppData` is the root document. It includes finance state, task state, an encrypted vault envelope, and settings. Entities use UUID values and ISO 8601 dates.

Desktop uses a persistent sidebar and multi-column layouts. Tablet reduces column count. Mobile uses bottom navigation, a drawer, full-width forms, and a horizontally scrollable Kanban board. The minimum supported viewport width is 320 pixels.

Accessibility uses semantic headings, labelled inputs, visible focus, a skip link, keyboard access, reduced-motion support, and text alternatives. Color is not the sole information channel.
