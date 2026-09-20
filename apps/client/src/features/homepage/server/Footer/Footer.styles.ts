const footerStyles = {
  root: "border-t border-[var(--line)]",
  container: "mx-auto flex max-w-6xl flex-col gap-6 px-5 py-8 text-sm sm:px-8 md:flex-row md:items-center md:justify-between",
  brand: "flex items-center gap-2.5 font-semibold tracking-tight text-[var(--ink)]",
  logoWrapper: "flex size-7 items-center justify-center rounded-lg bg-[var(--primary)] text-[var(--primary-foreground)]",
  logoIcon: "size-3 fill-current",
  nav: "flex flex-wrap items-center gap-x-6 gap-y-3 text-[var(--muted)]",
  link: "transition-colors hover:text-[var(--ink)]",
  externalLink: "inline-flex items-center gap-1 transition-colors hover:text-[var(--ink)]",
  externalIcon: "size-3.5",
  copyright: "text-xs text-[var(--muted)] md:text-right",
};

export { footerStyles };
