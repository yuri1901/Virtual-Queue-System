import { Activity, ArrowLeft, Clock3, Copy, MoreHorizontal, Pause, Play, QrCode, SkipForward, UserRound, UserRoundCheck, UserRoundMinus, X } from "lucide-react";
import { useTranslations } from "next-intl";

import { Badge } from "@/components/Badge";
import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { Header } from "@/components/Header";
import { StatCard } from "@/components/StatCard";
import { Link } from "@/i18n";
import { routes } from "@/libs/routes";

import type { QueueData } from "../../shared";
import { queueManagementScreenStyles as styles } from "./QueueManagementScreen.styles";

interface QueueManagementScreenProps {
  data?: QueueData;
}

function QueueManagementScreen({ data }: QueueManagementScreenProps) {
  const t = useTranslations("queue.management");
  const members = data?.waitingMembers ?? [];
  const activities = data?.activityItems ?? [];

  return (
    <div className={styles.root}>
      <Link
        href={routes.dashboard.queues}
        className={styles.backLink}
      >
        <ArrowLeft className={styles.backIcon} />
        {t("backLink")}
      </Link>
      <Header
        title="Downtown Barber Shop"
        description={t("description")}
        action={
          <div className={styles.actionsGroup}>
            <Button variant="secondary">
              <Copy className={styles.actionIcon} />
              {t("copyLink")}
            </Button>
            <Button variant="secondary">
              <QrCode className={styles.actionIcon} />
              {t("qrCode")}
            </Button>
            <Button variant="secondary">
              <Pause className={styles.actionIcon} />
              {t("pauseQueue")}
            </Button>
            <Button variant="destructive">
              <X className={styles.actionIcon} />
              {t("close")}
            </Button>
          </div>
        }
      />
      <div className={styles.metaBar}>
        <Badge variant="success">
          <span className={styles.badgeDot} />
          {t("active")}
        </Badge>
        <span className={styles.metaText}>
          {t("queueCode")} <strong className={styles.metaStrong}>DB-482</strong>
        </span>
        <span className={styles.metaText}>{t("openToday")}</span>
      </div>
      <div className={styles.statsGrid}>
        <StatCard
          label={t("peopleWaiting")}
          value="8"
          change="+2 in the last hour"
          icon={UserRound}
          tone="warning"
        />
        <StatCard
          label={t("averageWait")}
          value="18 min"
          change="4 min faster than usual"
          icon={Clock3}
        />
        <StatCard
          label={t("servedToday")}
          value="24"
          change="82% completion rate"
          icon={UserRoundCheck}
          tone="success"
        />
      </div>
      <div className={styles.mainGrid}>
        <div className={styles.leftCol}>
          <Card className={styles.card}>
            <div className={styles.nowServingHeader}>
              <div>
                <p className={styles.eyebrow}>{t("nowServing")}</p>
                <h2 className={styles.servingName}>Maya Thompson</h2>
                <p className={styles.servingSub}>{t("ticketWait", {
                  ticket: "DB-018",
                  wait: "8 minutes"
                })}</p>
              </div>
              <span className={styles.servingBadge}>18</span>
            </div>
            <div className={styles.servingActions}>
              <Button variant="primary">
                <UserRoundCheck className={styles.actionIcon} />
                {t("complete")}
              </Button>
              <Button variant="secondary">
                <SkipForward className={styles.actionIcon} />
                {t("skip")}
              </Button>
              <Button variant="secondary">
                <UserRoundMinus className={styles.actionIcon} />
                {t("remove")}
              </Button>
              <Button variant="ghost" className={styles.mlAuto}>
                <MoreHorizontal className={styles.actionIcon} />
              </Button>
            </div>
          </Card>
          <Card className={styles.card}>
            <div className={styles.waitingHeader}>
              <div>
                <h2 className={styles.cardTitle}>{t("waitingList")}</h2>
                <p className={styles.cardSubtitle}>{t("visitorsWaiting", { count: members.length })}</p>
              </div>
              <Button variant="primary">
                <Play className={styles.actionIcon} />
                {t("callNext")}
              </Button>
            </div>
            <div className={styles.waitingList}>
              {members.map((member) => (
                <div
                  key={member.name}
                  className={styles.waitingRow}
                >
                  <span className={styles.positionBadge}>{member.position}</span>
                  <div className={styles.memberInfo}>
                    <p className={styles.memberName}>{member.name}</p>
                    <p className={styles.memberSub}>
                      {member.handle} · joined {member.joined}
                    </p>
                  </div>
                  <span className={styles.memberWaitTime}>{member.waiting}</span>
                  <div className={styles.rowActions}>
                    <Button
                      className={styles.iconBtn}
                      aria-label={t("callAria", { name: member.name })}
                    >
                      <Play className={styles.actionIcon} />
                    </Button>
                    <Button
                      className={styles.iconBtn}
                      aria-label={t("removeAria", { name: member.name })}
                    >
                      <X className={styles.actionIcon} />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
        <Card className={styles.sidebarCard}>
          <div className={styles.activityHeader}>
            <h2 className={styles.cardTitle}>{t("activityTitle")}</h2>
            <p className={styles.cardSubtitle}>{t("activitySubtitle")}</p>
          </div>
          <div className={styles.activityList}>
            {activities.map((item) => (
              <div
                key={item.action}
                className={styles.activityItem}
              >
                <span className={styles.activityIconWrapper}>
                  <Activity className={styles.activityIcon} />
                </span>
                <div>
                  <p className={styles.activityAction}>{item.action}</p>
                  <p className={styles.activityTime}>{item.time}</p>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}

export { QueueManagementScreen };
