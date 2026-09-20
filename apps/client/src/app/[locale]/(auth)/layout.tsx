import { AuthLayout } from "@/features/auth/server/AuthLayout";

export default function Layout({ children }: { children: React.ReactNode }) {
  return <AuthLayout>{children}</AuthLayout>;
}
