import type { AxiosInstance, AxiosResponse } from 'axios';
import apiInstance from './apiInstance';
import type { TodoType, TodoDataType, EditTodoPayload } from '../types/TodoTypes';
import { TodoSchema, TodosSchema } from '../utils/validators';

class TodoService {
  constructor(private readonly api: AxiosInstance) {}

  async getTodos(): Promise<TodoType[]> {
    const response: AxiosResponse<TodoType[]> = await this.api.get('/todos');
    const { data } = response;
    return TodosSchema.parse(data);
  }

  async addTodo(todo: TodoDataType): Promise<TodoType> {
    const response: AxiosResponse<TodoType> = await this.api.post('/todos', todo);
    const { data } = response;
    return TodoSchema.parse(data);
  }

  async deleteTodo(id: number): Promise<AxiosResponse> {
    return this.api.delete(`/todos/${id}`);
  }

  async editTodo({ id, updates }: EditTodoPayload): Promise<TodoType> {
    const response: AxiosResponse<TodoType> = await this.api.patch(`/todos/${id}`, updates);
    const { data } = response;
    return TodoSchema.parse(data);
  }

  async toggleTodoState(id: number): Promise<TodoType> {
    const response: AxiosResponse<TodoType> = await this.api.patch(`/todos/${id}/toggle`);
    const { data } = response;
    return TodoSchema.parse(data);
  }

  async updateTodo(todo: TodoType): Promise<TodoType> {
    const response: AxiosResponse<TodoType> = await this.api.patch(`/todos/${todo.id}`, todo);
    const { data } = response;
    return TodoSchema.parse(data);
  }
}

export default new TodoService(apiInstance);
