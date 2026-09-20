"use client";

import { ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";

import { Button } from "@/components/Button";

import { AuthHeader, PasswordField } from "../../components";
import { resetFormStyles as styles } from "./ResetForm.styles";

function ResetForm() {
  const t = useTranslations("auth.form");

  return (
    <div className={styles.root}>
      <AuthHeader
        title={t("titleReset")}
        description={t("descReset")}
      />
      <form className={styles.form}>
        <PasswordField />
        <label className={styles.confirmPasswordLabel}>
          <span className={styles.confirmPasswordText}>{t("confirmPasswordLabel")}</span>
          <input
            type="password"
            placeholder={t("confirmPasswordPlaceholder")}
            className={styles.confirmPasswordInput}
          />
        </label>
        <Button
          type="button"
          variant="primary"
          className={styles.submitButton}
        >
          {t("submitReset")}
          <ArrowRight className={styles.submitIcon} />
        </Button>
      </form>
    </div>
  );
}

export { ResetForm };
