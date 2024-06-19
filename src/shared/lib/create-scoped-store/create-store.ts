import type { StateCreator } from 'zustand';
import { devtools } from 'zustand/middleware';
import { shallow } from 'zustand/shallow';
import { createWithEqualityFn } from 'zustand/traditional';

import { envClient } from '$shared/core/env-client';

import type { Store } from './types';

const storesMap = new Map<string, Array<(appId: string) => void>>();

const addToMap = (appId: string, clear: (value: string) => void) => {
    if (storesMap.has(appId)) {
        storesMap.get(appId)?.push(clear);

        return;
    }

    storesMap.set(appId, [clear]);
};

export const clearStores = (appId: string) => {
    if (!storesMap.has(appId)) {
        return;
    }

    storesMap.get(appId)?.forEach((clear) => {
        clear(appId);
    });

    storesMap.delete(appId);
};

export const createStore = <GState>(
    fn: StateCreator<GState>,
    name: string,
    appId: string,
    clear: (value: string) => void,
): Store<GState> => {
    addToMap(appId, clear);

    if (envClient.NODE_ENV !== 'development' || envClient.VITE_TEST_SERVER_BUILD) {
        return createWithEqualityFn(fn, shallow);
    }

    return createWithEqualityFn(devtools(fn, { name }), shallow);
};
