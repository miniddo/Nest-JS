/*
  nest g controller dogs
  => /src/dogs/dogs.controller.ts

  API : 두 시스템, 애플리케이션이 상호작용(소통)할 수 있게 하는 프로토콜의 총 집합
  ENDPOINT : API가 서버에서 리소스에 접근할 수 있도록 가능하게 하는 URL

  HTTP 상태 코드
  200 OK : 요청 성공적
  201 Created : 요청 성공적, 새로운 리소스 생성 (일반적으로 POST, PUT)
  400 Bad Request : 잘못된 문법으로 인하여 서버가 요청을 이해할 수 없음 (요청하는 쪽 에러)
  405 Method Not Allowed : 잘못된 Method로 요청을 보냈을 경우 발생
  500 Internet Server Error : 서버가 처리 방법을 모를 때 발생 (응답하는 쪽 에러)
*/

import { Body, Controller, Get, HttpCode, Param, Post, Query, Req } from '@nestjs/common';
import { CreateDogDTO, CreateCatDTO } from './dto/create-dog.dto';
import { UpdateCatDTO } from './dto/update-dog.dto';
import { DogService } from './dogs.service';

import { Request } from 'express';

@Controller('dogs')
export class DogsController {
  constructor(private readonly dogService: DogService) {}   // 의존성 주입

  // Nest에게 HTTP Request들의 Endpoint를 구체적으로 지정
  // localhost:3000/dogs
  @Get()
  getHello(): string {
    return this.dogService.getHello();
  }

  // localhost:3000/dogs/profile
  @Get('profile')
  getProfile(): object {
    return this.dogService.getProfile();
  }

  // Nest는 params, query, body를 직접 꺼내오지 않고 제공되는 데코레이터로 사용
  // params
  // localhost:3000/dogs/뚱이
  @Get('param/:name') 
  getParams(@Param('name') name: string): string {
    return name;
  }

  // localhost:3000/dogs/뚱이/9/여
  @Get('param/:name/:age/:gender')
  getAllParams(@Param('name') name: string, @Param('age') age: number, @Param('gender') gender: string): object {
    return { name, age, gender }
  }

  // query
  // localhost:3000/dogs/query?date=20210309
  @Get('query')
  getQuery(@Query('date') date: string): string {
    return date
  }

  // body
  // localhost:3000/dogs/body
  // body => { "name" : "hyemin", "age" : 26 }
  @Post('body')
  getBody(@Body('name') name: string, @Body('age') age: number): object {
    return { name, age };
  }

  // localhost:3000/dogs/body/all
  // body => { "name" : "hyemin", "age" : 26 }
  @Post('body/all')
  getAllBody(@Body() result: object): object {
    return result;
  }

  // DTO 사용
  // localhost:3000/dogs/dto
  @Get('dto')
  @HttpCode(200)
  getDto(@Body() createDogDTO: CreateDogDTO): object {
    return createDogDTO
  }

  // DTO 사용 - validator
  // localhost:3000/dogs/dto/validator
  @Get('dto/validator')
  @HttpCode(200)
  getValidatorDTO(@Body() createCatDTO: CreateCatDTO): object {
    return createCatDTO
  }

  // DTO 사용 - validator, mapped-types
  // localhost:3000/dogs/dto/type
  @Get('dto/type')
  @HttpCode(200)
  getTypeDTO(@Body() updateCatDTO: UpdateCatDTO): object {
    return updateCatDTO
  }

  // Nest는 Request 객체에 접근하는 방식을 데코레이터로 제공
  // localhost:3000/request
  @Get('request')
  @HttpCode(200)
  getRequest(@Req() request: Request): string {
    console.log('params', request.params);
    console.log('query', request.query);
    console.log('body', request.body);
    console.log({...request.params, ...request.query})
    return this.dogService.getRequest();
  }

}
