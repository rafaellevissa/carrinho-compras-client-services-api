import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './product.entity';
import { Repository } from 'typeorm';
import { PaginationDto } from 'src/common/dto/pagination.dto';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private productRepository: Repository<Product>,
  ) {}

  public async getProducts({
    take,
    page,
  }: PaginationDto): Promise<Paginated<Product[]>> {
    const products = await this.productRepository.find({
      take,
      skip: (page - 1) * take,
    });

    return {
      page,
      perPage: take,
      data: products,
    };
  }
}
