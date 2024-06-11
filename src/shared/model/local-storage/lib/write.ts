import { logError } from '$shared/lib/logger';

import { LocalStorageValuesSchema } from '../model/schemas';
import type { GetLocalStorageType, LocalStorageKeys, StringOrLiteral } from '../model/types';

export const writeLocalStorage = <
    GKeyType extends string = LocalStorageKeys,
    GKey extends StringOrLiteral<GKeyType> = LocalStorageKeys,
    GValueType = GetLocalStorageType<GKey>,
    GValue extends GValueType = GValueType,
>({
    key,
    value,
}: {
    key: GKey;
    value: GValue;
}): void => {
    if (typeof localStorage === 'undefined') {
        return;
    }

    if (!Object.prototype.hasOwnProperty.call(LocalStorageValuesSchema.shape, key)) {
        localStorage.setItem(key, JSON.stringify(value));
    }

    try {
        const keySchema = LocalStorageValuesSchema.shape[key as LocalStorageKeys];
        const validValue = keySchema.parse(value);

        localStorage.setItem(key, JSON.stringify(validValue));
    } catch (e) {
        logError(`Error validate for cookie "${String(key)}"`);
    }
};
