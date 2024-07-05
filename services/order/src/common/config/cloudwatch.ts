import * as winston from 'winston';
import * as WinstonCloudWatch from 'winston-cloudwatch';
import constants from '../constants';

const { logger, aws } = constants();

export const cloudwatchLogger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  transports: [
    new winston.transports.Console(),
    new WinstonCloudWatch({
      logGroupName: logger.groupName,
      logStreamName: logger.streamName,
      awsRegion: aws.region,
      awsAccessKeyId: aws.accessKeyId,
      awsSecretKey: aws.secretKey,
    }),
  ],
});
