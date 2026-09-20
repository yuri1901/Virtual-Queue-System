import { clsx } from "clsx";
import { Check } from "lucide-react";
import { useTranslations } from "next-intl";

import { Link } from "@/i18n";
import { routes } from "@/libs/routes";

import { Reveal, SectionContainer } from "../../components";
import { pricingSectionStyles as styles } from "./PricingSection.styles";

const plans = ["starter", "team", "scale"] as const;

function PricingSection() {
  const t = useTranslations("home.pricing");
  return (
    <SectionContainer
      id="pricing"
      className={styles.root}
    >
      <Reveal>
        <div className={styles.header}>
          <p className={styles.eyebrow}>{t("eyebrow")}</p>
          <h2 className={styles.title}>{t("title")}</h2>
          <p className={styles.subtitle}>{t("description")}</p>
        </div>
      </Reveal>
      <div className={styles.grid}>
        {plans.map((plan, index) => (
          <Reveal
            key={plan}
            delay={index * 0.08}
          >
            <div className={clsx("relative flex h-full flex-col rounded-[var(--radius-xl)] border p-[var(--card-padding-lg)]", plan === "team" ? "border-[var(--primary)] bg-[var(--text)] text-[var(--text-inverse)] shadow-[var(--shadow-lg)]" : "border-[var(--border)] bg-[var(--surface)]")}>
              {plan === "team" && <span className={styles.popularBadge}>{t("popular")}</span>}
              <p className={clsx("text-sm font-semibold", plan === "team" ? "text-[var(--accent-light)]" : "text-[var(--accent)]")}>{t(`${plan}.name`)}</p>
              <p className={clsx("mt-3 text-sm leading-6", plan === "team" ? "text-[var(--text-inverse-muted)]" : "text-[var(--text-muted)]")}>{t(`${plan}.description`)}</p>
              <p className={styles.priceText}>
                {t(`${plan}.price`)}
                <span className={clsx("text-sm font-normal", plan === "team" ? "text-[var(--text-inverse-subtle)]" : "text-[var(--text-muted)]")}>/month</span>
              </p>
              <ul className={styles.featuresList}>
                {["queues", "members", "analytics"].map((feature) => (
                  <li
                    key={feature}
                    className={clsx("flex items-center gap-2 text-sm", plan === "team" ? "text-[var(--text-inverse-muted)]" : "text-[var(--text-muted)]")}
                  >
                    <Check className={clsx("size-4", plan === "team" ? "text-[var(--accent-light)]" : "text-[var(--success)]")} />
                    {t(`${plan}.${feature}`)}
                  </li>
                ))}
              </ul>
              <Link
                href={routes.auth.register}
                className={clsx("mt-8 inline-flex h-[var(--control-md)] items-center justify-center rounded-[var(--radius-md)] px-4 text-sm font-semibold", plan === "team" ? "bg-[var(--surface)] text-[var(--text)]" : "bg-[var(--primary)] text-[var(--primary-foreground)]")}
              >
                {t("cta")}
              </Link>
            </div>
          </Reveal>
        ))}
      </div>
    </SectionContainer>
  );
}

export { PricingSection };
