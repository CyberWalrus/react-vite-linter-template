import type { StateCreator } from 'zustand';

import { useAppContext } from '$shared/core/app-context';

import { createStore } from './create-store';
import type { Store } from './types';

export const createScopedStore = <GState>(
    fn: StateCreator<GState>,
    name: string,
): [
    <U = GState>(
        selector?: ((state: GState) => U) | undefined,
        equalityFn?: ((a: U, b: U) => boolean) | undefined,
    ) => U,
    (appId: string) => GState,
] => {
    const stateMap = new Map<string, Store<GState>>();

    const clear = (appId: string) => {
        if (stateMap.has(appId)) {
            stateMap.delete(appId);
        }
    };

    const get = (appId: string): GState => {
        if (!stateMap.has(appId)) {
            stateMap.set(appId, createStore(fn, name, appId, clear));
        }

        return stateMap.get(appId)?.getState() as GState;
    };

    const useStore = <U = GState>(
        // eslint-disable-next-line default-param-last
        selector: (state: GState) => U = (state: GState) => state as unknown as U,
        equalityFn?: ((a: U, b: U) => boolean) | undefined,
    ): U => {
        const { appId } = useAppContext();
        if (!stateMap.has(appId)) {
            stateMap.set(appId, createStore(fn, name, appId, clear));
        }

        return stateMap.get(appId)?.(selector, equalityFn) as U;
    };

    return [useStore, get];
};
