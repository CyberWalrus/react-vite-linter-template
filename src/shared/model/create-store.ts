import { create, type StateCreator } from 'zustand';
import { devtools } from 'zustand/middleware';

import { createEqualityStore } from '$shared/model/create-equality-store';

export const createStore = <GState>(fn: StateCreator<GState>, name: string) => {
    const store = process.env.NODE_ENV === 'development' ? create(devtools(fn, { name })) : create(fn);

    const selectedStore = createEqualityStore(store);

    return [store, selectedStore];
};
