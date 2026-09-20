const NOTIFICATIONS_MOCK_DATA = {
  notifications: [
    {
      title: "Your turn is approaching",
      body: "You are now third in line at Northside Dental Clinic.",
      time: "2 min ago",
      unread: true,
      icon: "clock" as const,
    },
    {
      title: "You were called",
      body: "City Service Center is ready for you at counter 2.",
      time: "1 hour ago",
      unread: true,
      icon: "check" as const,
    },
    {
      title: "Queue was paused",
      body: "Downtown Barber Shop paused new entries temporarily.",
      time: "Yesterday",
      unread: false,
      icon: "pause" as const,
    },
    {
      title: "New customer joined your queue",
      body: "Someone joined Downtown Barber Shop using your public link.",
      time: "Yesterday",
      unread: false,
      icon: "user" as const,
    },
  ],
  unreadCount: 2,
};

type NotificationsData = typeof NOTIFICATIONS_MOCK_DATA;

export { NOTIFICATIONS_MOCK_DATA };
export type { NotificationsData };
