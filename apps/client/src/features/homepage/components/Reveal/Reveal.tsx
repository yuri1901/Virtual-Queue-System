"use client";

import { clsx } from "clsx";
import { motion } from "framer-motion";
import type { ReactNode } from "react";

import { revealStyles as styles } from "./Reveal.styles";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

function Reveal({ children, className = "", delay = 0 }: RevealProps) {
  return (
    <motion.div
      className={clsx(styles.root, className)}
      initial={{
        opacity: 0,
        y: 24
      }}
      whileInView={{
        opacity: 1,
        y: 0
      }}
      viewport={{
        once: true,
        amount: 0.2
      }}
      transition={{
        duration: 0.6,
        delay,
        ease: [0.22, 1, 0.36, 1]
      }}
    >
      {children}
    </motion.div>
  );
}

export { Reveal };
