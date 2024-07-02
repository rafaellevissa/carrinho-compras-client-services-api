import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { EntityNotFoundError, Repository } from 'typeorm';
import { ProductService } from './product.service';
import { Product } from './product.entity';
import { PaginationDto } from 'src/common/dto/pagination.dto';

const mockProductRepository = () => ({
  find: jest.fn(),
  findOneOrFail: jest.fn(),
});

type MockRepository<T = any> = Partial<Record<keyof Repository<T>, jest.Mock>>;

describe('ProductService', () => {
  let service: ProductService;
  let repository: MockRepository<Product>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ProductService,
        {
          provide: getRepositoryToken(Product),
          useValue: mockProductRepository(),
        },
      ],
    }).compile();

    service = module.get<ProductService>(ProductService);
    repository = module.get<MockRepository<Product>>(
      getRepositoryToken(Product),
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('getProducts', () => {
    it('should return a list of products with pagination', async () => {
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
      repository.find.mockResolvedValue(result);

      const paginatedResult = await service.getProducts(paginationDto);

      expect(paginatedResult).toEqual({
        page: 1,
        perPage: 10,
        data: result,
      });
      expect(repository.find).toHaveBeenCalledWith({
        take: 10,
        skip: 0,
      });
    });
  });

  describe('getProduct', () => {
    it('should throw an error if product not found', async () => {
      const productId = 999;
      repository.findOneOrFail.mockRejectedValue(
        new EntityNotFoundError(Product, { id: productId }),
      );

      try {
        await service.getProduct(productId);
        fail('Expected findOneOrFail to throw EntityNotFoundError');
      } catch (error) {
        expect(error).toBeInstanceOf(EntityNotFoundError);
      }
    });

    it('should return a product by id', async () => {
      const product = {
        id: 1,
        name: 'Notebook Acer Nitro V RTX 3050 i5 8GB',
        description:
          'Placa de video RTX 3050 com 6GB, Tela 15.6” Full HD - 144 Hertz, Capacidade 512GB SSD, Processador Intel Core i5 13ª geração, Memória RAM 8GB ANV15-51-57WS',
        price: 2508,
        thumbnail: '',
      } as Product;
      repository.findOneOrFail.mockResolvedValue(product);

      const result = await service.getProduct(1);
      expect(result).toEqual(product);
      expect(repository.findOneOrFail).toHaveBeenCalledWith({
        where: { id: 1 },
      });
    });
  });
});
