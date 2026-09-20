import { Search } from "lucide-react";
import { useTranslations } from "next-intl";

import { searchInputStyles as styles } from "./SearchInput.styles";

function SearchInput({ placeholder }: { placeholder?: string }) {
  const t = useTranslations("Common");
  return (
    <label className={styles.root}>
      <Search className={styles.icon} />
      <input
        className={styles.input}
        placeholder={placeholder ?? t("search")}
      />
    </label>
  );
}

export { SearchInput };
