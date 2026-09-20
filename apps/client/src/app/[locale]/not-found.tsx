import { SearchX } from "lucide-react";
import { getTranslations } from "next-intl/server";

import { ButtonLink } from "@/components/ButtonLink";
import { routes } from "@/libs/routes";

export default async function NotFound() {
  const t = await getTranslations("Errors");
  const common = await getTranslations("Common");
  return (
    <main className="flex min-h-screen items-center justify-center bg-[var(--paper)] px-5 text-center">
      <div>
        <span className="mx-auto flex size-14 items-center justify-center rounded-2xl bg-[var(--accent-soft)] text-[var(--accent)]">
          <SearchX className="size-7" />
        </span>
        <p className="mt-6 text-sm font-semibold text-[var(--accent)]">404</p>
        <h1 className="mt-2 text-3xl font-semibold tracking-[-0.04em] text-[var(--ink)]">{t("notFoundTitle")}</h1>
        <p className="mt-3 text-sm text-[var(--muted)]">{t("notFoundDescription")}</p>
        <ButtonLink
          href={routes.home}
          variant="primary"
          className="mt-6"
        >
          {common("backToHome")}
        </ButtonLink>
      </div>
    </main>
  );
}
