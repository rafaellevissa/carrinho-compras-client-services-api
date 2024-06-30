import { Module } from '@nestjs/common';
import { ShoppingCartController } from './shopping-cart.controller';
import { ShoppingCartService } from './shopping-cart.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ShoppingCart } from './shopping-cart.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ShoppingCart])],
  controllers: [ShoppingCartController],
  providers: [ShoppingCartService],
})
export class ShoppingCartModule {}
