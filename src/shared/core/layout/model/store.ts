import { createStore } from '$shared/lib/create-store';

import { getLayout } from '../lib/get-layout';
import type { LayoutState } from './types';

export const useLayoutStore = createStore<LayoutState>(
    (set) => ({
        layout: getLayout(),
        setLayout: (layout) => {
            set({ layout });
        },
    }),
    'Counter',
);
