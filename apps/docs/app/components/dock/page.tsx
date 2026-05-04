import { ComponentDocTemplate } from "../_components/component-doc-template";
import {
  DockDarkPreview,
  DockPreview,
} from "../../_components/component-previews";

export default function DockDocPage() {
  return (
    <ComponentDocTemplate
      title="Dock"
      description="A magnifying icon rail inspired by macOS. Use it to anchor a small set of frequent destinations or actions and to give the surface a confident center of gravity."
      status="In review"
      componentName="Dock"
      preview={<DockPreview />}
      variants={[
        {
          name: "Light surface",
          description: "Default appearance on a light or neutral background.",
          node: <DockPreview />,
        },
        {
          name: "Dark surface",
          description:
            "Inverts to the dark theme tokens. Wrap with a dark surface and apply data-pie-theme=\"dark\".",
          node: <DockDarkPreview />,
        },
      ]}
      props={[
        {
          name: "magnification",
          type: "number",
          defaultValue: "1.25",
          description:
            "Scale applied to the item under the cursor or keyboard focus. Other items remain at their resting size.",
        },
        {
          name: "baseSize",
          type: "number",
          defaultValue: "40",
          description: "Resting square size of an item, in pixels.",
        },
        {
          name: "direction",
          type: `"horizontal" | "vertical"`,
          defaultValue: `"horizontal"`,
          description: "Axis along which items are laid out and magnified.",
        },
        {
          name: "aria-label",
          type: "string",
          defaultValue: `"Dock"`,
          description: "Describes the dock's purpose to assistive technology.",
        },
      ]}
      guidelines={{
        do: [
          "Limit the dock to about five to nine top-level destinations.",
          "Pair every item with a label so the tooltip and screen reader name match.",
          "Mark the current destination with the active prop.",
        ],
        dont: [
          "Don't use the dock for one-off contextual actions; reach for Toolbar instead.",
          "Don't nest a dock inside scrollable content where it can be cut off.",
          "Don't disable the magnification on touch — the rail still works as a static row.",
        ],
      }}
      accessibility={{
        keys: [
          {
            combo: ["Tab"],
            description: "Moves focus through dock items in DOM order.",
          },
          {
            combo: ["Enter"],
            description: "Activates the focused item.",
          },
          {
            combo: ["Space"],
            description: "Activates the focused item.",
          },
        ],
        notes: [
          "Each DockItem renders a button with the provided label as its accessible name.",
          "Tooltips are decorative; the label drives both the visible hint and the aria-label, so screen readers announce a single name.",
          "Magnification is purely visual and respects prefers-reduced-motion through token-driven transitions.",
        ],
      }}
      related={[
        { label: "Toolbar", href: "/components/toolbar" },
        { label: "Menu", href: "/components/menu" },
        { label: "Button", href: "/components/button" },
      ]}
      checklist={[
        "Touch interaction polish",
        "Optional drag-to-reorder behavior",
        "Vertical dock keyboard navigation parity",
      ]}
    />
  );
}
