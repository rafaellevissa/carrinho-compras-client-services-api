import { Controller, Get, Query } from '@nestjs/common';
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
}
