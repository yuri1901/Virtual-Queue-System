import { NextIntlClientProvider } from "next-intl";
import { routing } from "@/i18n/routing";
import { metadataConfig } from "@/libs/config";

import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = metadataConfig;

export default function RootLayout({ children }: LayoutProps<"/[locale]">) {
  return (
    <html lang="en">
      <body>
        <NextIntlClientProvider>{children}</NextIntlClientProvider>
      </body>
    </html>
  );
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}
