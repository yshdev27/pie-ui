# Pie UI

Pie UI is an expressive, accessible React component library powered by design tokens. Apple-inspired surfaces, token-driven styling, and keyboard-first interactions — built for React 19.

## Packages

| Package            | Description                                                 |
| ------------------ | ----------------------------------------------------------- |
| `@pieui/react`    | React component library (Button, Menu, Toggle, …)           |
| `@pieui/tokens`   | CSS variables (`theme.css`) and a typed token object        |
| `@pieui/cli`      | Upcoming scaffolding CLI (`init`, `add`)                    |

## Quick start

```bash
npm install @pieui/react @pieui/tokens
```

Import both stylesheets once at the root of your app:

```ts
import "@pieui/tokens/theme.css";
import "@pieui/react/styles.css";
```

Render a component:

```tsx
import { Button, Toggle } from "@pieui/react";

export default function Example() {
  return (
    <div style={{ display: "flex", gap: 12 }}>
      <Button variant="primary">Continue</Button>
      <Toggle defaultChecked aria-label="Enable sync" />
    </div>
  );
}
```

## Components

- `Button` — primary, secondary, tinted, ghost, destructive, with sm/md/lg sizes and loading state
- `Toggle` — controlled/uncontrolled switch with `role="switch"`
- `Checkbox` — binary selection with `indeterminate` state
- `Stepper` — bounded numeric input with arrow keys and hold-to-repeat
- `Menu`, `MenuItem`, `MenuSeparator` — 360px vertical menu matching the Pie UI spec
- `PullDownButton` — trigger + menu with outside-click and Escape handling
- `Toolbar`, `ToolbarButton`, `ToolbarSeparator` — roving-focus toolbar
- `TextArea` — multi-line text input with 16px Smooth radius, invalid state, and optional autoGrow

## Theming

Switch themes with a single attribute:

```html
<html data-pie-theme="dark">
```

Override individual tokens:

```css
:root {
  --pie-accent: #0a84ff;
  --pie-radius-lg: 22px;
}
```

## Development

```bash
npm install
npm run dev           # runs the docs site at http://localhost:3000
npm run build         # builds every workspace
npm run typecheck     # typechecks every workspace
```

## Monorepo layout

- `apps/docs` — Next.js documentation website, also the first real consumer of `@pieui/react`
- `packages/pie-ui` — the React component library (source + `styles.css`)
- `packages/tokens` — design tokens and `theme.css`
- `packages/cli` — the `pie-ui` CLI (planned)

## Release notes

### v0.2.0 — 2026-04-18

- `TextArea` component with controlled/uncontrolled value, invalid and disabled states, and an optional `autoGrow` mode
- New tokens: `--pie-radius-smooth` (16px) and `--pie-border-secondary`
- Docs page for Text area with variants, anatomy, and API reference

### v0.1.0 — 2026-04-17

- Seven fully implemented components with accessible defaults
- Token stylesheet with light + dark themes
- Docs site with foundations, component API reference, and usage guidelines
- Production-ready SSR: the docs site statically prerenders every component page
