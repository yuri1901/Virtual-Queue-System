const filterStyles = {
  root: "relative",
  trigger:
    "inline-flex h-[var(--control-md)] items-center justify-center gap-2 rounded-[var(--radius-md)] border border-[var(--border-strong)] bg-[var(--surface)] px-4 text-sm font-semibold text-[var(--text)]",
  panel:
    "absolute right-0 z-50 mt-1 w-[min(20rem,calc(100vw-2.5rem))] rounded-[var(--radius-xl)] border border-[var(--border)] bg-[var(--surface-elevated)] p-[var(--space-4)] shadow-[var(--shadow-lg)]",
  content: "space-y-[var(--space-4)]",
  actions: "flex justify-between border-t border-[var(--border)] pt-[var(--space-3)]",
  clear: "text-sm font-medium text-[var(--text-muted)] hover:text-[var(--text)]",
  icon: "size-4",
};

export { filterStyles };
