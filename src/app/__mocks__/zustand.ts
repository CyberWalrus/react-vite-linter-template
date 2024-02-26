/* eslint-disable @typescript-eslint/no-explicit-any */
import * as zustand from 'zustand';

const actualCreate = zustand.create;
const actualCreateStore = zustand.createStore;

export const storeResetFns = new Set<() => void>();

const createUncurried = <T>(stateCreator: zustand.StateCreator<T>) => {
    const store = actualCreate(stateCreator);
    const initialState = store.getState();
    storeResetFns.add(() => {
        store.setState(initialState, true);
    });

    return store;
};

export const create = ((stateCreator: zustand.StateCreator<any>) =>
    typeof stateCreator === 'function' ? createUncurried(stateCreator) : createUncurried) as typeof zustand.create;

const createStoreUncurried = <T>(stateCreator: zustand.StateCreator<T>) => {
    const store = actualCreateStore(stateCreator);
    const initialState = store.getState();
    storeResetFns.add(() => {
        store.setState(initialState, true);
    });

    return store;
};

export const createStore = ((stateCreator: zustand.StateCreator<any>) =>
    typeof stateCreator === 'function'
        ? createStoreUncurried(stateCreator)
        : createStoreUncurried) as typeof zustand.createStore;

export const createWithEqualityFn = ((stateCreator: zustand.StateCreator<any>) =>
    typeof stateCreator === 'function'
        ? createStoreUncurried(stateCreator)
        : createStoreUncurried) as typeof zustand.createStore;

afterEach(() => {
    vi.useFakeTimers();
    try {
        storeResetFns.forEach((resetFn) => resetFn());
    } finally {
        vi.useRealTimers();
    }
});
