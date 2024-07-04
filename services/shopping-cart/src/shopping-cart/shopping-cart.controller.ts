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
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('shopping-cart')
@Controller()
export class ShoppingCartController {
  constructor(private readonly shoppingCartService: ShoppingCartService) {}

  @ApiOkResponse({ description: 'Get items from the user shopping cart' })
  @Get()
  public all(): Promise<ShoppingCart[]> {
    const userId = 1;
    return this.shoppingCartService.getShoppingCart(userId);
  }

  @ApiCreatedResponse({ description: 'Attach new item to user shopping cart' })
  @Post()
  public create(
    @Body() { productId, price, metadata }: ShoppingCartDto,
  ): Promise<ShoppingCart> {
    const userId = 1;

    return this.shoppingCartService.attach(userId, productId, price, metadata);
  }

  @ApiOkResponse({ description: 'Detach item from the user shopping cart' })
  @Delete('/:productId')
  public remove(
    @Param('productId', ParseIntPipe) productId: number,
  ): Promise<ShoppingCart[]> {
    const userId = 1;

    return this.shoppingCartService.detach(userId, productId);
  }

  @ApiOkResponse({ description: "Empty user's shopping cart" })
  @Delete()
  public removeAll(): Promise<ShoppingCart[]> {
    const userId = 1;

    return this.shoppingCartService.empty(userId);
  }
}
