"use client";

import { clsx } from "clsx";
import { AnimatePresence, motion } from "framer-motion";
import { Check, ChevronDown } from "lucide-react";

import { useDisclosure } from "@/hooks";

import { selectStyles as styles } from "./Select.styles";

type SelectProps = {
  label?: string;
  options: string[];
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  error?: string;
  disabled?: boolean;
};

function Select({ label, options, placeholder, value, onChange, error, disabled = false }: SelectProps) {
  const { open, setOpen, rootRef } = useDisclosure();
  const selected = value ?? options[0];
  return (
    <div
      ref={rootRef}
      className={styles.root}
    >
      {label && <span className={styles.label}>{label}</span>}
      <button
        type="button"
        disabled={disabled}
        aria-haspopup="listbox"
        aria-expanded={open}
        onClick={() => setOpen(!open)}
        className={clsx(styles.trigger, error ? styles.error : open ? styles.open : styles.default)}
      >
        <span className={selected ? styles.value : styles.placeholder}>{selected || placeholder}</span>
        <ChevronDown className={clsx(styles.chevron, open && styles.rotated)} />
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
            className={styles.menu}
            role="listbox"
          >
            {options.map((option) => (
              <button
                type="button"
                role="option"
                aria-selected={option === selected}
                key={option}
                onClick={() => {
                  onChange?.(option);
                  setOpen(false);
                }}
                className={clsx(styles.option, option === selected ? styles.selected : styles.optionDefault)}
              >
                {option}
                {option === selected && <Check className={styles.icon} />}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
      {error && <span className={styles.errorText}>{error}</span>}
    </div>
  );
}

export { Select };
