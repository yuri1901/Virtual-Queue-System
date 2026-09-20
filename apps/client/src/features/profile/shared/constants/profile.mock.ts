const PROFILE_MOCK_DATA = {
  name: "Jordan Davis",
  nickname: "jordan",
  email: "jordan@example.com",
  phone: "",
  accountCreated: "May 4, 2026",
  authProvider: "Email",
  googleAccount: "Not connected",
  initials: "JD",
};

type ProfileData = typeof PROFILE_MOCK_DATA;

export { PROFILE_MOCK_DATA };
export type { ProfileData };
