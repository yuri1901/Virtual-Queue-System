"use client";

import { ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";

import { Button } from "@/components/Button";
import { CheckItem } from "@/components/CheckItem";
import { Input } from "@/components/Input";

import { AuthFooter, AuthHeader, GoogleButton, PasswordField } from "../../components";
import { registerFormStyles as styles } from "./RegisterForm.styles";

function RegisterForm() {
  const t = useTranslations("auth.form");

  const requirements = [
    t("reqMinChars"),
    t("reqUppercase"),
    t("reqNumber"),
  ];

  return (
    <div className={styles.root}>
      <AuthHeader
        title={t("titleRegister")}
        description={t("descRegister")}
      />
      <GoogleButton />
      <form className={styles.form}>
        <Input
          label={t("nameLabel")}
          placeholder={t("namePlaceholder")}
        />
        <Input
          label={t("nicknameLabel")}
          placeholder={t("nicknamePlaceholder")}
        />
        <Input
          label={t("emailOrNicknameLabel")}
          placeholder={t("emailOrNicknamePlaceholder")}
          type="text"
        />
        <PasswordField />
        <label className={styles.confirmPasswordLabel}>
          <span className={styles.confirmPasswordText}>{t("confirmPasswordLabel")}</span>
          <input
            type="password"
            placeholder={t("confirmPasswordPlaceholder")}
            className={styles.confirmPasswordInput}
          />
        </label>
        <ul className={styles.requirementsList}>
          {requirements.map((req) => (
            <CheckItem key={req}>{req}</CheckItem>
          ))}
        </ul>
        <Button
          type="button"
          variant="primary"
          className={styles.submitButton}
        >
          {t("submitRegister")}
          <ArrowRight className={styles.submitIcon} />
        </Button>
      </form>
      <AuthFooter
        text={t("alreadyHaveAccount")}
        linkText={t("loginLink")}
        linkHref="/login"
      />
    </div>
  );
}

export { RegisterForm };
