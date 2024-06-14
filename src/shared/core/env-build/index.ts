/* eslint-disable import/no-extraneous-dependencies */
import dotenv from 'dotenv';

import { EnvBuildSchema } from './schema';

export * from './schema';

dotenv.config();

export const envBuild = EnvBuildSchema.parse(process.env);
