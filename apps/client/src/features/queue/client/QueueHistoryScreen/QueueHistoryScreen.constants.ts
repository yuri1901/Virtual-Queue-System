type HistoryVisitor = {
  name: string;
  ticket: string;
  wait: string;
  status: "Completed" | "Left";
};

type LifecycleEvent = {
  title: string;
  time: string;
};

const HISTORY_VISITORS: readonly HistoryVisitor[] = [
  {
    name: "Maya Thompson",
    ticket: "DB-018",
    wait: "18 min",
    status: "Completed",
  },
  {
    name: "James Carter",
    ticket: "DB-017",
    wait: "24 min",
    status: "Completed",
  },
  {
    name: "Sofia Martinez",
    ticket: "DB-016",
    wait: "12 min",
    status: "Completed",
  },
  {
    name: "Alex Chen",
    ticket: "DB-015",
    wait: "—",
    status: "Left",
  },
];

const LIFECYCLE_EVENTS: readonly LifecycleEvent[] = [
  {
    title: "Queue created",
    time: "May 4, 9:00 AM",
  },
  {
    title: "First visitor joined",
    time: "May 4, 9:18 AM",
  },
  {
    title: "Peak reached",
    time: "May 4, 11:42 AM",
  },
  {
    title: "Queue closed",
    time: "May 4, 4:58 PM",
  },
];

export { HISTORY_VISITORS, LIFECYCLE_EVENTS };
export type { HistoryVisitor, LifecycleEvent };
