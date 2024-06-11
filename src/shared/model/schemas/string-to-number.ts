import { z } from 'zod';

import { stringToNumberOptionalSchema } from './string-to-number-optional';

export const stringToNumberSchema = stringToNumberOptionalSchema.pipe(z.number());
