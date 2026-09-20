import { CreateQueueScreen } from "./client/CreateQueueScreen";
import { JoinedQueuesScreen } from "./client/JoinedQueuesScreen";
import { JoinQueueScreen } from "./client/JoinQueueScreen";
import { PublicQueueScreen } from "./client/PublicQueueScreen";
import { QueueHistoryScreen } from "./client/QueueHistoryScreen";
import { QueueManagementScreen } from "./client/QueueManagementScreen";
import { QueuesScreen } from "./client/QueuesScreen";
import { QUEUE_MOCK_DATA } from "./shared";

async function getQueuesData() {
  return QUEUE_MOCK_DATA;
}

async function QueuesFeature() {
  const data = await getQueuesData();
  return <QueuesScreen data={data.queues} />;
}

async function CreateQueueFeature() {
  return <CreateQueueScreen />;
}

async function QueueManagementFeature() {
  const data = await getQueuesData();
  return <QueueManagementScreen data={data} />;
}

async function QueueHistoryFeature() {
  return <QueueHistoryScreen />;
}

async function PublicQueueFeature() {
  return <PublicQueueScreen />;
}

async function JoinQueueFeature() {
  return <JoinQueueScreen />;
}

async function JoinedQueuesFeature() {
  const data = await getQueuesData();
  return <JoinedQueuesScreen data={data.joinedQueues} />;
}

export {
  CreateQueueFeature,
  JoinedQueuesFeature,
  JoinQueueFeature,
  PublicQueueFeature,
  QueueHistoryFeature,
  QueueManagementFeature,
  QueuesFeature,
};
