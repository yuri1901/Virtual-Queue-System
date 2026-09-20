import { clsx } from "clsx";
import type { LucideIcon } from "lucide-react";

import { Card } from "../Card";
import { statCardStyles as styles } from "./StatCard.styles";

type StatCardProps = {
  label: string;
  value: string;
  change?: string;
  icon: LucideIcon;
  tone?: "accent" | "success" | "warning";
};

function StatCard({ label, value, change, icon: Icon, tone = "accent" }: StatCardProps) {
  return (
    <Card className={styles.padding}>
      <div className={styles.content}>
        <div>
          <p className={styles.label}>{label}</p>
          <p className={styles.value}>{value}</p>
          {change && <p className={styles.change}>{change}</p>}
        </div>
        <span className={clsx(styles.icon, styles[tone])}>
          <Icon
            className={styles.iconGraphic}
            strokeWidth={1.8}
          />
        </span>
      </div>
    </Card>
  );
}

export { StatCard };
