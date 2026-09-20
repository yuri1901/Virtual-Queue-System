import { ArrowRight, Bell, Clock3, UsersRound } from "lucide-react";
import { useTranslations } from "next-intl";

import { Badge } from "@/components/Badge";
import { Button } from "@/components/Button";
import { ButtonLink } from "@/components/ButtonLink";
import { Card } from "@/components/Card";
import { EmptyState } from "@/components/EmptyState";
import { Header } from "@/components/Header";
import { routes } from "@/libs/routes";

import type { JoinedQueueList } from "../../shared";
import { joinedQueuesScreenStyles as styles } from "./JoinedQueuesScreen.styles";

interface JoinedQueuesScreenProps {
  data?: JoinedQueueList;
}

function JoinedQueuesScreen({ data }: JoinedQueuesScreenProps) {
  const t = useTranslations("queue.joined");
  const items = data ?? [];

  return (
    <div className={styles.root}>
      <Header
        title={t("title")}
        description={t("description")}
      />
      <div className={styles.tabs}>
        <Button className={styles.activeTab}>{t("activeTab")}</Button>
        <Button className={styles.inactiveTab}>{t("historyTab")}</Button>
      </div>
      <div className={styles.grid}>
        {items.map((queue) => (
          <Card
            key={queue.name}
            className={styles.card}
          >
            <div className={styles.cardHeader}>
              <div className={styles.headerLeft}>
                <span className={styles.badge}>{queue.accent}</span>
                <div>
                  <h2 className={styles.title}>{queue.name}</h2>
                  <p className={styles.subtitle}>{queue.category}</p>
                </div>
              </div>
              <Badge variant={queue.status === "Waiting" ? "info" : queue.status === "Called" ? "success" : "neutral"}>{queue.status}</Badge>
            </div>
            <div className={styles.statsGrid}>
              <div>
                <p className={styles.statLabel}>{t("position")}</p>
                <p className={styles.statValue}>{queue.position}</p>
              </div>
              <div>
                <p className={styles.statLabel}>{t("ahead")}</p>
                <p className={styles.statValue}>{queue.ahead}</p>
              </div>
              <div>
                <p className={styles.statLabel}>{t("wait")}</p>
                <p className={styles.statValue}>{queue.wait}</p>
              </div>
            </div>
            <div className={styles.cardActions}>
              <ButtonLink
                href={routes.queue.public("northside-dental")}
                variant="secondary"
                className={styles.actionBtn}
              >
                {t("viewQueue")}
                <ArrowRight className={styles.btnIcon} />
              </ButtonLink>
              <Button variant="ghost">
                <Bell className={styles.btnIcon} />
              </Button>
            </div>
          </Card>
        ))}
      </div>
      <div className={styles.emptyStateWrapper}>
        <EmptyState
          icon={UsersRound}
          title={t("emptyTitle")}
          description={t("emptyDesc")}
          action={
            <ButtonLink
              href={routes.home}
              variant="secondary"
            >
              <Clock3 className={styles.btnIcon} />
              {t("findQueue")}
            </ButtonLink>
          }
        />
      </div>
    </div>
  );
}

export { JoinedQueuesScreen };
