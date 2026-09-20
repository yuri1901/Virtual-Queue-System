import { clsx } from "clsx";
import type { ReactNode } from "react";

import { sectionContainerStyles as styles } from "./SectionContainer.styles";

type SectionContainerProps = {
  children: ReactNode;
  className?: string;
  id?: string;
};

function SectionContainer({ children, className = "", id }: SectionContainerProps) {
  return (
    <section
      id={id}
      className={clsx(styles.root, className)}
    >
      {children}
    </section>
  );
}

export { SectionContainer };
