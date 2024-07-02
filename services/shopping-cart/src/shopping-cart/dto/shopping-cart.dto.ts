import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsNotEmpty, IsPositive } from 'class-validator';

export class ShoppingCartDto {
  @ApiProperty()
  @Type(() => Number)
  @IsPositive()
  @IsNotEmpty()
  public readonly price: number;

  @ApiProperty()
  @Type(() => Number)
  @IsNotEmpty()
  @IsPositive()
  public readonly productId: number;
}
