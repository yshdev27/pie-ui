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
    version: "v0.4.0",
    date: "2026-05-04",
    title: "Dock component",
    summary:
      "A magnifying icon rail for top-level destinations, with docs and previews on the site.",
    changes: [
      {
        type: "Added",
        description:
          "Dock, DockItem, and DockSeparator — tooltip labels, active state, and configurable magnification.",
      },
      {
        type: "Changed",
        description:
          "Docs: new Dock page; components index and sidebar updated. Experimental Scale scaffold was not shipped to npm.",
      },
      {
        type: "Changed",
        description: "@pieui/tokens bumped to v0.2.2 and published alongside this release.",
      },
    ],
  },
  {
    version: "v0.3.0",
    date: "2026-04-19",
    title: "Checkbox, Stepper, and Dropdown are ready",
    summary: "Three more components are stable and ready to use.",
    changes: [
      { type: "Added", description: "New Dropdown component for picking from a list." },
      { type: "Changed", description: "Checkbox, Stepper, and Dropdown are now marked stable." },
      { type: "Changed", description: "Refreshed visuals for Checkbox and Stepper." },
      { type: "Changed", description: "Pull-down button is now called Dropdown." },
    ],
  },
  {
    version: "v0.2.0",
    date: "2026-04-18",
    title: "Text area added",
    summary: "A simple multi-line text input, ready out of the box.",
    changes: [
      { type: "Added", description: "Text area component." },
    ],
  },
  {
    version: "v0.1.0",
    date: "2026-04-17",
    title: "First release",
    summary: "The first version of Pie UI.",
    changes: [
      { type: "Added", description: "Button, Toggle, Checkbox, Stepper, Menu, Dropdown, Toolbar." },
      { type: "Added", description: "Docs site with install guide and component pages." },
    ],
  },
  {
    version: "v0.5.0",
    date: "Planned",
    title: "Coming next",
    summary: "What we're working on for the next release.",
    changes: [
      { type: "Planned", description: "Dialog." },
      { type: "Planned", description: "Tabs." },
      { type: "Planned", description: "Tooltip." },
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
