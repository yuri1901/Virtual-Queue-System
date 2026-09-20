import { ProfileScreen } from "./client/ProfileScreen";
import { PROFILE_MOCK_DATA } from "./shared";

async function getProfile() {
  return PROFILE_MOCK_DATA;
}

async function ProfileFeature() {
  const data = await getProfile();
  return <ProfileScreen data={data} />;
}

export { ProfileFeature };
