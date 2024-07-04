import { Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsNotEmptyObject,
  IsObject,
  IsPositive,
} from 'class-validator';
import { Metadata } from './shopping-cart-metadata.dto';

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

  @ApiProperty()
  @Type(() => Metadata)
  @IsObject()
  @IsNotEmptyObject()
  public readonly metadata: Metadata;
}
