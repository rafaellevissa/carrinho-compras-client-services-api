import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { ShoppingCartService } from './shopping-cart.service';
import { ShoppingCart } from './shopping-cart.entity';
import { ShoppingCartDto } from './dto/shopping-cart.dto';

@Controller()
export class ShoppingCartController {
  constructor(private readonly shoppingCartService: ShoppingCartService) {}

  @Get()
  public all(): Promise<ShoppingCart[]> {
    const userId = 1;
    return this.shoppingCartService.getShoppingCart(userId);
  }

  @Post()
  public create(
    @Body() { productId, price }: ShoppingCartDto,
  ): Promise<ShoppingCart> {
    const userId = 1;

    return this.shoppingCartService.attach(userId, productId, price);
  }

  @Delete('/:productId')
  public remove(
    @Param('productId', ParseIntPipe) productId: number,
  ): Promise<ShoppingCart> {
    const userId = 1;

    return this.shoppingCartService.detach(userId, productId);
  }

  @Delete()
  public removeAll(): Promise<ShoppingCart[]> {
    const userId = 1;

    return this.shoppingCartService.empty(userId);
  }
}
