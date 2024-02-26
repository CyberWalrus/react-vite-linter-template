import { vi } from 'vitest';
import { devtools } from 'zustand/middleware';
import { shallow } from 'zustand/shallow';
import { createWithEqualityFn } from 'zustand/traditional';

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
        const originalEnv = process.env.NODE_ENV;
        const originalTest = process.env.VITEST;
        process.env.NODE_ENV = 'development';
        process.env.VITEST = '';

        const stateCreator = vi.fn();
        createStore(stateCreator, 'testStore');

        expect(devtools).toHaveBeenCalled();
        expect(createWithEqualityFn).toHaveBeenCalledWith(expect.any(Function), shallow);

        process.env.NODE_ENV = originalEnv;
        process.env.VITEST = originalTest;
    });

    it('calls createWithEqualityFn without devtools in production', () => {
        const originalEnv = process.env.NODE_ENV;
        process.env.NODE_ENV = 'production';

        const stateCreator = vi.fn();
        createStore(stateCreator, 'testStore');

        expect(devtools).not.toHaveBeenCalled();
        expect(createWithEqualityFn).toHaveBeenCalledWith(stateCreator, shallow);

        process.env.NODE_ENV = originalEnv;
    });
});
