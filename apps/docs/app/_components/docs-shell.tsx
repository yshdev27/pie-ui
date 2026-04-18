"use client";

import type { ReactNode } from "react";
import { usePathname } from "next/navigation";
import { DocsSidebar } from "./docs-nav";

export function DocsShell({ children }: { children: ReactNode }) {
  const pathname = usePathname() ?? "";
  const showSidebar = pathname.startsWith("/components");

  return (
    <div className={`docs-shell${showSidebar ? "" : " no-sidebar"}`}>
      {showSidebar ? (
        <aside className="sidebar">
          <DocsSidebar />
        </aside>
      ) : null}
      <main className="docs-main">{children}</main>
    </div>
  );
}
