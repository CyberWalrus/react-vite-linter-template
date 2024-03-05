import { z } from 'zod';

export const StringBooleanSchema = ['true', 'false'] as const;

export type StringBoolean = (typeof StringBooleanSchema)[number];

export const StringToBooleanSchema = z
    .string()
    .toLowerCase()
    .pipe(z.enum(StringBooleanSchema))
    .transform((x) => x === 'true')
    .pipe(z.boolean());
