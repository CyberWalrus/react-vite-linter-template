import type { LocalStorageKeys, StringOrLiteral } from '../model/types';

export const removeLocalStorage = <
    GKeyType extends string = LocalStorageKeys,
    GKey extends StringOrLiteral<GKeyType> = LocalStorageKeys,
>({
    key,
}: {
    key: GKey;
}): void => {
    if (typeof localStorage === 'undefined') {
        return;
    }

    localStorage.removeItem(key);
};
