# Changelog

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
