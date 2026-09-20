type QueueStatus = "Active" | "Paused" | "Closed" | "Draft";

const mockQueues = [
  {
    id: "barber-01",
    name: "Downtown Barber Shop",
    category: "Barbershop",
    status: "Active" as QueueStatus,
    waiting: 8,
    averageWait: "18 min",
    created: "Today, 9:24 AM",
    code: "DB-482",
  },
  {
    id: "clinic-02",
    name: "Northside Dental Clinic",
    category: "Clinic",
    status: "Active" as QueueStatus,
    waiting: 14,
    averageWait: "32 min",
    created: "Yesterday",
    code: "ND-193",
  },
  {
    id: "service-03",
    name: "City Service Center",
    category: "Service center",
    status: "Paused" as QueueStatus,
    waiting: 4,
    averageWait: "24 min",
    created: "May 18, 2026",
    code: "CS-721",
  },
  {
    id: "cafe-04",
    name: "Riverside Kitchen",
    category: "Restaurant",
    status: "Closed" as QueueStatus,
    waiting: 0,
    averageWait: "—",
    created: "May 12, 2026",
    code: "RK-309",
  },
  {
    id: "event-05",
    name: "Spring Expo Check-in",
    category: "Event",
    status: "Draft" as QueueStatus,
    waiting: 0,
    averageWait: "—",
    created: "May 10, 2026",
    code: "SE-114",
  },
];

const waitingMembers = [
  {
    position: 1,
    name: "Maya Thompson",
    handle: "@mayat",
    joined: "9:42 AM",
    waiting: "8 min",
    status: "Waiting",
  },
  {
    position: 2,
    name: "Daniel Kim",
    handle: "@danielk",
    joined: "9:46 AM",
    waiting: "4 min",
    status: "Waiting",
  },
  {
    position: 3,
    name: "Sofia Martinez",
    handle: "@sofia.m",
    joined: "9:49 AM",
    waiting: "1 min",
    status: "Waiting",
  },
  {
    position: 4,
    name: "Noah Williams",
    handle: "@noahw",
    joined: "9:52 AM",
    waiting: "Just now",
    status: "Waiting",
  },
];

const activityItems = [
  {
    action: "Maya Thompson joined the queue",
    time: "8 min ago",
    kind: "join",
  },
  {
    action: "James Carter was served",
    time: "12 min ago",
    kind: "complete",
  },
  {
    action: "Daniel Kim joined the queue",
    time: "4 min ago",
    kind: "join",
  },
  {
    action: "Queue settings were updated",
    time: "28 min ago",
    kind: "settings",
  },
];

const joinedQueues = [
  {
    name: "Northside Dental Clinic",
    category: "Appointment desk",
    position: 3,
    ahead: 2,
    wait: "~12 min",
    status: "Waiting",
    accent: "ND",
  },
  {
    name: "City Service Center",
    category: "Permit renewal",
    position: 1,
    ahead: 0,
    wait: "Now",
    status: "Called",
    accent: "CS",
  },
  {
    name: "Riverside Kitchen",
    category: "Dinner table",
    position: 8,
    ahead: 7,
    wait: "~28 min",
    status: "Completed",
    accent: "RK",
  },
];

const notifications = [
  {
    title: "Your turn is approaching",
    body: "You are now third in line at Northside Dental Clinic.",
    time: "2 min ago",
    unread: true,
    icon: "clock",
  },
  {
    title: "You were called",
    body: "City Service Center is ready for you at counter 2.",
    time: "1 hour ago",
    unread: true,
    icon: "check",
  },
  {
    title: "Queue was paused",
    body: "Downtown Barber Shop paused new entries temporarily.",
    time: "Yesterday",
    unread: false,
    icon: "pause",
  },
  {
    title: "New customer joined your queue",
    body: "Someone joined Downtown Barber Shop using your public link.",
    time: "Yesterday",
    unread: false,
    icon: "user",
  },
];

const QUEUE_MOCK_DATA = {
  queues: mockQueues,
  waitingMembers,
  activityItems,
  joinedQueues,
  notifications,
};

type QueueData = typeof QUEUE_MOCK_DATA;
type QueueList = typeof QUEUE_MOCK_DATA.queues;
type JoinedQueueList = typeof QUEUE_MOCK_DATA.joinedQueues;

export {
  activityItems,
  joinedQueues,
  mockQueues,
  notifications,
  QUEUE_MOCK_DATA,
  waitingMembers,
};
export type { JoinedQueueList, QueueData, QueueList, QueueStatus };
