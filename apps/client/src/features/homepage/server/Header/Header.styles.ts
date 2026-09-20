const headerStyles = {
  root: "relative z-20 border-b border-[var(--line)] bg-[var(--paper)]/85 backdrop-blur-md",
  container: "mx-auto flex h-20 max-w-6xl items-center justify-between px-5 sm:px-8",
  logoLink: "flex items-center gap-2.5 text-sm font-semibold tracking-tight text-[var(--ink)]",
  logoIconWrapper: "flex size-8 items-center justify-center rounded-lg bg-[var(--primary)] text-[var(--primary-foreground)] shadow-[var(--shadow-accent)]",
  logoIcon: "size-3.5 fill-current",
  nav: "hidden items-center gap-8 text-sm text-[var(--muted)] md:flex",
  navLink: "transition-colors hover:text-[var(--ink)]",
  actions: "flex items-center gap-3",
  loginLink: "hidden px-3 py-2 text-sm font-medium text-[var(--muted)] transition-colors hover:text-[var(--ink)] sm:inline-flex",
  getStartedBtn: "group inline-flex h-[var(--control-md)] items-center gap-2 rounded-[var(--radius-md)] bg-[var(--text)] px-4 text-sm font-semibold text-[var(--text-inverse)] transition-transform hover:-translate-y-0.5",
  arrowIcon: "size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5",
};

export { headerStyles };
