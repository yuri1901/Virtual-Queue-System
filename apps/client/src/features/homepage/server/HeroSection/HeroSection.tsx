import { ArrowRight, Sparkles } from "lucide-react";
import { useTranslations } from "next-intl";

import { Link } from "@/i18n";

import { QueuePreview } from "../../client/QueuePreview";
import { Reveal, SectionContainer } from "../../components";
import { heroSectionStyles as styles } from "./HeroSection.styles";

function HeroSection() {
  const t = useTranslations("home.hero");

  return (
    <SectionContainer className={styles.root}>
      <div
        className={styles.glow}
        aria-hidden="true"
      />
      <div className={styles.grid}>
        <Reveal className={styles.leftCol}>
          <div className={styles.badge}>
            <Sparkles className={styles.badgeIcon} />
            {t("eyebrow")}
          </div>
          <h1 className={styles.title}>
            {t("title")} <span className={styles.titleAccent}>{t("titleAccent")}</span>
          </h1>
          <p className={styles.subtitle}>{t("description")}</p>
          <div className={styles.actions}>
            <Link
              href="#get-started"
              className={styles.primaryBtn}
            >
              {t("primaryCta")}
              <ArrowRight className={styles.arrowIcon} />
            </Link>
            <Link
              href="#how-it-works"
              className={styles.secondaryBtn}
            >
              {t("secondaryCta")}
            </Link>
          </div>
          <div className={styles.socialProof}>
            <span className={styles.avatarGroup}>
              <span className={styles.avatar1} />
              <span className={styles.avatar2} />
              <span className={styles.avatar3} />
            </span>
            <span>{t("socialProof")}</span>
          </div>
        </Reveal>
        <QueuePreview />
      </div>
    </SectionContainer>
  );
}

export { HeroSection };
