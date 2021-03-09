/*
  Controller
  - 응답과 요청을 처리하는 로직
  - 서버 애플리케이션을 위해 특정한 요청을 받아드리는 것
  - 각 컨트롤러는 하나 이상의 라우터를 가짐 (특정 라우터에 붙여 구체적인 요청을 처리)
  - NestJS의 기본 컨트롤러는 class와 decorator 사용 
  - decorator은 요청을 해당 Controller에 연결해 줌
*/

import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}   // 실제 비지니스 로직을 수행할 service 가져옴

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
