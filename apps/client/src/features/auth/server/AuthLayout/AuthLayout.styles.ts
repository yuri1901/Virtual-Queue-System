const authLayoutStyles = {
  root: "min-h-screen bg-[var(--background)] px-[var(--page-padding)] py-[var(--space-6)] sm:px-[var(--page-padding-tablet)] lg:px-[var(--page-padding-desktop)]",
  header: "mx-auto flex max-w-7xl items-center justify-between",
  logoLink: "flex items-center gap-2.5 text-sm font-semibold tracking-tight text-[var(--ink)]",
  logoIconWrapper: "flex size-8 items-center justify-center rounded-lg bg-[var(--primary)] text-[var(--primary-foreground)]",
  logoIcon: "size-3 fill-current",
  backLink: "inline-flex items-center gap-2 text-sm font-medium text-[var(--muted)] hover:text-[var(--ink)]",
  backIcon: "size-4",
  contentGrid: "mx-auto grid max-w-5xl items-center gap-12 py-12 lg:grid-cols-[0.8fr_1fr] lg:py-20",
  heroColumn: "hidden lg:block",
  shieldBadge: "flex size-12 items-center justify-center rounded-xl bg-[var(--accent-soft)] text-[var(--accent)]",
  shieldIcon: "size-6",
  heroTitle: "mt-6 max-w-md text-4xl font-semibold tracking-[-0.05em] text-[var(--ink)]",
  heroSubtitle: "mt-4 max-w-sm text-base leading-7 text-[var(--muted)]",
};

export { authLayoutStyles };
