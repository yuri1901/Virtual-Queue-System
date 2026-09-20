import { ArrowLeft, Circle, ShieldCheck } from "lucide-react";
import { useTranslations } from "next-intl";
import type { ReactNode } from "react";

import { Link } from "@/i18n";
import { routes } from "@/libs/routes";

import { authLayoutStyles as styles } from "./AuthLayout.styles";

function AuthLayout({ children }: { children: ReactNode }) {
  const t = useTranslations("auth.layout");

  return (
    <main className={styles.root}>
      <div className={styles.header}>
        <Link
          href={routes.home}
          className={styles.logoLink}
        >
          <span className={styles.logoIconWrapper}>
            <Circle
              className={styles.logoIcon}
              strokeWidth={0}
            />
          </span>
          {t("brand")}
        </Link>
        <Link
          href={routes.home}
          className={styles.backLink}
        >
          <ArrowLeft className={styles.backIcon} />
          {t("backToHome")}
        </Link>
      </div>
      <div className={styles.contentGrid}>
        <div className={styles.heroColumn}>
          <span className={styles.shieldBadge}>
            <ShieldCheck className={styles.shieldIcon} />
          </span>
          <h1 className={styles.heroTitle}>{t("heroTitle")}</h1>
          <p className={styles.heroSubtitle}>{t("heroSubtitle")}</p>
        </div>
        {children}
      </div>
    </main>
  );
}

export { AuthLayout };
