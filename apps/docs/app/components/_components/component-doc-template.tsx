import type { ReactNode } from "react";
import Link from "next/link";
import { InstallSnippet } from "../../_components/install-snippet";
import { CodeWindow } from "../../_components/code-window";
import { PropsTable } from "../../_components/props-table";

type Status = "Planned" | "In review" | "Stable";

export type ComponentDocVariant = {
  name: string;
  description?: string;
  node: ReactNode;
};

export type ComponentDocProp = {
  name: string;
  type: string;
  defaultValue?: string;
  description: string;
};

export type ComponentDocA11y = {
  keys: { combo: string[]; description: string }[];
  notes?: string[];
};

export type ComponentDocRelated = {
  label: string;
  href: string;
};

export type ComponentDocTemplateProps = {
  title: string;
  subtitle?: string;
  description: string;
  status: Status;
  importPath?: string;
  componentName?: string;
  preview: ReactNode;
  variants?: ComponentDocVariant[];
  anatomy?: { preview: ReactNode; steps: string[] };
  usage?: ReactNode;
  props?: ComponentDocProp[];
  accessibility?: ComponentDocA11y;
  guidelines?: { do: string[]; dont: string[] };
  related?: ComponentDocRelated[];
  checklist?: string[];
};

function StatusBadge({ status }: { status: Status }) {
  const cls =
    status === "Planned"
      ? "planned"
      : status === "In review"
        ? "review"
        : "stable";
  return <span className={`badge ${cls}`}>{status}</span>;
}

