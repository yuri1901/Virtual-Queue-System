import { LoaderCircle } from "lucide-react";
import { getTranslations } from "next-intl/server";

export default async function Loading() {
  const t = await getTranslations("Common");
  return (
    <main className="flex min-h-screen items-center justify-center bg-[var(--paper)]">
      <LoaderCircle
        className="size-7 animate-spin text-[var(--accent)]"
        aria-label={t("loading")}
      />
    </main>
  );
}
