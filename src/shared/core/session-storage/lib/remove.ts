import type { SessionStorageKeys, StringOrLiteral } from '../model/types';

export const removeSessionStorage = <
    GKeyType extends string = SessionStorageKeys,
    GKey extends StringOrLiteral<GKeyType> = SessionStorageKeys,
>({
    key,
}: {
    key: GKey;
}): void => {
    if (typeof sessionStorage === 'undefined') {
        return;
    }

    sessionStorage.removeItem(key);
};
