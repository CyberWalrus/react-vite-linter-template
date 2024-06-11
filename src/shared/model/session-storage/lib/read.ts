import { logError } from '$shared/lib/logger';

import { SessionStorageValuesSchema } from '../model/schemas';
import type { GetSessionStorageType, SessionStorageKeys, StringOrLiteral } from '../model/types';

export const readSessionStorage = <
    GKeyType extends string = SessionStorageKeys,
    GKey extends StringOrLiteral<GKeyType> = SessionStorageKeys,
    GValue = GetSessionStorageType<GKey>,
>({
    key,
}: {
    key: GKey;
}): GValue | null => {
    if (typeof sessionStorage === 'undefined') {
        return null;
    }

    const result = sessionStorage.getItem(key);

    if (!result) {
        return null;
    }

    if (!Object.prototype.hasOwnProperty.call(SessionStorageValuesSchema.shape, key)) {
        try {
            return JSON.parse(result) as GValue;
        } catch (error: unknown) {
            return result as GValue;
        }
    }

    const keySchema = SessionStorageValuesSchema.shape[key as SessionStorageKeys];

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
