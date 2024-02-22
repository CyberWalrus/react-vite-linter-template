/* eslint-disable react-hooks/rules-of-hooks */
import { create, type StateCreator } from 'zustand';
import { devtools } from 'zustand/middleware';

import { createEqualityStore } from '$shared/model/create-equality-store';

export const createStore = <GState>(fn: StateCreator<GState>, name: string) => {
    if (process.env.NODE_ENV === 'development') {
        const store = create(devtools(fn, { name }));
        const selectedStore = createEqualityStore(store);

        return [store, selectedStore];
    }

    const store = create(fn);

    const selectedStore = createEqualityStore(store);

    return [store, selectedStore];
};
