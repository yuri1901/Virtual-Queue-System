"use client";

import { ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";

import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { Link } from "@/i18n";
import { routes } from "@/libs/routes";

import { AuthFooter, AuthHeader, GoogleButton, PasswordField } from "../../components";
import { loginFormStyles as styles } from "./LoginForm.styles";

function LoginForm() {
  const t = useTranslations("auth.form");

  return (
    <div className={styles.root}>
      <AuthHeader
        title={t("titleLogin")}
        description={t("descLogin")}
      />
      <GoogleButton />
      <form className={styles.form}>
        <Input
          label={t("emailOrNicknameLabel")}
          placeholder={t("emailOrNicknamePlaceholder")}
          type="text"
        />
        <PasswordField />
        <div className={styles.forgotPasswordWrapper}>
          <Link
            href={routes.auth.forgotPassword}
            className={styles.forgotPasswordLink}
          >
            {t("forgotPassword")}
          </Link>
        </div>
        <Button
          type="button"
          variant="primary"
          className={styles.submitButton}
        >
          {t("submitLogin")}
          <ArrowRight className={styles.submitIcon} />
        </Button>
      </form>
      <AuthFooter
        text={t("dontHaveAccount")}
        linkText={t("registerLink")}
        linkHref="/register"
      />
    </div>
  );
}

export { LoginForm };
