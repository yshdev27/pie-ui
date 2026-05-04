import Link from "next/link";
import {
  ButtonPreview,
  CheckboxPreview,
  DockPreview,
  DropdownPreview,
  MenuPreview,
  StepperPreview,
  TextAreaPreview,
  TogglePreview,
  ToolbarPreview,
} from "../_components/component-previews";
import type { ReactNode } from "react";

type ComponentEntry = {
  name: string;
  href: string;
  description: string;
  status: "Planned" | "In review" | "Stable";
  render: ReactNode;
};

type ComponentGroup = {
  title: string;
  summary: string;
  items: ComponentEntry[];
};

const groups: ComponentGroup[] = [
  {
    title: "Menus and actions",
    summary: "Commit to actions, surface options, and move between contexts.",
    items: [
      {
        name: "Button",
        href: "/components/button",
        description:
          "Primary action control with emphasis, secondary, tinted, and destructive variants.",
        status: "Stable",
        render: <ButtonPreview>Continue</ButtonPreview>,
      },
      {
        name: "Dropdown",
        href: "/components/dropdown",
        description:
          "Compact select-style trigger that opens a list of options.",
        status: "Stable",
        render: <DropdownPreview />,
      },
      {
        name: "Toolbar",
        href: "/components/toolbar",
        description:
          "Compact row of grouped controls for contextual editing and navigation.",
        status: "In review",
        render: <ToolbarPreview />,
      },
      {
        name: "Dock",
        href: "/components/dock",
        description:
          "Magnifying icon rail for top-level destinations or persistent app actions.",
        status: "In review",
        render: (
          <div className="scale-[0.78] origin-center">
            <DockPreview />
          </div>
        ),
      },
      {
        name: "Menu",
        href: "/components/menu",
        description:
          "Structured list of actions, options, or destinations in compact surfaces.",
        status: "Stable",
        render: (
          <div className="scale-[0.55] origin-center">
            <MenuPreview />
          </div>
        ),
      },
    ],
  },
  {
    title: "Selection and input",
    summary:
      "Form controls for binary values, bounded numbers, and grouped options.",
    items: [
      {
        name: "Checkbox",
        href: "/components/checkbox",
        description:
          "Binary selection pattern with indeterminate support for grouped options.",
        status: "Stable",
        render: <CheckboxPreview state="checked" label="Email me updates" />,
      },
      {
        name: "Toggle",
        href: "/components/toggle",
        description: "Immediate on/off switch for binary settings.",
        status: "Stable",
        render: <TogglePreview on />,
      },
      {
        name: "Stepper",
        href: "/components/stepper",
        description: "Increment and decrement control for bounded values.",
        status: "Stable",
        render: <StepperPreview value={1} />,
      },
      {
        name: "Text area",
        href: "/components/textarea",
        description:
          "Multi-line text input with smooth 16px radius and neutral border.",
        status: "Stable",
        render: <TextAreaPreview placeholder="Type Here" />,
      },
    ],
  },
];

function StatusDot({ status }: { status: ComponentEntry["status"] }) {
  const cls =
    status === "Planned"
      ? "planned"
      : status === "In review"
        ? "review"
        : "stable";
  return <span className={`badge ${cls}`}>{status}</span>;
}

export default function ComponentsPage() {
  const totalCount = groups.reduce((sum, g) => sum + g.items.length, 0);

  return (
    <section className="doc-page">
      <p className="eyebrow">Components</p>
      <h1>Every part of the system, previewed.</h1>
      <p className="lead">
        Pie UI ships {totalCount} components across menus, selection, and input.
        Each one has a preview, variants, API reference, accessibility notes,
        and usage guidelines.
      </p>

      <div className="pill-row">
        <span className="pill">
          <span className="dot" /> {totalCount} components
        </span>
        <span className="pill">React 19</span>
        <span className="pill">Token-driven</span>
        <span className="pill">Keyboard-first</span>
      </div>

      {groups.map((group) => (
        <section className="section" key={group.title}>
          <div className="section-heading">
            <h2>{group.title}</h2>
            <p>{group.summary}</p>
          </div>
          <div className="showcase">
            {group.items.map((item) => (
              <Link key={item.name} href={item.href} className="showcase-card">
                <div className="showcase-art">{item.render}</div>
                <div className="showcase-body">
                  <div className="flex items-center justify-between gap-2">
                    <h3>{item.name}</h3>
                    <StatusDot status={item.status} />
                  </div>
                  <p>{item.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      ))}

      <section className="section">
        <div className="section-heading">
          <h2>More on the way</h2>
          <p>These components are planned for v0.4 and beyond.</p>
        </div>
        <div className="card-grid">
          {[
            { name: "Input", desc: "Single-line text with validation states." },
            { name: "Dialog", desc: "Sheets and modals with focus trap." },
            { name: "Tabs", desc: "Segmented navigation across panels." },
            { name: "Slider", desc: "Range selection with keyboard stepping." },
            { name: "Tooltip", desc: "Hover/focus hint with smart placement." },
            { name: "Radio group", desc: "Exclusive selection across options." },
          ].map((c) => (
            <article className="doc-card" key={c.name}>
              <div className="flex items-center justify-between gap-2">
                <h3>{c.name}</h3>
                <span className="badge planned">Planned</span>
              </div>
              <p className="mt-1">{c.desc}</p>
            </article>
          ))}
        </div>
      </section>
    </section>
  );
}
