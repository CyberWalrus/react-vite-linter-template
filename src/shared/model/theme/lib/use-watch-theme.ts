import { useIsomorphicLayoutEffect } from '$shared/lib/hooks';

import { HTML_ATTRIBUTE } from '../model/constants';
import { useThemeState } from '../model/theme.store';
import { getInitialState } from './get-initial-state';

export const useWatchTheme = () => {
    const { theme, initTheme } = useThemeState();

    useIsomorphicLayoutEffect(() => {
        if (typeof window === 'undefined') {
            return;
        }

        const handleSync = () => {
            const state = getInitialState();

            initTheme(state);
        };

        handleSync();

        window.addEventListener('visibilitychange', handleSync);

        return () => {
            window.removeEventListener('visibilitychange', handleSync);
        };
    }, [initTheme]);

    useIsomorphicLayoutEffect(() => {
        if (typeof document === 'undefined') {
            return;
        }

        const html = document.documentElement;

        html.setAttribute(HTML_ATTRIBUTE, theme);
    }, [theme]);
};
