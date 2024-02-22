import { create, type StateCreator } from 'zustand';
import { devtools } from 'zustand/middleware';

import { createEqualityStore } from './create-equality-store';

export const createStore = <GState>(fn: StateCreator<GState>, name: string) => {
    const store = process.env.NODE_ENV === 'development' ? create(devtools(fn, { name })) : create(fn);

    const equalityStore = createEqualityStore(store);

    return [store, equalityStore];
};
