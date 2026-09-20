import { useTranslations } from "next-intl";

import { Button } from "@/components/Button";

import { googleButtonStyles as styles } from "./GoogleButton.styles";

function GoogleButton() {
  const t = useTranslations("auth.form");

  return (
    <>
      <Button
        type="button"
        variant="secondary"
        className={styles.button}
      >
        <span className={styles.iconText}>G</span>
        {t("google")}
      </Button>
      <div className={styles.divider}>
        <span className={styles.dividerLine} />
        {t("or")}
        <span className={styles.dividerLine} />
      </div>
    </>
  );
}

export { GoogleButton };
