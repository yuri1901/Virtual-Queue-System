import { BarChart3, Clock3, TrendingUp, UsersRound } from "lucide-react";
import { useTranslations } from "next-intl";

import { Card } from "@/components/Card";
import { Header } from "@/components/Header";
import { ProgressBar } from "@/components/ProgressBar";
import { Select } from "@/components/Select";
import { StatCard } from "@/components/StatCard";

import type { AnalyticsData } from "../../shared";
import { analyticsScreenStyles as styles } from "./AnalyticsScreen.styles";

type AnalyticsScreenProps = {
  data: AnalyticsData;
}

function AnalyticsScreen({ data }: AnalyticsScreenProps) {
  const t = useTranslations("analytics.screen");

  return (
    <div className={styles.root}>
      <Header
        title={t("title")}
        description={t("description")}
        action={
          <div className={styles.selectWrapper}>
            <Select
              options={data.periodOptions}
            />
          </div>
        }
      />
      <div className={styles.statsGrid}>
        <StatCard
          label={t("totalQueues")}
          value={data.stats.totalQueues.value}
          change={data.stats.totalQueues.change}
          icon={UsersRound}
        />
        <StatCard
          label={t("totalVisitors")}
          value={data.stats.totalVisitors.value}
          change={data.stats.totalVisitors.change}
          icon={BarChart3}
          tone="success"
        />
        <StatCard
          label={t("avgWait")}
          value={data.stats.avgWait.value}
          change={data.stats.avgWait.change}
          icon={Clock3}
          tone="warning"
        />
        <StatCard
          label={t("completionRate")}
          value={data.stats.completionRate.value}
          change={data.stats.completionRate.change}
          icon={TrendingUp}
        />
      </div>
      <div className={styles.chartSectionGrid}>
        <Card className={styles.chartCard}>
          <div>
            <h2 className={styles.cardTitle}>{t("visitorsPerDay")}</h2>
            <p className={styles.cardSubtitle}>{t("visitorsPerDaySubtitle")}</p>
          </div>
          <div className={styles.barChartContainer}>
            {data.dailyVisitors.map((height, index) => (
              <div
                key={index}
                className={styles.barColumn}
              >
                <div
                  className={styles.barFill}
                  style={{ height: `${height}%` }}
                />
                <span className={styles.barLabel}>{index + 1}</span>
              </div>
            ))}
          </div>
        </Card>
        <Card className={styles.progressCard}>
          <h2 className={styles.progressCardTitle}>{t("queueCompletion")}</h2>
          <p className={styles.progressCardSubtitle}>{t("queueCompletionSubtitle")}</p>
          <div className={styles.progressList}>
            {data.queueCompletions.map((item) => (
              <ProgressBar
                key={item.label}
                value={item.value}
                label={item.label}
              />
            ))}
          </div>
        </Card>
      </div>
      <div className={styles.bottomGrid}>
        <Card className={styles.peakHoursCard}>
          <h2 className={styles.peakHoursTitle}>{t("peakHours")}</h2>
          <p className={styles.peakHoursSubtitle}>{t("peakHoursSubtitle")}</p>
          <div className={styles.peakHoursList}>
            {data.peakHours.map(({ hour, value }) => (
              <div
                key={hour}
                className={styles.peakHourRow}
              >
                <span className={styles.peakHourLabel}>{hour}</span>
                <div className={styles.peakHourTrack}>
                  <div
                    className={styles.peakHourBar}
                    style={{ width: `${value}%` }}
                  />
                </div>
                <span className={styles.peakHourValue}>{value}</span>
              </div>
            ))}
          </div>
        </Card>
        <Card className={styles.avgWaitCard}>
          <h2 className={styles.avgWaitTitle}>{t("avgWaitingTitle")}</h2>
          <p className={styles.avgWaitSubtitle}>{t("avgWaitingSubtitle")}</p>
          <div className={styles.avgWaitValue}>{data.avgWaitSummary.value}</div>
          <p className={styles.avgWaitChange}>{data.avgWaitSummary.change}</p>
        </Card>
      </div>
    </div>
  );
}

export { AnalyticsScreen };
