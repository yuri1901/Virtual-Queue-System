const notificationsScreenStyles = {
  root: "space-y-6",
  headerIcon: "size-4",
  tabs: "mb-6 flex gap-1 border-b border-[var(--line)]",
  activeTab: "rounded-none border-b-2 border-[var(--accent)] px-4 py-3 text-sm font-semibold text-[var(--accent-dark)]",
  inactiveTab: "rounded-none px-4 py-3 text-sm font-medium",
  card: "overflow-hidden",
  list: "divide-y divide-[var(--line)]",
  item: "flex gap-4 px-5 py-5",
  itemUnread: "bg-[var(--accent-soft)]/30",
  iconWrapper: "flex size-10 shrink-0 items-center justify-center rounded-lg bg-[var(--surface-muted)] text-[var(--accent)]",
  icon: "size-5",
  content: "min-w-0 flex-1",
  titleRow: "flex flex-col justify-between gap-1 sm:flex-row",
  title: "font-medium text-[var(--ink)]",
  unreadDot: "ml-2 inline-block size-1.5 rounded-full bg-[var(--accent)] align-middle",
  time: "text-xs text-[var(--muted)]",
  body: "mt-1 text-sm leading-6 text-[var(--muted)]",
  actionBtn: "self-start hover:bg-[var(--surface)]",
  actionIcon: "size-4",
  emptyStateWrapper: "mt-8",
};

export { notificationsScreenStyles };
