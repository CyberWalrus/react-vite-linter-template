import { vi } from 'vitest';
import { devtools } from 'zustand/middleware';
import { shallow } from 'zustand/shallow';
import { createWithEqualityFn } from 'zustand/traditional';

import { envClient } from '$shared/api/env-client';

import { createStore } from '..';

vi.mock('zustand/traditional', async () => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-explicit-any
    const actual = await vi.importActual<any>('zustand/traditional');

    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return {
        ...actual,
        createWithEqualityFn: vi.fn().mockReturnValue(() => {}),
    };
});

vi.mock('zustand/shallow', () => ({ shallow: vi.fn() }));

// eslint-disable-next-line @typescript-eslint/no-unsafe-return
vi.mock('zustand/middleware', () => ({ devtools: vi.fn((fn) => fn) }));

describe('createStore', () => {
    beforeEach(() => {
        vi.clearAllMocks();
    });

    it('calls createWithEqualityFn with devtools in development', () => {
        const oldNode = envClient.NODE_ENV;
        const oldTest = envClient.VITE_TEST_SERVER_BUILD;
        envClient.NODE_ENV = 'development';
        envClient.VITE_TEST_SERVER_BUILD = false;

        const stateCreator = vi.fn();
        createStore(stateCreator, 'testStore');

        expect(devtools).toHaveBeenCalled();
        expect(createWithEqualityFn).toHaveBeenCalledWith(expect.any(Function), shallow);
        envClient.NODE_ENV = oldNode;
        envClient.VITE_TEST_SERVER_BUILD = oldTest;
    });

    it('calls createWithEqualityFn without devtools in production', () => {
        vi.stubEnv('NODE_ENV', 'production');
        const oldNode = envClient.NODE_ENV;
        envClient.NODE_ENV = 'production';

        const stateCreator = vi.fn();
        createStore(stateCreator, 'testStore');

        expect(devtools).not.toHaveBeenCalled();
        expect(createWithEqualityFn).toHaveBeenCalledWith(stateCreator, shallow);
        envClient.NODE_ENV = oldNode;
    });
});
