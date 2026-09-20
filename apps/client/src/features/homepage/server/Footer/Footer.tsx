import { ArrowUpRight, Circle } from "lucide-react";
import { useTranslations } from "next-intl";

import { Link } from "@/i18n";
import { routes } from "@/libs/routes";

import { footerStyles as styles } from "./Footer.styles";

function Footer() {
  const t = useTranslations("home.footer");

  return (
    <footer className={styles.root}>
      <div className={styles.container}>
        <Link
          href={routes.home}
          className={styles.brand}
        >
          <span className={styles.logoWrapper}>
            <Circle
              className={styles.logoIcon}
              strokeWidth={0}
            />
          </span>
          {t("brand")}
        </Link>
        <div className={styles.nav}>
          <Link
            href="#features"
            className={styles.link}
          >
            {t("features")}
          </Link>
          <Link
            href="#how-it-works"
            className={styles.link}
          >
            {t("howItWorks")}
          </Link>
          <Link
            href={routes.auth.login}
            className={styles.externalLink}
          >
            {t("signIn")}
            <ArrowUpRight className={styles.externalIcon} />
          </Link>
        </div>
        <p className={styles.copyright}>{t("copyright")}</p>
      </div>
    </footer>
  );
}

export { Footer };
