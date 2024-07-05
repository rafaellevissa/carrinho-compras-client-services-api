import { Body, Controller, ParseArrayPipe, Post } from '@nestjs/common';
import { OrderService } from './order.service';
import { ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import { OrderDto } from './dto/order.dto';

@ApiTags('order')
@Controller()
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @ApiCreatedResponse({ description: 'Create a order' })
  @Post()
  public async create(
    @Body(ParseArrayPipe) orderDto: OrderDto[],
  ): Promise<void> {
    await this.orderService.create(orderDto);
  }
}
