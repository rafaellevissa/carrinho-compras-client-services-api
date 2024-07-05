import { config } from 'dotenv';

config();

export default () => ({
  port: parseInt(process.env.APP_PORT) || 3001,
  isDevelopment: process.env.NODE_ENV == 'production' ? false : true,
  logger: {
    groupName: process.env.LOG_GROUP_NAME,
    streamName: process.env.LOG_STREAM_NAME,
  },
  aws: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    region: process.env.AWS_REGION,
    secretKey: process.env.AWS_SECRET_ACCESS_KEY,
  },
  queue: {
    url: process.env.RABBITMQ_URL,
    name: process.env.RABBITMQ_QUEUE,
  },
});
