import { clsx } from "clsx";
import { Bell, Check, CheckCheck, Clock3, Pause, UserRound } from "lucide-react";
import { useTranslations } from "next-intl";

import { Badge } from "@/components/Badge";
import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { EmptyState } from "@/components/EmptyState";
import { Header } from "@/components/Header";

import type { NotificationsData } from "../../shared";
import { notificationsScreenStyles as styles } from "./NotificationsScreen.styles";

const icons = {
  clock: Clock3,
  check: Check,
  pause: Pause,
  user: UserRound,
};

interface NotificationsScreenProps {
  data: NotificationsData;
}

function NotificationsScreen({ data }: NotificationsScreenProps) {
  const t = useTranslations("notifications.screen");

  return (
    <div className={styles.root}>
      <Header
        title={t("title")}
        description={t("description")}
        action={
          <Button variant="ghost">
            <CheckCheck className={styles.headerIcon} />
            {t("markAllRead")}
          </Button>
        }
      />
      <div className={styles.tabs}>
        <Button
          variant="ghost"
          className={styles.activeTab}
        >
          {t("allTab")}
        </Button>
        <Button
          variant="ghost"
          className={styles.inactiveTab}
        >
          {t("unreadTab")} <Badge variant="info">{data.unreadCount}</Badge>
        </Button>
      </div>
      <Card className={styles.card}>
        <div className={styles.list}>
          {data.notifications.map((notification) => {
            const Icon = icons[notification.icon as keyof typeof icons];
            return (
              <div
                key={notification.title}
                className={clsx(styles.item, notification.unread && styles.itemUnread)}
              >
                <span className={styles.iconWrapper}>
                  <Icon className={styles.icon} />
                </span>
                <div className={styles.content}>
                  <div className={styles.titleRow}>
                    <p className={styles.title}>
                      {notification.title}
                      {notification.unread && <span className={styles.unreadDot} />}
                    </p>
                    <span className={styles.time}>{notification.time}</span>
                  </div>
                  <p className={styles.body}>{notification.body}</p>
                </div>
                {notification.unread && (
                  <Button
                    variant="ghost"
                    size="icon"
                    className={styles.actionBtn}
                    aria-label={t("markAsReadAria")}
                  >
                    <Check className={styles.actionIcon} />
                  </Button>
                )}
              </div>
            );
          })}
        </div>
      </Card>
      <div className={styles.emptyStateWrapper}>
        <EmptyState
          icon={Bell}
          title={t("emptyTitle")}
          description={t("emptyDescription")}
        />
      </div>
    </div>
  );
}

export { NotificationsScreen };
