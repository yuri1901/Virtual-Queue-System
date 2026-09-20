"use client";

import { clsx } from "clsx";
import { AnimatePresence, motion } from "framer-motion";
import { Archive, type LucideIcon, MoreHorizontal, Pause, Share2, Trash2 } from "lucide-react";

import { useDisclosure } from "@/hooks";

import { dropdownStyles as styles } from "./Dropdown.styles";

type MenuIcon = "archive" | "pause" | "share" | "trash";
type DropdownItem = { label: string; icon?: MenuIcon; danger?: boolean; onClick?: () => void };
type DropdownProps = { items: DropdownItem[]; align?: "left" | "right" };
const icons: Record<MenuIcon, LucideIcon> = {
  archive: Archive,
  pause: Pause,
  share: Share2,
  trash: Trash2,
};

function Dropdown({ items, align = "right" }: DropdownProps) {
  const { open, setOpen, rootRef } = useDisclosure();

  return (
    <div
      ref={rootRef}
      className={styles.root}
    >
      <button
        type="button"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        className={styles.trigger}
      >
        <MoreHorizontal className={styles.icon} />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{
              opacity: 0,
              y: -4,
              scale: 0.98,
            }}
            animate={{
              opacity: 1,
              y: 4,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              y: -4,
              scale: 0.98,
            }}
            transition={{ duration: 0.14 }}
            className={clsx(styles.menu, align === "right" ? styles.right : styles.left)}
          >
            {items.map(({ label, icon, danger, onClick }) => {
              const Icon = icon ? icons[icon] : null;
              return (
                <button
                  type="button"
                  key={label}
                  onClick={() => {
                    onClick?.();
                    setOpen(false);
                  }}
                  className={clsx(styles.item, danger ? styles.danger : styles.default)}
                >
                  {Icon && <Icon className={styles.icon} />}
                  {label}
                </button>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export { Dropdown };
