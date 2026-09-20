import "./globals.css";

import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { Toaster } from "sonner";

import { routing } from "@/i18n/routing";
import { metadataConfig } from "@/libs/config";
import { QueryProvider } from "@/providers";

export const metadata: Metadata = metadataConfig;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <NextIntlClientProvider>
          <QueryProvider>{children}</QueryProvider>
          <Toaster />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}
