import { Injectable } from '@nestjs/common';

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