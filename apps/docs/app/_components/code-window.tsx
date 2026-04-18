import type { ReactNode } from "react";

type CodeWindowProps = {
  title?: string;
  children: ReactNode;
};

export function CodeWindow({ title, children }: CodeWindowProps) {
  return (
    <div className="code-window">
      <div className="code-window-bar">
        <span className="dot red" />
        <span className="dot yellow" />
        <span className="dot green" />
        {title ? <span className="title">{title}</span> : null}
      </div>
      <pre>
        <code>{children}</code>
      </pre>
    </div>
  );
}
