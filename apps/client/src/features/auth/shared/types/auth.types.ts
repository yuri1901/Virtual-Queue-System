type AuthMode = "login" | "register" | "forgot" | "reset";

type AuthFeatureProps = {
  mode: AuthMode;
};

export type { AuthFeatureProps, AuthMode };
