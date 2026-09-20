"use client";

import { ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";

import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { routes } from "@/libs/routes";

import { AuthFooter, AuthHeader } from "../../components";
import { forgotFormStyles as styles } from "./ForgotForm.styles";

function ForgotForm() {
  const t = useTranslations("auth.form");

  return (
    <div className={styles.root}>
      <AuthHeader
        title={t("titleForgot")}
        description={t("descForgot")}
      />
      <form className={styles.form}>
        <Input
          label={t("emailLabel")}
          placeholder={t("emailPlaceholder")}
          type="email"
        />
        <Button
          type="button"
          variant="primary"
          className={styles.submitButton}
        >
          {t("submitForgot")}
          <ArrowRight className={styles.submitIcon} />
        </Button>
      </form>
      <AuthFooter
        linkText={t("backToLogin")}
        linkHref={routes.auth.login}
      />
    </div>
  );
}

export { ForgotForm };
