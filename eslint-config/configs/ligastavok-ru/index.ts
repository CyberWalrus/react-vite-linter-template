import type { Linter } from 'eslint';

import { lsPlugin } from '../../rules';

export const ligastavokRu = [
    {
        files: ['**/*.{ts,tsx,mjs,cjs,js,jsx}'],
        plugins: {
            '@ls': lsPlugin,
        },
        rules: {
            '@ls/no-browser-storage': 'error',
            '@typescript-eslint/no-explicit-any': 'off',
        },
    },
] satisfies Linter.Config[];
