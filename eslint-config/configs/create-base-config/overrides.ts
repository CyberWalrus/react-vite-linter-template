import type { Linter } from 'eslint';

export const overrides = [
    {
        files: ['*.ts', 'constants.tsx', '**/constants/**', '**/hooks/**'],
        rules: {
            'import/prefer-default-export': 0,
        },
    },
    {
        files: ['**/*.{mjs,cjs,js,jsx}'],
        rules: {
            '@typescript-eslint/array-type': 'off',
            '@typescript-eslint/await-thenable': 'off',
            '@typescript-eslint/ban-ts-comment': 'off',
            '@typescript-eslint/ban-types': 'off',
            '@typescript-eslint/consistent-type-definitions': 'off',
            '@typescript-eslint/consistent-type-imports': 'off',
            '@typescript-eslint/default-param-last': 'off',
            '@typescript-eslint/no-explicit-any': 'off',
            '@typescript-eslint/no-floating-promises': 'off',
            '@typescript-eslint/no-misused-promises': 'off',
            '@typescript-eslint/no-non-null-assertion': 'off',
            '@typescript-eslint/no-shadow': 'off',
            '@typescript-eslint/no-throw-literal': 'off',
            '@typescript-eslint/no-unsafe-argument': 'off',
            '@typescript-eslint/no-unsafe-assignment': 'off',
            '@typescript-eslint/no-unsafe-call': 'off',
            '@typescript-eslint/no-unsafe-member-access': 'off',
            '@typescript-eslint/no-unsafe-return': 'off',
            '@typescript-eslint/no-var-requires': 'off',
            '@typescript-eslint/prefer-as-const': 'off',
            '@typescript-eslint/require-await': 'off',
            '@typescript-eslint/restrict-plus-operands': 'off',
            '@typescript-eslint/restrict-template-expressions': 'off',
            '@typescript-eslint/return-await': 'off',
            '@typescript-eslint/unbound-method': 'off',

            'default-param-last': 'off',
            'guard-for-in': 'off',

            'import/no-import-module-exports': 'off',
            'import/no-named-as-default': 'off',
            'import/no-named-as-default-member': 'off',
            'import/prefer-default-export': 'off',

            'no-case-declarations': 'off',
            'no-continue': 'off',

            'no-underscore-dangle': 'off',
            'no-unsafe-optional-chaining': 'off',
            'no-unused-expressions': 'off',
            'react/jsx-no-constructed-context-values': 'off',

            'react/jsx-no-useless-fragment': 'off',
            'react/no-array-index-key': 'off',
            'sort-keys-fix/sort-keys-fix': 'off',
        },
    },
    {
        files: ['**/*.tsx?', '**/*.jsx?', '!src/**', 'src/**/__tests__/**', 'src/**/__e2e__/**', 'src/**/__mocks__/**'],
        rules: {
            '@typescript-eslint/unbound-method': 'off',
            'import/no-extraneous-dependencies': 'off',
            'no-await-in-loop': 'off',
            'no-console': 'off',
            'no-restricted-imports': 'off',
            'prefer-promise-reject-errors': 'off',
        },
    },
    {
        files: ['**/*config.{ts,tsx,mjs,cjs,js,jsx}'],
        rules: {
            'import/no-default-export': 'off',
        },
    },
] satisfies Linter.Config[];
