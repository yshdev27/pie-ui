"use client";

import {
  type ButtonHTMLAttributes,
  type HTMLAttributes,
  type ReactNode,
  createContext,
  forwardRef,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

type ToolbarOrientation = "horizontal" | "vertical";

interface ToolbarContextValue {
  orientation: ToolbarOrientation;
  focused: number;
  register: () => number;
  unregister: (index: number) => void;
  focusIndex: (index: number) => void;
  handleKeyDown: (event: React.KeyboardEvent, index: number) => void;
  refs: React.MutableRefObject<Array<HTMLButtonElement | null>>;
}

const ToolbarContext = createContext<ToolbarContextValue | null>(null);

export interface ToolbarProps extends HTMLAttributes<HTMLDivElement> {
  orientation?: ToolbarOrientation;
  "aria-label"?: string;
}

export const Toolbar = forwardRef<HTMLDivElement, ToolbarProps>(function Toolbar(
  {
    orientation = "horizontal",
    className,
    children,
    "aria-label": ariaLabel = "Toolbar",
    ...rest
  },
  ref,
) {
  const itemsRef = useRef<Array<HTMLButtonElement | null>>([]);
  const [focused, setFocused] = useState(0);

  const register = useCallback(() => {
    const idx = itemsRef.current.length;
    itemsRef.current.push(null);
    return idx;
  }, []);

  const unregister = useCallback((index: number) => {
    itemsRef.current[index] = null;
  }, []);

  const focusIndex = useCallback((index: number) => {
    const items = itemsRef.current.filter(Boolean) as HTMLButtonElement[];
    if (!items.length) return;
    const next = ((index % items.length) + items.length) % items.length;
    items[next]?.focus();
    setFocused(next);
  }, []);

  const handleKeyDown = useCallback(
    (event: React.KeyboardEvent, index: number) => {
      const items = itemsRef.current.filter(Boolean) as HTMLButtonElement[];
      if (!items.length) return;
      const next = orientation === "horizontal" ? "ArrowRight" : "ArrowDown";
      const prev = orientation === "horizontal" ? "ArrowLeft" : "ArrowUp";
      switch (event.key) {
        case next:
          event.preventDefault();
          focusIndex(index + 1);
          break;
        case prev:
          event.preventDefault();
          focusIndex(index - 1);
          break;
        case "Home":
          event.preventDefault();
          focusIndex(0);
          break;
        case "End":
          event.preventDefault();
          focusIndex(items.length - 1);
          break;
      }
    },
    [focusIndex, orientation],
  );

  const value = useMemo<ToolbarContextValue>(
    () => ({
      orientation,
      focused,
      register,
      unregister,
      focusIndex,
      handleKeyDown,
      refs: itemsRef,
    }),
    [orientation, focused, register, unregister, focusIndex, handleKeyDown],
  );

  const classes = ["pie-toolbar", className].filter(Boolean).join(" ");

  return (
    <ToolbarContext.Provider value={value}>
      <div
        ref={ref}
        role="toolbar"
        aria-label={ariaLabel}
        aria-orientation={orientation}
        data-orientation={orientation}
        className={classes}
        {...rest}
      >
        {children}
      </div>
    </ToolbarContext.Provider>
  );
});

export interface ToolbarButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  pressed?: boolean;
  icon?: ReactNode;
}

export const ToolbarButton = forwardRef<HTMLButtonElement, ToolbarButtonProps>(
  function ToolbarButton(
    { pressed, icon, className, children, type = "button", onKeyDown, ...rest },
    forwardedRef,
  ) {
    const ctx = useContext(ToolbarContext);
    const indexRef = useRef<number | null>(null);
    if (indexRef.current === null && ctx) {
      indexRef.current = ctx.register();
    }

    useEffect(() => {
      return () => {
        if (ctx && indexRef.current !== null) ctx.unregister(indexRef.current);
      };
    }, [ctx]);

    const setRefs = useCallback(
      (node: HTMLButtonElement | null) => {
        if (ctx && indexRef.current !== null) {
          ctx.refs.current[indexRef.current] = node;
        }
        if (typeof forwardedRef === "function") forwardedRef(node);
        else if (forwardedRef)
          (forwardedRef as React.MutableRefObject<HTMLButtonElement | null>).current =
            node;
      },
      [ctx, forwardedRef],
    );

    const handleKey = (event: React.KeyboardEvent<HTMLButtonElement>) => {
      onKeyDown?.(event);
      if (event.defaultPrevented) return;
      if (ctx && indexRef.current !== null) {
        ctx.handleKeyDown(event, indexRef.current);
      }
    };

    const isFirst = ctx && indexRef.current === 0;
    const tabIndex =
      ctx && indexRef.current !== null
        ? ctx.focused === indexRef.current || (ctx.focused == null && isFirst)
          ? 0
          : -1
        : 0;

    const classes = ["pie-toolbar-button", className].filter(Boolean).join(" ");

    return (
      <button
        ref={setRefs}
        type={type}
        className={classes}
        data-pressed={pressed ? "true" : undefined}
        aria-pressed={pressed}
        tabIndex={tabIndex}
        onKeyDown={handleKey}
        {...rest}
      >
        {icon ?? children}
      </button>
    );
  },
);

export function ToolbarSeparator({
  className,
  ...rest
}: HTMLAttributes<HTMLDivElement>) {
  const classes = ["pie-toolbar-separator", className].filter(Boolean).join(" ");
  return (
    <div role="separator" className={classes} {...rest} />
  );
}
