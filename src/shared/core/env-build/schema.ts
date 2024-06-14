import { z } from 'zod';

import { stringToBooleanSchema } from '$shared/model/schemas';

const browserNameSchema = z.union([z.literal('chromium'), z.literal('firefox'), z.literal('webkit')]);

const browserViewportSchema = z.union([
    z.literal('mobile360'),
    z.literal('mobile450'),
    z.literal('mobile700'),
    z.literal('desktop720'),
    z.literal('desktop1080'),
    z.literal('desktop1440'),
]);

const TestTypeSchema = z.union([z.literal('unit'), z.literal('unit-isolate'), z.literal('screenshot')]);

export type BrowserName = z.infer<typeof browserNameSchema>;
export type BrowserViewport = z.infer<typeof browserViewportSchema>;

export const EnvBuildSchema = z.object({
    E2E_BROWSER_NAME: browserNameSchema,
    E2E_BROWSER_VIEWPORT: browserViewportSchema,
    E2E_PRODUCTION: stringToBooleanSchema,
    E2E_SERVER_URL: z.string().url(),
    NODE_ENV: z.string().default('test'),
    VITE_BASE_PATH: z.string(),
    VITE_BASE_URL: z.string(),
    VITE_TEST_SERVER_BUILD: stringToBooleanSchema,
    VITEST_TEST_TYPE: TestTypeSchema,
});
