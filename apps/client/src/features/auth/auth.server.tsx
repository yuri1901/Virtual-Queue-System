import { ForgotForm, LoginForm, RegisterForm, ResetForm } from "./client";
import type { AuthFeatureProps } from "./shared";

async function AuthFeature({ mode }: AuthFeatureProps) {
  switch (mode) {
    case "register":
      return <RegisterForm />;
    case "forgot":
      return <ForgotForm />;
    case "reset":
      return <ResetForm />;
    case "login":
    default:
      return <LoginForm />;
  }
}

export { AuthFeature };
