import cookie from 'js-cookie';

import { logError } from '$shared/core/logger';

import { CookiesValuesSchema } from '../model/schemas';
import type { CookiesKeys, GetCookiesType, StringOrLiteral } from '../model/types';

export const readCookie = <
    GKeyType extends string = CookiesKeys,
    GKey extends StringOrLiteral<GKeyType> = CookiesKeys,
    GValue = GetCookiesType<GKey>,
>({
    key,
}: {
    key: GKey;
}): GValue | null => {
    const result = cookie.get(key);

    if (!result) {
        return null;
    }

    if (!Object.prototype.hasOwnProperty.call(CookiesValuesSchema.shape, key)) {
        try {
            return JSON.parse(result) as GValue;
        } catch (error: unknown) {
            return result as GValue;
        }
    }

    const keySchema = CookiesValuesSchema.shape[key as CookiesKeys];

    let value: unknown;

    try {
        value = JSON.parse(result);
    } catch (e) {
        value = result;
    }

    try {
        return keySchema.parse(value) as GValue;
    } catch (e: unknown) {
        if (e instanceof Error) {
            logError(`Error validate for cookie "${String(key)}"`, e.message);
        }

        return null;
    }
};
