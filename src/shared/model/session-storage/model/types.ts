import type { z } from 'zod';

import type { SessionStorageValuesSchema } from './schemas';

export type StringOrLiteral<Literal extends string> = Literal extends SessionStorageKeys ? SessionStorageKeys : string;
export type SessionStorageValues = z.infer<typeof SessionStorageValuesSchema>;

export type SessionStorageKeys = keyof SessionStorageValues;

export type GetSessionStorageType<GKey> = GKey extends keyof SessionStorageValues
    ? SessionStorageValues[GKey]
    : unknown;
