type ChangeType = "Added" | "Changed" | "Fixed" | "Planned";

type Entry = {
  version: string;
  date: string;
  title: string;
  summary: string;
  changes: { type: ChangeType; description: string }[];
};

const entries: Entry[] = [
  {
    version: "v0.3.0",
    date: "2026-04-19",
    title: "Checkbox, Stepper, and Dropdown go stable",
    summary:
      "Three selection-and-input components graduate to stable. Pull-down button is renamed to Dropdown with a 204×56 select-style trigger, and the docs shell gets a bolder Pie UI wordmark.",
    changes: [
      {
        type: "Changed",
        description:
          "Breaking: renamed PullDownButton to Dropdown (also PullDownItem, PullDownPlacement, .pie-pull-down* CSS classes, /components/pull-down-button route).",
      },
      {
        type: "Changed",
        description:
          "Dropdown ships a 204×56 select-style trigger with 16px Smooth radius, 1px borderSecondary, and a rotating chevron.",
      },
      {
        type: "Changed",
        description:
          "Checkbox now renders an inline 20×20 SVG check (and a visual indeterminate bar) instead of CSS pseudo-elements.",
      },
      {
        type: "Changed",
        description:
          "Stepper container is 107px wide with outlined circular − / + buttons around the value.",
      },
      {
        type: "Changed",
        description:
          "Promoted Checkbox, Stepper, and Dropdown to Stable on the components index.",
      },
      {
        type: "Changed",
        description:
          "Docs: bolder, larger Pie UI wordmark in the topbar for stronger brand presence.",
      },
    ],
  },
  {
    version: "v0.2.0",
    date: "2026-04-18",
    title: "Text area lands",
    summary:
      "The first text-entry primitive, shipped with a 16px Smooth radius token and a dedicated border-secondary color for input surfaces.",
    changes: [
      {
        type: "Added",
        description:
          "TextArea component with controlled/uncontrolled value, invalid, disabled, and autoGrow.",
      },
      {
        type: "Added",
        description:
          "--pie-radius-smooth (16px) and --pie-border-secondary tokens in @pieui/tokens.",
      },
      {
        type: "Added",
        description:
          "/components/textarea documentation page with variants, anatomy, and API reference.",
      },
    ],
  },
  {
    version: "v0.1.0",
    date: "2026-04-17",
    title: "First public release",
    summary:
      "The first public cut of Pie UI with foundations, component pages, and a working install path.",
    changes: [
      { type: "Added", description: "Hero, getting started, and foundations pages." },
      {
        type: "Added",
        description:
          "Component pages for Button, Menu, Dropdown, Toolbar, Checkbox, Stepper, Toggle.",
      },
      {
        type: "Added",
        description:
          "Install snippet with npm, pnpm, yarn and bun tabs, plus a copy button.",
      },
      {
        type: "Added",
        description: "@pieui/tokens with theme.css and typed token object.",
      },
    ],
  },
  {
    version: "v0.4.0",
    date: "Planned",
    title: "Overlays and navigation",
    summary:
      "Layered surfaces with focus management plus segmented navigation.",
    changes: [
      { type: "Planned", description: "Dialog with focus trap and scroll lock." },
      { type: "Planned", description: "Tabs with segmented visual and keyboard roving." },
      { type: "Planned", description: "Tooltip with collision-aware placement." },
    ],
  },
];

function typeClass(type: ChangeType) {
  switch (type) {
    case "Added":
      return "stable";
    case "Changed":
      return "review";
    case "Fixed":
      return "review";
    case "Planned":
      return "planned";
  }
}

export default function ChangelogPage() {
  return (
    <section className="doc-page">
      <p className="eyebrow">Changelog</p>
      <h1>Every release, tracked.</h1>
      <p className="lead">
        A running log of changes to Pie UI — the components, tokens, and docs.
        Upcoming work is tagged with a date of <strong>Planned</strong>.
      </p>

      <div className="stack-lg">
        {entries.map((entry) => (
          <article className="doc-card stack" key={entry.version}>
            <div className="flex items-center justify-between gap-3 flex-wrap">
              <div>
                <div className="flex items-center gap-2">
                  <h2 className="!m-0 !text-[1.4rem]">{entry.version}</h2>
                  {entry.date === "Planned" ? (
                    <span className="badge planned">Planned</span>
                  ) : (
                    <span className="badge stable">Released</span>
                  )}
                </div>
                <p className="muted">{entry.date}</p>
              </div>
            </div>

            <h3 className="stack-sm">{entry.title}</h3>
            <p>{entry.summary}</p>

            <ul className="stack-sm">
              {entry.changes.map((c, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className={`badge ${typeClass(c.type)} shrink-0`}>
                    {c.type}
                  </span>
                  <span>{c.description}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
