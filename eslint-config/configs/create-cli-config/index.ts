import type { Linter } from 'eslint';

export const createCliConfig = (ignoreExports?: string[]) =>
    [
        {
            files: ['**/*.{ts,tsx}'],
            rules: {
                'import/no-unused-modules': [1, { ignoreExports, unusedExports: true }],
            },
        },
    ] satisfies Linter.Config[];
