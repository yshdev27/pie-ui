# Pie UI

Expressive React component library powered by design tokens. TypeScript-first, accessible by default.

## Packages

| Package | Version | Purpose |
| --- | --- | --- |
| [`@pieui/react`](./packages/pie-ui) | [![npm](https://img.shields.io/npm/v/@pieui/react.svg)](https://www.npmjs.com/package/@pieui/react) | Components |
| [`@pieui/tokens`](./packages/tokens) | [![npm](https://img.shields.io/npm/v/@pieui/tokens.svg)](https://www.npmjs.com/package/@pieui/tokens) | Design tokens + `theme.css` |

## Install

```bash
npm install @pieui/react @pieui/tokens
```

## Use

Import both stylesheets once at the root of your app:

```ts
import "@pieui/tokens/theme.css";
import "@pieui/react/styles.css";
```

Then render:

```tsx
import { Button, TextArea } from "@pieui/react";

export default function App() {
  return (
    <>
      <Button variant="primary">Continue</Button>
      <TextArea placeholder="Type Here" />
    </>
  );
}
```

## Components

`Button` · `Toggle` · `Checkbox` · `Stepper` · `Menu` · `PullDownButton` · `Toolbar` · `TextArea`

## Theming

```html
<html data-pie-theme="dark">
```

Override any token as a CSS custom property:

```css
:root {
  --pie-accent: #0a84ff;
  --pie-radius-lg: 22px;
}
```

## Development

```bash
npm install
npm run dev           # docs site at http://localhost:3000
npm run build         # builds every workspace
npm run typecheck
```

## Monorepo layout

- `apps/docs` — Next.js documentation site, also the first real consumer
- `packages/pie-ui` — `@pieui/react` source
- `packages/tokens` — `@pieui/tokens` source

## License

MIT
