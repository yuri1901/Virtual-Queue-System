const heroSectionStyles = {
  root: "relative overflow-hidden pt-16 sm:pt-24 lg:pt-28",
  glow: "pointer-events-none absolute -right-32 top-4 size-72 rounded-full bg-[var(--accent-soft)]/65 blur-3xl",
  grid: "grid items-center gap-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20",
  leftCol: "relative",
  badge: "mb-7 inline-flex items-center gap-2 rounded-full border border-[var(--accent-line)] bg-[var(--accent-soft)] px-3.5 py-2 text-xs font-semibold text-[var(--accent-dark)]",
  badgeIcon: "size-3.5",
  title: "max-w-xl text-5xl font-semibold leading-[0.98] tracking-[-0.065em] text-[var(--ink)] sm:text-6xl lg:text-[4.75rem]",
  titleAccent: "text-[var(--accent)]",
  subtitle: "mt-7 max-w-lg text-base leading-7 text-[var(--muted)] sm:text-lg",
  actions: "mt-9 flex flex-col gap-3 sm:flex-row",
  primaryBtn: "group inline-flex h-[var(--control-md)] items-center justify-center gap-2 rounded-[var(--radius-md)] bg-[var(--primary)] px-5 text-sm font-semibold text-[var(--primary-foreground)] shadow-[var(--shadow-accent)] transition-transform hover:-translate-y-0.5",
  arrowIcon: "size-4 transition-transform group-hover:translate-x-1",
  secondaryBtn: "inline-flex h-[var(--control-md)] items-center justify-center rounded-[var(--radius-md)] border border-[var(--border-strong)] bg-[var(--surface)] px-5 text-sm font-semibold text-[var(--text)] transition-colors hover:border-[var(--primary-line)] hover:bg-[var(--surface-elevated)]",
  socialProof: "mt-9 flex items-center gap-3 text-xs text-[var(--muted)]",
  avatarGroup: "flex -space-x-2",
  avatar1: "size-7 rounded-full border-2 border-[var(--paper)] bg-[var(--accent-light)]",
  avatar2: "size-7 rounded-full border-2 border-[var(--paper)] bg-[var(--accent-soft)]",
  avatar3: "size-7 rounded-full border-2 border-[var(--paper)] bg-[var(--line-strong)]",
};

export { heroSectionStyles };
