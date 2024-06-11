import { createStore } from '$shared/lib/create-store';

import { getInitialTheme, getIsAppTheme } from '../lib/get-initial-state';
import type { ThemeState } from './store.types';

export const useThemeState = createStore<ThemeState>(
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
