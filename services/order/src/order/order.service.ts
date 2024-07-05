import { Inject, Injectable, Logger } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { firstValueFrom, timeout } from 'rxjs';
import { OrderDto } from './dto/order.dto';

@Injectable()
export class OrderService {
  constructor(@Inject('RMQ_SERVICE') private readonly client: ClientProxy) {}

  public async create(orderDto: OrderDto[]): Promise<void> {
    await firstValueFrom(
      this.client.emit({ cmd: 'notification' }, orderDto).pipe(timeout(5000)),
    );

    Logger.log('Order sent to queue successfuly!');
  }
}
