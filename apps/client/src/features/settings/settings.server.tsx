import { SettingsScreen } from "./client/SettingsScreen";
import { SETTINGS_MOCK_DATA } from "./shared";

async function getSettings() {
  return SETTINGS_MOCK_DATA;
}

async function SettingsFeature() {
  const data = await getSettings();

  return <SettingsScreen data={data} />;
}

export { SettingsFeature };
