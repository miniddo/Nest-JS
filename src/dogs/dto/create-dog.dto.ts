/*
  DTO
  - 각 계층(**컨트롤러**, 뷰 등) 간의 데이터 교환을 위한 객체
  - 네트워크를 통해 데이터가 어떻게 전송될지 정의한 객체

  - 컨트롤러 단에서 request에 들어오는 데이터의 타입을 지정하는데 사용

  npm i class-validator
  npm i class-transformer
  validationPipe와 DTO를 통해 실시간 코드 유효성을 체크할 수 있다.
  (main.ts 확인)
*/

import { IsString, IsNumber, IsOptional } from 'class-validator';

class CreateDogDTO {
  name : string
  age : number
  gender : string
}

// validator 사용
class CreateCatDTO {
  @IsString()
  readonly name?: string

  @IsNumber()
  readonly age?: number

  @IsString()
  readonly gender?: string

  @IsString({ each: true }) // 배열은 각각의 요소를 확인해야 하므로 { each: true } 붙이기
  readonly friend?: string[]
}

export { CreateDogDTO, CreateCatDTO }