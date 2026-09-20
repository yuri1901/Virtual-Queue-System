import { ArrowUpRight, Circle } from "lucide-react";
import { useTranslations } from "next-intl";

import { Link } from "@/i18n";
import { routes } from "@/libs/routes";

import { headerStyles as styles } from "./Header.styles";

function Header() {
  const t = useTranslations("home.header");

  return (
    <header className={styles.root}>
      <div className={styles.container}>
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
          <span>{t("brand")}</span>
        </Link>

        <nav
          aria-label={t("navigationLabel")}
          className={styles.nav}
        >
          <Link
            className={styles.navLink}
            href="#how-it-works"
          >
            {t("howItWorks")}
          </Link>
          <Link
            className={styles.navLink}
            href="#features"
          >
            {t("features")}
          </Link>
          <Link
            className={styles.navLink}
            href="#pricing"
          >
            {t("pricing")}
          </Link>
        </nav>

        <div className={styles.actions}>
          <Link
            className={styles.loginLink}
            href={routes.auth.login}
          >
            {t("signIn")}
          </Link>
          <Link
            className={styles.getStartedBtn}
            href="#get-started"
          >
            {t("register")}
            <ArrowUpRight className={styles.arrowIcon} />
          </Link>
        </div>
      </div>
    </header>
  );
}

export { Header };
