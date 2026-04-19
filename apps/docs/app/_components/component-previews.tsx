"use client";

import type { ReactNode } from "react";
import {
  Button,
  Checkbox,
  type CheckedState,
  type DropdownItem,
  Dropdown,
  Menu,
  MenuItem,
  Stepper,
  TextArea,
  Toggle,
  Toolbar,
  ToolbarButton,
  ToolbarSeparator,
} from "@pieui/react";

function Icon({ children }: { children: ReactNode }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="20"
      height="20"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

const UserIcon = () => (
  <Icon>
    <circle cx="12" cy="12" r="9" />
    <circle cx="12" cy="10.5" r="2.8" />
    <path d="M6.5 18c1.3-2.2 3.3-3.3 5.5-3.3s4.2 1.1 5.5 3.3" />
  </Icon>
);

const BellIcon = () => (
  <Icon>
    <path d="M6 16V11a6 6 0 1 1 12 0v5l1.3 1.7H4.7z" />
    <path d="M10.5 20a1.5 1.5 0 0 0 3 0" />
  </Icon>
);

const GearIcon = () => (
  <Icon>
    <circle cx="12" cy="12" r="2.8" />
    <path d="M19.4 13.5a7.7 7.7 0 0 0 0-3l2-1.5-2-3.4-2.3.9a7.7 7.7 0 0 0-2.6-1.5L14 2.5h-4l-.5 2.5a7.7 7.7 0 0 0-2.6 1.5l-2.3-.9-2 3.4 2 1.5a7.7 7.7 0 0 0 0 3l-2 1.5 2 3.4 2.3-.9a7.7 7.7 0 0 0 2.6 1.5l.5 2.5h4l.5-2.5a7.7 7.7 0 0 0 2.6-1.5l2.3.9 2-3.4z" />
  </Icon>
);

const LogOutIcon = () => (
  <Icon>
    <path d="M14 4H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8" />
    <path d="M10 12h11" />
    <path d="M17 8l4 4-4 4" />
  </Icon>
);

export function ButtonPreview({
  variant,
  children = "Continue",
  size,
  disabled,
  loading,
  icon,
}: {
  variant?: "primary" | "secondary" | "tinted" | "destructive" | "ghost";
  children?: ReactNode;
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
  loading?: boolean;
  icon?: ReactNode;
}) {
  return (
    <Button
      variant={variant}
      size={size}
      disabled={disabled}
      loading={loading}
      iconBefore={icon}
    >
      {children}
    </Button>
  );
}

export function TogglePreview({ on = false }: { on?: boolean }) {
  return <Toggle defaultChecked={on} aria-label="Toggle preview" />;
}

export function CheckboxPreview({
  state = "unchecked",
  label,
}: {
  state?: "checked" | "unchecked" | "indeterminate";
  label?: string;
}) {
  const initial: CheckedState =
    state === "unchecked" ? false : state === "checked" ? true : "indeterminate";
  return <Checkbox defaultChecked={initial} label={label} />;
}

export function StepperPreview({ value = 3 }: { value?: number }) {
  return <Stepper defaultValue={value} aria-label="Stepper preview" />;
}

type MenuEntry = {
  label: string;
  icon: ReactNode;
  danger?: boolean;
};

const defaultMenuItems: MenuEntry[] = [
  { label: "Profile", icon: <UserIcon /> },
  { label: "Notifications", icon: <BellIcon /> },
  { label: "Settings", icon: <GearIcon /> },
  { label: "Logout", icon: <LogOutIcon /> },
];

export function MenuPreview({
  items = defaultMenuItems,
}: {
  items?: MenuEntry[];
}) {
  return (
    <Menu aria-label="Account">
      {items.map((item, i) => (
        <MenuItem
          key={i}
          icon={item.icon}
          variant={item.danger ? "destructive" : "default"}
        >
          {item.label}
        </MenuItem>
      ))}
    </Menu>
  );
}

export function DropdownPreview({
  open = false,
  label = "United States",
}: {
  open?: boolean;
  label?: string;
}) {
  const items: DropdownItem[] = [
    { label: "United States" },
    { label: "Canada" },
    { label: "United Kingdom" },
    { label: "Germany" },
    { label: "Japan" },
  ];
  return <Dropdown label={label} items={items} defaultOpen={open} />;
}

export function TextAreaPreview({
  placeholder = "Type Here",
  value,
  invalid,
  disabled,
}: {
  placeholder?: string;
  value?: string;
  invalid?: boolean;
  disabled?: boolean;
}) {
  return (
    <TextArea
      placeholder={placeholder}
      defaultValue={value}
      invalid={invalid}
      disabled={disabled}
      aria-label="Text area preview"
    />
  );
}

export function ToolbarPreview() {
  const iconProps = {
    viewBox: "0 0 24 24",
    width: 16,
    height: 16,
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };
  return (
    <Toolbar aria-label="Formatting">
      <ToolbarButton aria-label="Bold">
        <svg {...iconProps}>
          <path d="M7 5h6a4 4 0 0 1 0 8H7zm0 8h7a4 4 0 0 1 0 8H7z" fill="currentColor" />
        </svg>
      </ToolbarButton>
      <ToolbarButton aria-label="Italic" pressed>
        <svg {...iconProps}>
          <path d="M10 4h9M5 20h9M14 4l-4 16" />
        </svg>
      </ToolbarButton>
      <ToolbarButton aria-label="Underline">
        <svg {...iconProps}>
          <path d="M6 4v8a6 6 0 0 0 12 0V4M5 20h14" />
        </svg>
      </ToolbarButton>
      <ToolbarSeparator />
      <ToolbarButton aria-label="Align left">
        <svg {...iconProps}>
          <path d="M4 6h16M4 10h10M4 14h16M4 18h10" />
        </svg>
      </ToolbarButton>
      <ToolbarButton aria-label="Align center">
        <svg {...iconProps}>
          <path d="M4 6h16M7 10h10M4 14h16M7 18h10" />
        </svg>
      </ToolbarButton>
      <ToolbarButton aria-label="Link">
        <svg {...iconProps}>
          <path d="M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 1 0-5.7-5.7l-1 1M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 1 0 5.7 5.7l1-1" />
        </svg>
      </ToolbarButton>
    </Toolbar>
  );
}
