import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { YzzModule } from './yzz/yzz.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [YzzModule, UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
