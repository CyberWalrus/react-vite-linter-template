import { z } from 'zod';

export const EnvClientSchema = z.object({
    NODE_ENV: z.string(),
    VITE_BASE_PATH: z.string(),
    VITE_BASE_URL: z.string(),
});
