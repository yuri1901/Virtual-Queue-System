import { authHeaderStyles as styles } from "./AuthHeader.styles";

interface AuthHeaderProps {
  title: string;
  description: string;
}

function AuthHeader({ title, description }: AuthHeaderProps) {
  return (
    <div>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.subtitle}>{description}</p>
    </div>
  );
}

export { AuthHeader };
