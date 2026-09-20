import { AuthFeature } from "@/features/auth/auth.server";

export default function LoginPage() {
  return <AuthFeature mode="login" />;
}
