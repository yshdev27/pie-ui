import Link from "next/link";
import { InstallSnippet } from "./_components/install-snippet";
import {
  ButtonPreview,
  CheckboxPreview,
  MenuPreview,
  StepperPreview,
  TextAreaPreview,
  TogglePreview,
  ToolbarPreview,
} from "./_components/component-previews";

const features = [
  {
    title: "Token-driven",
    description:
      "Every component consumes a single source of truth — from color to motion.",
  },
  {
    title: "Accessible by default",
    description:
      "Focus rings, keyboard bindings, and ARIA roles baked in, never bolted on.",
  },
  {
    title: "Tree-shakeable",
    description:
      "Import only what you render. ESM-first and optimized for modern bundlers.",
  },
  {
    title: "Themeable",
    description:
      "Swap themes with a single data attribute. Light and dark out of the box.",
  },
];

const showcase = [
  {
    name: "Button",
    href: "/components/button",
    description: "Primary, secondary, tinted and destructive variants.",
    render: <ButtonPreview>Continue</ButtonPreview>,
  },
  {
    name: "Toggle",
    href: "/components/toggle",
    description: "Instant on/off with haptic-feeling motion.",
    render: <TogglePreview on />,
  },
  {
    name: "Checkbox",
    href: "/components/checkbox",
    description: "Selection with indeterminate support.",
    render: <CheckboxPreview state="checked" label="Accept terms" />,
  },
  {
    name: "Stepper",
    href: "/components/stepper",
    description: "Bounded numeric input with hold-to-repeat.",
    render: <StepperPreview value={4} />,
  },
  {
    name: "Menu",
    href: "/components/menu",
    description: "Actions, options, and destinations — grouped cleanly.",
    render: (
      <div className="scale-[0.55] origin-center">
        <MenuPreview />
      </div>
    ),
  },
  {
    name: "Toolbar",
    href: "/components/toolbar",
    description: "Compact controls for contextual editing.",
    render: <ToolbarPreview />,
  },
  {
    name: "Text area",
    href: "/components/textarea",
    description: "Multi-line text entry with a 16px Smooth radius.",
    render: <TextAreaPreview placeholder="Type Here" />,
  },
];

export default function HomePage() {
  return (
    <section className="doc-page">
      <section className="hero">
        <p className="eyebrow">Pie UI · v0.2</p>
        <h1>Design for calm, clarity, and craft.</h1>
        <p className="lead">
          Pie UI is an expressive, accessible React component library powered by
          design tokens. Build interfaces that feel considered from the first
          pixel — all with three lines of install.
        </p>

        <div className="link-row">
          <Link className="button-link" href="/getting-started">
            Get started
          </Link>
          <Link className="button-link secondary" href="/components">
            Browse components
          </Link>
        </div>

        <div className="stack">
          <InstallSnippet packages="@pieui/react @pieui/tokens" />
        </div>

        <div className="pill-row">
          <span className="pill">
            <span className="dot" /> v0.2.0
          </span>
          <span className="pill">React 19</span>
          <span className="pill">TypeScript first</span>
          <span className="pill">WCAG 2.2 AA</span>
          <span className="pill">ESM · CJS</span>
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <h2>Why Pie UI</h2>
          <p>Principles we optimize every component for.</p>
        </div>
        <div className="card-grid">
          {features.map((f) => (
            <article className="doc-card" key={f.title}>
              <h3>{f.title}</h3>
              <p>{f.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <h2>Built to compose</h2>
          <p>Preview a few of the components shipping in v0.2.</p>
        </div>
        <div className="showcase">
          {showcase.map((s) => (
            <Link key={s.name} href={s.href} className="showcase-card">
              <div className="showcase-art">{s.render}</div>
              <div className="showcase-body">
                <h3>{s.name}</h3>
                <p>{s.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <h2>Start in under a minute</h2>
          <p>Three commands. One import. You&apos;re shipping.</p>
        </div>
        <div className="card-grid">
          <article className="doc-card">
            <p className="text-[0.78rem] font-semibold uppercase tracking-wider text-[#8e8e93]">
              Step 1
            </p>
            <h3>Install the package</h3>
            <p>Add Pie UI and its tokens to any React 19 project.</p>
          </article>
          <article className="doc-card">
            <p className="text-[0.78rem] font-semibold uppercase tracking-wider text-[#8e8e93]">
              Step 2
            </p>
            <h3>Import the styles</h3>
            <p>
              Load <code className="inline-code">@pieui/tokens/theme.css</code>{" "}
              and <code className="inline-code">@pieui/react/styles.css</code>{" "}
              once in your root layout.
            </p>
          </article>
          <article className="doc-card">
            <p className="text-[0.78rem] font-semibold uppercase tracking-wider text-[#8e8e93]">
              Step 3
            </p>
            <h3>Render a component</h3>
            <p>Drop in a Button, Toggle, or Menu. Done.</p>
          </article>
        </div>

        <div className="link-row">
          <Link className="button-link" href="/getting-started">
            Full setup guide
          </Link>
          <Link className="button-link secondary" href="/foundations">
            Explore foundations
          </Link>
        </div>
      </section>
    </section>
  );
}
