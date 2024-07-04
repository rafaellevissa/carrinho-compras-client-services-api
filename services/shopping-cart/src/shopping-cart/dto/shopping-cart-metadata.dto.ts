import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsArray,
  IsDefined,
  IsNotEmpty,
  IsNumber,
  IsPositive,
  IsString,
} from 'class-validator';

export class Metadata {
  @ApiProperty()
  @Type(() => Number)
  @IsPositive()
  @IsDefined()
  public readonly id: number;

  @ApiProperty()
  @Type(() => String)
  @IsString()
  @IsNotEmpty()
  public readonly name: string;

  @ApiProperty()
  @Type(() => String)
  @IsString()
  @IsNotEmpty()
  public readonly description: string;

  @ApiProperty()
  @Type(() => Number)
  @IsNumber()
  @IsDefined()
  public readonly price: number;

  @ApiProperty()
  @Type(() => String)
  @IsString()
  @IsNotEmpty()
  public readonly thumbnail: string;

  @ApiProperty()
  @Type(() => String)
  @IsArray()
  @IsDefined()
  public readonly images: string[];
}
