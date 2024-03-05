import { EnvClientSchema } from './schema';

export * from './schema';

export const envClient = EnvClientSchema.parse(process.env);
