import { Test, TestingModule } from '@nestjs/testing';
import { MainProductsController } from './main-products.controller';

describe('MainProductsController', () => {
  let controller: MainProductsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MainProductsController],
    }).compile();

    controller = module.get<MainProductsController>(MainProductsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
