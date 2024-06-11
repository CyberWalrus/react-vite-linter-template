import { logError } from '$shared/lib/logger';

import { SessionStorageValuesSchema } from '../model/schemas';
import type { GetSessionStorageType, SessionStorageKeys, StringOrLiteral } from '../model/types';

export const writeSessionStorage = <
    GKeyType extends string = SessionStorageKeys,
    GKey extends StringOrLiteral<GKeyType> = SessionStorageKeys,
    GValueType = GetSessionStorageType<GKey>,
    GValue extends GValueType = GValueType,
>({
    key,
    value,
}: {
    key: GKey;
    value: GValue;
}): void => {
    if (typeof sessionStorage === 'undefined') {
        return;
    }

    if (!Object.prototype.hasOwnProperty.call(SessionStorageValuesSchema.shape, key)) {
        sessionStorage.setItem(key, JSON.stringify(value));
    }

    try {
        const keySchema = SessionStorageValuesSchema.shape[key as SessionStorageKeys];
        const validValue = keySchema.parse(value);

        sessionStorage.setItem(key, JSON.stringify(validValue));
    } catch (e) {
        logError(`Error validate for cookie "${String(key)}"`);
    }
};
