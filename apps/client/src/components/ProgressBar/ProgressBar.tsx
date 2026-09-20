import { progressBarStyles as styles } from "./ProgressBar.styles";

type ProgressBarProps = { value: number; label?: string };

function ProgressBar({ value, label }: ProgressBarProps) {
  return (
    <div className={styles.wrapper}>
      {label && (
        <div className={styles.label}>
          <span>{label}</span>
          <span>{value}%</span>
        </div>
      )}
      <div className={styles.root}>
        <div
          className={styles.bar}
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  );
}

export { ProgressBar };
