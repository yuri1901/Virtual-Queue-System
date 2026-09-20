import { clsx } from "clsx";
import type { ComponentProps, ReactNode } from "react";

import { Link } from "@/i18n";

import { buttonLinkStyles as styles } from "./ButtonLink.styles";

type ButtonLinkProps = Omit<ComponentProps<typeof Link>, "className"> & {
  variant?: "primary" | "secondary" | "ghost" | "destructive";
  size?: "sm" | "md" | "lg" | "icon";
  className?: string;
  children: ReactNode;
};

function ButtonLink({
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: ButtonLinkProps) {
  return (
    <Link
      className={clsx(styles.root, styles[variant], styles[size], className)}
      {...props}
    >
      {children}
    </Link>
  );
}

export { ButtonLink };
