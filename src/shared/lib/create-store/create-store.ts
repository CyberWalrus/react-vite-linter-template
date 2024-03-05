import type { StateCreator } from 'zustand';
import { devtools } from 'zustand/middleware';
import { shallow } from 'zustand/shallow';
import { createWithEqualityFn } from 'zustand/traditional';

import { envClient } from '$shared/api/env-client';

export const createStore = <GState>(fn: StateCreator<GState>, name: string) => {
    if (envClient.NODE_ENV !== 'development' || envClient.VITE_TEST_SERVER_BUILD) {
        return createWithEqualityFn(fn, shallow);
    }

    return createWithEqualityFn(devtools(fn, { name }), shallow);
};
