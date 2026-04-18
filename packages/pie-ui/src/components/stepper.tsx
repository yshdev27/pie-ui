"use client";

import {
  type HTMLAttributes,
  forwardRef,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";

export interface StepperProps
  extends Omit<HTMLAttributes<HTMLDivElement>, "onChange"> {
  value?: number;
  defaultValue?: number;
  onValueChange?: (value: number) => void;
  min?: number;
  max?: number;
  step?: number;
  disabled?: boolean;
  holdToRepeat?: boolean;
  "aria-label"?: string;
}

function clamp(value: number, min: number, max: number): number {
  return Math.max(min, Math.min(max, value));
}

export const Stepper = forwardRef<HTMLDivElement, StepperProps>(function Stepper(
  {
    value: controlledValue,
    defaultValue = 0,
    onValueChange,
    min = Number.NEGATIVE_INFINITY,
    max = Number.POSITIVE_INFINITY,
    step = 1,
    disabled = false,
    holdToRepeat = true,
    className,
    onKeyDown,
    "aria-label": ariaLabel,
    ...rest
  },
  ref,
) {
  const isControlled = controlledValue !== undefined;
  const [uncontrolled, setUncontrolled] = useState(defaultValue);
  const value = isControlled ? controlledValue : uncontrolled;

  const setValue = useCallback(
    (next: number) => {
      const clamped = clamp(next, min, max);
      if (clamped === value) return;
      if (!isControlled) setUncontrolled(clamped);
      onValueChange?.(clamped);
    },
    [value, min, max, isControlled, onValueChange],
  );

  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const stopRepeat = useCallback(() => {
    if (timerRef.current) clearTimeout(timerRef.current);
    if (intervalRef.current) clearInterval(intervalRef.current);
    timerRef.current = null;
    intervalRef.current = null;
  }, []);

  useEffect(() => stopRepeat, [stopRepeat]);

  const startRepeat = useCallback(
    (direction: 1 | -1) => {
      if (!holdToRepeat) return;
      timerRef.current = setTimeout(() => {
        intervalRef.current = setInterval(() => {
          setValue(value + direction * step);
        }, 60);
      }, 400);
    },
    [holdToRepeat, setValue, step, value],
  );

  const handleStep = (direction: 1 | -1) => () =>
    setValue(value + direction * step);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    onKeyDown?.(event);
    if (event.defaultPrevented || disabled) return;
    switch (event.key) {
      case "ArrowUp":
      case "ArrowRight":
        event.preventDefault();
        setValue(value + step);
        break;
      case "ArrowDown":
      case "ArrowLeft":
        event.preventDefault();
        setValue(value - step);
        break;
      case "Home":
        if (Number.isFinite(min)) {
          event.preventDefault();
          setValue(min);
        }
        break;
      case "End":
        if (Number.isFinite(max)) {
          event.preventDefault();
          setValue(max);
        }
        break;
    }
  };

  const classes = ["pie-stepper", className].filter(Boolean).join(" ");
  const atMin = value <= min;
  const atMax = value >= max;

  return (
    <div
      ref={ref}
      className={classes}
      role="group"
      aria-label={ariaLabel ?? "Stepper"}
      onKeyDown={handleKeyDown}
      tabIndex={-1}
      {...rest}
    >
      <button
        type="button"
        aria-label="Decrement"
        className="pie-stepper-button"
        disabled={disabled || atMin}
        onClick={handleStep(-1)}
        onPointerDown={() => startRepeat(-1)}
        onPointerUp={stopRepeat}
        onPointerLeave={stopRepeat}
      >
        <svg viewBox="0 0 16 16" width="14" height="14" aria-hidden="true">
          <path
            d="M3.5 8h9"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
            fill="none"
          />
        </svg>
      </button>
      <span
        className="pie-stepper-value"
        role="spinbutton"
        aria-valuenow={value}
        aria-valuemin={Number.isFinite(min) ? min : undefined}
        aria-valuemax={Number.isFinite(max) ? max : undefined}
        aria-valuetext={String(value)}
      >
        {value}
      </span>
      <button
        type="button"
        aria-label="Increment"
        className="pie-stepper-button"
        disabled={disabled || atMax}
        onClick={handleStep(1)}
        onPointerDown={() => startRepeat(1)}
        onPointerUp={stopRepeat}
        onPointerLeave={stopRepeat}
      >
        <svg viewBox="0 0 16 16" width="14" height="14" aria-hidden="true">
          <path
            d="M8 3.5v9M3.5 8h9"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
            fill="none"
          />
        </svg>
      </button>
    </div>
  );
});
