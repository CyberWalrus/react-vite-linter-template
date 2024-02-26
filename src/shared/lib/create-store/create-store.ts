import type { StateCreator } from 'zustand';
import { devtools } from 'zustand/middleware';
import { shallow } from 'zustand/shallow';
import { createWithEqualityFn } from 'zustand/traditional';

export const createStore = <GState>(fn: StateCreator<GState>, name: string) => {
    const store =
        process.env.NODE_ENV === 'development'
            ? createWithEqualityFn(devtools(fn, { name }), shallow)
            : createWithEqualityFn(fn, shallow);

    return store;
};
