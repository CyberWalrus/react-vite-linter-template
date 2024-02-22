import { createStore } from '$shared/lib';

type CounterState = {
    clear: () => void;
    decrement: () => void;
    increment: () => void;
    value: number;
};

export const [counterStore, useCounterStore] = createStore<CounterState>(
    (set) => ({
        clear: () => set({ value: 0 }),
        decrement: () => set((state) => ({ value: state.value - 1 })),
        increment: () => set((state) => ({ value: state.value + 1 })),
        value: 0,
    }),
    'Counter',
);
