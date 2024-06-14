import type { z } from 'zod';

import type { LocalStorageValuesSchema } from './schemas';

export type StringOrLiteral<Literal extends string> = Literal extends LocalStorageKeys ? LocalStorageKeys : string;
export type LocalStorageValues = z.infer<typeof LocalStorageValuesSchema>;

export type LocalStorageKeys = keyof LocalStorageValues;

export type GetLocalStorageType<GKey> = GKey extends keyof LocalStorageValues ? LocalStorageValues[GKey] : unknown;
