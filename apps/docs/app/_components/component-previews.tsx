"use client";

import type { ReactNode } from "react";
import {
  Button,
  Checkbox,
  type CheckedState,
  Dock,
  DockItem,
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

const dockIconProps = {
  viewBox: "0 0 24 24",
  width: 20,
  height: 20,
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

const HomeDockIcon = () => (
  <svg {...dockIconProps}>
    <path d="M4 11l8-7 8 7" />
    <path d="M6 10v9a1 1 0 0 0 1 1h3v-6h4v6h3a1 1 0 0 0 1-1v-9" />
  </svg>
);

const TerminalDockIcon = () => (
  <svg {...dockIconProps}>
    <rect x="3" y="5" width="18" height="14" rx="2.5" />
    <path d="M7 10l3 2.5L7 15" />
    <path d="M12 16h5" />
  </svg>
);

const NewDockIcon = () => (
  <svg {...dockIconProps}>
    <path d="M5 4v3M5 17v3M3 5h4M3 19h4" />
    <path d="M19 4v3M19 17v3M17 5h4M17 19h4" />
    <rect x="9" y="9" width="6" height="6" rx="1.5" />
  </svg>
);

const SparkleDockIcon = () => (
  <svg {...dockIconProps}>
    <path d="M12 4l1.8 4.6L18 10l-4.2 1.4L12 16l-1.8-4.6L6 10l4.2-1.4z" />
  </svg>
);

const BranchDockIcon = () => (
  <svg {...dockIconProps}>
    <circle cx="6.5" cy="6" r="2" />
    <circle cx="6.5" cy="18" r="2" />
    <circle cx="17.5" cy="12" r="2" />
    <path d="M6.5 8v8" />
    <path d="M6.5 12c0-3 2-5 5.5-5h.5a5 5 0 0 1 5 5" />
  </svg>
);

const TwitterDockIcon = () => (
  <svg {...dockIconProps}>
    <path d="M5 5l6.5 9L5 19h2.5l5-5.5L17 19h2L12.5 9.5 18.5 5H16l-4.5 4.7L8 5z" fill="currentColor" stroke="none" />
  </svg>
);

const GithubDockIcon = () => (
  <svg {...dockIconProps}>
    <path d="M12 3a9 9 0 0 0-2.85 17.54c.45.08.62-.2.62-.43v-1.6c-2.5.55-3.04-1.2-3.04-1.2-.4-1.05-1-1.33-1-1.33-.83-.57.06-.56.06-.56.92.07 1.4.95 1.4.95.81 1.4 2.13 1 2.65.76.08-.6.32-1 .58-1.23-2-.23-4.1-1-4.1-4.45 0-.98.35-1.78.93-2.4-.1-.23-.4-1.15.08-2.4 0 0 .76-.24 2.5.92a8.6 8.6 0 0 1 4.55 0c1.74-1.16 2.5-.92 2.5-.92.48 1.25.18 2.17.09 2.4.58.62.92 1.42.92 2.4 0 3.46-2.1 4.22-4.1 4.44.32.28.62.83.62 1.68v2.49c0 .24.16.52.62.43A9 9 0 0 0 12 3z" fill="currentColor" stroke="none" />
  </svg>
);

const PieMarkIcon = () => (
  <svg {...dockIconProps} strokeWidth={2}>
    <path d="M7 18L13 4l4 8h-5l-3 6z" fill="currentColor" stroke="none" />
  </svg>
);

export function DockPreview() {
  return (
    <Dock aria-label="Application dock">
      <DockItem icon={<HomeDockIcon />} label="Home" />
      <DockItem icon={<TerminalDockIcon />} label="Terminal" />
      <DockItem icon={<NewDockIcon />} label="New" />
      <DockItem icon={<PieMarkIcon />} label="Pie UI" active />
      <DockItem icon={<BranchDockIcon />} label="Branches" />
      <DockItem icon={<TwitterDockIcon />} label="Twitter" />
      <DockItem icon={<GithubDockIcon />} label="GitHub" />
    </Dock>
  );
}

export function DockDarkPreview() {
  return (
    <div
      data-pie-theme="dark"
      className="flex justify-center rounded-[18px] bg-[#0c0c0e] px-6 py-10"
    >
      <DockPreview />
    </div>
  );
}
