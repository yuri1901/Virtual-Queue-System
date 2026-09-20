const SETTINGS_MOCK_DATA = {
  languageOptions: ["English", "Ukrainian"],
  timezoneOptions: ["(GMT-05:00) Eastern Time", "(GMT+00:00) London", "(GMT+02:00) Kyiv"],
  themeOptions: ["Light", "Dark", "System"] as const,
  defaultTheme: "Light",
  notifications: {
    email: true,
    browser: true,
    queueUpdates: true,
    marketing: false,
  },
  privacy: {
    profileVisibility: true,
  },
};
type SettingsData = typeof SETTINGS_MOCK_DATA;

export type { SettingsData }
export { SETTINGS_MOCK_DATA };
