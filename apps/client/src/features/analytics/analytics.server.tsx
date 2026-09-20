import { AnalyticsScreen } from "./client/AnalyticsScreen";
import { ANALYTICS_MOCK_DATA } from "./shared";

async function getAnalytics() {
  return ANALYTICS_MOCK_DATA;
}

async function AnalyticsFeature() {
  const data = await getAnalytics();

  return <AnalyticsScreen data={data} />;
}

export { AnalyticsFeature };
