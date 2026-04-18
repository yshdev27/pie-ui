import { CodeWindow } from "../_components/code-window";

const typeScale: {
  name: string;
  size: string;
  weight: number;
  lineHeight: string;
  tracking: string;
  sample: string;
}[] = [
  {
    name: "Display",
    size: "64px",
    weight: 700,
    lineHeight: "0.96",
    tracking: "-0.045em",
    sample: "Calm. Clear. Crafted.",
  },
  {
    name: "Title 1",
    size: "40px",
    weight: 600,
    lineHeight: "1.05",
    tracking: "-0.03em",
    sample: "Designed with intent.",
  },
  {
    name: "Title 2",
    size: "28px",
    weight: 600,
    lineHeight: "1.1",
    tracking: "-0.025em",
    sample: "Consistent rhythm.",
  },
  {
    name: "Headline",
    size: "20px",
    weight: 600,
    lineHeight: "1.2",
    tracking: "-0.015em",
    sample: "Predictable hierarchy.",
  },
  {
    name: "Body",
    size: "16px",
    weight: 400,
    lineHeight: "1.5",
    tracking: "0",
    sample: "Legible paragraphs and consistent measure.",
  },
  {
    name: "Caption",
    size: "13px",
    weight: 500,
    lineHeight: "1.4",
    tracking: "0.01em",
    sample: "Secondary metadata and labels.",
  },
];

const spacingScale: { token: string; value: string; pixels: string }[] = [
  { token: "space-1", value: "4px", pixels: "4" },
  { token: "space-2", value: "8px", pixels: "8" },
  { token: "space-3", value: "12px", pixels: "12" },
  { token: "space-4", value: "16px", pixels: "16" },
  { token: "space-5", value: "20px", pixels: "20" },
  { token: "space-6", value: "24px", pixels: "24" },
  { token: "space-8", value: "32px", pixels: "32" },
  { token: "space-10", value: "40px", pixels: "40" },
  { token: "space-12", value: "48px", pixels: "48" },
];

const colorRoles: {
  token: string;
  role: string;
  hex: string;
  swatch: string;
  text?: string;
}[] = [
  {
    token: "--pie-bg-primary",
    role: "Background",
    hex: "#FFFFFF",
    swatch: "#ffffff",
  },
  {
    token: "--pie-bg-secondary",
    role: "Surface",
    hex: "#F6F6F8",
    swatch: "#f6f6f8",
  },
  {
    token: "--pie-text-primary",
    role: "Text",
    hex: "#111113",
    swatch: "#111113",
    text: "#ffffff",
  },
  {
    token: "--pie-text-secondary",
    role: "Secondary text",
    hex: "#6E6E73",
    swatch: "#6e6e73",
    text: "#ffffff",
  },
  {
    token: "--pie-line",
    role: "Border",
    hex: "#E4E4E9",
    swatch: "#e4e4e9",
  },
  {
    token: "--pie-accent",
    role: "Accent",
    hex: "#0066CC",
    swatch: "#0066cc",
    text: "#ffffff",
  },
  {
    token: "--pie-success",
    role: "Success",
    hex: "#34C759",
    swatch: "#34c759",
    text: "#ffffff",
  },
  {
    token: "--pie-warning",
    role: "Warning",
    hex: "#FF9F0A",
    swatch: "#ff9f0a",
    text: "#ffffff",
  },
  {
    token: "--pie-danger",
    role: "Danger",
    hex: "#FF3B30",
    swatch: "#ff3b30",
    text: "#ffffff",
  },
];

const radii: { token: string; value: string }[] = [
  { token: "radius-sm", value: "10px" },
  { token: "radius-md", value: "14px" },
  { token: "radius-lg", value: "22px" },
  { token: "radius-xl", value: "28px" },
  { token: "radius-full", value: "999px" },
];

