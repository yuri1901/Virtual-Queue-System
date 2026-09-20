import { clsx } from "clsx";
import type { InputHTMLAttributes, ReactNode } from "react";

import { inputStyles as styles } from "./Input.styles";

export type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  error?: string;
  helper?: string;
  icon?: ReactNode;
};

function Input({ label, error, helper, icon, className = "", ...props }: InputProps) {
  return (
    <label className={styles.root}>
      {label && <span className={styles.label}>{label}</span>}
      <span className={styles.wrapper}>
        {icon}
        <input
          className={clsx(styles.input, icon && styles.withIcon, className)}
          {...props}
        />
      </span>
      {error && <span className={styles.error}>{error}</span>}
      {helper && !error && <span className={styles.helper}>{helper}</span>}
    </label>
  );
}

export { Input };
