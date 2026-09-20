import { clsx } from "clsx";

import { toggleStyles as styles } from "./Toggle.styles";

type ToggleProps = { label: string; description?: string; checked?: boolean };

function Toggle({ label, description, checked = false }: ToggleProps) {
  return (
    <label className={styles.root}>
      <span>
        <span className={styles.label}>{label}</span>
        {description && <span className={styles.description}>{description}</span>}
      </span>
      <input
        className="sr-only"
        type="checkbox"
        defaultChecked={checked}
      />
      <span className={clsx(styles.control, checked ? styles.active : styles.inactive)}>
        <span className={clsx(styles.thumb, checked ? styles.enabled : styles.disabled)} />
      </span>
    </label>
  );
}

export { Toggle };
export type { ToggleProps };