const elevation: { token: string; value: string; sample: string }[] = [
  {
    token: "shadow-1",
    value: "0 1px 2px rgb(0 0 0 / 0.04), 0 8px 24px rgb(0 0 0 / 0.04)",
    sample: "Subtle lift for cards and surfaces",
  },
  {
    token: "shadow-2",
    value: "0 2px 6px rgb(0 0 0 / 0.06), 0 24px 48px rgb(0 0 0 / 0.08)",
    sample: "Menus, popovers, floating UI",
  },
];

export default function FoundationsPage() {
  return (
    <section className="doc-page">
      <p className="eyebrow">Foundations</p>
      <h1>The system behind the system.</h1>
      <p className="lead">
        Foundations lock in the building blocks — type, space, color, motion —
        before any component is built. Every primitive consumes these tokens,
        which means visual consistency is enforced by the system rather than
        memorized by the team.
      </p>

      {/* Typography */}
      <section className="section">
        <div className="section-heading">
          <h2>Typography</h2>
          <p>
            A minimal six-step type scale built on a neutral sans, tuned for
            tight headlines and comfortable body measure.
          </p>
        </div>
        <article className="doc-card">
          <div className="type-scale">
            {typeScale.map((row) => (
              <div className="type-row" key={row.name}>
                <div className="type-meta">
                  <div>{row.name}</div>
                  <div>
                    {row.size} · {row.weight}
                  </div>
                </div>
                <div
                  className="type-sample"
                  style={{
                    fontSize: row.size,
                    fontWeight: row.weight,
                    lineHeight: row.lineHeight,
                    letterSpacing: row.tracking,
                  }}
                >
                  {row.sample}
                </div>
              </div>
            ))}
          </div>
        </article>
      </section>

      {/* Spacing */}
      <section className="section">
        <div className="section-heading">
          <h2>Spacing</h2>
          <p>
            A 4-pixel base grid keeps layouts predictable across density and
            breakpoints.
          </p>
        </div>
        <article className="doc-card">
          <div className="spacing-scale">
            {spacingScale.map((row) => (
              <div className="spacing-row" key={row.token}>
                <code className="inline-code">{row.token}</code>
                <div className="bar" style={{ width: row.value }} />
                <span className="meta">{row.value}</span>
              </div>
            ))}
          </div>
        </article>
      </section>

      {/* Color */}
      <section className="section">
        <div className="section-heading">
          <h2>Color</h2>
          <p>
            Neutral-first palette with purposeful accents. Each token is
            role-driven, not literal — swap the palette, keep the meaning.
          </p>
        </div>
        <article className="doc-card">
          <div className="swatch-grid">
            {colorRoles.map((c) => (
              <div className="swatch" key={c.token}>
                <div
                  className="swatch-color"
                  style={{
                    background: c.swatch,
                    color: c.text ?? "#111113",
                    display: "flex",
                    alignItems: "flex-end",
                    padding: "0.6rem 0.7rem",
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.72rem",
                  }}
                >
                  {c.hex}
                </div>
                <div className="swatch-meta">
                  <strong>{c.role}</strong>
                  <span>{c.token}</span>
                </div>
              </div>
            ))}
          </div>
        </article>
      </section>

      {/* Radius */}
      <section className="section">
        <div className="section-heading">
          <h2>Radius</h2>
          <p>Soft, consistent corners that match Apple-inspired surfaces.</p>
        </div>
        <article className="doc-card">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-2">
            {radii.map((r) => (
              <div key={r.token} className="flex flex-col items-center gap-2">
                <div
                  className="h-20 w-full border border-[#e4e4e9] bg-gradient-to-b from-white to-[#f4f4f7]"
                  style={{ borderRadius: r.value }}
                />
                <div className="text-center">
                  <code className="inline-code">{r.token}</code>
                  <p className="muted mt-1">{r.value}</p>
                </div>
              </div>
            ))}
          </div>
        </article>
      </section>

      {/* Elevation */}
      <section className="section">
        <div className="section-heading">
          <h2>Elevation</h2>
          <p>
            Two-step elevation avoids shadow noise. Subtle depth for surfaces,
            pronounced depth for floating UI.
          </p>
        </div>
        <article className="doc-card">
          <div className="grid gap-4 md:grid-cols-2 mt-2">
            {elevation.map((e) => (
              <div
                key={e.token}
                className="rounded-[14px] border border-[#e4e4e9] bg-[#fafafb] p-5"
              >
                <div
                  className="h-24 rounded-[12px] bg-white"
                  style={{ boxShadow: e.value }}
                />
                <div className="mt-3 flex items-center justify-between">
                  <code className="inline-code">{e.token}</code>
                  <span className="muted">{e.sample}</span>
                </div>
              </div>
            ))}
          </div>
        </article>
      </section>

      {/* Motion */}
      <section className="section">
        <div className="section-heading">
          <h2>Motion</h2>
          <p>
            Motion is quiet, snappy, and purposeful — never decorative. Durations
            are short; easings feel physical.
          </p>
        </div>
        <article className="doc-card">
          <table className="props-table">
            <thead>
              <tr>
                <th>Token</th>
                <th>Duration</th>
                <th>Easing</th>
                <th>Use</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <code>motion-fast</code>
                </td>
                <td>
                  <code>120ms</code>
                </td>
                <td>
                  <code>cubic-bezier(0.2, 0, 0, 1)</code>
                </td>
                <td>Hover, press, focus</td>
              </tr>
              <tr>
                <td>
                  <code>motion-medium</code>
                </td>
                <td>
                  <code>200ms</code>
                </td>
                <td>
                  <code>cubic-bezier(0.2, 0, 0, 1)</code>
                </td>
                <td>Toggle, popover open</td>
              </tr>
              <tr>
                <td>
                  <code>motion-slow</code>
                </td>
                <td>
                  <code>320ms</code>
                </td>
                <td>
                  <code>cubic-bezier(0.32, 0.72, 0, 1)</code>
                </td>
                <td>Sheet, modal</td>
              </tr>
            </tbody>
          </table>
        </article>
      </section>

      {/* Token usage */}
      <section className="section">
        <div className="section-heading">
          <h2>Consuming tokens</h2>
          <p>Reach into the token layer from CSS or TypeScript.</p>
        </div>
        <CodeWindow title="styles.css">
          <span className="tok-p">.card</span> {"{\n"}
          {"  "}background: <span className="tok-n">var(</span>
          <span className="tok-t">--pie-bg-secondary</span>
          <span className="tok-n">)</span>;{"\n"}
          {"  "}border-radius: <span className="tok-n">var(</span>
          <span className="tok-t">--pie-radius-lg</span>
          <span className="tok-n">)</span>;{"\n"}
          {"  "}box-shadow: <span className="tok-n">var(</span>
          <span className="tok-t">--pie-shadow-1</span>
          <span className="tok-n">)</span>;{"\n"}
          {"}"}
        </CodeWindow>

        <div className="stack">
          <CodeWindow title="theme.ts">
            <span className="tok-k">import</span>{" "}
            <span className="tok-p">{"{ tokens }"}</span>{" "}
            <span className="tok-k">from</span>{" "}
            <span className="tok-s">&quot;@pieui/tokens&quot;</span>;{"\n\n"}
            <span className="tok-n">tokens</span>.<span className="tok-t">
              color
            </span>
            .<span className="tok-t">accent</span>;{" "}
            <span className="tok-c">// &quot;#0066cc&quot;</span>
            {"\n"}
            <span className="tok-n">tokens</span>.<span className="tok-t">
              radius
            </span>
            .<span className="tok-t">lg</span>;{" "}
            <span className="tok-c">// &quot;22px&quot;</span>
          </CodeWindow>
        </div>
      </section>
    </section>
  );
}
