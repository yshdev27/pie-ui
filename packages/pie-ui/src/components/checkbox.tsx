"use client";

import {
  type InputHTMLAttributes,
  type ReactNode,
  forwardRef,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";

export type CheckedState = boolean | "indeterminate";

export interface CheckboxProps
  extends Omit<
    InputHTMLAttributes<HTMLInputElement>,
    "checked" | "defaultChecked" | "onChange" | "type"
  > {
  checked?: CheckedState;
  defaultChecked?: CheckedState;
  onCheckedChange?: (checked: CheckedState) => void;
  label?: ReactNode;
}

function isIndeterminate(state: CheckedState): state is "indeterminate" {
  return state === "indeterminate";
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  function Checkbox(
    {
      checked: controlledChecked,
      defaultChecked = false,
      onCheckedChange,
      label,
      disabled,
      className,
      id,
      ...rest
    },
    forwardedRef,
  ) {
    const isControlled = controlledChecked !== undefined;
    const [uncontrolled, setUncontrolled] = useState<CheckedState>(
      defaultChecked,
    );
    const state = isControlled ? controlledChecked : uncontrolled;

    const innerRef = useRef<HTMLInputElement | null>(null);

    const setRefs = useCallback(
      (node: HTMLInputElement | null) => {
        innerRef.current = node;
        if (typeof forwardedRef === "function") forwardedRef(node);
        else if (forwardedRef)
          (forwardedRef as React.MutableRefObject<HTMLInputElement | null>).current =
            node;
      },
      [forwardedRef],
    );

    useEffect(() => {
      if (innerRef.current) {
        innerRef.current.indeterminate = isIndeterminate(state);
      }
    }, [state]);

    const handleChange = useCallback(() => {
      const next: CheckedState = isIndeterminate(state) ? true : !state;
      if (!isControlled) setUncontrolled(next);
      onCheckedChange?.(next);
    }, [state, isControlled, onCheckedChange]);

    const dataState = isIndeterminate(state)
      ? "indeterminate"
      : state
        ? "checked"
        : "unchecked";

    const input = (
      <input
        ref={setRefs}
        id={id}
        type="checkbox"
        className="pie-checkbox"
        data-state={dataState}
        checked={state === true}
        disabled={disabled}
        aria-checked={isIndeterminate(state) ? "mixed" : state}
        onChange={handleChange}
        {...rest}
      />
    );

    if (!label) return input;

    const rootClasses = ["pie-checkbox-root", className].filter(Boolean).join(" ");
    return (
      <label className={rootClasses} htmlFor={id}>
        {input}
        <span>{label}</span>
      </label>
    );
  },
);
