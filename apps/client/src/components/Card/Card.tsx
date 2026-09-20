import { clsx } from "clsx";
import type { ComponentPropsWithoutRef } from "react";

import { cardStyles as styles } from "./Card.styles";

function Card({ className, children, ...props }: ComponentPropsWithoutRef<"div">) {
  return (
    <div
      className={clsx(styles.root, className)}
      {...props}
    >
      {children}
    </div>
  );
}

export { Card };
