import { AuthFeature } from "@/features/auth/auth.server";

export default function ResetPasswordPage() {
  return <AuthFeature mode="reset" />;
}
