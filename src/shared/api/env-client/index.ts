import { EnvClientSchema } from './schema';

export * from './schema';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
const env = { NODE_ENV, VITE_BASE_PATH, VITE_BASE_URL, VITE_TEST_SERVER_BUILD };

export const envClient = EnvClientSchema.parse(env);
