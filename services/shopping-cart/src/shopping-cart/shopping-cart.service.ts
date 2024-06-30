import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ShoppingCart } from './shopping-cart.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ShoppingCartService {
  constructor(
    @InjectRepository(ShoppingCart)
    private shoppingCartRepository: Repository<ShoppingCart>,
  ) {}

  /**
   *  Get items from the user shopping cart
   * @param userId number
   * @returns Promise<ShoppingCart[]>
   */
  public async getShoppingCart(userId: number): Promise<ShoppingCart[]> {
    return this.shoppingCartRepository.find({
      where: {
        userId,
      },
    });
  }

  /**
   *  Attach new item to user shopping cart
   * @param userId number
   * @param productId number
   * @param price number
   * @returns Promise<ShoppingCart>
   */
  public async attach(
    userId: number,
    productId: number,
    price: number,
  ): Promise<ShoppingCart> {
    return this.shoppingCartRepository.create({
      userId,
      price,
      productId,
    });
  }

  /**
   *  Detach item from the user shopping cart
   * @param userId number
   * @returns Promise<ShoppingCart>
   */
  public async detach(
    userId: number,
    productId: number,
  ): Promise<ShoppingCart> {
    const item = await this.shoppingCartRepository.findOneOrFail({
      where: {
        userId,
        productId,
      },
    });

    return this.shoppingCartRepository.remove(item);
  }

  /**
   * Empty user's shopping cart
   * @param userId number
   * @returns Promise<ShoppingCart[]>
   */
  public async empty(userId: number): Promise<ShoppingCart[]> {
    const items = await this.shoppingCartRepository.find({ where: { userId } });

    return this.shoppingCartRepository.remove(items);
  }
}
