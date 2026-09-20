import { clsx } from "clsx";
import type { ReactNode } from "react";

import { badgeStyles as styles } from "./Badge.styles";

type BadgeProps = {
  children: ReactNode;
  variant?: "neutral" | "success" | "warning" | "danger" | "info" | "primary";
};

function Badge({ children, variant = "neutral" }: BadgeProps) {
  return <span className={clsx(styles.root, styles[variant])}>{children}</span>;
}

export { Badge };
