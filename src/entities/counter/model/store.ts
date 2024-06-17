import { createScopedStore } from '$shared/lib/create-scoped-store';

import type { CounterState } from './store.type';

export const [useCounterStore, getCounterStore] = createScopedStore<CounterState>(
    (set) => ({
        clear: () => set({ value: 0 }),
        decrement: () => set((state) => ({ value: state.value - 1 })),
        increment: () => set((state) => ({ value: state.value + 1 })),
        value: 0,
    }),
    'Counter',
);
