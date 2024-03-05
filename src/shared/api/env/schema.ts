import { z } from 'zod';

import { StringToBooleanSchema } from '$shared/lib/schemas';

const BrowserNameSchema = z.union([z.literal('chromium'), z.literal('firefox'), z.literal('webkit')]);

const BrowserViewportSchema = z.union([
    z.literal('mobile360'),
    z.literal('mobile450'),
    z.literal('mobile700'),
    z.literal('desktop720'),
    z.literal('desktop1080'),
    z.literal('desktop1440'),
]);

export const EnvSchema = z.object({
    E2E_BROWSER_NAME: BrowserNameSchema,
    E2E_BROWSER_VIEWPORT: BrowserViewportSchema,
    E2E_SERVER_URL: z.string().url(),
    VITE_BASE_PATH: z.string().url(),
    VITE_BASE_URL: z.string().url(),
    VITE_TEST_SERVER_BUILD: StringToBooleanSchema,
});
