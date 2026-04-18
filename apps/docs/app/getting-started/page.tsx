import Link from "next/link";
import { CodeWindow } from "../_components/code-window";
import { InstallSnippet } from "../_components/install-snippet";

export default function GettingStartedPage() {
  return (
    <section className="doc-page">
      <p className="eyebrow">Getting Started</p>
      <h1>Install Pie UI in under a minute.</h1>
      <p className="lead">
        Pie UI works with any React 19 project — Next.js, Remix, Vite, or a
        bare-bones bundler. Follow the three steps below and you&apos;ll be
        rendering fully-themed components before your coffee cools.
      </p>

      <div className="pill-row">
        <span className="pill">
          <span className="dot" /> Requires React 19
        </span>
        <span className="pill">Node 18.17+</span>
        <span className="pill">TypeScript 5.x</span>
      </div>

      {/* Step 1 */}
      <section className="section">
        <div className="section-heading">
          <h2>1. Install the packages</h2>
          <p>Pick your package manager. Both workspaces are ESM-only.</p>
        </div>
        <InstallSnippet packages="@pieui/react @pieui/tokens" />
        <p className="muted stack-sm">
          <code className="inline-code">@pieui/react</code> ships the
          components; <code className="inline-code">@pieui/tokens</code>{" "}
          provides the CSS variables that drive every component.
        </p>
      </section>

      {/* Step 2 */}
      <section className="section">
        <div className="section-heading">
          <h2>2. Import the theme</h2>
          <p>Load the token stylesheet once at the root of your app.</p>
        </div>

        <article className="doc-card stack-sm">
          <h3>Next.js App Router</h3>
          <p className="stack-sm">
            Import both stylesheets once at the top of{" "}
            <code className="inline-code">app/layout.tsx</code>. Tokens define
            the CSS variables; the component stylesheet consumes them.
          </p>
          <div className="stack-sm">
            <CodeWindow title="app/layout.tsx">
              <span className="tok-k">import</span>{" "}
              <span className="tok-s">&quot;@pieui/tokens/theme.css&quot;</span>
              ;{"\n"}
              <span className="tok-k">import</span>{" "}
              <span className="tok-s">&quot;@pieui/react/styles.css&quot;</span>
              ;{"\n\n"}
              <span className="tok-k">export default function</span>{" "}
              <span className="tok-f">RootLayout</span>({"{ "}
              <span className="tok-n">children</span>
              {" }"}: {"{ "}
              <span className="tok-n">children</span>: <span className="tok-t">
                React
              </span>.<span className="tok-t">ReactNode</span>
              {" }"}) {"{\n"}
              {"  "}
              <span className="tok-k">return</span> (
              {"\n    "}
              <span className="tok-p">&lt;</span>
              <span className="tok-t">html</span>
              <span className="tok-p">&gt;</span>
              {"\n      "}
              <span className="tok-p">&lt;</span>
              <span className="tok-t">body</span>
              <span className="tok-p">&gt;</span>
              {"{children}"}
              <span className="tok-p">&lt;/</span>
              <span className="tok-t">body</span>
              <span className="tok-p">&gt;</span>
              {"\n    "}
              <span className="tok-p">&lt;/</span>
              <span className="tok-t">html</span>
              <span className="tok-p">&gt;</span>
              {"\n  );\n"}
              {"}"}
            </CodeWindow>
          </div>
        </article>

        <article className="doc-card stack">
          <h3>Vite / CRA</h3>
          <p className="stack-sm">
            Import both stylesheets at the top of{" "}
            <code className="inline-code">src/main.tsx</code>.
          </p>
          <div className="stack-sm">
            <CodeWindow title="src/main.tsx">
              <span className="tok-k">import</span>{" "}
              <span className="tok-s">&quot;@pieui/tokens/theme.css&quot;</span>
              ;{"\n"}
              <span className="tok-k">import</span>{" "}
              <span className="tok-s">&quot;@pieui/react/styles.css&quot;</span>
              ;{"\n"}
              <span className="tok-k">import</span>{" "}
              <span className="tok-t">React</span>{" "}
              <span className="tok-k">from</span>{" "}
              <span className="tok-s">&quot;react&quot;</span>;{"\n"}
              <span className="tok-k">import</span>{" "}
              <span className="tok-p">ReactDOM</span>{" "}
              <span className="tok-k">from</span>{" "}
              <span className="tok-s">&quot;react-dom/client&quot;</span>;{"\n"}
              <span className="tok-k">import</span>{" "}
              <span className="tok-p">{"{ App }"}</span>{" "}
              <span className="tok-k">from</span>{" "}
              <span className="tok-s">&quot;./App&quot;</span>;
            </CodeWindow>
          </div>
        </article>
      </section>

      {/* Step 3 */}
      <section className="section">
        <div className="section-heading">
          <h2>3. Render your first component</h2>
          <p>Compose components anywhere — they work server-side too.</p>
        </div>
        <CodeWindow title="app/page.tsx">
          <span className="tok-k">import</span>{" "}
          <span className="tok-p">{"{ Button, Toggle }"}</span>{" "}
          <span className="tok-k">from</span>{" "}
          <span className="tok-s">&quot;@pieui/react&quot;</span>;{"\n\n"}
          <span className="tok-k">export default function</span>{" "}
          <span className="tok-f">Home</span>() {"{\n"}
          {"  "}
          <span className="tok-k">return</span> (
          {"\n    "}
          <span className="tok-p">&lt;</span>
          <span className="tok-t">main</span>{" "}
          <span className="tok-n">className</span>=
          <span className="tok-s">&quot;flex gap-3&quot;</span>
          <span className="tok-p">&gt;</span>
          {"\n      "}
          <span className="tok-p">&lt;</span>
          <span className="tok-t">Button</span>{" "}
          <span className="tok-n">variant</span>=
          <span className="tok-s">&quot;primary&quot;</span>
          <span className="tok-p">&gt;</span>Continue
          <span className="tok-p">&lt;/</span>
          <span className="tok-t">Button</span>
          <span className="tok-p">&gt;</span>
          {"\n      "}
          <span className="tok-p">&lt;</span>
          <span className="tok-t">Toggle</span>{" "}
          <span className="tok-n">defaultChecked</span>{" "}
          <span className="tok-n">aria-label</span>=
          <span className="tok-s">&quot;Enable sync&quot;</span>{" "}
          <span className="tok-p">/&gt;</span>
          {"\n    "}
          <span className="tok-p">&lt;/</span>
          <span className="tok-t">main</span>
          <span className="tok-p">&gt;</span>
          {"\n  );\n"}
          {"}"}
        </CodeWindow>
      </section>

      {/* Theming */}
      <section className="section">
        <div className="section-heading">
          <h2>Theming</h2>
          <p>
            Pie UI&apos;s appearance is driven entirely by CSS custom
            properties.
          </p>
        </div>

        <article className="doc-card stack-sm">
          <h3>Switch to dark mode</h3>
          <p className="stack-sm">
            Apply the <code className="inline-code">data-pie-theme</code>{" "}
            attribute anywhere in the tree.
          </p>
          <div className="stack-sm">
            <CodeWindow title="app/layout.tsx">
              <span className="tok-p">&lt;</span>
              <span className="tok-t">html</span>{" "}
              <span className="tok-n">data-pie-theme</span>=
              <span className="tok-s">&quot;dark&quot;</span>
              <span className="tok-p">&gt;</span>
              {"\n  "}
              <span className="tok-p">&lt;</span>
              <span className="tok-t">body</span>
              <span className="tok-p">&gt;</span>
              {"{children}"}
              <span className="tok-p">&lt;/</span>
              <span className="tok-t">body</span>
              <span className="tok-p">&gt;</span>
              {"\n"}
              <span className="tok-p">&lt;/</span>
              <span className="tok-t">html</span>
              <span className="tok-p">&gt;</span>
            </CodeWindow>
          </div>
        </article>

        <article className="doc-card stack">
          <h3>Override specific tokens</h3>
          <p className="stack-sm">
            Redefine any CSS variable at <code className="inline-code">:root</code>{" "}
            or on a scoped element.
          </p>
          <div className="stack-sm">
            <CodeWindow title="app/theme.css">
              <span className="tok-p">:root</span> {"{\n"}
              {"  "}--pie-accent: <span className="tok-s">#0066cc</span>;{"\n"}
              {"  "}--pie-radius-lg: <span className="tok-s">22px</span>;{"\n"}
              {"  "}--pie-font-sans: <span className="tok-s">
                &quot;Inter&quot;, sans-serif
              </span>
              ;{"\n"}
              {"}"}
            </CodeWindow>
          </div>
        </article>
      </section>

      {/* CLI */}
      <section className="section">
        <div className="section-heading">
          <h2>Optional: The CLI</h2>
          <p>
            <code className="inline-code">@pieui/cli</code> bootstraps a project
            with recommended tokens, layout, and linting.
          </p>
        </div>

        <article className="doc-card stack-sm">
          <h3>One-off command</h3>
          <div className="stack-sm">
            <InstallSnippet packages="@pieui/cli" dev />
          </div>
          <div className="stack-sm">
            <CodeWindow title="terminal">
              <span className="tok-c"># initialize a new Pie UI project</span>
              {"\n"}
              <span className="tok-n">npx</span>{" "}
              <span className="tok-t">pie-ui</span>{" "}
              <span className="tok-f">init</span>
              {"\n\n"}
              <span className="tok-c"># add a specific component scaffold</span>
              {"\n"}
              <span className="tok-n">npx</span>{" "}
              <span className="tok-t">pie-ui</span>{" "}
              <span className="tok-f">add</span>{" "}
              <span className="tok-s">button toggle menu</span>
            </CodeWindow>
          </div>
        </article>
      </section>

      {/* Monorepo notes */}
      <section className="section">
        <div className="section-heading">
          <h2>Developing this repo</h2>
          <p>
            Pie UI is a monorepo — clone it, install, and the docs site runs on
            port 3000.
          </p>
        </div>

        <article className="doc-card stack-sm">
          <h3>Clone and install</h3>
          <div className="stack-sm">
            <CodeWindow title="terminal">
              <span className="tok-n">git</span>{" "}
              <span className="tok-f">clone</span>{" "}
              <span className="tok-s">
                https://github.com/pie-ui/pie-ui.git
              </span>
              {"\n"}
              <span className="tok-n">cd</span>{" "}
              <span className="tok-s">pie-ui</span>
              {"\n"}
              <span className="tok-n">npm</span>{" "}
              <span className="tok-f">install</span>
              {"\n"}
              <span className="tok-n">npm</span>{" "}
              <span className="tok-f">run</span>{" "}
              <span className="tok-s">dev</span>
            </CodeWindow>
          </div>
        </article>

        <article className="doc-card stack">
          <h3>Monorepo layout</h3>
          <ul>
            <li>
              <code className="inline-code">apps/docs</code> — this Next.js
              documentation website.
            </li>
            <li>
              <code className="inline-code">packages/pie-ui</code> — the React
              component source.
            </li>
            <li>
              <code className="inline-code">packages/tokens</code> — design
              tokens and theme CSS.
            </li>
            <li>
              <code className="inline-code">packages/cli</code> — the{" "}
              <code className="inline-code">pie-ui</code> CLI.
            </li>
          </ul>
        </article>
      </section>

      {/* Next */}
      <section className="section">
        <div className="section-heading">
          <h2>What&apos;s next</h2>
          <p>Go deeper on the system, or jump straight to a component.</p>
        </div>
        <div className="card-grid">
          <article className="doc-card">
            <h3>Foundations</h3>
            <p>
              Learn the type rhythm, spacing scale, and color roles that every
              Pie UI component follows.
            </p>
            <Link href="/foundations">Open foundations →</Link>
          </article>
          <article className="doc-card">
            <h3>Components</h3>
            <p>
              Preview, API reference, and usage guidelines for every component
              in the library.
            </p>
            <Link href="/components">Browse components →</Link>
          </article>
          <article className="doc-card">
            <h3>Changelog</h3>
            <p>Release notes and the roadmap for upcoming versions.</p>
            <Link href="/changelog">See changelog →</Link>
          </article>
        </div>
      </section>
    </section>
  );
}
