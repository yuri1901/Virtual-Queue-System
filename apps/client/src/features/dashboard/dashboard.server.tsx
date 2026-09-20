import { DashboardScreen } from "./client/DashboardScreen";
import { DASHBOARD_MOCK_DATA } from "./shared";

async function getDashboardData() {
  return DASHBOARD_MOCK_DATA;
}

async function DashboardFeature() {
  const data = await getDashboardData();
  return <DashboardScreen data={data} />;
}

export { DashboardFeature };
