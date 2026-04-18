"use client";

import {
  type ReactNode,
  forwardRef,
  useCallback,
  useEffect,
  useId,
  useRef,
  useState,
} from "react";
import { Button, type ButtonProps } from "./button";

export type PullDownPlacement =
  | "bottom-start"
  | "bottom-end"
  | "top-start"
  | "top-end";

export interface PullDownItem {
  id?: string;
  label: ReactNode;
  onSelect?: () => void;
  icon?: ReactNode;
  variant?: "default" | "destructive";
  disabled?: boolean;
}

export interface PullDownButtonProps
  extends Omit<ButtonProps, "iconAfter" | "children"> {
  label: ReactNode;
  items: PullDownItem[];
  placement?: PullDownPlacement;
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
}

const ChevronDown = () => (
  <svg viewBox="0 0 12 12" width="12" height="12" aria-hidden="true">
    <path
      d="M3 4.5l3 3 3-3"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  </svg>
);

export const PullDownButton = forwardRef<HTMLDivElement, PullDownButtonProps>(
  function PullDownButton(
    {
      label,
      items,
      placement = "bottom-start",
      open: controlledOpen,
      defaultOpen = false,
      onOpenChange,
      variant = "secondary",
      size = "md",
      disabled,
      ...rest
    },
    ref,
  ) {
    const isControlled = controlledOpen !== undefined;
    const [uncontrolledOpen, setUncontrolledOpen] = useState(defaultOpen);
    const open = isControlled ? controlledOpen : uncontrolledOpen;

    const setOpen = useCallback(
      (next: boolean) => {
        if (!isControlled) setUncontrolledOpen(next);
        onOpenChange?.(next);
      },
      [isControlled, onOpenChange],
    );

    const containerRef = useRef<HTMLDivElement | null>(null);
    const setContainerRef = useCallback(
      (node: HTMLDivElement | null) => {
        containerRef.current = node;
        if (typeof ref === "function") ref(node);
        else if (ref)
          (ref as React.MutableRefObject<HTMLDivElement | null>).current = node;
      },
      [ref],
    );
    const triggerRef = useRef<HTMLButtonElement | null>(null);
    const panelId = useId();

    useEffect(() => {
      if (!open) return;
      const onDocClick = (event: MouseEvent) => {
        if (!containerRef.current) return;
        if (!containerRef.current.contains(event.target as Node)) {
          setOpen(false);
        }
      };
      const onKey = (event: KeyboardEvent) => {
        if (event.key === "Escape") {
          setOpen(false);
          triggerRef.current?.focus();
        }
      };
      document.addEventListener("mousedown", onDocClick);
      document.addEventListener("keydown", onKey);
      return () => {
        document.removeEventListener("mousedown", onDocClick);
        document.removeEventListener("keydown", onKey);
      };
    }, [open, setOpen]);

    return (
      <div ref={setContainerRef} className="pie-pull-down">
        <Button
          ref={triggerRef}
          variant={variant}
          size={size}
          disabled={disabled}
          aria-haspopup="menu"
          aria-expanded={open}
          aria-controls={panelId}
          iconAfter={<ChevronDown />}
          onClick={() => setOpen(!open)}
          {...rest}
        >
          {label}
        </Button>
        {open ? (
          <div
            id={panelId}
            role="menu"
            className="pie-pull-down-panel"
            data-placement={placement}
          >
            {items.map((item, i) => (
              <button
                key={item.id ?? i}
                type="button"
                role="menuitem"
                className="pie-pull-down-item"
                data-variant={item.variant ?? "default"}
                disabled={item.disabled}
                onClick={() => {
                  item.onSelect?.();
                  setOpen(false);
                }}
              >
                {item.icon ? (
                  <span className="pie-menu-item-icon" aria-hidden="true">
                    {item.icon}
                  </span>
                ) : null}
                <span>{item.label}</span>
              </button>
            ))}
          </div>
        ) : null}
      </div>
    );
  },
);
