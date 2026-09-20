import { NotificationsScreen } from "./client/NotificationsScreen";
import { NOTIFICATIONS_MOCK_DATA } from "./shared";

async function getNotifications() {
  return NOTIFICATIONS_MOCK_DATA;
}

async function NotificationsFeature() {
  const data = await getNotifications();
  return <NotificationsScreen data={data} />;
}

export { NotificationsFeature };
