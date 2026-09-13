import { useTranslations } from "next-intl";

export function Test() {
  const t = useTranslations("home");
  return (
    <>
      <h1>{t("title")}</h1>
      <p>{t("description")}</p>
    </>
  );
}
