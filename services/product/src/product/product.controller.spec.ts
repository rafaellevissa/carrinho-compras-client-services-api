import { Test, TestingModule } from '@nestjs/testing';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';
import { PaginationDto } from 'src/common/dto/pagination.dto';
import { Product } from './product.entity';
import { NotFoundException } from '@nestjs/common';

describe('ProductController', () => {
  let productController: ProductController;
  let productService: ProductService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProductController],
      providers: [
        {
          provide: ProductService,
          useValue: {
            getProducts: jest.fn(),
            getProduct: jest.fn(),
          },
        },
      ],
    }).compile();

    productController = module.get<ProductController>(ProductController);
    productService = module.get<ProductService>(ProductService);
  });

  it('should be defined', () => {
    expect(productController).toBeDefined();
  });

  describe('all', () => {
    it('should return an array of products', async () => {
      const paginationDto: PaginationDto = { page: 1, take: 10 };
      const result = {
        ...paginationDto,
        data: [
          {
            id: 1,
            name: 'Notebook Acer Nitro V RTX 3050 i5 8GB',
            description:
              'Placa de video RTX 3050 com 6GB, Tela 15.6” Full HD - 144 Hertz, Capacidade 512GB SSD, Processador Intel Core i5 13ª geração, Memória RAM 8GB ANV15-51-57WS',
            price: 2508,
            thumbnail: '',
          },
        ],
      } as Paginated<Product[]>;

      jest.spyOn(productService, 'getProducts').mockResolvedValue(result);

      expect(await productController.all(paginationDto)).toBe(result);
    });

    it('should return an array with empty products', async () => {
      const paginationDto: PaginationDto = { page: 1, take: 10 };
      const result = {
        ...paginationDto,
        data: [],
      } as Paginated<Product[]>;

      jest.spyOn(productService, 'getProducts').mockResolvedValue(result);

      expect(await productController.all(paginationDto)).toBe(result);
    });
  });

  describe('find', () => {
    it('should return a single product', async () => {
      const result = {
        id: 1,
        name: 'Notebook Acer Nitro V RTX 3050 i5 8GB',
        description:
          'Placa de video RTX 3050 com 6GB, Tela 15.6” Full HD - 144 Hertz, Capacidade 512GB SSD, Processador Intel Core i5 13ª geração, Memória RAM 8GB ANV15-51-57WS',
        price: 2508,
        thumbnail: '',
      } as Product;
      jest.spyOn(productService, 'getProduct').mockResolvedValue(result);

      expect(await productController.find(1)).toBe(result);
    });

    it('should throw NotFoundException if product is not found', async () => {
      jest.spyOn(productService, 'getProduct').mockResolvedValue(null);

      try {
        await productController.find(999);
      } catch (e) {
        expect(e).toBeInstanceOf(NotFoundException);
      }
    });
  });
});
