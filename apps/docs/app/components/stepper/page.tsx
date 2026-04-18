import { ComponentDocTemplate } from "../_components/component-doc-template";
import { StepperPreview } from "../../_components/component-previews";

export default function StepperDocPage() {
  return (
    <ComponentDocTemplate
      title="Stepper"
      description="Steppers adjust a bounded number. Use them for quantities, small counts, or anywhere an exact value is easier to tap than type."
      status="Stable"
      componentName="Stepper"
      preview={
        <div className="preview-row">
          <StepperPreview value={1} />
          <StepperPreview value={3} />
          <StepperPreview value={12} />
        </div>
      }
      variants={[
        { name: "Default", node: <StepperPreview value={1} /> },
        {
          name: "With label",
          node: (
            <label className="flex items-center gap-3 text-sm text-[#111113]">
              Guests <StepperPreview value={2} />
            </label>
          ),
        },
        {
          name: "Bounded",
          description: "Disables the decrement button at the minimum value.",
          node: <StepperPreview value={0} />,
        },
      ]}
      props={[
        {
          name: "value",
          type: "number",
          description: "Controlled numeric value.",
        },
        {
          name: "defaultValue",
          type: "number",
          defaultValue: "0",
          description: "Initial uncontrolled value.",
        },
        {
          name: "onValueChange",
          type: "(value: number) => void",
          description: "Fires whenever the value changes.",
        },
        {
          name: "min",
          type: "number",
          description: "Minimum allowed value. Decrement disables at min.",
        },
        {
          name: "max",
          type: "number",
          description: "Maximum allowed value. Increment disables at max.",
        },
        {
          name: "step",
          type: "number",
          defaultValue: "1",
          description: "Amount added on each press.",
        },
        {
          name: "holdToRepeat",
          type: "boolean",
          defaultValue: "true",
          description:
            "Repeats the increment/decrement action while the button is held.",
        },
      ]}
      guidelines={{
        do: [
          "Use for small, bounded counts (0-20).",
          "Show the current value prominently between the controls.",
          "Support both tap and keyboard interaction.",
        ],
        dont: [
          "Don't use a stepper for values above ~20 — use a numeric input.",
          "Don't hide the current value from screen readers.",
          "Don't allow values outside `min` and `max`.",
        ],
      }}
      accessibility={{
        keys: [
          {
            combo: ["Tab"],
            description: "Moves focus into and out of the stepper.",
          },
          { combo: ["ArrowUp"], description: "Increment the value by `step`." },
          {
            combo: ["ArrowDown"],
            description: "Decrement the value by `step`.",
          },
          {
            combo: ["Home"],
            description: "Jump to the minimum allowed value.",
          },
          {
            combo: ["End"],
            description: "Jump to the maximum allowed value.",
          },
        ],
        notes: [
          "Value is announced via aria-valuetext as it changes.",
          "Hold-to-repeat throttles changes to avoid announcing every tick.",
        ],
      }}
      related={[
        { label: "Toggle", href: "/components/toggle" },
        { label: "Checkbox", href: "/components/checkbox" },
      ]}
      checklist={[
        "Set min/max disabled behavior",
        "Document hold-to-repeat interaction",
        "Specify compact and regular sizes",
      ]}
    />
  );
}
