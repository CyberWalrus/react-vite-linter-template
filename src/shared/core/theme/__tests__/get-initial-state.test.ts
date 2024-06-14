/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { beforeEach, describe, expect, it, vi } from 'vitest';

import { readCookie } from '$shared/core/cookie';
import { readLocalStorage } from '$shared/core/local-storage';

import { getInitialState, getInitialTheme, getIsAppTheme } from '../lib/get-initial-state';

vi.mock('$shared/core/cookie', () => ({
    readCookie: vi.fn(),
}));

vi.mock('$shared/core/local-storage', () => ({
    readLocalStorage: vi.fn(),
}));

describe('Theme functions', () => {
    beforeEach(() => {
        vi.clearAllMocks();
    });

    describe('getIsAppTheme', () => {
        it('should return true when localStorage is set to app theme', () => {
            (readLocalStorage as any).mockReturnValue('true');
            (readCookie as any).mockReturnValue(null);

            expect(getIsAppTheme()).toBe(true);
        });

        it('should return true when cookie is set to app theme', () => {
            (readLocalStorage as any).mockReturnValue(null);
            (readCookie as any).mockReturnValue('true');

            expect(getIsAppTheme()).toBe(true);
        });

        it('should return false when neither cookie nor localStorage is set to app theme', () => {
            (readLocalStorage as any).mockReturnValue(null);
            (readCookie as any).mockReturnValue(null);

            expect(getIsAppTheme()).toBe(false);
        });
    });

    describe('getInitialTheme', () => {
        it('should return dark theme when localStorage is set to dark', () => {
            (readLocalStorage as any).mockReturnValue('dark');
            (readCookie as any).mockReturnValue(null);

            expect(getInitialTheme()).toBe('dark');
        });

        it('should return dark theme when cookie is set to dark', () => {
            (readLocalStorage as any).mockReturnValue(null);
            (readCookie as any).mockReturnValue('dark');

            expect(getInitialTheme()).toBe('dark');
        });

        it('should return dark theme when matchMedia prefers dark mode', () => {
            (readLocalStorage as any).mockReturnValue(null);
            (readCookie as any).mockReturnValue(null);
            Object.defineProperty(window, 'matchMedia', {
                value: vi.fn().mockImplementation((query) => ({
                    matches: query === '(prefers-color-scheme: dark)',
                })),
            });

            expect(getInitialTheme()).toBe('dark');
        });

        it('should return light theme by default', () => {
            (readLocalStorage as any).mockReturnValue(null);
            (readCookie as any).mockReturnValue(null);
            Object.defineProperty(window, 'matchMedia', {
                value: vi.fn().mockImplementation(() => ({
                    matches: false,
                })),
            });

            expect(getInitialTheme()).toBe('light');
        });
    });

    describe('getInitialState', () => {
        it('should return initial state with correct theme and isAppTheme values', () => {
            const isAppTheme = true;
            const theme = 'dark';

            (readLocalStorage as any).mockImplementation(({ key }: { key: string }) => {
                if (key === 'is-app-theme') return isAppTheme;
                if (key === 'current-theme') return theme;

                return null;
            });

            (readCookie as any).mockReturnValue(null);

            const initialState = getInitialState();

            expect(initialState).toEqual({
                isAppTheme,
                theme,
            });
        });
    });
});
