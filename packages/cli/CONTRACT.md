# Pie UI CLI Contract (v0.1 draft)

## Commands

- `pie-ui init`
  - Creates a `pie-ui.json` config in the current project
  - Validates package manager and framework
  - Sets default import aliases for component output

- `pie-ui add <component>`
  - Adds component source files into the consumer app
  - Injects required token imports and utility helpers
  - Supports: `button`, `input`, `textarea`, `card`, `dropdown`

## Future flags

- `--path <dir>` target output path
- `--force` overwrite existing files
- `--theme <light|dark|both>` seed theme tokens
