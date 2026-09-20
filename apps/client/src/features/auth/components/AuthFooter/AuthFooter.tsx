import { Link } from "@/i18n";

import { authFooterStyles as styles } from "./AuthFooter.styles";

interface AuthFooterProps {
  text?: string;
  linkText: string;
  linkHref: string;
}

function AuthFooter({ text, linkText, linkHref }: AuthFooterProps) {
  return (
    <p className={styles.root}>
      {text ? `${text} ` : null}
      <Link
        href={linkHref}
        className={styles.link}
      >
        {linkText}
      </Link>
    </p>
  );
}

export { AuthFooter };
