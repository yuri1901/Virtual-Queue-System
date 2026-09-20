import { clsx } from "clsx";
import type { TextareaHTMLAttributes } from "react";

import { textareaStyles as styles } from "./Textarea.styles";

function Textarea({ label, className = "", ...props }: TextareaHTMLAttributes<HTMLTextAreaElement> & { label?: string }) {
  return (
    <label className={styles.root}>
      {label && <span className={styles.label}>{label}</span>}
      <textarea
        className={clsx(styles.input, className)}
        {...props}
      />
    </label>
  );
}

export { Textarea };
