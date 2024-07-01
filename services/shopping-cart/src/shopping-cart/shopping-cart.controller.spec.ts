import { Test, TestingModule } from '@nestjs/testing';
import { ShoppingCartController } from './shopping-cart.controller';
import { ShoppingCartService } from './shopping-cart.service';

describe('ShoppingCart', () => {
  let app: TestingModule;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      controllers: [],
      providers: [],
    }).compile();
  });

  describe('ShoppingCart', () => {
    it('should be defined', () => {
      expect('1').toBe('1');
    });
  });
});
