import { createScopedStore } from '$shared/lib/create-scoped-store';

import { getInitialTheme, getIsAppTheme } from '../lib/get-initial-state';
import type { ThemeState } from './types';

const [useThemeState, getThemeState] = createScopedStore<ThemeState>(
    (set) => ({
        initTheme: ({ theme, isAppTheme }) => {
            set({ isAppTheme, theme });
        },
        isAppTheme: getIsAppTheme(),
        setIsAppTheme: (isAppTheme) => {
            set({ isAppTheme });
        },
        setTheme: (theme) => {
            set({ theme });
        },
        theme: getInitialTheme(),
    }),
    'Counter',
);

export { getThemeState, useThemeState };
