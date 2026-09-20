"use client";

import { motion } from "framer-motion";
import { Activity, CheckCircle2, Clock3, UsersRound } from "lucide-react";
import { useTranslations } from "next-intl";

import { queuePreviewStyles as styles } from "./QueuePreview.styles";

function QueuePreview() {
  const t = useTranslations("home.queuePreview");

  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0.96,
        y: 18
      }}
      animate={{
        opacity: 1,
        scale: 1,
        y: 0
      }}
      transition={{
        duration: 0.8,
        delay: 0.2,
        ease: [0.22, 1, 0.36, 1]
      }}
      className={styles.root}
    >
      <div
        className={styles.glow}
        aria-hidden="true"
      />
      <div className={styles.card}>
        <div className={styles.header}>
          <div>
            <p className={styles.queueType}>{t("eyebrow")}</p>
            <p className={styles.queueTitle}>{t("location")}</p>
          </div>
          <span className={styles.badge}>
            <motion.span
              className={styles.badgeDot}
              animate={{
                opacity: [1, 0.35, 1],
                scale: [1, 0.8, 1]
              }}
              transition={{
                duration: 1.8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            {t("active")}
          </span>
        </div>

        <div className={styles.body}>
          <div className={styles.positionRow}>
            <div>
              <p className={styles.positionLabel}>{t("ticket")}</p>
              <p className={styles.positionValue}>A-24</p>
            </div>
            <CheckCircle2
              className={styles.sparklesIcon}
              strokeWidth={1.7}
            />
          </div>
          <div className={styles.progressTrack}>
            <motion.div
              className={styles.progressBar}
              initial={{ width: "0%" }}
              animate={{ width: "68%" }}
              transition={{
                duration: 1.2,
                delay: 0.6,
                ease: "easeOut"
              }}
            />
          </div>
        </div>

        <div className={styles.grid}>
          <div className={styles.statBox}>
            <UsersRound className={styles.statIcon} />
            <p className={styles.statLabel}>{t("position")}</p>
            <p className={styles.statValue}>3rd</p>
          </div>
          <div className={styles.statBox}>
            <Clock3 className={styles.statIcon} />
            <p className={styles.statLabel}>{t("estimatedWait")}</p>
            <p className={styles.statValue}>~12 min</p>
          </div>
        </div>

        <div className={styles.footer}>
          <Activity className={styles.checkIcon} />
          {t("updated")}
        </div>
      </div>
    </motion.div>
  );
}

export { QueuePreview };
