import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { firstValueFrom, timeout } from 'rxjs';
import { OrderDto } from './dto/order.dto';

@Injectable()
export class OrderService {
  constructor(@Inject('RMQ_SERVICE') private readonly client: ClientProxy) {}

  public create(orderDto: OrderDto[]): Promise<any> {
    return firstValueFrom(
      this.client.emit({ cmd: 'notification' }, orderDto).pipe(timeout(5000)),
    );
  }
}
