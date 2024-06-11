import { z } from 'zod';

import { stringToBooleanOptionalSchema } from './string-to-boolean-optional';

export const stringToBooleanSchema = stringToBooleanOptionalSchema.pipe(z.boolean());
