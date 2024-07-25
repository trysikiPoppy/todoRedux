import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Todo } from './model/todo.model';
import { NewTodoDto } from './dto/newTodo.dto';

@Injectable()
export class TodoService {
  constructor(@InjectModel(Todo) private readonly todoModel: typeof Todo) {}

  getTodos() {
    return this.todoModel.findAll();
  }

  getTodoById(id: number) {
    return this.todoModel.findByPk(id);
  }

  createTodo({ todo, img }: NewTodoDto) {
    return this.todoModel.create({
      todo,
      done: false,
      img,
    });
  }

  deleteTodoById(id: number) {
    return this.todoModel.destroy({
      where: { id },
    });
  }

  async updateTodoById(id: number, todo: string, img?: string, done?: boolean) {
    const [, affectedRows] = await this.todoModel.update(
      { todo, img, done },
      { where: { id }, returning: true },
    );
    return affectedRows[0]; // Возвращаем обновленный todo
  }

  async toggleDone(id: number) {
    const todo = await this.todoModel.findByPk(id);
    if (todo) {
      todo.done = !todo.done;
      await todo.save();
      return todo;
    }
    return null;
  }
}
