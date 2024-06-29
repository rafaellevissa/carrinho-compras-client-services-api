import { Controller, Get, Param, ParseIntPipe, Query } from '@nestjs/common';
import { ProductService } from './product.service';
import { Product } from './product.entity';
import { PaginationDto } from 'src/common/dto/pagination.dto';

@Controller()
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  public all(@Query() query: PaginationDto): Promise<Paginated<Product[]>> {
    return this.productService.getProducts(query);
  }

  @Get('/:id')
  public find(@Param('id', ParseIntPipe) id: number): Promise<Product> {
    return this.productService.getProduct(id);
  }
}
