import { clsx } from "clsx";
import type { ButtonHTMLAttributes, ReactNode } from "react";

import { buttonStyles as styles } from "./Button.styles";

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "ghost" | "destructive";
  size?: "sm" | "md" | "lg" | "icon";
  loading?: boolean;
  children: ReactNode;
};

function Button({
  variant = "primary",
  size = "md",
  loading = false,
  className = "",
  children,
  disabled,
  ...props
}: ButtonProps) {
  return (
    <button
      className={clsx(styles.root, styles[variant], styles[size], loading && styles.loading, className)}
      disabled={disabled || loading}
      {...props}
    >
      {loading ? "Loading..." : children}
    </button>
  );
}

export { Button };
