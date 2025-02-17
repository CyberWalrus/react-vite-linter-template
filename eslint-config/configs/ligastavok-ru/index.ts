import type { Linter } from 'eslint';

import { lsPlugin } from '../../rules';

export const ligastavokRu = [
    {
        files: ['**/*.{ts,tsx,mjs,cjs,js}'],
        plugins: {
            '@ls': lsPlugin,
        },
        rules: {
            '@ls/no-browser-storage': 'error',
        },
    },
] satisfies Linter.Config[];
