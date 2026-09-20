import { ArrowLeft, ArrowRight, CheckCircle2, Clock3, UsersRound } from "lucide-react";
import { useTranslations } from "next-intl";

import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { Input } from "@/components/Input";
import { Link } from "@/i18n";
import { routes } from "@/libs/routes";

import { joinQueueScreenStyles as styles } from "./JoinQueueScreen.styles";

function JoinQueueScreen() {
  const t = useTranslations("queue.join");

  return (
    <main className={styles.root}>
      <div className={styles.container}>
        <Link
          href={routes.queue.public("northside-dental")}
          className={styles.backLink}
        >
          <ArrowLeft className={styles.backIcon} />
          {t("backLink")}
        </Link>
        <div className={styles.header}>
          <span className={styles.iconWrapper}>
            <UsersRound className={styles.queueIcon} />
          </span>
          <h1 className={styles.title}>{t("title")}</h1>
          <p className={styles.subtitle}>{t("subtitle")}</p>
        </div>
        <div className={styles.content}>
          <Card className={styles.card}>
            <div className={styles.stepHeader}>
              <span className={styles.stepNumber}>1</span>
              <div>
                <h2 className={styles.stepTitle}>{t("stepTitle")}</h2>
                <p className={styles.stepSubtitle}>{t("stepSubtitle")}</p>
              </div>
            </div>
            <div className={styles.form}>
              <Input
                label={t("nameLabel")}
                placeholder={t("namePlaceholder")}
              />
              <Input
                label={t("contactLabel")}
                placeholder={t("contactPlaceholder")}
              />
            </div>
            <Button variant="primary" className={styles.submitBtn}>
              {t("continue")}
              <ArrowRight className={styles.submitIcon} />
            </Button>
          </Card>
          <Card className={styles.infoCard}>
            <div className={styles.infoRow}>
              <Clock3 className={styles.infoIcon} />
              <div>
                <p className={styles.infoTitle}>{t("estimateTitle")}</p>
                <p className={styles.infoText}>{t("estimateText")}</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </main>
  );
}

function QueueConfirmation() {
  const t = useTranslations("queue.join");

  return (
    <Card className={styles.successCard}>
      <CheckCircle2 className={styles.checkIcon} />
      <h2 className={styles.successTitle}>{t("confirmedTitle")}</h2>
      <p className={styles.successSubtitle}>{t("confirmedSubtitle")}</p>
      <p className={styles.ticketNumber}>#A-24</p>
      <div className={styles.grid2}>
        <div className={styles.statBox}>
          <p className={styles.statLabel}>{t("positionLabel")}</p>
          <p className={styles.statValue}>3rd</p>
        </div>
        <div className={styles.statBox}>
          <p className={styles.statLabel}>{t("estimatedWaitLabel")}</p>
          <p className={styles.statValue}>~12 min</p>
        </div>
      </div>
    </Card>
  );
}

export { JoinQueueScreen, QueueConfirmation };
