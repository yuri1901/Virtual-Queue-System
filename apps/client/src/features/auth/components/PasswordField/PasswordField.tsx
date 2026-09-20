'use client'

import { Eye, EyeOff, LockKeyhole } from "lucide-react";
import { useTranslations } from "next-intl";
import { useState } from "react";

import { Button } from "@/components/Button";

import { passwordFieldStyles as styles } from "./PasswordField.styles";

function PasswordField() {
  const t = useTranslations("auth.form");
  const [showPassword, setShowPassword] = useState(false);

  return (
    <label className={styles.fieldLabel}>
      <span className={styles.labelText}>{t("passwordLabel")}</span>
      <span className={styles.inputWrapper}>
        <LockKeyhole className={styles.lockIcon} />
        <input
          type={showPassword ? "text" : "password"}
          placeholder={t("passwordPlaceholder")}
          className={styles.passwordInput}
        />
        <Button
          type="button"
          className={styles.togglePasswordButton}
          onClick={() => setShowPassword(!showPassword)}
          aria-label={t("togglePassword")}
        >
          {showPassword ? <EyeOff className={styles.toggleIcon} /> : <Eye className={styles.toggleIcon} />}
        </Button>
      </span>
    </label>
  );
}

export { PasswordField };
