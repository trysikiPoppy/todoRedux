import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  Param,
  Patch,
  Post,
  UsePipes,
} from '@nestjs/common';
import { ApiOkResponse } from '@nestjs/swagger';
import { ZodValidationPipe } from 'src/pipes/zodvalidation.pipe';
import { IdDto, idSchema } from './dto/id.dto';
import { NewTodoDto, newTodoSchema } from './dto/newTodo.dto';
import { getResponseSwagger } from './dto/response.swagger';
import { TodoService } from './todo.service';

@Controller('todos')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Get()
  @ApiOkResponse(getResponseSwagger(true))
  getTodos() {
    try {
      return this.todoService.getTodos();
    } catch (error) {
      if (error instanceof Error) {
        throw new HttpException(error.message, 500);
      }
    }
  }

  @Get(':id')
  @ApiOkResponse(getResponseSwagger(false))
  @UsePipes(new ZodValidationPipe(idSchema))
  getTodoById(@Param() param: IdDto) {
    try {
      return this.todoService.getTodoById(param.id);
    } catch (error) {
      if (error instanceof Error) {
        throw new HttpException(error.message, 500);
      }
    }
  }

  @Post()
  @ApiOkResponse(getResponseSwagger(false))
  @UsePipes(new ZodValidationPipe(newTodoSchema))
  createTodo(@Body() data: NewTodoDto) {
    try {
      return this.todoService.createTodo(data);
    } catch (error) {
      if (error instanceof Error) {
        throw new HttpException(error.message, 500);
      }
    }
  }

  @Delete(':id')
  @UsePipes(new ZodValidationPipe(idSchema))
  deleteTodoById(@Param() param: IdDto) {
    try {
      const num = this.todoService.deleteTodoById(param.id);
      if (!num) {
        throw new HttpException('Not found', 404);
      }
      return { message: 'Deleted' };
    } catch (error) {
      if (error instanceof Error) {
        throw new HttpException(error.message, 500);
      }
    }
  }

  @Patch(':id')
  @ApiOkResponse(getResponseSwagger(false))
  updateTodoById(
    @Param(new ZodValidationPipe(idSchema)) { id }: IdDto,
    @Body(new ZodValidationPipe(newTodoSchema)) { todo, img }: NewTodoDto,
  ) {
    try {
      return this.todoService.updateTodoById(id, todo, img);
    } catch (error) {
      if (error instanceof Error) {
        throw new HttpException(error.message, 500);
      }
    }
  }

  @Patch(':id/toggle')
  @UsePipes(new ZodValidationPipe(idSchema))
  toggleDone(@Param() param: IdDto) {
    try {
      return this.todoService.toggleDone(param.id);
    } catch (error) {
      if (error instanceof Error) {
        throw new HttpException(error.message, 500);
      }
    }
  }
}
