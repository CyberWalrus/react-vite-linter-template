import { z } from 'zod';

export const CookiesValuesSchema = z.object({
    'current-theme': z.enum(['dark', 'light']),
    'is-app-theme': z.boolean(),
});
