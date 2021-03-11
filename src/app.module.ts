import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DogsController } from './dogs/dogs.controller';
import { DogService } from './dogs/dogs.service';

@Module({
  controllers: [AppController, DogsController],
  providers: [AppService, DogService],
})
export class AppModule {}
