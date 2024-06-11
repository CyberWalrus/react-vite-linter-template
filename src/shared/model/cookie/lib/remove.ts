import type { CookieAttributes } from 'js-cookie';
import cookie from 'js-cookie';

import type { CookiesKeys, StringOrLiteral } from '../model/types';

export const removeCookie = <
    GKeyType extends string = CookiesKeys,
    GKey extends StringOrLiteral<GKeyType> = CookiesKeys,
>({
    key,
    options,
}: {
    key: GKey;
    options?: CookieAttributes;
}): void => {
    cookie.remove(key, options);
};
