import { z } from 'zod';

import { stringToBooleanSchema } from '$shared/model/schemas';

export const EnvClientSchema = z.object({
    NODE_ENV: z.string(),
    VITE_BASE_PATH: z.string(),
    VITE_BASE_URL: z.string(),
    VITE_TEST_SERVER_BUILD: stringToBooleanSchema,
});
