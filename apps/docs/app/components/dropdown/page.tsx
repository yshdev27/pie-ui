import { ComponentDocTemplate } from "../_components/component-doc-template";
import { DropdownPreview } from "../../_components/component-previews";

export default function DropdownDocPage() {
  return (
    <ComponentDocTemplate
      title="Dropdown"
      description="A compact select-style trigger that reveals a list of options. Use when a user needs to pick one value from a concise set of choices."
      status="Stable"
      componentName="Dropdown"
      preview={
        <div className="preview-row items-start">
          <DropdownPreview />
          <DropdownPreview open />
        </div>
      }
      variants={[
        { name: "Closed", node: <DropdownPreview /> },
        {
          name: "Open",
          description: "List opens below the trigger with a 6px offset.",
          node: (
            <div className="pb-40">
              <DropdownPreview open />
            </div>
          ),
        },
      ]}
      anatomy={{
        preview: <DropdownPreview />,
        steps: [
          "Trigger — 204×56 default, 16px Smooth radius, surface bgPrimary.",
          "Border — 1px borderSecondary (#B8B8B8); darkens on hover, recolors on focus.",
          "Label — current selection, truncates with ellipsis when overflowed.",
          "Chevron — 16×16 caret on the right, rotates 180° when the panel is open.",
          "Panel — same 204px width as the trigger, opens 6px below with a soft pop-in.",
        ],
      }}
      props={[
        {
          name: "label",
          type: "ReactNode",
          description: "Text or element shown inside the trigger.",
        },
        {
          name: "items",
          type: "DropdownItem[]",
          description:
            "Array of options. Items may have icons or a destructive variant.",
        },
        {
          name: "placement",
          type: `"bottom-start" | "bottom-end" | "top-start" | "top-end"`,
          defaultValue: `"bottom-start"`,
          description: "Preferred position relative to the trigger.",
        },
        {
          name: "open",
          type: "boolean",
          description: "Controlled open state.",
        },
        {
          name: "defaultOpen",
          type: "boolean",
          defaultValue: "false",
          description: "Initial open state when uncontrolled.",
        },
        {
          name: "onOpenChange",
          type: "(open: boolean) => void",
          description: "Fires whenever the panel opens or closes.",
        },
        {
          name: "disabled",
          type: "boolean",
          defaultValue: "false",
          description: "Prevents interaction and fades the trigger.",
        },
      ]}
      guidelines={{
        do: [
          "Use for picking a single value from 2-8 options.",
          "Keep labels short and scannable at a glance.",
          "Match the default 204px width to sit on a 16px grid.",
        ],
        dont: [
          "Don't use for free-form input — pair Input or TextArea instead.",
          "Don't overload with long lists — use a Menu or searchable combobox.",
          "Don't hide the chevron — it signals the control is expandable.",
        ],
      }}
      accessibility={{
        keys: [
          { combo: ["Space"], description: "Open the panel from the trigger." },
          { combo: ["Enter"], description: "Activate the focused option." },
          { combo: ["ArrowDown"], description: "Move to the next option." },
          { combo: ["ArrowUp"], description: "Move to the previous option." },
          { combo: ["Esc"], description: "Close and return focus to trigger." },
        ],
        notes: [
          "Trigger exposes aria-haspopup=\"listbox\" and aria-expanded state.",
          "Panel uses role=\"listbox\" with option children so screen readers announce counts.",
          "Clicking outside the panel or pressing Esc closes it and restores focus.",
        ],
      }}
      related={[
        { label: "Button", href: "/components/button" },
        { label: "Menu", href: "/components/menu" },
        { label: "Toolbar", href: "/components/toolbar" },
      ]}
      checklist={[
        "Ship keyboard roving focus inside the listbox",
        "Support async / searchable variants in v0.3",
        "Document placement collision fallback",
      ]}
    />
  );
}
