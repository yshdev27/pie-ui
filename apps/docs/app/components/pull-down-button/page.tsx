import { ComponentDocTemplate } from "../_components/component-doc-template";
import { PullDownPreview } from "../../_components/component-previews";

export default function PullDownButtonDocPage() {
  return (
    <ComponentDocTemplate
      title="Pull-down button"
      description="A single trigger that reveals a concise set of context actions. Use when an item has more than one meaningful action but only one label."
      status="Planned"
      componentName="PullDownButton"
      preview={
        <div className="preview-row items-start">
          <PullDownPreview />
          <PullDownPreview open />
        </div>
      }
      variants={[
        { name: "Closed", node: <PullDownPreview /> },
        {
          name: "Open",
          description: "Menu opens below the trigger with a 4px offset.",
          node: (
            <div className="pb-20">
              <PullDownPreview open />
            </div>
          ),
        },
      ]}
      props={[
        {
          name: "label",
          type: "ReactNode",
          description: "Text or element shown inside the trigger.",
        },
        {
          name: "items",
          type: "PullDownItem[]",
          description:
            "Array of actions. Items may be dividers or destructive.",
        },
        {
          name: "placement",
          type: `"bottom-start" | "bottom-end" | "top-start" | "top-end"`,
          defaultValue: `"bottom-start"`,
          description: "Preferred position relative to the trigger.",
        },
        {
          name: "variant",
          type: `"primary" | "secondary" | "tinted"`,
          defaultValue: `"secondary"`,
          description: "Trigger button variant.",
        },
      ]}
      guidelines={{
        do: [
          "Use for 2-6 related actions on an object.",
          "Keep labels verb-first: Rename, Duplicate, Move to…",
          "Place destructive actions last, visually separated.",
        ],
        dont: [
          "Don't hide the primary action inside a pull-down.",
          "Don't overload with more than six items — use a Menu.",
          "Don't pair with a secondary action of equal weight.",
        ],
      }}
      accessibility={{
        keys: [
          { combo: ["Space"], description: "Open the menu from the trigger." },
          { combo: ["Enter"], description: "Activate the focused item." },
          { combo: ["ArrowDown"], description: "Move to the next item." },
          { combo: ["ArrowUp"], description: "Move to the previous item." },
          { combo: ["Esc"], description: "Close and return focus to trigger." },
        ],
        notes: [
          "Collision-aware: flips to top when bottom space is insufficient.",
          "Announces open/closed state via aria-expanded on the trigger.",
        ],
      }}
      related={[
        { label: "Button", href: "/components/button" },
        { label: "Menu", href: "/components/menu" },
        { label: "Toolbar", href: "/components/toolbar" },
      ]}
      checklist={[
        "Specify open/close motion",
        "Map placement and collision behavior",
        "Document touch and pointer parity",
      ]}
    />
  );
}
