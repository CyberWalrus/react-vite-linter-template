import type { Linter } from 'eslint';

export const sonarjsRules: Partial<Linter.RulesRecord> = {
    'sonarjs/cognitive-complexity': ['warn', 15],
    'sonarjs/no-collapsible-if': ['warn'],
    'sonarjs/no-duplicate-string': [
        'warn',
        {
            ignoreStrings: 'application/json',
            threshold: 8,
        },
    ],
    'sonarjs/no-element-overwrite': ['warn'],
    'sonarjs/no-gratuitous-expressions': ['warn'],
    'sonarjs/no-identical-expressions': ['warn'],
    'sonarjs/no-identical-functions': ['error', 5],
    'sonarjs/no-ignored-return': ['warn'],
    'sonarjs/no-inverted-boolean-check': ['warn'],
    'sonarjs/no-redundant-boolean': ['warn'],
    'sonarjs/no-unused-collection': ['warn'],
    'sonarjs/no-use-of-empty-return-value': ['warn'],
    'sonarjs/no-useless-catch': ['warn'],
    'sonarjs/prefer-immediate-return': ['warn'],
    'sonarjs/prefer-object-literal': ['warn'],
    'sonarjs/prefer-single-boolean-return': ['warn'],
};
