# @pieui/tokens

Design tokens and `theme.css` for [Pie UI](https://www.npmjs.com/package/@pieui/react). CSS custom properties plus a typed TypeScript object.

## Install

```bash
npm install @pieui/tokens
```

## Use

Load the stylesheet once at the root of your app:

```ts
import "@pieui/tokens/theme.css";
```

Use the typed tokens in code:

```ts
import { pieTokens } from "@pieui/tokens";

pieTokens.color.accent;   // "var(--pie-accent)"
pieTokens.radius.smooth;  // "var(--pie-radius-smooth)"
```

## What's inside

- **Colors** — surfaces, text, lines, accents, statuses (with dark mode via `[data-pie-theme="dark"]`)
- **Radii** — `sm`, `md`, `smooth` (16px), `lg`, `xl`, `full`
- **Shadows** — `min`, `sm`, `md`, `lg`
- **Spacing** — 4, 8, 12, 16, 20, 24, 32, 40, 48 (px)
- **Typography** — font stacks + size scale
- **Motion** — durations and easings; respects `prefers-reduced-motion`

## License

MIT
