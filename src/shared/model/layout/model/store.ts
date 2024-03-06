import { createStore } from '$shared/lib/create-store';

import type { LayoutState } from './store.type';

export const useLayoutStore = createStore<LayoutState>(
    (set) => ({
        layout: 'desktop',
        setLayout: (layout) => {
            set({ layout });
        },
    }),
    'Counter',
);
