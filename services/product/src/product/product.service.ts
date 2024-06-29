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

  /**
   *  Get a list of products
   * @param pagination PaginationDto
   * @returns Promise<Paginated<Product[]>>
   */
  public async getProducts({
    take = 10,
    page = 1,
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

  /**
   * Get product by id
   * @param id number
   * @returns Promise<Product>
   */
  public async getProduct(id: number): Promise<Product> {
    return this.productRepository.findOneOrFail({ where: { id } });
  }
}
