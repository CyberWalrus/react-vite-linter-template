import { writeCookie } from '$shared/core/cookie';
import { writeLocalStorage } from '$shared/core/local-storage';
import { useIsomorphicLayoutEffect } from '$shared/lib/hooks';

import { COOKIE_EXPIRES } from '../model/constants';
import { useThemeState } from '../model/theme.store';
import type { Theme } from '../model/types';

export const useWatchDeviceTheme = () => {
    const { isAppTheme, setTheme } = useThemeState();

    useIsomorphicLayoutEffect(() => {
        if (typeof window === 'undefined' || isAppTheme) {
            return;
        }

        const darkElement = window.matchMedia?.('(prefers-color-scheme: dark)');

        if (!darkElement) {
            return;
        }

        const handleChangeThemeWatcher = (event: MediaQueryListEvent) => {
            const theme: Theme = event.matches ? 'dark' : 'light';

            setTheme(theme);
            writeCookie({ key: 'current-theme', options: { expires: COOKIE_EXPIRES }, value: theme });
            writeLocalStorage({ key: 'current-theme', value: theme });
        };

        const handleChangeTheme = () => {
            const theme =
                (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light') ||
                'light';

            setTheme(theme);
            writeLocalStorage({ key: 'current-theme', value: theme });
            writeCookie({ key: 'current-theme', options: { expires: COOKIE_EXPIRES }, value: theme });
        };

        handleChangeTheme();

        darkElement.addEventListener('change', handleChangeThemeWatcher);

        return () => {
            darkElement.removeEventListener('change', handleChangeThemeWatcher);
        };
    }, [isAppTheme, setTheme]);
};
