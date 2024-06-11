import { act, renderHook } from '@testing-library/react';

import { useThemeState } from '../model/theme.store';

describe('useThemeState', () => {
    it('initializes with light theme', () => {
        const { result } = renderHook(() => useThemeState());

        expect(result.current.theme).toBe('light');
        expect(result.current.isAppTheme).toBe(false);
    });

    it('sets theme to dark and isAppTheme flag to true', () => {
        const { result } = renderHook(() => useThemeState());

        act(() => {
            result.current.initTheme({ isAppTheme: true, theme: 'dark' });
        });

        expect(result.current.theme).toBe('dark');
        expect(result.current.isAppTheme).toBe(true);
    });

    it('enables isAppTheme', () => {
        const { result } = renderHook(() => useThemeState());

        act(() => {
            result.current.setIsAppTheme(true);
        });

        expect(result.current.theme).toBe('light');
        expect(result.current.isAppTheme).toBe(true);
    });

    it('sets theme to dark', () => {
        const { result } = renderHook(() => useThemeState());

        act(() => {
            result.current.setTheme('dark');
        });

        expect(result.current.theme).toBe('dark');
        expect(result.current.isAppTheme).toBe(false);
    });
});
