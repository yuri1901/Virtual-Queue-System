import { clsx } from "clsx";
import { ArrowLeft, CheckCircle2, Clock3, UserRoundMinus, UsersRound } from "lucide-react";
import { useTranslations } from "next-intl";

import { Badge } from "@/components/Badge";
import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { Header } from "@/components/Header";
import { StatCard } from "@/components/StatCard";
import { Link } from "@/i18n";
import { routes } from "@/libs/routes";

import { HISTORY_VISITORS, LIFECYCLE_EVENTS } from "./QueueHistoryScreen.constants";
import { queueHistoryScreenStyles as styles } from "./QueueHistoryScreen.styles";

function QueueHistoryScreen() {
  const t = useTranslations("queue.history");

  return (
    <div className={styles.root}>
      <Link
        href={routes.dashboard.queue("barber-01")}
        className={styles.backLink}
      >
        <ArrowLeft className={styles.backIcon} />
        {t("backLink")}
      </Link>
      <Header
        title={t("title")}
        description={t("description")}
        action={<Button variant="secondary">{t("exportReport")}</Button>}
      />
      <div className={styles.statsGrid}>
        <StatCard
          label={t("totalVisitors")}
          value="248"
          icon={UsersRound}
        />
        <StatCard
          label={t("avgWait")}
          value="18 min"
          icon={Clock3}
          tone="warning"
        />
        <StatCard
          label={t("completedUsers")}
          value="214"
          icon={CheckCircle2}
          tone="success"
        />
        <StatCard
          label={t("usersLeft")}
          value="34"
          icon={UserRoundMinus}
        />
      </div>
      <div className={styles.mainGrid}>
        <Card className={styles.card}>
          <div className={styles.cardHeader}>
            <h2 className={styles.cardTitle}>{t("visitorsTitle")}</h2>
            <p className={styles.cardSubtitle}>{t("visitorsSubtitle")}</p>
          </div>
          <div className={styles.list}>
            {HISTORY_VISITORS.map((visitor) => (
              <div
                key={visitor.ticket}
                className={styles.item}
              >
                <span className={styles.avatar}>
                  {visitor.name
                    .split(" ")
                    .map((part) => part[0])
                    .join("")}
                </span>
                <div className={styles.itemInfo}>
                  <p className={styles.itemTitle}>{visitor.name}</p>
                  <p className={styles.itemSub}>
                    {visitor.ticket} · {t("waited", { wait: visitor.wait })}
                  </p>
                </div>
                <Badge variant={visitor.status === "Completed" ? "success" : "neutral"}>
                  {visitor.status}
                </Badge>
              </div>
            ))}
          </div>
        </Card>
        <Card className={styles.sidebarCard}>
          <h2 className={styles.sidebarTitle}>{t("lifecycleTitle")}</h2>
          <div className={styles.sidebarList}>
            {LIFECYCLE_EVENTS.map((event, index) => (
              <div
                key={event.title}
                className={styles.sidebarItem}
              >
                <span className={clsx("mt-1 flex size-6 shrink-0 items-center justify-center rounded-full", index === 3 ? "bg-[var(--surface-muted)] text-[var(--muted)]" : "bg-[var(--accent-soft)] text-[var(--accent)]")}>
                  <span className={styles.sidebarDot} />
                </span>
                <div>
                  <p className={styles.sidebarItemTitle}>{event.title}</p>
                  <p className={styles.sidebarItemSub}>{event.time}</p>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}

export { QueueHistoryScreen };
