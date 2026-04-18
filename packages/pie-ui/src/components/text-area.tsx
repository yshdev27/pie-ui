"use client";

import {
  type ChangeEvent,
  type TextareaHTMLAttributes,
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";

export interface TextAreaProps
  extends Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, "onChange" | "size"> {
  value?: string;
  defaultValue?: string;
  onChange?: (value: string, event: ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder?: string;
  invalid?: boolean;
  autoGrow?: boolean;
  resize?: "none" | "vertical" | "horizontal" | "both";
  width?: number | string;
  minRows?: number;
  maxRows?: number;
}

export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  function TextArea(
    {
      value: controlledValue,
      defaultValue = "",
      onChange,
      placeholder = "Type Here",
      disabled = false,
      invalid = false,
      autoGrow = false,
      resize = "none",
      width,
      minRows,
      maxRows,
      rows,
      className,
      style,
      ...rest
    },
    forwardedRef,
  ) {
    const isControlled = controlledValue !== undefined;
    const [uncontrolledValue, setUncontrolledValue] = useState(defaultValue);
    const value = isControlled ? controlledValue : uncontrolledValue;

    const innerRef = useRef<HTMLTextAreaElement | null>(null);
    useImperativeHandle(forwardedRef, () => innerRef.current as HTMLTextAreaElement);

    const resizeTextarea = useCallback(() => {
      const el = innerRef.current;
      if (!el || !autoGrow) return;
      el.style.height = "auto";
      const lineHeight = parseFloat(getComputedStyle(el).lineHeight) || 20;
      const paddingY =
        parseFloat(getComputedStyle(el).paddingTop) +
        parseFloat(getComputedStyle(el).paddingBottom);
      const min = minRows ? minRows * lineHeight + paddingY : 0;
      const max = maxRows ? maxRows * lineHeight + paddingY : Infinity;
      const next = Math.min(max, Math.max(min, el.scrollHeight));
      el.style.height = `${next}px`;
      el.style.overflowY = el.scrollHeight > max ? "auto" : "hidden";
    }, [autoGrow, minRows, maxRows]);

    useEffect(() => {
      if (autoGrow) resizeTextarea();
    }, [autoGrow, resizeTextarea, value]);

    const handleChange = useCallback(
      (event: ChangeEvent<HTMLTextAreaElement>) => {
        const next = event.target.value;
        if (!isControlled) setUncontrolledValue(next);
        onChange?.(next, event);
      },
      [isControlled, onChange],
    );

    const classes = ["pie-textarea", className].filter(Boolean).join(" ");

    const mergedStyle: React.CSSProperties = {
      ...style,
      ...(width !== undefined
        ? { width: typeof width === "number" ? `${width}px` : width }
        : null),
      ...(resize !== undefined ? { resize } : null),
    };

    return (
      <textarea
        ref={innerRef}
        className={classes}
        value={value}
        placeholder={placeholder}
        disabled={disabled}
        aria-invalid={invalid || undefined}
        data-invalid={invalid ? "true" : undefined}
        rows={rows ?? minRows}
        style={mergedStyle}
        onChange={handleChange}
        {...rest}
      />
    );
  },
);
