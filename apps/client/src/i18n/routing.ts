import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["uk", "en"],
  defaultLocale: "uk",
  localePrefix: "always",
  localeDetection: true,
  localeCookie: {
    name: "USER_LOCALE",
    maxAge: 60 * 60 * 24 * 365,
  },
  alternateLinks: true,
});
