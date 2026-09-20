const ANALYTICS_MOCK_DATA = {
  periodOptions: ["Last 30 days", "Last 7 days", "This year"],
  stats: {
    totalQueues: {
      value: "12",
      change: "+3 this month",
    },
    totalVisitors: {
      value: "4,829",
      change: "+18.4% vs previous",
    },
    avgWait: {
      value: "21 min",
      change: "3 min faster",
    },
    completionRate: {
      value: "84.2%",
      change: "+5.1% this month",
    },
  },
  dailyVisitors: [42, 58, 48, 72, 64, 82, 56, 88, 76, 94, 68, 84],
  queueCompletions: [
    {
      label: "Downtown Barber Shop",
      value: 92,
    },
    {
      label: "Northside Dental Clinic",
      value: 84,
    },
    {
      label: "City Service Center",
      value: 76,
    },
    {
      label: "Riverside Kitchen",
      value: 68,
    },
  ],
  peakHours: [
    {
      hour: "9 AM",
      value: 38,
    },
    {
      hour: "10 AM",
      value: 72,
    },
    {
      hour: "11 AM",
      value: 92,
    },
    {
      hour: "12 PM",
      value: 65,
    },
    {
      hour: "1 PM",
      value: 48,
    },
    {
      hour: "2 PM",
      value: 76,
    },
  ],
  avgWaitSummary: {
    value: "21 min",
    change: "↓ 12% from last month",
  },
};

type AnalyticsData = typeof ANALYTICS_MOCK_DATA;

export { ANALYTICS_MOCK_DATA };
export type { AnalyticsData };
