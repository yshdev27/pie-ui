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

export type DropdownPlacement =
  | "bottom-start"
  | "bottom-end"
  | "top-start"
  | "top-end";

export interface DropdownItem {
  id?: string;
  label: ReactNode;
  onSelect?: () => void;
  icon?: ReactNode;
  variant?: "default" | "destructive";
  disabled?: boolean;
}

export interface DropdownProps {
  label: ReactNode;
  items: DropdownItem[];
  placement?: DropdownPlacement;
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  disabled?: boolean;
  className?: string;
  "aria-label"?: string;
}

const ChevronDown = () => (
  <svg
    viewBox="0 0 16 16"
    width="16"
    height="16"
    aria-hidden="true"
    className="pie-dropdown-chevron"
  >
    <path
      d="M4 6l4 4 4-4"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  </svg>
);

export const Dropdown = forwardRef<HTMLDivElement, DropdownProps>(
  function Dropdown(
    {
      label,
      items,
      placement = "bottom-start",
      open: controlledOpen,
      defaultOpen = false,
      onOpenChange,
      disabled = false,
      className,
      "aria-label": ariaLabel,
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

    const rootClasses = ["pie-dropdown", className].filter(Boolean).join(" ");

    return (
      <div ref={setContainerRef} className={rootClasses}>
        <button
          ref={triggerRef}
          type="button"
          className="pie-dropdown-trigger"
          data-open={open}
          disabled={disabled}
          aria-haspopup="listbox"
          aria-expanded={open}
          aria-controls={panelId}
          aria-label={ariaLabel}
          onClick={() => setOpen(!open)}
        >
          <span className="pie-dropdown-label">{label}</span>
          <ChevronDown />
        </button>
        {open ? (
          <div
            id={panelId}
            role="listbox"
            className="pie-dropdown-panel"
            data-placement={placement}
          >
            {items.map((item, i) => (
              <button
                key={item.id ?? i}
                type="button"
                role="option"
                className="pie-dropdown-item"
                data-variant={item.variant ?? "default"}
                disabled={item.disabled}
                onClick={() => {
                  item.onSelect?.();
                  setOpen(false);
                }}
              >
                {item.icon ? (
                  <span className="pie-dropdown-item-icon" aria-hidden="true">
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
