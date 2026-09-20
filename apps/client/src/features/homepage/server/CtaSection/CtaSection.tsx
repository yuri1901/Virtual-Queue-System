import { ArrowRight, CheckCircle2 } from "lucide-react";
import { useTranslations } from "next-intl";

import { Link } from "@/i18n";
import { routes } from "@/libs/routes";

import { Reveal, SectionContainer } from "../../components";
import { ctaSectionStyles as styles } from "./CtaSection.styles";

function CtaSection() {
  const t = useTranslations("home.cta");

  return (
    <SectionContainer
      id="get-started"
      className={styles.root}
    >
      <Reveal>
        <div className={styles.card}>
          <div
            className={styles.ringDecoration}
            aria-hidden="true"
          />
          <div
            className={styles.glowDecoration}
            aria-hidden="true"
          />
          <div className={styles.content}>
            <p className={styles.eyebrow}>{t("eyebrow")}</p>
            <h2 className={styles.title}>{t("title")}</h2>
            <p className={styles.description}>{t("description")}</p>
            <div className={styles.actions}>
              <Link
                href={routes.auth.register}
                className={styles.button}
              >
                {t("button")}
                <ArrowRight className={styles.arrowIcon} />
              </Link>
              <span className={styles.badgeText}>
                <CheckCircle2 className={styles.checkIcon} />
                {t("note")}
              </span>
            </div>
          </div>
        </div>
      </Reveal>
    </SectionContainer>
  );
}

export { CtaSection };
