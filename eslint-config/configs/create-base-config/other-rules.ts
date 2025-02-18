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
    'sort-keys-fix/sort-keys-fix': [
        'warn',
        'asc',
        {
            caseSensitive: true,
            natural: true,
        },
    ],
};
