import { Inject, Injectable, LoggerService } from '@nestjs/common';
import { Logger as WinstonLogger } from 'winston';

@Injectable()
export class Logger implements LoggerService {
  constructor(private readonly logger: WinstonLogger) {}

  public log(message: string) {
    this.logger.info(message);
  }

  public error(message: string, trace: string) {
    this.logger.error(message, { trace });
  }

  public warn(message: string) {
    this.logger.warn(message);
  }

  public debug(message: string) {
    this.logger.debug(message);
  }

  public verbose(message: string) {
    this.logger.verbose(message);
  }
}
