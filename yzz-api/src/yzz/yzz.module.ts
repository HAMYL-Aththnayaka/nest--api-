import { Module } from '@nestjs/common';
import { YzzController } from './yzz.controller';
import { YzzService } from './yzz.service';

@Module({
  controllers: [YzzController],
  providers: [YzzService]
})
export class YzzModule {}
