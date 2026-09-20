
const navGroups = [
    {
        groupKey: "workspace" as const,
        items: [
            {
                itemKey: "overview" as const,
                href: "/dashboard",
                icon: 'layout-dashboard',
            },
            {
                itemKey: "myQueues" as const,
                href: "/dashboard/queues",
                icon: 'users-rounds',
            },
            {
                itemKey: "createQueue" as const,
                href: "/dashboard/queues/new",
                icon: 'plus',
            },
            {
                itemKey: "joinedQueues" as const,
                href: "/dashboard/joined",
                icon: 'sliders-horizontal',
            },
        ],
    },
    {
        groupKey: "insights" as const,
        items: [
            {
                itemKey: "analytics" as const,
                href: "/dashboard/analytics",
                icon: 'bar-chart',
            },
            {
                itemKey: "notifications" as const,
                href: "/dashboard/notifications",
                icon: 'bell',
            },
        ],
    },
    {
        groupKey: "account" as const,
        items: [
            {
                itemKey: "profile" as const,
                href: "/dashboard/profile",
                icon: 'user-round',
            },
            {
                itemKey: "settings" as const,
                href: "/dashboard/settings",
                icon: 'setting',
            },
        ],
    },
];

export type NavIconType = typeof navGroups[number]["items"][number]["icon"];
export { navGroups }