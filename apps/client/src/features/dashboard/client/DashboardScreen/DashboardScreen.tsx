import { Activity, ArrowRight, BarChart3, Clock3, Plus, Share2, UsersRound } from "lucide-react";
import { useTranslations } from "next-intl";

import { Badge } from "@/components/Badge";
import { Button } from "@/components/Button";
import { ButtonLink } from "@/components/ButtonLink";
import { Card } from "@/components/Card";
import { Header } from "@/components/Header";
import { ProgressBar } from "@/components/ProgressBar";
import { StatCard } from "@/components/StatCard";
import { Link } from "@/i18n";
import { routes } from "@/libs/routes";

import type { DashboardData } from "../../shared";
import { dashboardScreenStyles as styles } from "./DashboardScreen.styles";

interface DashboardScreenProps {
  data: DashboardData;
}

function DashboardScreen({ data }: DashboardScreenProps) {
  const t = useTranslations("dashboard.screen");

  return (
    <div className={styles.root}>
      <Header
        eyebrow={t("eyebrow")}
        title={t("title", { name: data.user.name })}
        description={t("description")}
        action={
          <ButtonLink
            href={routes.dashboard.createQueue}
            variant="primary"
          >
            <Plus className={styles.headerIcon} />
            {t("createQueue")}
          </ButtonLink>
        }
      />
      <div className={styles.statsGrid}>
        <StatCard
          label={t("activeQueues")}
          value={data.stats.activeQueues.value}
          change={data.stats.activeQueues.change}
          icon={UsersRound}
        />
        <StatCard
          label={t("totalVisitors")}
          value={data.stats.totalVisitors.value}
          change={data.stats.totalVisitors.change}
          icon={Activity}
          tone="success"
        />
        <StatCard
          label={t("peopleWaiting")}
          value={data.stats.peopleWaiting.value}
          change={data.stats.peopleWaiting.change}
          icon={Clock3}
          tone="warning"
        />
        <StatCard
          label={t("completedToday")}
          value={data.stats.completedToday.value}
          change={data.stats.completedToday.change}
          icon={BarChart3}
        />
      </div>
      <div className={styles.mainGrid}>
        <Card className={styles.queuesCard}>
          <div className={styles.cardHeader}>
            <div>
              <h2 className={styles.cardTitle}>{t("activeQueuesTitle")}</h2>
              <p className={styles.cardSubtitle}>{t("activeQueuesSubtitle")}</p>
            </div>
            <Link
              href={routes.dashboard.queues}
              className={styles.viewAllLink}
            >
              {t("viewAll")}
            </Link>
          </div>
          <div className={styles.queuesList}>
            {data.activeQueuesPreview.map((queue) => (
              <div
                key={queue.id}
                className={styles.queueItem}
              >
                <div className={styles.queueMain}>
                  <span className={styles.queueBadge}>{queue.code.slice(0, 2)}</span>
                  <div>
                    <Link
                      href={routes.dashboard.queue(queue.id)}
                      className={styles.queueLink}
                    >
                      {queue.name}
                    </Link>
                    <p className={styles.queueMeta}>
                      {queue.category} · {queue.code}
                    </p>
                  </div>
                </div>
                <div className={styles.queueStats}>
                  <div>
                    <p className={styles.queueStatLabel}>{t("waiting")}</p>
                    <p className={styles.queueStatValue}>{queue.waiting}</p>
                  </div>
                  <div className={styles.queueAvgWaitWrapper}>
                    <p className={styles.queueStatLabel}>{t("avgWait")}</p>
                    <p className={styles.queueStatValue}>{queue.averageWait}</p>
                  </div>
                  <Badge variant={queue.status === "Active" ? "success" : "warning"}>{queue.status}</Badge>
                </div>
              </div>
            ))}
          </div>
        </Card>
        <Card className={styles.quickActionsCard}>
          <div className={styles.quickActionsHeader}>
            <div>
              <h2 className={styles.quickActionsTitle}>{t("quickActionsTitle")}</h2>
              <p className={styles.quickActionsSubtitle}>{t("quickActionsSubtitle")}</p>
            </div>
          </div>
          <div className={styles.quickActionsList}>
            <ButtonLink
              href={routes.dashboard.createQueue}
              variant="secondary"
              className={styles.actionBtn}
            >
              <span className={styles.actionBtnContent}>
                <Plus className={styles.actionBtnIcon} />
                {t("createQueueAction")}
              </span>
              <ArrowRight className={styles.actionArrowIcon} />
            </ButtonLink>
            <ButtonLink
              href={routes.queue.public("northside-dental")}
              variant="secondary"
              className={styles.actionBtn}
            >
              <span className={styles.actionBtnContent}>
                <UsersRound className={styles.actionBtnIcon} />
                {t("joinQueueAction")}
              </span>
              <ArrowRight className={styles.actionArrowIcon} />
            </ButtonLink>
            <Button variant="secondary" className={styles.actionBtn}>
              <span className={styles.actionBtnContent}>
                <Share2 className={styles.actionBtnIcon} />
                {t("shareQueueAction")}
              </span>
              <ArrowRight className={styles.actionArrowIcon} />
            </Button>
          </div>
          <div className={styles.completionSection}>
            <div className={styles.completionHeader}>
              <span className={styles.completionLabel}>{t("weeklyCompletion")}</span>
              <span className={styles.completionValue}>{data.weeklyCompletion}%</span>
            </div>
            <div className={styles.completionProgress}>
              <ProgressBar value={data.weeklyCompletion} />
            </div>
          </div>
        </Card>
      </div>
      <div className={styles.bottomGrid}>
        <Card>
          <div className={styles.activityHeader}>
            <h2 className={styles.activityTitle}>{t("recentActivity")}</h2>
            <Activity className={styles.activityHeaderIcon} />
          </div>
          <div className={styles.activityList}>
            {data.recentActivity.map((item) => (
              <div
                key={item.action}
                className={styles.activityItem}
              >
                <span className={styles.activityDot} />
                <div className={styles.activityContent}>
                  <p className={styles.activityText}>{item.action}</p>
                  <p className={styles.activityTime}>{item.time}</p>
                </div>
              </div>
            ))}
          </div>
        </Card>
        <Card className={styles.perfCard}>
          <div className={styles.perfHeader}>
            <div>
              <h2 className={styles.perfTitle}>{t("queuePerformance")}</h2>
              <p className={styles.perfSubtitle}>{t("queuePerformanceSubtitle")}</p>
            </div>
            <Link
              href={routes.dashboard.analytics}
              className={styles.perfDetailsLink}
            >
              {t("details")}
            </Link>
          </div>
          <div className={styles.perfChart}>
            {data.weeklyPerformance.map((item, index) => (
              <div
                key={index}
                className={styles.perfColumn}
              >
                <div
                  className={styles.perfBar}
                  style={{ height: `${item.value}%` }}
                />
                <span className={styles.perfLabel}>{item.day}</span>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}

export { DashboardScreen };
