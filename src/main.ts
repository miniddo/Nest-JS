import { ValidationPipe } from '@nestjs/common'
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // 전역 범위 파이프
  // 백엔드의 전역에서 유효성 검사가 이뤄지도록 전역 범위 파이프를 설정한다.
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,  // validation을 위한 decorator가 붙어있지 않은 속성들은 제거
      forbidNonWhitelisted : true,  // whitelist 설정을 켜서 걸러질 속성이 있다면 아예 요청 자체를 막도록 (400 에러)
      transform: true // 요청에서 넘어온 자료들의 형 변환
    })
  )

  await app.listen(3000);
}
bootstrap();
