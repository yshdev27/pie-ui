import { ComponentDocTemplate } from "../_components/component-doc-template";
import { TextAreaPreview } from "../../_components/component-previews";
import { CodeWindow } from "../../_components/code-window";

export default function TextAreaDocPage() {
  return (
    <ComponentDocTemplate
      title="Text area"
      description="A soft, smooth-cornered multi-line input for freeform writing — notes, messages, feedback. Uses the 16px Smooth radius and a neutral 1px border."
      status="Stable"
      componentName="TextArea"
      preview={
        <div className="preview-row">
          <TextAreaPreview placeholder="Type Here" />
        </div>
      }
      variants={[
        { name: "Default", node: <TextAreaPreview placeholder="Type Here" /> },
        {
          name: "With value",
          node: (
            <TextAreaPreview
              value={"Dropped a quick note.\nBack soon."}
              placeholder="Type Here"
            />
          ),
        },
        {
          name: "Invalid",
          node: <TextAreaPreview placeholder="Type Here" invalid />,
        },
        {
          name: "Disabled",
          node: <TextAreaPreview placeholder="Type Here" disabled />,
        },
      ]}
      anatomy={{
        preview: <TextAreaPreview placeholder="Type Here" />,
        steps: [
          "Container — 204×56 default, 16px Smooth radius, surface bgPrimary.",
          "Border — 1px borderSecondary (#B8B8B8), darkens on hover, recolors on focus.",
          "Padding — 16px all around so text and placeholder sit with room to breathe.",
          "Placeholder — tertiary text color, replaced on input.",
          "Focus ring — 3px soft halo in the accent color, never a harsh outline.",
        ],
      }}
      usage={
        <CodeWindow title="NoteField.tsx">
          <span className="tok-c">{"// NoteField.tsx"}</span>
          {"\n"}
          <span className="tok-k">import</span>{" "}
          <span className="tok-p">{"{ TextArea }"}</span>{" "}
          <span className="tok-k">from</span>{" "}
          <span className="tok-s">&quot;@pieui/react&quot;</span>;{"\n"}
          <span className="tok-k">import</span>{" "}
          <span className="tok-p">{"{ useState }"}</span>{" "}
          <span className="tok-k">from</span>{" "}
          <span className="tok-s">&quot;react&quot;</span>;{"\n\n"}
          <span className="tok-k">export function</span>{" "}
          <span className="tok-f">NoteField</span>() {"{\n"}
          {"  "}
          <span className="tok-k">const</span> [note, setNote] ={" "}
          <span className="tok-f">useState</span>(
          <span className="tok-s">&quot;&quot;</span>);{"\n"}
          {"  "}
          <span className="tok-k">return</span> ({"\n"}
          {"    "}
          <span className="tok-p">&lt;</span>
          <span className="tok-t">TextArea</span>
          {"\n"}
          {"      "}placeholder=<span className="tok-s">&quot;Type Here&quot;</span>
          {"\n"}
          {"      "}value={"{"}note{"}"}
          {"\n"}
          {"      "}onChange={"{"}setNote{"}"}
          {"\n"}
          {"      "}autoGrow
          {"\n"}
          {"      "}minRows={"{"}2{"}"} maxRows={"{"}6{"}"}
          {"\n"}
          {"    "}
          <span className="tok-p">/&gt;</span>
          {"\n"}
          {"  "});{"\n"}
          {"}"}
        </CodeWindow>
      }
      props={[
        {
          name: "value",
          type: "string",
          description: "Controlled value of the text area.",
        },
        {
          name: "defaultValue",
          type: "string",
          defaultValue: '""',
          description: "Initial value when uncontrolled.",
        },
        {
          name: "onChange",
          type: "(value: string, event) => void",
          description:
            "Fires on every keystroke with the next value and native event.",
        },
        {
          name: "placeholder",
          type: "string",
          defaultValue: '"Type Here"',
          description: "Hint text shown while empty.",
        },
        {
          name: "disabled",
          type: "boolean",
          defaultValue: "false",
          description: "Prevents input and fades the control.",
        },
        {
          name: "invalid",
          type: "boolean",
          defaultValue: "false",
          description:
            "Switches to the error border + focus halo and sets aria-invalid.",
        },
        {
          name: "autoGrow",
          type: "boolean",
          defaultValue: "false",
          description:
            "Grows the height to fit content, bounded by minRows/maxRows.",
        },
        {
          name: "minRows",
          type: "number",
          description: "Minimum row count when autoGrow is enabled.",
        },
        {
          name: "maxRows",
          type: "number",
          description:
            "Maximum row count before the text area switches to vertical scroll.",
        },
        {
          name: "resize",
          type: '"none" | "vertical" | "horizontal" | "both"',
          defaultValue: '"none"',
          description:
            "Controls the native resize handle. Defaults to none for a clean surface.",
        },
        {
          name: "width",
          type: "number | string",
          defaultValue: "204",
          description:
            "Override the default 204px width. Pass a number for pixels or any CSS length.",
        },
      ]}
      guidelines={{
        do: [
          "Pair the text area with a clear label describing what the user should write.",
          "Let autoGrow expand to fit short drafts; cap with maxRows so pages don't jump.",
          "Show validation feedback near the field, not inside the placeholder.",
        ],
        dont: [
          "Don't use a text area for single-line fields — reach for Input instead.",
          "Don't rely on placeholder text as the only label for the field.",
          "Don't remove focus styles — they carry the component's affordance.",
        ],
      }}
      accessibility={{
        keys: [
          { combo: ["Tab"], description: "Focus the text area." },
          { combo: ["Shift", "Tab"], description: "Move focus backwards." },
          {
            combo: ["Enter"],
            description: "Insert a newline (text areas do not submit forms).",
          },
        ],
        notes: [
          "Renders a native textarea, so screen reader behavior and IME input match platform expectations.",
          "When invalid is true, the component sets aria-invalid so assistive tech announces the state.",
          "Focus ring uses color-mix over the accent — remains visible across all themes.",
        ],
      }}
      related={[
        { label: "Button", href: "/components/button" },
        { label: "Checkbox", href: "/components/checkbox" },
      ]}
      checklist={[
        "Tune focus ring contrast against dark surfaces",
        "Add optional character counter slot",
        "Ship companion Input component in v0.3",
      ]}
    />
  );
}
