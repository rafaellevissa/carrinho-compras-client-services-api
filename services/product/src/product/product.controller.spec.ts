import { Test, TestingModule } from '@nestjs/testing';

describe('ProductController', () => {
  let app: TestingModule;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      controllers: [],
      providers: [],
    }).compile();
  });

  describe('ProductController', () => {
    it('should be defined', () => {
      expect('1').toBe('1');
    });
  });
});
