import type { StateCreator } from 'zustand';
import { devtools } from 'zustand/middleware';
import { shallow } from 'zustand/shallow';
import { createWithEqualityFn } from 'zustand/traditional';

export const createStore = <GState>(fn: StateCreator<GState>, name: string) => {
    if (process.env.NODE_ENV !== 'development' || process.env.VITE_TEST_SERVER_BUILD === 'true') {
        return createWithEqualityFn(fn, shallow);
    }

    return createWithEqualityFn(devtools(fn, { name }), shallow);
};
