import { ApiProperty } from '@nestjs/swagger';

class TodoDtoResponse {
  @ApiProperty()
  id: number;

  @ApiProperty()
  todo: string;

  @ApiProperty()
  done: boolean;

  @ApiProperty()
  img: string;
}

export const getResponseSwagger = (isArray: boolean) => ({
  description: 'Get all todos',
  type: TodoDtoResponse,
  isArray,
});
