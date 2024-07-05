import { Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsPositive, IsString } from 'class-validator';

export class OrderDto {
  @ApiProperty()
  @Type(() => Number)
  @IsPositive()
  @IsNotEmpty()
  public readonly productId: number;

  @ApiProperty()
  @Type(() => String)
  @IsNotEmpty()
  @IsString()
  public readonly productName: string;

  @ApiProperty()
  @Type(() => Number)
  @IsPositive()
  @IsNotEmpty()
  public readonly quantity: number;
}
