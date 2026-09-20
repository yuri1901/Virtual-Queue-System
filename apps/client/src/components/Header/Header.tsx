import type { ReactNode } from "react";

import { headerStyles as styles } from "./Header.styles";

type HeaderProps = { eyebrow?: string; title: string; description?: string; action?: ReactNode };

function Header({ eyebrow, title, description, action }: HeaderProps) {
  return (
    <header className={styles.root}>
      <div>
        {eyebrow && <p className={styles.eyebrow}>{eyebrow}</p>}
        <h1 className={styles.title}>{title}</h1>
        {description && <p className={styles.description}>{description}</p>}
      </div>
      {action}
    </header>
  );
}

export { Header };
