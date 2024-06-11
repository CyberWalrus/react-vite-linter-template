import type { z } from 'zod';

import type { CookiesValuesSchema } from './schemas';

export type StringOrLiteral<Literal extends string> = Literal extends CookiesKeys ? CookiesKeys : string;
export type CookiesValues = z.infer<typeof CookiesValuesSchema>;

export type CookiesKeys = keyof CookiesValues;

export type GetCookiesType<GKey> = GKey extends keyof CookiesValues ? CookiesValues[GKey] : unknown;
