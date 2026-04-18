"use client";

import {
  type ButtonHTMLAttributes,
  type HTMLAttributes,
  type ReactNode,
  forwardRef,
} from "react";

export interface MenuProps extends HTMLAttributes<HTMLDivElement> {
  "aria-label"?: string;
}

export const Menu = forwardRef<HTMLDivElement, MenuProps>(function Menu(
  { className, children, "aria-label": ariaLabel = "Menu", ...rest },
  ref,
) {
  const classes = ["pie-menu", className].filter(Boolean).join(" ");
  return (
    <div
      ref={ref}
      role="menu"
      aria-label={ariaLabel}
      className={classes}
      {...rest}
    >
      {children}
    </div>
  );
});

export interface MenuItemProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: ReactNode;
  variant?: "default" | "destructive";
}

export const MenuItem = forwardRef<HTMLButtonElement, MenuItemProps>(
  function MenuItem(
    {
      icon,
      variant = "default",
      className,
      children,
      type = "button",
      ...rest
    },
    ref,
  ) {
    const classes = ["pie-menu-item", className].filter(Boolean).join(" ");
    return (
      <button
        ref={ref}
        type={type}
        role="menuitem"
        className={classes}
        data-variant={variant}
        {...rest}
      >
        {icon ? (
          <span className="pie-menu-item-icon" aria-hidden="true">
            {icon}
          </span>
        ) : null}
        <span>{children}</span>
      </button>
    );
  },
);

export function MenuSeparator({
  className,
  ...rest
}: HTMLAttributes<HTMLDivElement>) {
  const classes = ["pie-menu-separator", className].filter(Boolean).join(" ");
  return <div role="separator" aria-orientation="horizontal" className={classes} {...rest} />;
}
