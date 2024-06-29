export default () => ({
  port: parseInt(process.env.APP_PORT) || 3001,
  database: {
    driver: process.env.DB_DRIVER as any,
    hostname: process.env.DB_HOSTNAME,
    username: process.env.DB_USERNAME,
    port: parseInt(process.env.DB_PORT),
    password: process.env.DB_PASSWORD,
    name: process.env.DB_NAME,
  },
});
