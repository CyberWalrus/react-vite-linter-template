import { useCallback } from 'react';

import { writeCookie } from '$shared/core/cookie';
import { writeLocalStorage } from '$shared/core/local-storage';

import { COOKIE_EXPIRES } from '../model/constants';
import { useThemeState } from '../model/theme.store';
import type { Theme } from '../model/types';

export const useTheme = () => {
    const { theme, isAppTheme, setIsAppTheme, setTheme } = useThemeState();

    const isDark = theme === 'dark';
    const isLight = theme === 'light';

    const handleSetTheme = useCallback(
        (value: Theme) => {
            setTheme(value);
            setIsAppTheme(true);
            writeCookie({ key: 'current-theme', options: { expires: COOKIE_EXPIRES }, value });
            writeCookie({ key: 'is-app-theme', options: { expires: COOKIE_EXPIRES }, value: true });
            writeLocalStorage({ key: 'current-theme', value });
            writeLocalStorage({ key: 'is-app-theme', value: true });
        },
        [setIsAppTheme, setTheme],
    );

    const handleSetIsAppTheme = useCallback(
        (value: boolean) => {
            setIsAppTheme(value);
            writeCookie({ key: 'is-app-theme', options: { expires: COOKIE_EXPIRES }, value });
            writeLocalStorage({ key: 'is-app-theme', value });
        },
        [setIsAppTheme],
    );

    return {
        handleSetIsAppTheme,
        handleSetTheme,
        isAppTheme,
        isDark,
        isLight,
    };
};
