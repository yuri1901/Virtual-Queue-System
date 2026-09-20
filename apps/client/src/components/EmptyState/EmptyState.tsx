import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";

import { emptyStateStyles as styles } from "./EmptyState.styles";

type EmptyStateProps = {
  icon: LucideIcon;
  title: string;
  description: string;
  action?: ReactNode;
};

function EmptyState({ icon: Icon, title, description, action }: EmptyStateProps) {
  return (
    <div className={styles.root}>
      <span className={styles.icon}>
        <Icon className={styles.iconGraphic} />
      </span>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      {action && <div className={styles.action}>{action}</div>}
    </div>
  );
}

export { EmptyState };
