import { logError } from '$shared/lib/logger';

import { LocalStorageValuesSchema } from '../model/schemas';
import type { GetLocalStorageType, LocalStorageKeys, StringOrLiteral } from '../model/types';

export const readLocalStorage = <
    GKeyType extends string = LocalStorageKeys,
    GKey extends StringOrLiteral<GKeyType> = LocalStorageKeys,
    GValue = GetLocalStorageType<GKey>,
>({
    key,
}: {
    key: GKey;
}): GValue | null => {
    if (typeof localStorage === 'undefined') {
        return null;
    }

    const result = localStorage.getItem(key);

    if (!result) {
        return null;
    }

    if (!Object.prototype.hasOwnProperty.call(LocalStorageValuesSchema.shape, key)) {
        try {
            return JSON.parse(result) as GValue;
        } catch (error: unknown) {
            return result as GValue;
        }
    }

    const keySchema = LocalStorageValuesSchema.shape[key as LocalStorageKeys];

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
