import { readCookie } from '$shared/core/cookie';
import { readLocalStorage } from '$shared/core/local-storage';

import type { Theme, ThemeValues } from '../model/types';

export const getIsAppTheme = (): boolean => {
    const lsAppTheme = readLocalStorage({ key: 'is-app-theme' });
    const cookieAppTheme = readCookie({ key: 'is-app-theme' });

    return Boolean(lsAppTheme ?? cookieAppTheme);
};

export const getInitialTheme = (): Theme => {
    const lsTheme = readLocalStorage({ key: 'current-theme' });
    const cookieTheme = readCookie({ key: 'current-theme' });
    let matchMediaTheme: Theme | undefined;
    if (typeof window !== 'undefined') {
        matchMediaTheme =
            window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    const currentTheme = lsTheme || cookieTheme || matchMediaTheme;

    return currentTheme === 'dark' ? 'dark' : 'light';
};

export const getInitialState = (): ThemeValues => ({
    isAppTheme: getIsAppTheme(),
    theme: getInitialTheme(),
});
