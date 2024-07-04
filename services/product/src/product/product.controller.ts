import { Controller, Get, Param, ParseIntPipe, Query } from '@nestjs/common';
import { ProductService } from './product.service';
import { Product } from './product.entity';
import { PaginationDto } from 'src/common/dto/pagination.dto';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('product')
@Controller()
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @ApiOkResponse({ description: 'List all products' })
  @Get()
  public all(@Query() query: PaginationDto): Promise<Paginated<Product[]>> {
    return this.productService.getProducts(query);
  }

  @ApiOkResponse({
    description: 'Find a product by id',
    type: Product,
  })
  @Get(':id')
  public find(@Param('id', ParseIntPipe) id: number): Promise<Product> {
    return this.productService.getProduct(id);
  }
}
