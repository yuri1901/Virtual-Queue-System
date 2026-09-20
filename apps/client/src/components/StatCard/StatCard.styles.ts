const statCardStyles = {
  root: "rounded-[var(--radius-xl)] border border-[var(--border)] bg-[var(--surface)] p-[var(--card-padding)] shadow-[var(--shadow-sm)]",
  padding: "p-[var(--card-padding)]",
  icon: "flex size-10 items-center justify-center rounded-lg",
  content: "flex items-start justify-between gap-[var(--space-4)]",
  label: "text-sm text-[var(--text-muted)]",
  value: "mt-[var(--space-2)] text-2xl font-semibold tracking-[-0.04em] text-[var(--text)]",
  change: "mt-[var(--space-2)] text-xs font-medium text-[var(--success)]",
  accent: "bg-[var(--primary-soft)] text-[var(--primary)]",
  success: "bg-[var(--success-soft)] text-[var(--success)]",
  warning: "bg-[var(--warning-soft)] text-[var(--warning)]",
  iconGraphic: "size-5",
};

export { statCardStyles };
