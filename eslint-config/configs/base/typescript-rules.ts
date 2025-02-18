import type { Linter } from 'eslint';

export const typescriptRules: Partial<Linter.RulesRecord> = {
    '@typescript-eslint/array-type': [
        'warn',
        {
            default: 'array-simple',
            readonly: 'array-simple',
        },
    ],
    '@typescript-eslint/await-thenable': ['error'],
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/brace-style': [
        'off',
        '1tbs',
        {
            allowSingleLine: true,
        },
    ],
    '@typescript-eslint/comma-dangle': [
        'off',
        {
            // eslint-disable-next-line sonarjs/no-duplicate-string
            arrays: 'always-multiline',
            enums: 'always-multiline',
            exports: 'always-multiline',
            functions: 'always-multiline',
            generics: 'always-multiline',
            imports: 'always-multiline',
            objects: 'always-multiline',
            tuples: 'always-multiline',
        },
    ],
    '@typescript-eslint/comma-spacing': [
        'off',
        {
            after: true,
            before: false,
        },
    ],
    '@typescript-eslint/consistent-type-definitions': ['warn', 'type'],
    '@typescript-eslint/consistent-type-imports': [
        'error',
        {
            fixStyle: 'separate-type-imports',
            prefer: 'type-imports',
        },
    ],
    '@typescript-eslint/default-param-last': ['error'],
    '@typescript-eslint/dot-notation': [
        'error',
        {
            allowIndexSignaturePropertyAccess: false,
            allowKeywords: true,
            allowPattern: '',
            allowPrivateClassPropertyAccess: false,
            allowProtectedClassPropertyAccess: false,
        },
    ],
    '@typescript-eslint/explicit-member-accessibility': ['off'],
    '@typescript-eslint/func-call-spacing': ['off', 'never'],
    '@typescript-eslint/indent': [
        'off',
        2,
        {
            ArrayExpression: 1,
            CallExpression: {
                arguments: 1,
            },
            FunctionDeclaration: {
                body: 1,
                parameters: 1,
            },
            FunctionExpression: {
                body: 1,
                parameters: 1,
            },
            ImportDeclaration: 1,
            ObjectExpression: 1,
            SwitchCase: 1,
            VariableDeclarator: 1,
            flatTernaryExpressions: false,
            ignoreComments: false,
            ignoredNodes: [
                'JSXElement',
                'JSXElement > *',
                'JSXAttribute',
                'JSXIdentifier',
                'JSXNamespacedName',
                'JSXMemberExpression',
                'JSXSpreadAttribute',
                'JSXExpressionContainer',
                'JSXOpeningElement',
                'JSXClosingElement',
                'JSXFragment',
                'JSXOpeningFragment',
                'JSXClosingFragment',
                'JSXText',
                'JSXEmptyExpression',
                'JSXSpreadChild',
            ],
            offsetTernaryExpressions: false,
            outerIIFEBody: 1,
        },
    ],
    '@typescript-eslint/keyword-spacing': [
        'off',
        {
            after: true,
            before: true,
            overrides: {
                case: {
                    after: true,
                },
                return: {
                    after: true,
                },
                throw: {
                    after: true,
                },
            },
        },
    ],
    '@typescript-eslint/member-delimiter-style': ['off'],
    '@typescript-eslint/naming-convention': [
        'off',
        {
            format: ['camelCase', 'PascalCase', 'UPPER_CASE'],
            selector: 'variable',
        },
        {
            format: ['camelCase', 'PascalCase'],
            selector: 'function',
        },
        {
            format: ['PascalCase'],
            selector: 'typeLike',
        },
    ],
    '@typescript-eslint/no-array-constructor': ['error'],
    '@typescript-eslint/no-base-to-string': ['error'],
    '@typescript-eslint/no-dupe-class-members': ['error'],
    '@typescript-eslint/no-duplicate-enum-values': ['error'],
    '@typescript-eslint/no-duplicate-type-constituents': ['error'],
    '@typescript-eslint/no-empty-function': [
        'error',
        {
            allow: ['arrowFunctions', 'functions', 'methods'],
        },
    ],
    '@typescript-eslint/no-explicit-any': ['error'],
    '@typescript-eslint/no-extra-non-null-assertion': ['error'],
    '@typescript-eslint/no-extra-parens': [
        'off',
        'all',
        {
            conditionalAssign: true,
            enforceForArrowConditionals: false,
            ignoreJSX: 'all',
            nestedBinaryExpressions: false,
            returnAssign: false,
        },
    ],
    '@typescript-eslint/no-extra-semi': ['off'],
    '@typescript-eslint/no-floating-promises': ['error'],
    '@typescript-eslint/no-for-in-array': ['error'],
    '@typescript-eslint/no-implied-eval': ['error'],
    '@typescript-eslint/no-loop-func': ['error'],
    '@typescript-eslint/no-loss-of-precision': ['error'],
    '@typescript-eslint/no-magic-numbers': [
        'off',
        {
            detectObjects: false,
            enforceConst: true,
            ignore: [],
            ignoreArrayIndexes: true,
        },
    ],
    '@typescript-eslint/no-misused-new': ['error'],
    '@typescript-eslint/no-misused-promises': ['error'],
    '@typescript-eslint/no-namespace': ['error'],
    '@typescript-eslint/no-non-null-asserted-optional-chain': ['error'],
    '@typescript-eslint/no-object-literal-type-assertion': ['off'],
    '@typescript-eslint/no-redeclare': ['error'],
    '@typescript-eslint/no-redundant-type-constituents': ['error'],
    '@typescript-eslint/no-restricted-types': ['error'],
    '@typescript-eslint/no-shadow': ['error'],
    '@typescript-eslint/no-this-alias': ['error'],
    '@typescript-eslint/no-throw-literal': ['off'],
    '@typescript-eslint/no-unnecessary-type-assertion': ['error'],
    '@typescript-eslint/no-unnecessary-type-constraint': ['error'],
    '@typescript-eslint/no-unsafe-argument': ['error'],
    '@typescript-eslint/no-unsafe-assignment': ['error'],
    '@typescript-eslint/no-unsafe-call': ['error'],
    '@typescript-eslint/no-unsafe-declaration-merging': ['error'],
    '@typescript-eslint/no-unsafe-enum-comparison': ['error'],
    '@typescript-eslint/no-unsafe-member-access': ['error'],
    '@typescript-eslint/no-unsafe-return': ['error'],
    '@typescript-eslint/no-unused-expressions': [
        'off',
        {
            allowShortCircuit: false,
            allowTaggedTemplates: false,
            allowTernary: false,
            enforceForJSX: false,
        },
    ],

    '@typescript-eslint/no-unused-vars': [
        'warn',
        {
            args: 'after-used',
            ignoreRestSiblings: false,
            vars: 'all',
            varsIgnorePattern: '^React$|^_$',
        },
    ],

    '@typescript-eslint/no-use-before-define': [
        'error',
        {
            classes: true,
            functions: true,
            variables: true,
        },
    ],
    '@typescript-eslint/no-useless-constructor': ['error'],
    '@typescript-eslint/no-var-requires': ['warn'],

    '@typescript-eslint/prefer-as-const': ['error'],
    '@typescript-eslint/quotes': [
        'off',
        'single',
        {
            avoidEscape: true,
        },
    ],
    '@typescript-eslint/require-await': ['error'],
    '@typescript-eslint/restrict-plus-operands': ['error'],
    '@typescript-eslint/restrict-template-expressions': ['error'],

    '@typescript-eslint/return-await': ['error', 'in-try-catch'],
    '@typescript-eslint/semi': ['off', 'always'],
    '@typescript-eslint/sort-type-constituents': 'warn',
    '@typescript-eslint/space-before-function-paren': [
        'off',
        {
            anonymous: 'always',
            asyncArrow: 'always',
            named: 'never',
        },
    ],
    '@typescript-eslint/space-infix-ops': ['off'],
    '@typescript-eslint/triple-slash-reference': ['error'],
    '@typescript-eslint/type-annotation-spacing': ['off'],
    '@typescript-eslint/unbound-method': ['off'],
    'typescript-sort-keys/interface': [
        'warn',
        'asc',
        {
            caseSensitive: true,
            natural: true,
            requiredFirst: true,
        },
    ],
    'typescript-sort-keys/string-enum': [
        'warn',
        'asc',
        {
            caseSensitive: true,
            natural: true,
        },
    ],
};
