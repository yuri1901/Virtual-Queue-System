import type { ReactNode } from "react";

import { checkItemStyles as styles } from "./CheckItem.styles";

type CheckItemProps = {
  children: ReactNode;
};

function CheckItem({ children }: CheckItemProps) {
  return (
    <li className={styles.root}>
      <span className={styles.icon}>✓</span>
      {children}
    </li>
  );
}

export { CheckItem };
