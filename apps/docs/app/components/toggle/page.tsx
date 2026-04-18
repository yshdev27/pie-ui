import { ComponentDocTemplate } from "../_components/component-doc-template";
import { TogglePreview } from "../../_components/component-previews";

export default function ToggleDocPage() {
  return (
    <ComponentDocTemplate
      title="Toggle"
      description="Toggles commit a change immediately. Use them for binary settings that need no confirmation."
      status="Stable"
      componentName="Toggle"
      preview={
        <div className="preview-row">
          <label className="flex items-center gap-3 text-sm text-[#111113]">
            <TogglePreview on /> Enable iCloud Sync
          </label>
          <label className="flex items-center gap-3 text-sm text-[#111113]">
            <TogglePreview /> Show hidden files
          </label>
        </div>
      }
      variants={[
        { name: "Off", node: <TogglePreview /> },
        { name: "On", node: <TogglePreview on /> },
        {
          name: "With label",
          node: (
            <label className="flex items-center gap-3 text-sm text-[#111113]">
              <TogglePreview on /> Enable notifications
            </label>
          ),
        },
      ]}
      props={[
        {
          name: "checked",
          type: "boolean",
          description: "Controlled on/off state.",
        },
        {
          name: "defaultChecked",
          type: "boolean",
          defaultValue: "false",
          description: "Initial uncontrolled state.",
        },
        {
          name: "onCheckedChange",
          type: "(checked: boolean) => void",
          description: "Fires when the user flips the toggle.",
        },
        {
          name: "disabled",
          type: "boolean",
          defaultValue: "false",
          description: "Removes the toggle from the tab order.",
        },
        {
          name: "aria-label",
          type: "string",
          description: "Required when rendered without a visible text label.",
        },
      ]}
      guidelines={{
        do: [
          "Commit the change the instant the toggle flips.",
          "Pair with a concise noun-phrase label like 'Airplane mode'.",
          "Group related toggles inside a single card.",
        ],
        dont: [
          "Don't use a toggle where a form submit is required.",
          "Don't use 'On' / 'Off' text inside the control itself.",
          "Don't replace checkboxes in multi-select lists.",
        ],
      }}
      accessibility={{
        keys: [
          { combo: ["Tab"], description: "Focus the toggle." },
          { combo: ["Space"], description: "Flip the toggle state." },
        ],
        notes: [
          "Exposes role=switch with aria-checked reflecting the current state.",
          "Reduced motion users see an instant state change with no slide animation.",
        ],
      }}
      related={[
        { label: "Checkbox", href: "/components/checkbox" },
        { label: "Stepper", href: "/components/stepper" },
      ]}
      checklist={[
        "Confirm handle motion and timing",
        "Tune contrast for on/off states",
        "Document labeling and grouping",
      ]}
    />
  );
}
