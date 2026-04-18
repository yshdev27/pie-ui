import { ComponentDocTemplate } from "../_components/component-doc-template";
import { ButtonPreview } from "../../_components/component-previews";
import { CodeWindow } from "../../_components/code-window";

export default function ButtonDocPage() {
  return (
    <ComponentDocTemplate
      title="Button"
      description="Buttons initiate an action. Use prominence, tone, and placement to signal the weight of the action that follows."
      status="Stable"
      componentName="Button"
      preview={
        <div className="preview-row">
          <ButtonPreview variant="primary">Continue</ButtonPreview>
          <ButtonPreview variant="secondary">Learn more</ButtonPreview>
          <ButtonPreview variant="tinted">Save draft</ButtonPreview>
          <ButtonPreview variant="destructive">Delete</ButtonPreview>
        </div>
      }
      variants={[
        {
          name: "Primary",
          description: "For the single most important action in a view.",
          node: <ButtonPreview variant="primary">Continue</ButtonPreview>,
        },
        {
          name: "Secondary",
          description: "For alternate actions that sit beside a primary.",
          node: <ButtonPreview variant="secondary">Cancel</ButtonPreview>,
        },
        {
          name: "Tinted",
          description: "For low-emphasis actions that still need visibility.",
          node: <ButtonPreview variant="tinted">Save draft</ButtonPreview>,
        },
        {
          name: "Ghost",
          description: "For actions inside dense layouts or toolbars.",
          node: <ButtonPreview variant="ghost">Dismiss</ButtonPreview>,
        },
        {
          name: "Destructive",
          description: "For irreversible, dangerous actions.",
          node: <ButtonPreview variant="destructive">Delete</ButtonPreview>,
        },
        {
          name: "Loading",
          description: "Indicates an in-flight async action.",
          node: (
            <ButtonPreview variant="primary" loading>
              Saving…
            </ButtonPreview>
          ),
        },
        {
          name: "Small",
          description: "Compact size for dense contexts.",
          node: (
            <ButtonPreview variant="primary" size="sm">
              Continue
            </ButtonPreview>
          ),
        },
        {
          name: "Large",
          description: "Prominent size for marketing and onboarding.",
          node: (
            <ButtonPreview variant="primary" size="lg">
              Continue
            </ButtonPreview>
          ),
        },
        {
          name: "Disabled",
          description: "Non-interactive state.",
          node: (
            <ButtonPreview variant="primary" disabled>
              Continue
            </ButtonPreview>
          ),
        },
      ]}
      usage={
        <CodeWindow title="Button.tsx">
          <span className="tok-k">import</span>{" "}
          <span className="tok-p">{"{ Button }"}</span>{" "}
          <span className="tok-k">from</span>{" "}
          <span className="tok-s">&quot;@pieui/react&quot;</span>;{"\n\n"}
          <span className="tok-k">export function</span>{" "}
          <span className="tok-f">SaveBar</span>() {"{\n"}
          {"  "}
          <span className="tok-k">return</span> (
          {"\n    "}
          <span className="tok-p">&lt;</span>
          <span className="tok-t">div</span>{" "}
          <span className="tok-n">className</span>=
          <span className="tok-s">&quot;flex gap-2&quot;</span>
          <span className="tok-p">&gt;</span>
          {"\n      "}
          <span className="tok-p">&lt;</span>
          <span className="tok-t">Button</span>{" "}
          <span className="tok-n">variant</span>=
          <span className="tok-s">&quot;secondary&quot;</span>
          <span className="tok-p">&gt;</span>Cancel
          <span className="tok-p">&lt;/</span>
          <span className="tok-t">Button</span>
          <span className="tok-p">&gt;</span>
          {"\n      "}
          <span className="tok-p">&lt;</span>
          <span className="tok-t">Button</span>{" "}
          <span className="tok-n">variant</span>=
          <span className="tok-s">&quot;primary&quot;</span>{" "}
          <span className="tok-n">onClick</span>={"{"}handleSave{"}"}
          <span className="tok-p">&gt;</span>
          {"\n        "}Save changes
          {"\n      "}
          <span className="tok-p">&lt;/</span>
          <span className="tok-t">Button</span>
          <span className="tok-p">&gt;</span>
          {"\n    "}
          <span className="tok-p">&lt;/</span>
          <span className="tok-t">div</span>
          <span className="tok-p">&gt;</span>
          {"\n  );\n"}
          {"}"}
        </CodeWindow>
      }
      props={[
        {
          name: "variant",
          type: `"primary" | "secondary" | "tinted" | "ghost" | "destructive"`,
          defaultValue: `"primary"`,
          description: "Controls prominence and tone of the button.",
        },
        {
          name: "size",
          type: `"sm" | "md" | "lg"`,
          defaultValue: `"md"`,
          description: "Height, horizontal padding, and text size.",
        },
        {
          name: "loading",
          type: "boolean",
          defaultValue: "false",
          description:
            "Shows a spinner and disables interaction while an async action is in flight.",
        },
        {
          name: "disabled",
          type: "boolean",
          defaultValue: "false",
          description: "Removes the button from the tab order.",
        },
        {
          name: "iconBefore",
          type: "ReactNode",
          description: "Render an icon left of the label.",
        },
        {
          name: "iconAfter",
          type: "ReactNode",
          description: "Render an icon right of the label.",
        },
        {
          name: "fullWidth",
          type: "boolean",
          defaultValue: "false",
          description: "Stretches the button to fill its container.",
        },
        {
          name: "asChild",
          type: "boolean",
          defaultValue: "false",
          description:
            "Forwards props to the child element, useful for rendering as a link.",
        },
      ]}
      guidelines={{
        do: [
          "Use exactly one primary button per view.",
          "Lead with a verb: Save, Continue, Invite.",
          "Pair destructive buttons with a confirming affordance.",
        ],
        dont: [
          "Don't stack two primary buttons side by side.",
          "Don't use buttons for navigation that behaves like a link.",
          "Don't rely on color alone to signal danger.",
        ],
      }}
      accessibility={{
        keys: [
          {
            combo: ["Tab"],
            description: "Move focus to and away from the button.",
          },
          {
            combo: ["Space"],
            description: "Activate the button when focused.",
          },
          { combo: ["Enter"], description: "Activate the button when focused." },
        ],
        notes: [
          "Focus ring uses the accent token and is always visible on keyboard focus.",
          "When `loading`, aria-busy is set and interaction is blocked.",
          "Use an accessible label for icon-only buttons via aria-label.",
        ],
      }}
      related={[
        { label: "Pull-down button", href: "/components/pull-down-button" },
        { label: "Toolbar", href: "/components/toolbar" },
        { label: "Menu", href: "/components/menu" },
      ]}
      checklist={[
        "Finalize size scale",
        "Confirm focus ring and contrast",
        "Add loading and icon-only patterns",
      ]}
    />
  );
}
