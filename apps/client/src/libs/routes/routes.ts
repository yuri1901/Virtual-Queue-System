const routes = {
  home: "/",
  auth: {
    login: "/login",
    register: "/register",
    forgotPassword: "/forgot-password",
    resetPassword: "/reset-password",
  },
  dashboard: {
    root: "/dashboard",
    analytics: "/dashboard/analytics",
    notifications: "/dashboard/notifications",
    profile: "/dashboard/profile",
    settings: "/dashboard/settings",
    queues: "/dashboard/queues",
    createQueue: "/dashboard/queues/new",
    queue: (queueId: string) => `/dashboard/queues/${queueId}`,
    queueHistory: (queueId: string) => `/dashboard/queues/${queueId}/history`,
  },
  queue: {
    public: (queueId: string) => `/queue/${queueId}`,
    join: (queueId: string) => `/queue/${queueId}/join`,
  },
} as const;

export { routes };
