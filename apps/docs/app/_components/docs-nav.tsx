"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

type SidebarLink = {
  href: string;
  label: string;
  icon: ReactNode;
};

function iconFor(
  kind:
    | "action"
    | "menu"
    | "pull"
    | "toolbar"
    | "checkbox"
    | "stepper"
    | "toggle"
    | "textarea",
) {
  switch (kind) {
    case "action":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <rect x="4" y="9" width="16" height="6" rx="3" />
        </svg>
      );
    case "menu":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path
            d="M5 8h14M5 12h14M5 16h14"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      );
    case "pull":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path
            d="M7 9h10"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M9 13l3 3 3-3"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "toolbar":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <rect x="4" y="7" width="16" height="10" rx="3" />
          <circle cx="9" cy="12" r="1.5" fill="currentColor" />
          <circle cx="12" cy="12" r="1.5" fill="currentColor" />
          <circle cx="15" cy="12" r="1.5" fill="currentColor" />
        </svg>
      );
    case "checkbox":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <rect x="5" y="5" width="14" height="14" rx="3" />
          <path
            d="M8.5 12l2.3 2.3L15.5 9.6"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "stepper":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path
            d="M8 8l4-4 4 4"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M8 16l4 4 4-4"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "textarea":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <rect x="4" y="5" width="16" height="14" rx="3" />
          <path
            d="M7 10h10M7 13h7"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <rect x="4" y="9" width="16" height="6" rx="3" />
          <circle cx="8" cy="12" r="2.2" fill="currentColor" />
        </svg>
      );
  }
}

const topLinks = [
  { href: "/", label: "Overview" },
  { href: "/getting-started", label: "Getting Started" },
  { href: "/foundations", label: "Foundations" },
  { href: "/components", label: "Components" },
  { href: "/changelog", label: "Changelog" },
];

const sidebarGroups = [
  {
    title: "Components",
    links: [
      { href: "/components/button", label: "Button", icon: iconFor("action") },
      { href: "/components/menu", label: "Menu", icon: iconFor("menu") },
      {
        href: "/components/dropdown",
        label: "Dropdown",
        icon: iconFor("pull"),
      },
      {
        href: "/components/toolbar",
        label: "Toolbar",
        icon: iconFor("toolbar"),
      },
    ] as SidebarLink[],
  },
  {
    title: "Selection and input",
    links: [
      {
        href: "/components/checkbox",
        label: "Checkbox",
        icon: iconFor("checkbox"),
      },
      {
        href: "/components/stepper",
        label: "Stepper",
        icon: iconFor("stepper"),
      },
      {
        href: "/components/textarea",
        label: "Text area",
        icon: iconFor("textarea"),
      },
      { href: "/components/toggle", label: "Toggle", icon: iconFor("toggle") },
    ] as SidebarLink[],
  },
];

function isTopLinkActive(pathname: string, href: string) {
  if (href === "/") {
    return pathname === "/";
  }

  return pathname === href || pathname.startsWith(`${href}/`);
}

export function DocsTopNav() {
  const pathname = usePathname();
  const currentPath = pathname ?? "";

  return (
    <nav className="topnav" aria-label="Primary">
      {topLinks.map((link) => {
        const isActive = isTopLinkActive(currentPath, link.href);
        return (
          <Link
            key={link.label}
            href={link.href}
            className={isActive ? "is-active" : undefined}
          >
            {link.label}
          </Link>
        );
      })}
    </nav>
  );
}

export function DocsSidebar() {
  const pathname = usePathname();
  const currentPath = pathname ?? "";

  return (
    <nav aria-label="Documentation sections">
      {sidebarGroups.map((group) => (
        <section className="sidebar-group" key={group.title}>
          <p className="sidebar-title">{group.title}</p>
          <div className="sidebar-nav">
            {group.links.map((link) => {
              const isActive = currentPath === link.href;
              return (
                <Link
                  key={group.title + link.label}
                  href={link.href}
                  className={isActive ? "is-active" : undefined}
                >
                  <span className="nav-icon" aria-hidden="true">
                    {link.icon}
                  </span>
                  <span>{link.label}</span>
                </Link>
              );
            })}
          </div>
        </section>
      ))}
    </nav>
  );
}
