import { Test, TestingModule } from '@nestjs/testing';
import { YzzController } from './yzz.controller';

describe('YzzController', () => {
  let controller: YzzController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [YzzController],
    }).compile();

    controller = module.get<YzzController>(YzzController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
