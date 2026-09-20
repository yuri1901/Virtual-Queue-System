const buttonStyles = {
  root: "inline-flex items-center justify-center gap-2 rounded-lg text-sm font-semibold transition active:scale-[0.98] focus:outline-none focus-visible:ring-2 disabled:cursor-not-allowed disabled:opacity-50",
  primary:
    "bg-[var(--primary)] text-[var(--primary-foreground)] shadow-sm hover:bg-[var(--primary-hover)] active:bg-[var(--primary-active)] focus-visible:ring-[var(--primary-line)]",
  secondary:
    "border border-[var(--border-strong)] bg-[var(--surface)] text-[var(--text)] hover:border-[var(--primary-line)] hover:bg-[var(--primary-soft)] focus-visible:ring-[var(--primary-line)]",
  ghost:
    "text-[var(--text-muted)] hover:bg-[var(--surface-muted)] hover:text-[var(--text)] focus-visible:ring-[var(--primary-line)]",
  destructive:
    "border border-[var(--danger)] bg-[var(--surface)] text-[var(--danger)] hover:bg-[var(--danger-soft)] focus-visible:ring-[var(--danger-soft)]",
  sm: "h-9 px-3",
  md: "h-10 px-4",
  lg: "h-11 px-5",
  icon: "size-10",
  loading: "cursor-wait opacity-70",
};
export { buttonStyles };
