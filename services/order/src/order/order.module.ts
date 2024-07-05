import { Module } from '@nestjs/common';
import { OrderController } from './order.controller';
import { OrderService } from './order.service';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { ConfigModule, ConfigService } from '@nestjs/config';
import constants from 'src/common/constants';

@Module({
  imports: [
    ClientsModule.registerAsync([
      {
        name: 'RMQ_SERVICE',
        imports: [ConfigModule],
        useFactory: () => ({
          transport: Transport.RMQ,
          options: {
            urls: [constants().queue.url],
            queue: constants().queue.name,
            queueOptions: {
              durable: true,
            },
          },
        }),
      },
    ]),
  ],
  controllers: [OrderController],
  providers: [OrderService],
})
export class OrderModule {}
