import { ComponentDocTemplate } from "../_components/component-doc-template";
import { ToolbarPreview } from "../../_components/component-previews";

export default function ToolbarDocPage() {
  return (
    <ComponentDocTemplate
      title="Toolbar"
      description="A toolbar collects controls that act on the current context. Use it when a user frequently switches between a small set of related actions."
      status="In review"
      componentName="Toolbar"
      preview={<ToolbarPreview />}
      variants={[
        { name: "Floating", node: <ToolbarPreview /> },
        {
          name: "Docked",
          description:
            "Pinned to the top of a surface without a floating shadow.",
          node: (
            <div className="rounded-[14px] border border-[#e4e4e9] bg-white px-2 py-1">
              <ToolbarPreview />
            </div>
          ),
        },
      ]}
      props={[
        {
          name: "orientation",
          type: `"horizontal" | "vertical"`,
          defaultValue: `"horizontal"`,
          description: "Lays children on a row or column.",
        },
        {
          name: "aria-label",
          type: "string",
          description:
            "Describes the toolbar's purpose to assistive technology.",
        },
        {
          name: "density",
          type: `"comfortable" | "compact"`,
          defaultValue: `"comfortable"`,
          description: "Controls spacing between items.",
        },
      ]}
      guidelines={{
        do: [
          "Group related tools and separate groups with a thin divider.",
          "Keep toolbars under seven items; collapse overflow behind a Menu.",
          "Use icon-only buttons with tooltips for common actions.",
        ],
        dont: [
          "Don't use toolbars for primary page navigation.",
          "Don't mix destructive actions into the main toolbar row.",
          "Don't nest another toolbar inside a toolbar item.",
        ],
      }}
      accessibility={{
        keys: [
          {
            combo: ["Tab"],
            description: "Moves focus into the toolbar to the first item.",
          },
          { combo: ["ArrowRight"], description: "Focus the next item." },
          { combo: ["ArrowLeft"], description: "Focus the previous item." },
          { combo: ["Home"], description: "Focus the first item." },
          { combo: ["End"], description: "Focus the last item." },
        ],
        notes: [
          "Toolbar roves focus across its items using a single tab stop.",
          "Icon-only items require a visible tooltip or aria-label.",
        ],
      }}
      related={[
        { label: "Button", href: "/components/button" },
        { label: "Dropdown", href: "/components/dropdown" },
        { label: "Menu", href: "/components/menu" },
      ]}
      checklist={[
        "Establish grouping hierarchy",
        "Define overflow behavior",
        "Create responsive collapse rules",
      ]}
    />
  );
}
