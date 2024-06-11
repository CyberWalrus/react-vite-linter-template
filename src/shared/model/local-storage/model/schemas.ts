import { z } from 'zod';

export const LocalStorageValuesSchema = z.object({
    'current-theme': z.enum(['dark', 'light']),
    'is-app-theme': z.boolean(),
});
