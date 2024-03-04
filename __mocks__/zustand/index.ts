// __mocks__/zustand.ts
import { act } from '@testing-library/react';
import type * as zustand from 'zustand';

const { create: actualCreate, createStore: actualCreateStore } = await vi.importActual<typeof zustand>('zustand');

export const storeResetFns = new Set<() => void>();

const createUncurried = <T>(stateCreator: zustand.StateCreator<T>) => {
    const store = actualCreate(stateCreator);
    const initialState = store.getInitialState();
    storeResetFns.add(() => {
        store.setState(initialState, true);
    });

    return store;
};

export const create = (<T>(stateCreator: zustand.StateCreator<T>) =>
    typeof stateCreator === 'function' ? createUncurried(stateCreator) : createUncurried) as typeof zustand.create;

const createStoreUncurried = <T>(stateCreator: zustand.StateCreator<T>) => {
    const store = actualCreateStore(stateCreator);
    const initialState = store.getInitialState();
    storeResetFns.add(() => {
        store.setState(initialState, true);
    });

    return store;
};

export const createStore = (<T>(stateCreator: zustand.StateCreator<T>) =>
    typeof stateCreator === 'function'
        ? createStoreUncurried(stateCreator)
        : createStoreUncurried) as typeof zustand.createStore;

beforeEach(() => {
    act(() =>
        storeResetFns.forEach((resetFn) => {
            resetFn();
        }),
    );
});

afterEach(() => {
    act(() => {
        storeResetFns.forEach((resetFn) => {
            resetFn();
        });
    });
});
