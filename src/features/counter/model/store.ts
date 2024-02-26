import { createStore } from '$shared/lib/create-store';

import type { CounterState } from './store.type';

export const useCounterStore = createStore<CounterState>(
    (set) => ({
        clear: () => set({ value: 0 }),
        decrement: () => set((state) => ({ value: state.value - 1 })),
        increment: () => set((state) => ({ value: state.value + 1 })),
        value: 0,
    }),
    'Counter',
);
