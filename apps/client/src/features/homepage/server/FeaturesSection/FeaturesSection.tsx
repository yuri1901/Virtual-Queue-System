import { useTranslations } from "next-intl";

import { Reveal, SectionContainer } from "../../components";
import { HOMEPAGE_MOCK_DATA } from "../../shared";
import { featuresSectionStyles as styles } from "./FeaturesSection.styles";

interface FeaturesSectionProps {
  data?: typeof HOMEPAGE_MOCK_DATA.featureData;
}

function FeaturesSection({ data = HOMEPAGE_MOCK_DATA.featureData }: FeaturesSectionProps) {
  const t = useTranslations("home.features");

  return (
    <SectionContainer
      id="features"
      className={styles.root}
    >
      <Reveal>
        <div className={styles.header}>
          <p className={styles.eyebrow}>{t("eyebrow")}</p>
          <h2 className={styles.title}>{t("title")}</h2>
          <p className={styles.description}>{t("description")}</p>
        </div>
      </Reveal>
      <div className={styles.grid}>
        {data.map(({ key, icon: Icon }, index) => (
          <Reveal
            key={key}
            delay={index * 0.08}
            className={styles.revealWrapper}
          >
            <div className={styles.card}>
              <div className={styles.iconWrapper}>
                <Icon
                  className={styles.icon}
                  strokeWidth={1.8}
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

export { FeaturesSection };
