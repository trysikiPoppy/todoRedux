import { z } from 'zod';

// eslint-disable-next-line import/prefer-default-export
export const TodoSchema = z.object({
  id: z.number(),
  todo: z.string(),
  done: z.boolean(),
  img: z.string(),
  createdAt: z.string()
});

export const TodosSchema = z.array(TodoSchema);
