import type { z } from 'zod';
import type { TodoSchema } from '../utils/validators';

export type TodoType = z.infer<typeof TodoSchema>;

export type TodoDataType = Pick<TodoType, 'todo' | 'done'>;

export type EditTodoPayload = {
  id: TodoType['id'];
  updates: Partial<TodoDataType>;
};

export type ApiResponse = TodoType[];



