import type { Linter } from 'eslint';

export const defaultIgnores = [
    {
        ignores: ['public', '__generated__', 'coverage'],
    },
] satisfies Linter.Config[];
