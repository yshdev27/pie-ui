import type { Metadata } from "next";
import Link from "next/link";
import { DocsSidebar, DocsTopNav } from "./_components/docs-nav";
import "@pieui/tokens/theme.css";
import "@pieui/react/styles.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pie UI Docs",
  description: "Apple-style documentation website for Pie UI.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          rel="stylesheet"
          href="https://api.fontshare.com/v2/css?f[]=general-sans@400,500,600,700&display=swap"
        />
      </head>
      <body suppressHydrationWarning>
        <header className="topbar">
          <div className="topbar-inner">
            <Link className="brand" href="/">
              Pie UI
            </Link>
            <DocsTopNav />
          </div>
        </header>

        <div className="docs-shell">
          <aside className="sidebar">
            <DocsSidebar />
          </aside>

          <main className="docs-main">{children}</main>
        </div>
      </body>
    </html>
  );
}
