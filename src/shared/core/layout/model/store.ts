import { createScopedStore } from '$shared/lib/create-scoped-store';

import { getLayout } from '../lib/get-layout';
import type { LayoutState } from './types';

export const [useLayoutStore, getLayoutStore] = createScopedStore<LayoutState>(
    (set) => ({
        layout: getLayout(),
        setLayout: (layout) => {
            set({ layout });
        },
    }),
    'Counter',
);
