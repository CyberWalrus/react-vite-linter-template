import type { Linter } from 'eslint';

import { rules } from '../rules';

export const ligastavokRu = [
    {
        files: ['**/*.{ts,tsx,mjs,cjs,js}'],
        plugins: {
            '@ls': rules,
        },
        rules: {
            '@ls/no-browser-storage': 'error',
        },
    },
] satisfies Linter.Config[];
