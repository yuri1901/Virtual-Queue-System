import { ArrowDownRight } from "lucide-react";
import { useTranslations } from "next-intl";

import { Reveal, SectionContainer } from "../../components";
import { HOMEPAGE_MOCK_DATA } from "../../shared";
import { howItWorksSectionStyles as styles } from "./HowItWorksSection.styles";

interface HowItWorksSectionProps {
  data?: typeof HOMEPAGE_MOCK_DATA.stepsData;
}

function HowItWorksSection({ data = HOMEPAGE_MOCK_DATA.stepsData }: HowItWorksSectionProps) {
  const t = useTranslations("home.howItWorks");

  return (
    <SectionContainer
      id="how-it-works"
      className={styles.root}
    >
      <Reveal>
        <div className={styles.header}>
          <div className={styles.headerText}>
            <p className={styles.eyebrow}>{t("eyebrow")}</p>
            <h2 className={styles.title}>{t("title")}</h2>
          </div>
          <ArrowDownRight
            className={styles.arrowIcon}
            strokeWidth={1.5}
          />
        </div>
      </Reveal>
      <div className={styles.grid}>
        {data.map(({ key, number, icon: Icon }, index) => (
          <Reveal
            key={key}
            delay={index * 0.1}
          >
            <div className={styles.card}>
              <div className={styles.cardHeader}>
                <span className={styles.stepNumber}>{number}</span>
                <Icon
                  className={styles.stepIcon}
                  strokeWidth={1.7}
                />
              </div>
              <h3 className={styles.cardTitle}>{t(`${key}.title`)}</h3>
              <p className={styles.cardDescription}>{t(`${key}.description`)}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </SectionContainer>
  );
}

export { HowItWorksSection };
