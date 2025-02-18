import type { Linter } from 'eslint';

export const otherRules: Partial<Linter.RulesRecord> = {
    '@ls/filename-match-regexp': ['warn'],
    '@stylistic/ts/lines-between-class-members': [
        'error',
        'always',
        {
            exceptAfterOverload: true,
            exceptAfterSingleLine: false,
        },
    ],
    '@stylistic/ts/object-curly-spacing': ['error', 'always'],
    '@stylistic/ts/space-before-blocks': ['error'],
    'node/file-extension-in-import': [
        'warn',
        'always',
        {
            '.js': 'never',
            '.jsx': 'never',
            '.ts': 'never',
            '.tsx': 'never',
        },
    ],
    'sort-keys-fix/sort-keys-fix': [
        'warn',
        'asc',
        {
            caseSensitive: true,
            natural: true,
        },
    ],
};
