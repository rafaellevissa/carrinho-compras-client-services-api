import { Test, TestingModule } from '@nestjs/testing';
import { ShoppingCartService } from './shopping-cart.service';
import { Repository } from 'typeorm';
import { ShoppingCart } from './shopping-cart.entity';
import { getRepositoryToken } from '@nestjs/typeorm';

describe('ShoppingCartService', () => {
  let service: ShoppingCartService;
  let repository: Repository<ShoppingCart>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ShoppingCartService,
        {
          provide: getRepositoryToken(ShoppingCart),
          useValue: {
            find: jest.fn(),
            findOneOrFail: jest.fn(),
            create: jest.fn(),
            save: jest.fn(),
            remove: jest.fn(),
          },
        },
      ],
    }).compile();

    service = module.get<ShoppingCartService>(ShoppingCartService);
    repository = module.get<Repository<ShoppingCart>>(
      getRepositoryToken(ShoppingCart),
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('getShoppingCart', () => {
    it('should return shopping cart items for a user', async () => {
      const userId = 1;
      const mockShoppingCartItems = [
        { id: 1, userId, productId: 1, price: 10, createdAt: new Date() },
        { id: 2, userId, productId: 2, price: 20, createdAt: new Date() },
      ] as ShoppingCart[];

      jest.spyOn(repository, 'find').mockResolvedValue(mockShoppingCartItems);

      const result = await service.getShoppingCart(userId);

      expect(result).toBe(mockShoppingCartItems);
      expect(repository.find).toHaveBeenCalledWith({ where: { userId } });
    });
  });

  describe('attach', () => {
    it('should attach a new item to the shopping cart', async () => {
      const userId = 1;
      const productId = 1;
      const price = 10;
      const metadata = {
        id: 1,
        name: 'POLAR Pacer',
        description: 'Relógio Esportivo com GPS',
        price: 4558.87,
        thumbnail:
          'https://yacare-products-image.s3.sa-east-1.amazonaws.com/new-site/POLAR+PACER/Polar+Pacer+Thumb+2.png',
        images: [
          'https://yacare-products-image.s3.sa-east-1.amazonaws.com/new-site/POLAR+PACER/Polar+Pacer+Thumb+2.png',
          'https://yacare-products-image.s3.sa-east-1.amazonaws.com/new-site/POLAR+PACER/Polar+Pacer+2.jpg',
          'https://yacare-products-image.s3.sa-east-1.amazonaws.com/new-site/POLAR+PACER/Polar+Pacer+3.jpg',
        ],
      };
      const mockShoppingCartItem = {
        id: 1,
        userId,
        productId,
        price,
        metadata,
        createdAt: new Date(),
      } as ShoppingCart;

      jest
        .spyOn(repository, 'save')
        .mockResolvedValue(mockShoppingCartItem as never);

      const result = await service.attach(userId, productId, price, metadata);

      expect(result).toBe(mockShoppingCartItem);
      expect(repository.save).toHaveBeenCalledWith({
        userId,
        productId,
        price,
        metadata,
      });
    });
  });

  describe('detach', () => {
    it('should detach an item from the shopping cart', async () => {
      const userId = 1;
      const productId = 1;
      const metadata = {
        id: 1,
        name: 'POLAR Pacer',
        description: 'Relógio Esportivo com GPS',
        price: 4558.87,
        thumbnail:
          'https://yacare-products-image.s3.sa-east-1.amazonaws.com/new-site/POLAR+PACER/Polar+Pacer+Thumb+2.png',
        images: [
          'https://yacare-products-image.s3.sa-east-1.amazonaws.com/new-site/POLAR+PACER/Polar+Pacer+Thumb+2.png',
          'https://yacare-products-image.s3.sa-east-1.amazonaws.com/new-site/POLAR+PACER/Polar+Pacer+2.jpg',
          'https://yacare-products-image.s3.sa-east-1.amazonaws.com/new-site/POLAR+PACER/Polar+Pacer+3.jpg',
        ],
      };
      const mockShoppingCartItem = [
        {
          id: 1,
          userId,
          productId,
          price: 10,
          metadata,
        },
      ] as ShoppingCart[];

      jest.spyOn(repository, 'find').mockResolvedValue(mockShoppingCartItem);
      jest
        .spyOn(repository, 'remove')
        .mockResolvedValue(mockShoppingCartItem as any);

      const result = await service.detach(userId, productId);

      expect(result).toBe(mockShoppingCartItem);
      expect(repository.find).toHaveBeenCalledWith({
        where: { userId, productId },
      });
      expect(repository.remove).toHaveBeenCalledWith(mockShoppingCartItem);
    });
  });

  describe('empty', () => {
    it('should empty the shopping cart for a user', async () => {
      const userId = 1;
      const mockShoppingCartItems = [
        { id: 1, userId, productId: 1, price: 10, createdAt: new Date() },
        { id: 2, userId, productId: 2, price: 20, createdAt: new Date() },
      ] as ShoppingCart[];

      jest.spyOn(repository, 'find').mockResolvedValue(mockShoppingCartItems);
      jest
        .spyOn(repository, 'remove')
        .mockResolvedValue(mockShoppingCartItems as any);

      const result = await service.empty(userId);

      expect(result).toBe(mockShoppingCartItems);
      expect(repository.find).toHaveBeenCalledWith({ where: { userId } });
      expect(repository.remove).toHaveBeenCalledWith(mockShoppingCartItems);
    });
  });
});
