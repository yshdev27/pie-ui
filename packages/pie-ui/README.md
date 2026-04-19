# @pieui/react

Expressive React components powered by design tokens. TypeScript-first, accessible by default.

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

`Button`, `Toggle`, `Checkbox`, `Stepper`, `Menu` (+ `MenuItem`, `MenuSeparator`), `Dropdown`, `Toolbar` (+ `ToolbarButton`, `ToolbarSeparator`), `TextArea`.

## Theming

Switch themes with a single attribute:

```html
<html data-pie-theme="dark">
```

Override any token:

```css
:root {
  --pie-accent: #0a84ff;
}
```

## Peer dependencies

`react >= 18`, `react-dom >= 18`.

## License

MIT
