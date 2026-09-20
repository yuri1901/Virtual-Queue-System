"use client";

import { AnimatePresence, motion } from "framer-motion";
import { SlidersHorizontal } from "lucide-react";
import { useTranslations } from "next-intl";
import { type ReactNode } from "react";

import { Button } from "@/components/Button";
import { Select } from "@/components/Select";
import { useDisclosure } from "@/hooks";

import { filterStyles as styles } from "./Filter.styles";

type FilterProps = { children?: ReactNode };

function Filter({ children }: FilterProps) {
  const t = useTranslations("Filters");
  const { open, setOpen, rootRef } = useDisclosure();

  return (
    <div
      ref={rootRef}
      className={styles.root}
    >
      <Button
        type="button"
        variant="secondary"
        onClick={() => setOpen(!open)}
      >
        <SlidersHorizontal className={styles.icon} />
        {t("open")}
      </Button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{
              opacity: 0,
              y: -4,
            }}
            animate={{
              opacity: 1,
              y: 4,
            }}
            exit={{
              opacity: 0,
              y: -4,
            }}
            className={styles.panel}
          >
            <div className={styles.content}>
              {children ?? (
                <>
                  <Select
                    label={t("status")}
                    options={[t("allStatuses"), t("active"), t("paused"), t("closed"), t("draft")]}
                  />
                  <Select
                    label={t("category")}
                    options={[t("allCategories"), t("clinic"), t("barbershop"), t("restaurant"), t("serviceCenter")]}
                  />
                  <Select
                    label={t("sortBy")}
                    options={[t("newest"), t("oldest"), t("mostPeople"), t("leastPeople")]}
                  />
                </>
              )}
              <div className={styles.actions}>
                <button
                  type="button"
                  className={styles.clear}
                >
                  {t("clear")}
                </button>
                <Button
                  type="button"
                  variant="primary"
                >
                  {t("apply")}
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export { Filter };
