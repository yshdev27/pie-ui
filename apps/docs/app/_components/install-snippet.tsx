"use client";

import { useState } from "react";

type InstallSnippetProps = {
  packages: string;
  dev?: boolean;
};

type PackageManager = "npm" | "pnpm" | "yarn" | "bun";

const managers: { id: PackageManager; label: string }[] = [
  { id: "npm", label: "npm" },
  { id: "pnpm", label: "pnpm" },
  { id: "yarn", label: "yarn" },
  { id: "bun", label: "bun" },
];

function commandFor(pm: PackageManager, packages: string, dev?: boolean) {
  const devFlag = dev ? " -D" : "";
  switch (pm) {
    case "npm":
      return `npm install${dev ? " --save-dev" : ""} ${packages}`;
    case "pnpm":
      return `pnpm add${devFlag} ${packages}`;
    case "yarn":
      return `yarn add${devFlag} ${packages}`;
    case "bun":
      return `bun add${devFlag} ${packages}`;
  }
}

export function InstallSnippet({ packages, dev }: InstallSnippetProps) {
  const [active, setActive] = useState<PackageManager>("npm");
  const [copied, setCopied] = useState(false);
  const command = commandFor(active, packages, dev);

  const onCopy = async () => {
    try {
      await navigator.clipboard.writeText(command);
      setCopied(true);
      setTimeout(() => setCopied(false), 1200);
    } catch {
      /* ignore */
    }
  };

  return (
    <div className="install-card">
      <div className="install-tabs" role="tablist">
        {managers.map((m) => (
          <button
            key={m.id}
            type="button"
            role="tab"
            aria-selected={active === m.id}
            className={`tab ${active === m.id ? "is-active" : ""}`}
            onClick={() => setActive(m.id)}
          >
            {m.label}
          </button>
        ))}
      </div>
      <div className="install-body">
        <div>
          <span className="prompt">$</span>
          <span>{command}</span>
        </div>
        <button
          type="button"
          className="copy"
          onClick={onCopy}
          aria-label="Copy install command"
        >
          {copied ? "Copied" : "Copy"}
        </button>
      </div>
    </div>
  );
}
