# Changelog

## Unreleased

### Changed

- Added the shared SSR-safe `defineWebComponent()` registration helper with environment and duplicate-definition guards.

## [0.34.0] - 2026-08-14

### Added

- Added the exported SSR-safe `JBBaseComponent` fallback for web components imported in environments without `HTMLElement`.

### Changed

- Marked the `jb-core/theme` package as an ES module for consistent Node.js loading.

## [0.33.0] - 2026-08-14

### Added

- Added SSR-safe locale initialization, the exported `resolveLocale()` helper, and support for locale strings or `Intl.Locale` instances in `JBI18N` and `setLocale()`.
- Added `JBI18N.subscribe()` with cleanup support for locale-change listeners.
- Added the `jb-core/i18n/react` entry point with the `useJBI18N()` hook.
- Added configurable `JBDictionary` fallback languages and regional-locale lookup.

### Changed

- Changed locale defaults to preserve explicitly supplied region, calendar, and numbering-system options.
- Changed dictionary lookup to preserve falsy values and report keys missing from every fallback dictionary.
- Removed automatic `<html lang>` observation; consumers can update the shared locale explicitly with `i18n.setLocale()`.

## [0.32.0] - 2026-08-11

### Added

- add `parseNumberAttribute` to parse string attribute to number property

## [0.31.0] - 2026-08-10

### Added

- Added semantic `--jb-content-primary`, `--jb-content-secondary`, `--jb-content-inverse`, `--jb-surface-primary`, `--jb-surface-secondary`, and `--jb-surface-inverse` color tokens derived from the primitive palette.
- Documented semantic color mappings, intended usage, palette customization, and scoped theme overrides.

## [0.30.0] - 2026-07-14

### Added

- Added shared `--jb-control-height-xs`, `--jb-control-height-sm`, `--jb-control-height-md`, `--jb-control-height-lg`, and `--jb-control-height-xl` theme tokens for aligning interactive controls across components.
- Documented the shared control-height scale in the theme size guide.

### Fixed

- Registered radius-token `@property` initial values with equivalent pixel lengths while retaining rem-based inherited values.
