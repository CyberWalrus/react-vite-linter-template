import { EnvBuildSchema } from './schema';

export * from './schema';

export const envBuild = EnvBuildSchema.parse(process.env);
