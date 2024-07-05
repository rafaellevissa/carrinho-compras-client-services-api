import * as winston from 'winston';
import * as WinstonCloudWatch from 'winston-cloudwatch';
import constants from '../constants';

export const cloudwatchLogger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  transports: [
    new winston.transports.Console(),
    new WinstonCloudWatch({
      logGroupName: constants().logger.groupName,
      logStreamName: constants().logger.streamName,
      awsRegion: constants().aws.region,
      awsAccessKeyId: constants().aws.accessKeyId,
      awsSecretKey: constants().aws.secretKey,
    }),
  ],
});
