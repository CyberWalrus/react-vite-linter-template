export type Theme = 'dark' | 'light';

export type ThemeValues = {
    isAppTheme: boolean;
    theme: Theme;
};

export type ThemeState = ThemeValues & {
    initTheme: (val: ThemeValues) => void;
    isAppTheme: boolean;
    setIsAppTheme: (isAppTheme: boolean) => void;
    setTheme: (theme: Theme) => void;
    theme: Theme;
};
