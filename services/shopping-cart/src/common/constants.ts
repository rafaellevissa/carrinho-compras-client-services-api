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
    secretKey: process.env.AWS_SECRET_KEY,
  },
  database: {
    driver: process.env.DB_DRIVER as any,
    hostname: process.env.DB_HOSTNAME,
    username: process.env.DB_USERNAME,
    port: parseInt(process.env.DB_PORT),
    password: process.env.DB_PASSWORD,
    name: process.env.DB_NAME,
  },
});
