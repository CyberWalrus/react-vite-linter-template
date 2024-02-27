// <root>/__mocks__/zustand/traditional.ts
import { act } from 'react-dom/test-utils';
import type { StateCreator } from 'zustand';
import { createWithEqualityFn as actualCreate } from 'zustand/traditional';

const storeResetFns = new Set<() => void>();

const createImpl = <T>(createState: StateCreator<T>) => {
    const store = actualCreate(createState, Object.is);
    const initialState = store.getState();
    storeResetFns.add(() => store.setState(initialState, true));

    return store;
};

beforeEach(() => {
    act(() =>
        storeResetFns.forEach((resetFn) => {
            resetFn();
        }),
    );
});

afterEach(() => {
    act(() =>
        storeResetFns.forEach((resetFn) => {
            resetFn();
        }),
    );
});

export const createWithEqualityFn = <T>(f: StateCreator<T>) => (f === undefined ? createImpl : createImpl(f));

export { useStoreWithEqualityFn as useStore } from 'zustand/traditional';
