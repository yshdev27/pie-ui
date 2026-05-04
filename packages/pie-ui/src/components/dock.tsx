"use client";

import {
  type ButtonHTMLAttributes,
  type CSSProperties,
  type HTMLAttributes,
  type ReactNode,
  createContext,
  forwardRef,
  useContext,
} from "react";

type DockDirection = "horizontal" | "vertical";

interface DockContextValue {
  magnification: number;
  baseSize: number;
  direction: DockDirection;
}

const DockContext = createContext<DockContextValue | null>(null);

export interface DockProps extends HTMLAttributes<HTMLDivElement> {
  /** Scale applied to the hovered or focused item. */
  magnification?: number;
  /** Resting size of an item, in pixels. */
  baseSize?: number;
  /** Layout direction of the dock. */
  direction?: DockDirection;
  /** Accessible label for the toolbar role. */
  "aria-label"?: string;
}

export const Dock = forwardRef<HTMLDivElement, DockProps>(function Dock(
  {
    magnification = 1.25,
    baseSize = 40,
    direction = "horizontal",
    className,
    children,
    "aria-label": ariaLabel = "Dock",
    style,
    ...rest
  },
  forwardedRef,
) {
  const value: DockContextValue = {
    magnification,
    baseSize,
    direction,
  };

  const classes = ["pie-dock", className].filter(Boolean).join(" ");

  const dockStyle: CSSProperties = {
    ...style,
    ["--pie-dock-base-size" as string]: `${baseSize}px`,
  };

  return (
    <DockContext.Provider value={value}>
      <div
        ref={forwardedRef}
        role="toolbar"
        aria-label={ariaLabel}
        aria-orientation={direction}
        data-direction={direction}
        className={classes}
        style={dockStyle}
        {...rest}
      >
        {children}
      </div>
    </DockContext.Provider>
  );
});

export interface DockItemProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Icon to render inside the item. */
  icon?: ReactNode;
  /** Visible tooltip label and accessible name. */
  label?: string;
  /** Marks the item as the current selection. */
  active?: boolean;
}

export const DockItem = forwardRef<HTMLButtonElement, DockItemProps>(
  function DockItem(
    {
      icon,
      label,
      active,
      className,
      children,
      type = "button",
      style,
      "aria-label": ariaLabelProp,
      ...rest
    },
    forwardedRef,
  ) {
    const ctx = useContext(DockContext);
    const baseSize = ctx?.baseSize ?? 40;
    const magnification = ctx?.magnification ?? 1.25;
    const classes = ["pie-dock-item", className].filter(Boolean).join(" ");

    const itemStyle: CSSProperties = {
      ...style,
      width: baseSize,
      height: baseSize,
      ["--pie-dock-item-scale" as string]: String(magnification),
    };

    return (
      <button
        ref={forwardedRef}
        type={type}
        className={classes}
        data-active={active ? "true" : undefined}
        aria-label={ariaLabelProp ?? label}
        aria-pressed={active}
        style={itemStyle}
        {...rest}
      >
        {label ? (
          <span className="pie-dock-tooltip" role="tooltip">
            {label}
          </span>
        ) : null}
        <span
          className="pie-dock-item-content"
          aria-hidden={icon ? true : undefined}
        >
          {icon ?? children}
        </span>
      </button>
    );
  },
);

export type DockSeparatorProps = HTMLAttributes<HTMLDivElement>;

export function DockSeparator({ className, ...rest }: DockSeparatorProps) {
  const classes = ["pie-dock-separator", className].filter(Boolean).join(" ");
  return <div role="separator" className={classes} {...rest} />;
}
