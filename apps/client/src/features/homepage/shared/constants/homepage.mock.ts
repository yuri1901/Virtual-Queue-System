import { Bell, MapPin, Radio, UserRoundPlus, UsersRound } from "lucide-react";

const HOMEPAGE_MOCK_DATA = {
  featureData: [
    {
      key: "remote",
      icon: MapPin,
    },
    {
      key: "position",
      icon: UsersRound,
    },
    {
      key: "updates",
      icon: Bell,
    },
  ] as const,
  stepsData: [
    {
      key: "find",
      number: "01",
      icon: MapPin,
    },
    {
      key: "join",
      number: "02",
      icon: UserRoundPlus,
    },
    {
      key: "track",
      number: "03",
      icon: Radio,
    },
  ] as const,
};

type HomepageData = typeof HOMEPAGE_MOCK_DATA;

export { HOMEPAGE_MOCK_DATA };
export type { HomepageData };
