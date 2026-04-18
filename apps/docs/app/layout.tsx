import type { Metadata } from "next";
import Link from "next/link";
import { DocsTopNav } from "./_components/docs-nav";
import { DocsShell } from "./_components/docs-shell";
import "@pieui/tokens/theme.css";
import "@pieui/react/styles.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "PieUI",
  description: "Documentation website for Pie UI.",
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

        <DocsShell>{children}</DocsShell>
      </body>
    </html>
  );
}
