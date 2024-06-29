import { Controller, Get } from '@nestjs/common';
import { ProductService } from './product.service';
import { Product } from './product.entity';

@Controller()
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  public all(): Promise<Product[]> {
    return this.productService.getProducts();
  }
}
