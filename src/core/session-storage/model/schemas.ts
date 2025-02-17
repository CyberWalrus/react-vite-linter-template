import { z } from 'zod';

export const SessionStorageValuesSchema = z.object({
    test: z.boolean(),
});
