const selectStyles = {
  root: "relative block",
  label: "mb-[var(--space-2)] block text-sm font-medium text-[var(--text)]",
  trigger:
    "flex h-[var(--control-md)] w-full items-center justify-between gap-3 rounded-[var(--radius-md)] border bg-[var(--surface)] px-3 text-left text-sm outline-none transition focus-visible:ring-2 focus-visible:ring-[var(--primary-soft)] disabled:cursor-not-allowed disabled:opacity-50",
  error: "border-[var(--danger)] focus-visible:ring-[var(--danger-soft)]",
  open: "border-[var(--primary)]",
  default: "border-[var(--border)] hover:border-[var(--border-strong)]",
  value: "text-[var(--text)]",
  placeholder: "text-[var(--text-muted)]",
  chevron: "size-4 shrink-0 text-[var(--text-muted)] transition-transform",
  rotated: "rotate-180",
  menu: "absolute z-50 mt-1 max-h-60 w-full overflow-auto rounded-[var(--radius-md)] border border-[var(--border)] bg-[var(--surface-elevated)] p-1 shadow-[var(--shadow-lg)]",
  option: "flex w-full items-center justify-between rounded-md px-3 py-2 text-left text-sm transition",
  selected: "bg-[var(--primary-soft)] font-medium text-[var(--primary-hover)]",
  optionDefault: "text-[var(--text)] hover:bg-[var(--surface-muted)]",
  errorText: "mt-1 block text-xs text-[var(--danger)]",
  icon: "size-4",
};
export { selectStyles };
