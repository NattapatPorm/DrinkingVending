import { Test, TestingModule } from '@nestjs/testing';
import { MainProductsService } from './main-products.service';

describe('MainProductsService', () => {
  let service: MainProductsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MainProductsService],
    }).compile();

    service = module.get<MainProductsService>(MainProductsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