export function ComponentDocTemplate({
  title,
  subtitle = "Components",
  description,
  status,
  importPath = "@pieui/react",
  componentName,
  preview,
  variants,
  anatomy,
  usage,
  props,
  accessibility,
  guidelines,
  related,
  checklist,
}: ComponentDocTemplateProps) {
  const resolvedName = componentName ?? title.replace(/[^A-Za-z]/g, "");

  return (
    <section className="doc-page">
      <p className="eyebrow">{subtitle}</p>
      <h1>{title}</h1>
      <p className="lead">{description}</p>

      <div className="component-doc-meta">
        <StatusBadge status={status} />
        <p>
          Part of <code className="inline-code">{importPath}</code>
        </p>
      </div>

      {/* Preview */}
      <article className="doc-card stack">
        <div className="flex items-start justify-between gap-3 flex-wrap">
          <div>
            <h2>Preview</h2>
            <p>A live look at how the default {title.toLowerCase()} renders.</p>
          </div>
        </div>
        <div className="preview stack-sm">{preview}</div>
      </article>

      {/* Variants */}
      {variants && variants.length > 0 ? (
        <article className="doc-card stack">
          <h2>Variants</h2>
          <p>
            Pick the variant that matches the prominence of the action in
            context.
          </p>
          <div className="variant-grid">
            {variants.map((v) => (
              <div className="variant" key={v.name}>
                <span className="label">{v.name}</span>
                <div className="stage">{v.node}</div>
                {v.description ? (
                  <p className="text-[0.85rem]">{v.description}</p>
                ) : null}
              </div>
            ))}
          </div>
        </article>
      ) : null}

      {/* Anatomy */}
      {anatomy ? (
        <article className="doc-card stack">
          <h2>Anatomy</h2>
          <p>
            Parts that make up the component. Consistent structure keeps
            behavior predictable.
          </p>
          <div className="anatomy">
            <div className="preview stacked">{anatomy.preview}</div>
            <ol>
              {anatomy.steps.map((step, i) => (
                <li key={i}>{step}</li>
              ))}
            </ol>
          </div>
        </article>
      ) : null}

      {/* Install */}
      <article className="doc-card stack">
        <h2>Install</h2>
        <p>
          Add Pie UI to your project. If you already installed the package, jump
          to the usage section.
        </p>
        <div className="stack-sm">
          <InstallSnippet packages="@pieui/react @pieui/tokens" />
        </div>
      </article>

      {/* Usage */}
      <article className="doc-card stack">
        <h2>Usage</h2>
        <p>
          Import the component and render it inside any React tree. Styles come
          from <code className="inline-code">@pieui/tokens</code>.
        </p>
        <div className="stack-sm">
          {usage ?? (
            <CodeWindow title={`${resolvedName}.tsx`}>
              <span className="tok-k">import</span>{" "}
              <span className="tok-p">{`{ ${resolvedName} }`}</span>{" "}
              <span className="tok-k">from</span>{" "}
              <span className="tok-s">&quot;{importPath}&quot;</span>;{"\n\n"}
              <span className="tok-k">export function</span>{" "}
              <span className="tok-f">Example</span>() {"{\n"}
              {"  "}
              <span className="tok-k">return</span>{" "}
              <span className="tok-p">&lt;</span>
              <span className="tok-t">{resolvedName}</span>
              <span className="tok-p"> /&gt;</span>;{"\n"}
              {"}"}
            </CodeWindow>
          )}
        </div>
      </article>

      {/* Props */}
      {props && props.length > 0 ? (
        <article className="doc-card stack">
          <h2>API reference</h2>
          <p>Props for the {title} component.</p>
          <PropsTable rows={props} />
        </article>
      ) : null}

      {/* Guidelines */}
      {guidelines ? (
        <article className="doc-card stack">
          <h2>Usage guidelines</h2>
          <div className="grid gap-4 md:grid-cols-2 mt-1.5">
            <div className="rounded-[12px] border border-[#c8e6c9] bg-[#f2faf5] p-4">
              <p className="text-[0.78rem] font-semibold uppercase tracking-wider text-[#1f6b3a]">
                Do
              </p>
              <ul className="mt-2 text-[0.9rem] text-[#1a3f25]">
                {guidelines.do.map((line, i) => (
                  <li key={i}>{line}</li>
                ))}
              </ul>
            </div>
            <div className="rounded-[12px] border border-[#ffccbc] bg-[#fff5f2] p-4">
              <p className="text-[0.78rem] font-semibold uppercase tracking-wider text-[#b5372a]">
                Don&apos;t
              </p>
              <ul className="mt-2 text-[0.9rem] text-[#5a2520]">
                {guidelines.dont.map((line, i) => (
                  <li key={i}>{line}</li>
                ))}
              </ul>
            </div>
          </div>
        </article>
      ) : null}

      {/* Accessibility */}
      {accessibility ? (
        <article className="doc-card stack">
          <h2>Accessibility</h2>
          <p>
            Pie UI ships with sensible defaults for screen readers, focus
            management, and keyboard control.
          </p>
          <table className="props-table mt-3">
            <thead>
              <tr>
                <th style={{ width: "30%" }}>Keys</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {accessibility.keys.map((k, i) => (
                <tr key={i}>
                  <td>
                    <div className="kbd-row">
                      {k.combo.map((key, ki) => (
                        <span className="kbd" key={ki}>
                          {key}
                        </span>
                      ))}
                    </div>
                  </td>
                  <td>{k.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
          {accessibility.notes && accessibility.notes.length > 0 ? (
            <ul className="mt-3">
              {accessibility.notes.map((note, i) => (
                <li key={i}>{note}</li>
              ))}
            </ul>
          ) : null}
        </article>
      ) : null}

      {/* Checklist */}
      {checklist && checklist.length > 0 ? (
        <article className="doc-card stack">
          <h2>Implementation checklist</h2>
          <p>Tracked items before promoting this component to stable.</p>
          <ul>
            {checklist.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
      ) : null}

      {/* Related */}
      {related && related.length > 0 ? (
        <article className="doc-card stack">
          <h2>Related</h2>
          <div className="flex flex-wrap gap-2 mt-2">
            {related.map((r) => (
              <Link
                key={r.href}
                href={r.href}
                className="inline-flex items-center rounded-full border border-[#e4e4e9] bg-white px-3 py-1.5 text-sm font-medium text-[#111113] hover:bg-[#f6f6f8]"
              >
                {r.label}
              </Link>
            ))}
          </div>
        </article>
      ) : null}
    </section>
  );
}
