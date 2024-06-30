import { Test, TestingModule } from '@nestjs/testing';
import { ShoppingCartController } from './shopping-cart.controller';
import { ShoppingCartService } from './shopping-cart.service';

describe('ProductController', () => {
  let app: TestingModule;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      controllers: [ShoppingCartController],
      providers: [ShoppingCartService],
    }).compile();
  });

  describe('getHello', () => {
    it('should return "Hello World!"', () => {
      const appController = app.get(ShoppingCartController);
      expect(appController.getHello()).toBe('Hello World!');
    });
  });
});
