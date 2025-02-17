import { act, renderHook } from '@testing-library/react';

import { useCounterStore } from '../model/store';

describe('useCounterStore', () => {
    it('initializes with a value of 0', () => {
        const { result } = renderHook(() => useCounterStore());

        expect(result.current.value).toBe(0);
    });

    it('increments the value from 0 to 1', () => {
        const { result } = renderHook(() => useCounterStore());

        act(() => {
            result.current.increment();
        });

        expect(result.current.value).toBe(1);
    });

    it('clears the value to 0 after incrementing', () => {
        const { result } = renderHook(() => useCounterStore());

        act(() => {
            result.current.increment();
        });

        expect(result.current.value).toBe(1);

        act(() => {
            result.current.clear();
        });

        expect(result.current.value).toBe(0);
    });

    it('decrements the value from 0 to -1', () => {
        const { result } = renderHook(() => useCounterStore());

        act(() => {
            result.current.decrement();
        });

        expect(result.current.value).toBe(-1);

        act(() => {
            result.current.clear();
        });

        expect(result.current.value).toBe(0);
    });
});
