import { Type } from 'class-transformer';
import { IsNotEmpty, IsPositive } from 'class-validator';

export class ShoppingCartDto {
  @Type(() => Number)
  @IsPositive()
  @IsNotEmpty()
  public readonly price: number;

  @Type(() => Number)
  @IsNotEmpty()
  @IsPositive()
  public readonly productId: number;
}

