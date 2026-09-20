import { Building2, CalendarDays, Scissors, Stethoscope, Utensils, Wrench } from "lucide-react";
import { useTranslations } from "next-intl";

import { Reveal, SectionContainer } from "../../components";
import { useCasesSectionStyles as styles } from "./UseCasesSection.styles";

const useCases = [
  ["clinics", Stethoscope],
  ["barbershops", Scissors],
  ["restaurants", Utensils],
  ["serviceCenters", Wrench],
  ["events", CalendarDays],
  ["offices", Building2],
] as const;

function UseCasesSection() {
  const t = useTranslations("home.useCases");
  return (
    <SectionContainer className={styles.root}>
      <Reveal>
        <div className={styles.header}>
          <div>
            <p className={styles.eyebrow}>{t("eyebrow")}</p>
            <h2 className={styles.title}>{t("title")}</h2>
          </div>
          <p className={styles.headerDescription}>{t("description")}</p>
        </div>
      </Reveal>
      <div className={styles.grid}>
        {useCases.map(([key, Icon], index) => (
          <Reveal
            key={key}
            delay={index * 0.05}
          >
            <div className={styles.card}>
              <Icon
                className={styles.icon}
                strokeWidth={1.7}
              />
              <span className={styles.cardTitle}>{t(`${key}.title`)}</span>
              <span className={styles.cardSubtitle}>{t(`${key}.description`)}</span>
            </div>
          </Reveal>
        ))}
      </div>
    </SectionContainer>
  );
}

export { UseCasesSection };
