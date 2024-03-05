// eslint-disable-next-line import/no-extraneous-dependencies
import dotenv from 'dotenv';

import { EnvSchema } from './schema';

dotenv.config();
export const env = EnvSchema.safeParse(process.env);
