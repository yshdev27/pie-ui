import { ComponentDocTemplate } from "../_components/component-doc-template";
import { CheckboxPreview } from "../../_components/component-previews";

export default function CheckboxDocPage() {
  return (
    <ComponentDocTemplate
      title="Checkbox"
      description="Checkboxes let people pick any number of items from a list. Use them when options are independent and a selection isn't required."
      status="Planned"
      componentName="Checkbox"
      preview={
        <div className="preview-row">
          <CheckboxPreview state="unchecked" label="Send weekly digest" />
          <CheckboxPreview state="checked" label="Accept terms of service" />
          <CheckboxPreview state="indeterminate" label="Select all" />
        </div>
      }
      variants={[
        {
          name: "Unchecked",
          node: <CheckboxPreview state="unchecked" label="Unchecked" />,
        },
        {
          name: "Checked",
          node: <CheckboxPreview state="checked" label="Checked" />,
        },
        {
          name: "Indeterminate",
          description: "Used in parent rows when children are mixed.",
          node: <CheckboxPreview state="indeterminate" label="Mixed" />,
        },
        {
          name: "Grouped",
          node: (
            <div className="flex flex-col gap-2">
              <CheckboxPreview state="indeterminate" label="All notifications" />
              <div className="pl-6 flex flex-col gap-2">
                <CheckboxPreview state="checked" label="Mentions" />
                <CheckboxPreview state="checked" label="Direct messages" />
                <CheckboxPreview state="unchecked" label="Marketing" />
              </div>
            </div>
          ),
        },
      ]}
      props={[
        {
          name: "checked",
          type: `boolean | "indeterminate"`,
          description: "Controlled state.",
        },
        {
          name: "defaultChecked",
          type: `boolean | "indeterminate"`,
          defaultValue: "false",
          description: "Initial uncontrolled state.",
        },
        {
          name: "onCheckedChange",
          type: `(checked: boolean | "indeterminate") => void`,
          description: "Fires when the user toggles the checkbox.",
        },
        {
          name: "disabled",
          type: "boolean",
          defaultValue: "false",
          description: "Removes the checkbox from the tab order.",
        },
        {
          name: "required",
          type: "boolean",
          defaultValue: "false",
          description:
            "Participates in form validation when used inside a <form>.",
        },
      ]}
      guidelines={{
        do: [
          "Use checkboxes for independent multi-selection.",
          "Use indeterminate state only for parent aggregations.",
          "Place labels to the right of the control.",
        ],
        dont: [
          "Don't use checkboxes for mutually exclusive choices — use radios.",
          "Don't rely on color alone to indicate selection.",
          "Don't put interactive content inside the label beyond plain text.",
        ],
      }}
      accessibility={{
        keys: [
          { combo: ["Tab"], description: "Focus the checkbox." },
          { combo: ["Space"], description: "Toggle the checkbox." },
        ],
        notes: [
          "Uses native input[type=checkbox] for screen-reader parity.",
          "Indeterminate state is visual only — aria-checked reports 'mixed'.",
        ],
      }}
      related={[
        { label: "Toggle", href: "/components/toggle" },
        { label: "Stepper", href: "/components/stepper" },
      ]}
      checklist={[
        "Lock checked, unchecked, indeterminate visuals",
        "Add keyboard and screen reader notes",
        "Define label alignment constraints",
      ]}
    />
  );
}
