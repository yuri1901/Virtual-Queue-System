const DASHBOARD_MOCK_DATA = {
  user: {
    name: "Jordan",
    fullName: "Jordan Davis",
    email: "jordan@example.com",
    initials: "JD",
  },
  stats: {
    activeQueues: {
      value: "3",
      change: "+1 this week",
    },
    totalVisitors: {
      value: "1,284",
      change: "+12.8% vs last month",
    },
    peopleWaiting: {
      value: "26",
      change: "Across 3 active queues",
    },
    completedToday: {
      value: "68",
      change: "+8.4% vs yesterday",
    },
  },
  activeQueuesPreview: [
    {
      id: "barber-01",
      name: "Downtown Barber Shop",
      category: "Barbershop",
      status: "Active" as const,
      waiting: 8,
      averageWait: "18 min",
      code: "DB-482",
    },
    {
      id: "clinic-02",
      name: "Northside Dental Clinic",
      category: "Clinic",
      status: "Active" as const,
      waiting: 14,
      averageWait: "32 min",
      code: "ND-193",
    },
    {
      id: "service-03",
      name: "City Service Center",
      category: "Service center",
      status: "Paused" as const,
      waiting: 4,
      averageWait: "24 min",
      code: "CS-721",
    },
  ],
  weeklyCompletion: 84,
  recentActivity: [
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
  ],
  weeklyPerformance: [
    {
      day: "M",
      value: 42,
    },
    {
      day: "T",
      value: 56,
    },
    {
      day: "W",
      value: 48,
    },
    {
      day: "T",
      value: 70,
    },
    {
      day: "F",
      value: 62,
    },
    {
      day: "S",
      value: 82,
    },
    {
      day: "S",
      value: 68,
    },
  ],
};

type DashboardData = typeof DASHBOARD_MOCK_DATA;

export { DASHBOARD_MOCK_DATA };
export type { DashboardData };
