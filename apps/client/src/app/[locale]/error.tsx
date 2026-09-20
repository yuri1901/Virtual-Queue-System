"use client";

import { AlertTriangle, RotateCcw } from "lucide-react";
import { useTranslations } from "next-intl";

import { Button } from "@/components/Button";

export default function ErrorPage({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  const t = useTranslations("Errors");
  const common = useTranslations("Common");
  return (
    <main className="flex min-h-screen items-center justify-center bg-[var(--paper)] px-5 text-center">
      <div>
        <span className="mx-auto flex size-14 items-center justify-center rounded-2xl bg-[var(--danger-soft)] text-[var(--danger)]">
          <AlertTriangle className="size-7" />
        </span>
        <h1 className="mt-6 text-3xl font-semibold tracking-[-0.04em] text-[var(--ink)]">{t("genericTitle")}</h1>
        <p className="mt-3 text-sm text-[var(--muted)]">{t("genericDescription")}</p>
        <Button
          onClick={() => reset()}
          variant="primary" className="mt-6"
        >
          <RotateCcw className="size-4" />
          {common("retry")}
        </Button>
      </div>
    </main>
  );
}
