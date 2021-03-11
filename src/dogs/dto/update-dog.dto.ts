/*
  npm i mapped-types

  CreateCatDTO의 경우, 모든 요소들이 필수이다.
  하지만 UpdateCatDTO은 PartialType을 통해 선택적으로 사용할 수 있다.
*/

import { PartialType } from '@nestjs/mapped-types';
import { CreateCatDTO } from './create-dog.dto';

class UpdateCatDTO extends PartialType(CreateCatDTO) {}

export { UpdateCatDTO }
