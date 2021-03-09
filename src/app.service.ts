/*
  Service
  - 실제 function을 갖는 비지니스 로직 정의
*/

import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
