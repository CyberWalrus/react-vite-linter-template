import type { Linter } from 'eslint';

export const importRules: Partial<Linter.RulesRecord> = {
    'import/consistent-type-specifier-style': ['error', 'prefer-top-level'],
    'import/default': ['off'],
    'import/dynamic-import-chunkname': [
        'off',
        {
            importFunctions: [],
            webpackChunknameFormat: '[0-9a-zA-Z-_/.]+',
        },
    ],
    'import/export': ['error'],
    'import/exports-last': ['off'],
    'import/extensions': [
        'error',
        'ignorePackages',
        {
            js: 'never',
            jsx: 'never',
            mjs: 'never',
            ts: 'never',
            tsx: 'never',
        },
    ],
    'import/first': ['error'],
    'import/group-exports': ['off'],
    'import/imports-first': ['off'],
    'import/max-dependencies': [
        'off',
        {
            max: 10,
        },
    ],
    'import/named': ['error'],
    'import/namespace': ['off'],
    'import/newline-after-import': ['error'],
    'import/no-absolute-path': ['error'],
    'import/no-amd': ['error'],
    'import/no-anonymous-default-export': [
        'off',
        {
            allowAnonymousClass: false,
            allowAnonymousFunction: false,
            allowArray: false,
            allowArrowFunction: false,
            allowLiteral: false,
            allowObject: false,
        },
    ],
    'import/no-commonjs': ['off'],
    'import/no-cycle': [
        'error',
        {
            allowUnsafeDynamicCyclicDependency: false,
            ignoreExternal: false,
            maxDepth: '∞',
        },
    ],
    'import/no-default-export': ['error'],
    'import/no-deprecated': ['off'],
    'import/no-duplicates': ['error'],
    'import/no-dynamic-require': ['error'],
    'import/no-extraneous-dependencies': [
        'error',
        {
            devDependencies: [
                '**/*.stories.*',
                '**/*.test.*',
                '**/storybook/**/*.*',
                'vite.config.ts',
                'vitest.config.ts',
                'vitest.setup.ts',
                'stylelint.config.cjs',
                'postcss.config.cjs',
                '**/*.test.*',
                '**/*.e2e.*',
                '**/vite/**/*.*',
                '**/tools/**/*.*',
                '**/scripts/**/*.*',
                'vitest.config.ts',
            ],
            peerDependencies: true,
        },
    ],
    'import/no-import-module-exports': [
        'error',
        {
            exceptions: [],
        },
    ],
    'import/no-internal-modules': [
        'off',
        {
            allow: [],
        },
    ],
    'import/no-mutable-exports': ['error'],
    'import/no-named-as-default': ['error'],
    'import/no-named-as-default-member': ['error'],
    'import/no-named-default': ['error'],
    'import/no-named-export': ['off'],
    'import/no-namespace': ['off'],
    'import/no-nodejs-modules': ['off'],
    'import/no-relative-packages': ['error'],
    'import/no-relative-parent-imports': ['off'],
    'import/no-restricted-paths': ['off'],
    'import/no-self-import': ['error'],
    'import/no-unassigned-import': ['off'],
    'import/no-unresolved': [
        'error',
        {
            caseSensitive: true,
            caseSensitiveStrict: false,
            commonjs: true,
        },
    ],
    'import/no-unused-modules': [
        'off',
        {
            ignoreExports: [],
            missingExports: true,
            unusedExports: true,
        },
    ],
    'import/no-useless-path-segments': [
        'error',
        {
            commonjs: true,
        },
    ],
    'import/no-webpack-loader-syntax': ['error'],
    'import/order': [
        'off',
        {
            distinctGroup: true,
            groups: [['builtin', 'external', 'internal']],
            warnOnUnassignedImports: false,
        },
    ],
    'import/prefer-default-export': ['off'],
    'import/unambiguous': ['off'],
    'simple-import-sort/exports': ['warn'],
    'simple-import-sort/imports': [
        2,
        {
            groups: [
                ['^react', '^@?\\w'],
                ['^@ls'],
                ['^\\$(?!\\.(c|le|sa|sc|pc)ss$)'],
                ['^\\.\\.(?!/?$)', '^\\.\\./?$', '^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
                [
                    '^\\$(uikit|components|utils|config|common|routes|configs|config|types).*\\.(c|le|sa|sc|pc)ss$',
                    '^.+\\.(c|le|sa|sc|pc)ss$',
                ],
            ],
        },
    ],
};
