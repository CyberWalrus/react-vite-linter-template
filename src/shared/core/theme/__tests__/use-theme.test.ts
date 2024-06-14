import { act, renderHook } from '@testing-library/react';

import { useThemeState } from '../model/theme.store';
import { useTheme } from '..';

describe('useTheme', () => {
    it('handleSetTheme', () => {
        const { result } = renderHook(() => useTheme());
        act(() => {
            result.current.handleSetTheme('dark');
        });

        const { result: stateResult } = renderHook(() => useThemeState());

        expect(stateResult.current.theme).toBe('dark');
        act(() => {
            result.current.handleSetTheme('light');
        });

        expect(stateResult.current.theme).toBe('light');
    });

    it('handleSetIsAppTheme', () => {
        const { result } = renderHook(() => useTheme());
        act(() => {
            result.current.handleSetIsAppTheme(true);
        });

        const { result: stateResult } = renderHook(() => useThemeState());

        expect(stateResult.current.isAppTheme).toBe(true);
        act(() => {
            result.current.handleSetIsAppTheme(false);
        });

        expect(stateResult.current.isAppTheme).toBe(false);
    });
});
