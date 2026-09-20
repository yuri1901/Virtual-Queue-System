const ctaSectionStyles = {
  root: "py-20 lg:py-28",
  card: "relative overflow-hidden rounded-[2rem] bg-[var(--text)] px-[var(--card-padding-lg)] py-[var(--space-12)] text-[var(--text-inverse)] sm:px-[var(--space-12)] sm:py-14 lg:px-[var(--space-16)]",
  ringDecoration: "pointer-events-none absolute -right-16 -top-24 size-72 rounded-full border-[32px] border-[var(--accent)]/20",
  glowDecoration: "pointer-events-none absolute bottom-0 right-32 size-36 rounded-full bg-[var(--accent)]/20 blur-3xl",
  content: "relative max-w-2xl",
  eyebrow: "text-xs font-semibold uppercase tracking-[0.16em] text-[var(--accent-light)]",
  title: "mt-4 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl",
  description: "mt-4 max-w-lg text-base leading-7 text-[var(--text-inverse-muted)]",
  actions: "mt-8 flex flex-col gap-4 sm:flex-row sm:items-center",
  button: "group inline-flex h-[var(--control-md)] items-center justify-center gap-2 rounded-[var(--radius-md)] bg-[var(--surface)] px-5 text-sm font-semibold text-[var(--text)] transition-transform hover:-translate-y-0.5",
  arrowIcon: "size-4 transition-transform group-hover:translate-x-1",
  badgeText: "inline-flex items-center gap-2 text-xs text-[var(--text-inverse-subtle)]",
  checkIcon: "size-4 text-[var(--accent-light)]",
};

export { ctaSectionStyles };
