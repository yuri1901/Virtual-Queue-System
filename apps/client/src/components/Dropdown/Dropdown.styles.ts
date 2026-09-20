const dropdownStyles = {
  root: "relative",
  trigger: "flex rounded-[var(--radius-md)] p-2 text-[var(--text-muted)] hover:bg-[var(--surface-hover)]",
  menu: "absolute top-full z-50 mt-1 min-w-44 rounded-[var(--radius-md)] border border-[var(--border)] bg-[var(--surface-elevated)] p-1 shadow-[var(--shadow-lg)]",
  item: "flex w-full items-center gap-2 rounded-md px-3 py-2 text-left text-sm",
  danger: "text-[var(--danger)] hover:bg-[var(--danger-soft)]",
  default: "text-[var(--text-muted)] hover:bg-[var(--surface-muted)] hover:text-[var(--text)]",
  right: "right-0",
  left: "left-0",
  icon: "size-4",
};
export { dropdownStyles };
