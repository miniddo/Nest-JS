/*
  Provider
  - NestJS 구조 안에서 작동하는 기능을 제공하는 핵심적인 부분
  - @Injectable() 데코레이터를 통해 주입할 클래스를 지정하고 해당 클래스 안에서 메소드를 통해 
    비지니스 로직을 작성하고 Provider을 통해 각 컨트롤러나 모듈에서 호출할 수 있다.
*/

import { Injectable } from '@nestjs/common';

// DogService는 Provider로 사용될 클래스
@Injectable()
export class DogService {

  getHello(): string {
    return 'Hello Dog!'
  }

  getProfile(): object {
    return {
      name : '뚱이',
      age : '9개월',
      gender : '여'
    }
  }

  getRequest(): string {
    return 'This action returns all requests';
  }
}