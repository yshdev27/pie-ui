import { ComponentDocTemplate } from "../_components/component-doc-template";
import { MenuPreview } from "../../_components/component-previews";
import { CodeWindow } from "../../_components/code-window";

export default function MenuDocPage() {
  return (
    <ComponentDocTemplate
      title="Menu"
      description="A menu is a vertical list of actions or destinations presented on a soft surface. Use it for account dropdowns, context menus, and compact command lists."
      status="Stable"
      componentName="Menu"
      preview={<MenuPreview />}
      variants={[
        {
          name: "Default",
          description:
            "Standard menu with icon-led items — ideal for user account and settings surfaces.",
          node: (
            <div className="scale-[0.8] origin-top-left">
              <MenuPreview />
            </div>
          ),
        },
        {
          name: "With destructive action",
          description:
            "Destructive items render in the system danger color and sit at the bottom.",
          node: (
            <div className="scale-[0.8] origin-top-left">
              <MenuPreview
                items={[
                  {
                    label: "Profile",
                    icon: (
                      <svg
                        viewBox="0 0 24 24"
                        className="h-5 w-5"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <circle cx="12" cy="12" r="9" />
                        <circle cx="12" cy="10.5" r="2.8" />
                        <path d="M6.5 18c1.3-2.2 3.3-3.3 5.5-3.3s4.2 1.1 5.5 3.3" />
                      </svg>
                    ),
                  },
                  {
                    label: "Settings",
                    icon: (
                      <svg
                        viewBox="0 0 24 24"
                        className="h-5 w-5"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <circle cx="12" cy="12" r="2.8" />
                        <path d="M19.4 13.5a7.7 7.7 0 0 0 0-3l2-1.5-2-3.4-2.3.9a7.7 7.7 0 0 0-2.6-1.5L14 2.5h-4l-.5 2.5a7.7 7.7 0 0 0-2.6 1.5l-2.3-.9-2 3.4 2 1.5a7.7 7.7 0 0 0 0 3l-2 1.5 2 3.4 2.3-.9a7.7 7.7 0 0 0 2.6 1.5l.5 2.5h4l.5-2.5a7.7 7.7 0 0 0 2.6-1.5l2.3.9 2-3.4z" />
                      </svg>
                    ),
                  },
                  {
                    label: "Delete account",
                    danger: true,
                    icon: (
                      <svg
                        viewBox="0 0 24 24"
                        className="h-5 w-5"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <path d="M4 7h16" />
                        <path d="M9 7V4h6v3" />
                        <path d="M6 7l1 13h10l1-13" />
                      </svg>
                    ),
                  },
                ]}
              />
            </div>
          ),
        },
      ]}
      anatomy={{
        preview: (
          <div className="scale-[0.8] origin-top-left">
            <MenuPreview />
          </div>
        ),
        steps: [
          "Container — 20px radius, white surface with a two-layer minShadow.",
          "Padding — 24px vertical, 30px horizontal for a generous reading rhythm.",
          "Item — icon + label pair on a single baseline, 12px icon gap.",
          "Icon — 20×20 outline stroke, inherits the item's text color.",
          "Destructive item — red label and icon, always last in the stack.",
        ],
      }}
      usage={
        <CodeWindow title="AccountMenu.tsx">
          <span className="tok-k">import</span>{" "}
          <span className="tok-p">
            {"{ Menu, MenuItem, MenuSeparator }"}
          </span>{" "}
          <span className="tok-k">from</span>{" "}
          <span className="tok-s">&quot;@pieui/react&quot;</span>;{"\n"}
          <span className="tok-k">import</span>{" "}
          <span className="tok-p">
            {"{ BellIcon, GearIcon, LogOutIcon, UserIcon }"}
          </span>{" "}
          <span className="tok-k">from</span>{" "}
          <span className="tok-s">&quot;@pieui/icons&quot;</span>;{"\n\n"}
          <span className="tok-k">export function</span>{" "}
          <span className="tok-f">AccountMenu</span>() {"{\n"}
          {"  "}
          <span className="tok-k">return</span> (
          {"\n    "}
          <span className="tok-p">&lt;</span>
          <span className="tok-t">Menu</span>{" "}
          <span className="tok-n">aria-label</span>=
          <span className="tok-s">&quot;Account&quot;</span>
          <span className="tok-p">&gt;</span>
          {"\n      "}
          <span className="tok-p">&lt;</span>
          <span className="tok-t">MenuItem</span>{" "}
          <span className="tok-n">icon</span>={"{"}
          <span className="tok-p">&lt;</span>
          <span className="tok-t">UserIcon</span>
          <span className="tok-p"> /&gt;</span>
          {"}"}
          <span className="tok-p">&gt;</span>Profile
          <span className="tok-p">&lt;/</span>
          <span className="tok-t">MenuItem</span>
          <span className="tok-p">&gt;</span>
          {"\n      "}
          <span className="tok-p">&lt;</span>
          <span className="tok-t">MenuItem</span>{" "}
          <span className="tok-n">icon</span>={"{"}
          <span className="tok-p">&lt;</span>
          <span className="tok-t">BellIcon</span>
          <span className="tok-p"> /&gt;</span>
          {"}"}
          <span className="tok-p">&gt;</span>Notifications
          <span className="tok-p">&lt;/</span>
          <span className="tok-t">MenuItem</span>
          <span className="tok-p">&gt;</span>
          {"\n      "}
          <span className="tok-p">&lt;</span>
          <span className="tok-t">MenuItem</span>{" "}
          <span className="tok-n">icon</span>={"{"}
          <span className="tok-p">&lt;</span>
          <span className="tok-t">GearIcon</span>
          <span className="tok-p"> /&gt;</span>
          {"}"}
          <span className="tok-p">&gt;</span>Settings
          <span className="tok-p">&lt;/</span>
          <span className="tok-t">MenuItem</span>
          <span className="tok-p">&gt;</span>
          {"\n      "}
          <span className="tok-p">&lt;</span>
          <span className="tok-t">MenuSeparator</span>{" "}
          <span className="tok-p">/&gt;</span>
          {"\n      "}
          <span className="tok-p">&lt;</span>
          <span className="tok-t">MenuItem</span>{" "}
          <span className="tok-n">icon</span>={"{"}
          <span className="tok-p">&lt;</span>
          <span className="tok-t">LogOutIcon</span>
          <span className="tok-p"> /&gt;</span>
          {"}"}
          <span className="tok-p">&gt;</span>Logout
          <span className="tok-p">&lt;/</span>
          <span className="tok-t">MenuItem</span>
          <span className="tok-p">&gt;</span>
          {"\n    "}
          <span className="tok-p">&lt;/</span>
          <span className="tok-t">Menu</span>
          <span className="tok-p">&gt;</span>
          {"\n  );\n"}
          {"}"}
        </CodeWindow>
      }
      props={[
        {
          name: "items",
          type: "MenuItem[]",
          description:
            "Array of menu entries. Each item accepts a label, icon, and optional danger flag.",
        },
        {
          name: "open",
          type: "boolean",
          description: "Controlled open state of the menu.",
        },
        {
          name: "defaultOpen",
          type: "boolean",
          defaultValue: "false",
          description: "Initial uncontrolled open state.",
        },
        {
          name: "onOpenChange",
          type: "(open: boolean) => void",
          description: "Fires when the menu opens or closes.",
        },
        {
          name: "placement",
          type: `"bottom-start" | "bottom-end" | "top-start" | "top-end"`,
          defaultValue: `"bottom-start"`,
          description: "Preferred position relative to the trigger.",
        },
        {
          name: "width",
          type: `number | "auto"`,
          defaultValue: "360",
          description:
            "Menu width in pixels. Defaults to the Pie UI spec of 360px.",
        },
        {
          name: "typeahead",
          type: "boolean",
          defaultValue: "true",
          description:
            "Jump to the first item whose label matches a typed sequence.",
        },
      ]}
      guidelines={{
        do: [
          "Pair each item with a single outline icon for scannability.",
          "Keep labels short, verb-led, and Title Case.",
          "Place destructive items at the bottom, in the danger color.",
        ],
        dont: [
          "Don't nest submenus more than two levels deep.",
          "Don't mix actions and destinations without visual separation.",
          "Don't put interactive controls like inputs inside menu items.",
        ],
      }}
      accessibility={{
        keys: [
          {
            combo: ["Space"],
            description: "Open the menu from a focused trigger.",
          },
          { combo: ["ArrowDown"], description: "Move to the next item." },
          { combo: ["ArrowUp"], description: "Move to the previous item." },
          { combo: ["Home"], description: "Move to the first item." },
          { combo: ["End"], description: "Move to the last item." },
          { combo: ["Enter"], description: "Activate the focused item." },
          { combo: ["Esc"], description: "Close the menu and return focus." },
          {
            combo: ["a-z"],
            description: "Typeahead jumps to matching items.",
          },
        ],
        notes: [
          "Focus is trapped inside the menu while open.",
          "When closed, focus returns to the trigger element.",
          "Icons render aria-hidden — labels carry the accessible name.",
        ],
      }}
      related={[
        { label: "Pull-down button", href: "/components/pull-down-button" },
        { label: "Toolbar", href: "/components/toolbar" },
        { label: "Button", href: "/components/button" },
      ]}
      checklist={[
        "Lock the 360px × 24/30 padding spec",
        "Define submenu behavior",
        "Support typeahead navigation",
        "Wire minShadow token",
      ]}
    />
  );
}
