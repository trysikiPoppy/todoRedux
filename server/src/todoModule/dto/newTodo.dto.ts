import { z } from 'zod';

export const newTodoSchema = z
  .object({
    todo: z.string(),
    img: z.string().url().optional(),
  })
  .strip();

export type NewTodoDto = z.infer<typeof newTodoSchema>;
