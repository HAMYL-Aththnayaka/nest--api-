import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello \nThis is Yzz-Api at your service!';
  }
}
