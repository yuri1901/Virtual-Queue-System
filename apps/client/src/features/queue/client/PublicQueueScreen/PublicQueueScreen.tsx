import { ArrowRight, Clock3, Copy, MapPin, QrCode, UsersRound } from "lucide-react";
import { useTranslations } from "next-intl";

import { Badge } from "@/components/Badge";
import { Button } from "@/components/Button";
import { ButtonLink } from "@/components/ButtonLink";
import { Card } from "@/components/Card";
import { Link } from "@/i18n";
import { routes } from "@/libs/routes";

import { publicQueueScreenStyles as styles } from "./PublicQueueScreen.styles";

function PublicQueueScreen() {
  const t = useTranslations("queue.public");

  return (
    <main className={styles.root}>
      <div className={styles.container}>
        <header className={styles.headerNav}>
          <Link
            href={routes.home}
            className={styles.logoLink}
          >
            <span className={styles.logoBadge}>
              <span className={styles.logoDot} />
            </span>
            {t("brand")}
          </Link>
          <Link
            href={routes.auth.login}
            className={styles.loginLink}
          >
            {t("manageQueues")}
          </Link>
        </header>
        <div className={styles.hero}>
          <span className={styles.iconWrapper}>
            <UsersRound className={styles.icon} />
          </span>
          <h1 className={styles.title}>Northside Dental Clinic</h1>
          <p className={styles.subtitle}>Walk-in appointment desk · 124 Main Street</p>
          <div className={styles.badgeWrapper}>
            <Badge variant="success">
              <span className={styles.badgeDot} />
              {t("openStatus")}
            </Badge>
          </div>
          <Card className={styles.card}>
            <div className={styles.statsGrid}>
              <div className={styles.statBox}>
                <UsersRound className={styles.statIcon} />
                <p className={styles.statLabel}>{t("peopleWaiting")}</p>
                <p className={styles.statValue}>14</p>
              </div>
              <div className={styles.statBox}>
                <Clock3 className={styles.statIcon} />
                <p className={styles.statLabel}>{t("estimatedWait")}</p>
                <p className={styles.statValue}>~32 min</p>
              </div>
              <div className={styles.statBox}>
                <MapPin className={styles.statIcon} />
                <p className={styles.statLabel}>{t("hoursToday")}</p>
                <p className={styles.statValue}>9–5</p>
              </div>
            </div>
            <ButtonLink
              href={routes.queue.join("northside-dental")}
              variant="primary"
              className={styles.joinButton}
            >
              {t("joinQueue")}
              <ArrowRight className={styles.joinButtonIcon} />
            </ButtonLink>
          </Card>
          <div className={styles.shareActions}>
            <Button variant="secondary">
              <Copy className={styles.shareIcon} />
              {t("copyLink")}
            </Button>
            <Button variant="secondary">
              <QrCode className={styles.shareIcon} />
              {t("showQr")}
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}

export { PublicQueueScreen };
