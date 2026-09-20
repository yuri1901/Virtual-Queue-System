import { AuthFeature } from "@/features/auth/auth.server";

export default function ForgotPasswordPage() {
  return <AuthFeature mode="forgot" />;
}
