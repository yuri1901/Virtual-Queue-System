const useCasesSectionStyles = {
  root: "border-t border-[var(--line)]",
  header: "flex flex-col justify-between gap-5 sm:flex-row sm:items-end",
  eyebrow: "text-xs font-semibold uppercase tracking-[0.16em] text-[var(--accent)]",
  title: "mt-4 text-3xl font-semibold tracking-[-0.04em] text-[var(--ink)] sm:text-4xl",
  headerDescription: "max-w-sm text-sm leading-6 text-[var(--muted)]",
  grid: "mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6",
  card: "flex h-full flex-col items-center rounded-[var(--radius-xl)] border border-[var(--border)] bg-[var(--surface)] p-[var(--card-padding)] text-center transition hover:-translate-y-0.5 hover:border-[var(--primary-line)]",
  icon: "size-6 text-[var(--accent)]",
  cardTitle: "mt-4 text-sm font-medium text-[var(--ink)]",
  cardSubtitle: "mt-1 text-xs text-[var(--muted)]",
};

export { useCasesSectionStyles };
