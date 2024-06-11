import type { CookieAttributes } from 'js-cookie';
import cookie from 'js-cookie';

import { logError } from '$shared/lib/logger';

import { CookiesValuesSchema } from '../model/schemas';
import type { CookiesKeys, GetCookiesType, StringOrLiteral } from '../model/types';

export const writeCookie = <
    GKeyType extends string = CookiesKeys,
    GKey extends StringOrLiteral<GKeyType> = CookiesKeys,
    GValueType = GetCookiesType<GKey>,
    GValue extends GValueType = GValueType,
>({
    key,
    value,
    options,
}: {
    key: GKey;
    value: GValue;
    options?: CookieAttributes;
}): void => {
    if (!Object.prototype.hasOwnProperty.call(CookiesValuesSchema.shape, key)) {
        cookie.set(key, JSON.stringify(value), options);
    }

    try {
        const keySchema = CookiesValuesSchema.shape[key as CookiesKeys];
        const validValue = keySchema.parse(value);

        cookie.set(key, JSON.stringify(validValue), options);
    } catch (e) {
        logError(`Error validate for cookie "${String(key)}"`);
    }
};
