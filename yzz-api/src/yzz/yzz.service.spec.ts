import { Test, TestingModule } from '@nestjs/testing';
import { YzzService } from './yzz.service';

describe('YzzService', () => {
  let service: YzzService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [YzzService],
    }).compile();

    service = module.get<YzzService>(YzzService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
