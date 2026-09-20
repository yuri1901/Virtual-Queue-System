const toggleStyles = {
  root: "flex cursor-pointer items-start justify-between gap-[var(--space-4)] py-[var(--space-3)]",
  label: "block text-sm font-medium text-[var(--text)]",
  description: "mt-1 block text-xs leading-5 text-[var(--text-muted)]",
  control: "relative mt-0.5 inline-flex h-6 w-11 shrink-0 items-center rounded-full transition",
  active: "bg-[var(--primary)]",
  inactive: "bg-[var(--border-strong)]",
  thumb: "size-4 rounded-full bg-[var(--surface)] shadow-sm transition",
  enabled: "translate-x-6",
  disabled: "translate-x-1",
};

export { toggleStyles };
