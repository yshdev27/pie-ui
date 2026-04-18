"use client";

import {
  type ButtonHTMLAttributes,
  type ReactNode,
  forwardRef,
} from "react";

export type ButtonVariant =
  | "primary"
  | "secondary"
  | "tinted"
  | "ghost"
  | "destructive";

export type ButtonSize = "sm" | "md" | "lg";

export interface ButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "disabled"> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  loading?: boolean;
  disabled?: boolean;
  fullWidth?: boolean;
  iconBefore?: ReactNode;
  iconAfter?: ReactNode;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  {
    variant = "primary",
    size = "md",
    loading = false,
    disabled = false,
    fullWidth = false,
    iconBefore,
    iconAfter,
    type = "button",
    className,
    children,
    ...rest
  },
  ref,
) {
  const classes = ["pie-button", className].filter(Boolean).join(" ");
  return (
    <button
      ref={ref}
      type={type}
      className={classes}
      data-variant={variant}
      data-size={size}
      data-disabled={disabled || loading ? "true" : undefined}
      data-full-width={fullWidth ? "true" : undefined}
      aria-busy={loading || undefined}
      disabled={disabled || loading}
      {...rest}
    >
      {loading ? <span className="pie-button-spinner" aria-hidden="true" /> : iconBefore}
      <span>{children}</span>
      {iconAfter}
    </button>
  );
});
