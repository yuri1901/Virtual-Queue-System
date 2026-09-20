const featuresSectionStyles = {
  root: "border-t border-[var(--line)]",
  header: "max-w-xl",
  eyebrow: "text-xs font-semibold uppercase tracking-[0.16em] text-[var(--accent)]",
  title: "mt-4 text-3xl font-semibold tracking-[-0.04em] text-[var(--ink)] sm:text-4xl",
  description: "mt-4 text-base leading-7 text-[var(--muted)]",
  grid: "mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4",
  revealWrapper: "h-full",
  card: "group h-full rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-[var(--card-padding-lg)] transition-all duration-300 hover:-translate-y-1 hover:border-[var(--primary-line)] hover:shadow-[var(--shadow-md)]",
  iconWrapper: "flex size-11 items-center justify-center rounded-2xl bg-[var(--primary-soft)] text-[var(--primary)] transition-colors group-hover:bg-[var(--primary)] group-hover:text-[var(--primary-foreground)]",
  icon: "size-5",
  cardTitle: "mt-7 text-base font-semibold text-[var(--ink)]",
  cardDescription: "mt-2 text-sm leading-6 text-[var(--muted)]",
};

export { featuresSectionStyles };
