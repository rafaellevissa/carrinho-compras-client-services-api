export default () => ({
  port: parseInt(process.env.APP_PORT) || 3001,
  isDevelopment: process.env.NODE_ENV == 'production' ? false : true,
  queue: {
    url: process.env.RABBITMQ_URL,
    name: process.env.RABBITMQ_QUEUE,
  },
});
