"use client";

import {
  type ButtonHTMLAttributes,
  forwardRef,
  useCallback,
  useState,
} from "react";

export interface ToggleProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "onChange"> {
  checked?: boolean;
  defaultChecked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
  disabled?: boolean;
}

export const Toggle = forwardRef<HTMLButtonElement, ToggleProps>(function Toggle(
  {
    checked: controlledChecked,
    defaultChecked = false,
    onCheckedChange,
    disabled = false,
    className,
    onClick,
    "aria-label": ariaLabel,
    ...rest
  },
  ref,
) {
  const isControlled = controlledChecked !== undefined;
  const [uncontrolledChecked, setUncontrolledChecked] = useState(defaultChecked);
  const checked = isControlled ? controlledChecked : uncontrolledChecked;

  const handleClick = useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      onClick?.(event);
      if (event.defaultPrevented) return;
      const next = !checked;
      if (!isControlled) setUncontrolledChecked(next);
      onCheckedChange?.(next);
    },
    [checked, isControlled, onCheckedChange, onClick],
  );

  const classes = ["pie-toggle", className].filter(Boolean).join(" ");

  return (
    <button
      ref={ref}
      type="button"
      role="switch"
      aria-checked={checked}
      aria-label={ariaLabel}
      data-checked={checked ? "true" : "false"}
      disabled={disabled}
      className={classes}
      onClick={handleClick}
      {...rest}
    >
      <span className="pie-toggle-thumb" aria-hidden="true" />
    </button>
  );
});
