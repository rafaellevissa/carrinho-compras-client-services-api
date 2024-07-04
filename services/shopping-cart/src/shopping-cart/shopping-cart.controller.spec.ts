import { Test, TestingModule } from '@nestjs/testing';
import { ShoppingCartController } from './shopping-cart.controller';
import { ShoppingCartService } from './shopping-cart.service';
import { ShoppingCart } from './shopping-cart.entity';
import { ShoppingCartDto } from './dto/shopping-cart.dto';

describe('ShoppingCartController', () => {
  let controller: ShoppingCartController;
  let shoppingCartService: ShoppingCartService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ShoppingCartController],
      providers: [
        {
          provide: ShoppingCartService,
          useValue: {
            getShoppingCart: jest.fn(),
            attach: jest.fn(),
            detach: jest.fn(),
            empty: jest.fn(),
          },
        },
      ],
    }).compile();

    controller = module.get<ShoppingCartController>(ShoppingCartController);
    shoppingCartService = module.get<ShoppingCartService>(ShoppingCartService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('all', () => {
    it('should return an empty array of shopping cart items', async () => {
      const result = [];

      jest
        .spyOn(shoppingCartService, 'getShoppingCart')
        .mockResolvedValue(result);

      expect(await controller.all()).toBe(result);
    });

    it('should return an array of shopping cart items', async () => {
      const mockShoppingCartItems = [
        { id: 1, productId: 1, userId: 1, price: 10, createdAt: new Date() },
        { id: 2, productId: 2, userId: 1, price: 20, createdAt: new Date() },
      ] as ShoppingCart[];

      jest
        .spyOn(shoppingCartService, 'getShoppingCart')
        .mockResolvedValue(mockShoppingCartItems);

      const result = await controller.all();

      expect(result).toBe(mockShoppingCartItems);
      expect(shoppingCartService.getShoppingCart).toHaveBeenCalledWith(1);
    });
  });

  describe('create', () => {
    it('should create a new shopping cart item', async () => {
      const shoppingCartDto: ShoppingCartDto = {
        productId: 1,
        price: 10,
        metadata: {
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
        },
      };
      const mockShoppingCartItem = {
        id: 1,
        productId: 1,
        userId: 1,
        price: 10,
        createdAt: new Date(),
      } as ShoppingCart;

      jest
        .spyOn(shoppingCartService, 'attach')
        .mockResolvedValue(mockShoppingCartItem);

      const result = await controller.create(shoppingCartDto);

      expect(result).toBe(mockShoppingCartItem);
      expect(shoppingCartService.attach).toHaveBeenCalledWith(
        1,
        shoppingCartDto.productId,
        shoppingCartDto.price,
        shoppingCartDto.metadata,
      );
    });
  });

  describe('remove', () => {
    it('should remove a shopping cart item by productId', async () => {
      const mockShoppingCartItem = [
        {
          id: 1,
          productId: 1,
          userId: 1,
          price: 10,
        },
      ] as ShoppingCart[];

      jest
        .spyOn(shoppingCartService, 'detach')
        .mockResolvedValue(mockShoppingCartItem);

      const result = await controller.remove(1);

      expect(result).toBe(mockShoppingCartItem);
      expect(shoppingCartService.detach).toHaveBeenCalledWith(1, 1);
    });
  });

  describe('removeAll', () => {
    it('should remove all shopping cart items for the user', async () => {
      const mockShoppingCartItems = [
        { id: 1, productId: 1, userId: 1, price: 10, createdAt: new Date() },
        { id: 2, productId: 2, userId: 1, price: 20, createdAt: new Date() },
      ] as ShoppingCart[];

      jest
        .spyOn(shoppingCartService, 'empty')
        .mockResolvedValue(mockShoppingCartItems);

      const result = await controller.removeAll();

      expect(result).toBe(mockShoppingCartItems);
      expect(shoppingCartService.empty).toHaveBeenCalledWith(1);
    });
  });
});
