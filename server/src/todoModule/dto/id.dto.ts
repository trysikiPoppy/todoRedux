import { z } from 'zod';

export const idSchema = z.object({
  id: z.string().transform((value) => {
    const parsedValue = Number(value);
    if (Number.isNaN(parsedValue)) {
      throw new Error('Id must be a number');
    }
    return parsedValue;
  }),
});

export type IdDto = z.infer<typeof idSchema>;
