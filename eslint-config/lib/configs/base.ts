/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable sonarjs/no-duplicate-string */
/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-ignore
import stylisticTs from '@stylistic/eslint-plugin-ts';
// @ts-ignore
import importPlugin from 'eslint-plugin-import';
// @ts-ignore
import jsxA11yPlugin from 'eslint-plugin-jsx-a11y';
// @ts-ignore
import nodePlugin from 'eslint-plugin-node';
import prettierPlugin from 'eslint-plugin-prettier';
import reactPlugin from 'eslint-plugin-react';
// @ts-ignore
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import simpleImportSortPlugin from 'eslint-plugin-simple-import-sort';
import sonarjsPlugin from 'eslint-plugin-sonarjs';
// @ts-ignore
import sortKeysFixPlugin from 'eslint-plugin-sort-keys-fix';
// @ts-ignore
import typescriptSortKeysPlugin from 'eslint-plugin-typescript-sort-keys';
import globals from 'globals';
import tseslint from 'typescript-eslint';

import lsPlugin from '../rules';

export const baseConfig = [
    {
        ignores: ['public', '__generated__', 'coverage'],
    },
    {
        files: ['**/*.ts', '**/*.tsx', '**/*.mjs'],

        languageOptions: {
            ecmaVersion: 2022,
            globals: {
                ...globals.browser,
                ...globals.node,
                __VERSION__: 'readonly',
                mount: true,
                myCustomGlobal: 'readonly',
                shallow: true,
            },
            parser: tseslint.parser,
            parserOptions: {
                ecmaFeatures: {
                    generators: false,
                    jsx: true,
                    objectLiteralDuplicateProperties: false,
                },
                projectService: true,
                tsconfigRootDir: process.cwd(),
            },
            sourceType: 'module',
        },
        plugins: {
            '@ls': lsPlugin,
            '@stylistic/ts': stylisticTs,
            '@typescript-eslint': tseslint.plugin,
            import: importPlugin,
            'jsx-a11y': jsxA11yPlugin,
            node: nodePlugin,
            prettier: prettierPlugin,
            react: reactPlugin,
            'react-hooks': reactHooksPlugin,
            'simple-import-sort': simpleImportSortPlugin,
            sonarjs: sonarjsPlugin,
            'sort-keys-fix': sortKeysFixPlugin,
            'typescript-sort-keys': typescriptSortKeysPlugin,
        },

        rules: {
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
            '@typescript-eslint/array-type': [
                'warn',
                {
                    default: 'array-simple',
                    readonly: 'array-simple',
                },
            ],
            '@typescript-eslint/await-thenable': ['error'],
            '@typescript-eslint/ban-ts-comment': ['error'],
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
            'accessor-pairs': ['off'],
            'array-bracket-newline': ['off', 'consistent'],
            'array-bracket-spacing': ['off', 'never'],
            'array-callback-return': [
                'error',
                {
                    allowImplicit: true,
                    allowVoid: false,
                    checkForEach: false,
                },
            ],
            'array-element-newline': [
                'off',
                {
                    minItems: 3,
                    multiline: true,
                },
            ],
            'arrow-body-style': ['warn', 'as-needed'],
            'arrow-parens': ['off', 'always'],
            'arrow-spacing': [
                'off',
                {
                    after: true,
                    before: true,
                },
            ],
            'block-scoped-var': ['error'],
            'block-spacing': ['off', 'always'],
            'brace-style': [
                'off',
                '1tbs',
                {
                    allowSingleLine: true,
                },
            ],
            'callback-return': ['off'],
            camelcase: [
                'error',
                {
                    ignoreDestructuring: false,
                    ignoreGlobals: false,
                    ignoreImports: false,
                    properties: 'never',
                },
            ],
            'capitalized-comments': [
                'off',
                'never',
                {
                    block: {
                        ignoreConsecutiveComments: true,
                        ignoreInlineComments: true,
                        ignorePattern: '.*',
                    },
                    line: {
                        ignoreConsecutiveComments: true,
                        ignoreInlineComments: true,
                        ignorePattern: '.*',
                    },
                },
            ],
            'class-methods-use-this': [
                'warn',
                {
                    enforceForClassFields: true,
                    exceptMethods: [
                        'render',
                        'getInitialState',
                        'getDefaultProps',
                        'getChildContext',
                        'componentWillMount',
                        'UNSAFE_componentWillMount',
                        'componentDidMount',
                        'componentWillReceiveProps',
                        'UNSAFE_componentWillReceiveProps',
                        'shouldComponentUpdate',
                        'componentWillUpdate',
                        'UNSAFE_componentWillUpdate',
                        'componentDidUpdate',
                        'componentWillUnmount',
                        'componentDidCatch',
                        'getSnapshotBeforeUpdate',
                    ],
                },
            ],
            'comma-dangle': [
                'off',
                {
                    arrays: 'always-multiline',
                    exports: 'always-multiline',
                    functions: 'always-multiline',
                    imports: 'always-multiline',
                    objects: 'always-multiline',
                },
            ],
            'comma-spacing': [
                'off',
                {
                    after: true,
                    before: false,
                },
            ],
            'comma-style': [
                'off',
                'last',
                {
                    exceptions: {
                        ArrayExpression: false,
                        ArrayPattern: false,
                        ArrowFunctionExpression: false,
                        CallExpression: false,
                        FunctionDeclaration: false,
                        FunctionExpression: false,
                        ImportDeclaration: false,
                        NewExpression: false,
                        ObjectExpression: false,
                        ObjectPattern: false,
                        VariableDeclaration: false,
                    },
                },
            ],
            complexity: ['off', 20],
            'computed-property-spacing': ['off', 'never'],
            'consistent-return': ['off'],
            'consistent-this': ['off'],
            'constructor-super': ['error'],
            curly: ['off', 'multi-line'],
            'default-case': [
                'off',
                {
                    commentPattern: '^no default$',
                },
            ],
            'default-case-last': ['error'],
            'default-param-last': ['error'],
            'dot-location': ['off', 'property'],
            'dot-notation': [
                'error',
                {
                    allowKeywords: true,
                    allowPattern: '',
                },
            ],

            'eol-last': ['off', 'always'],
            eqeqeq: [
                'error',
                'always',
                {
                    null: 'ignore',
                },
            ],
            'for-direction': ['error'],
            'func-call-spacing': ['off', 'never'],
            'func-name-matching': [
                'off',
                'always',
                {
                    considerPropertyDescriptor: true,
                    includeCommonJSModuleExports: false,
                },
            ],
            'func-names': ['warn'],
            'func-style': ['off', 'expression'],
            'function-call-argument-newline': ['off', 'consistent'],
            'function-paren-newline': ['off', 'multiline-arguments'],
            'generator-star': ['off'],
            'generator-star-spacing': [
                'off',
                {
                    after: true,
                    before: false,
                },
            ],
            'getter-return': [
                'warn',
                {
                    allowImplicit: true,
                },
            ],
            'global-require': ['off'],
            'grouped-accessor-pairs': ['error'],
            'guard-for-in': ['error'],
            'handle-callback-err': ['off'],
            'id-denylist': ['off'],
            'id-length': ['off'],
            'id-match': ['off'],
            'implicit-arrow-linebreak': ['off', 'beside'],
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
            'import/no-default-export': ['off'],
            'import/no-deprecated': ['off'],
            'import/no-duplicates': ['error'],
            'import/no-dynamic-require': ['error'],
            'import/no-extraneous-dependencies': [
                'off',
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
            indent: [
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
            'indent-legacy': ['off'],
            'init-declarations': ['off'],
            'jsx-a11y/accessible-emoji': ['off'],
            'jsx-a11y/alt-text': [
                'error',
                {
                    area: [],
                    elements: ['img', 'object', 'area', 'input[type="image"]'],
                    img: [],
                    'input[type="image"]': [],
                    object: [],
                },
            ],
            'jsx-a11y/anchor-has-content': [
                'error',
                {
                    components: [],
                },
            ],
            'jsx-a11y/anchor-is-valid': [
                'off',
                {
                    aspects: ['noHref', 'invalidHref', 'preferButton'],
                    components: ['Link'],
                    specialLink: ['to'],
                },
            ],
            'jsx-a11y/aria-activedescendant-has-tabindex': ['error'],
            'jsx-a11y/aria-props': ['error'],
            'jsx-a11y/aria-proptypes': ['error'],
            'jsx-a11y/aria-role': [
                'error',
                {
                    ignoreNonDOM: false,
                },
            ],
            'jsx-a11y/aria-unsupported-elements': ['error'],
            'jsx-a11y/autocomplete-valid': [
                'off',
                {
                    inputComponents: [],
                },
            ],
            'jsx-a11y/click-events-have-key-events': ['off'],
            'jsx-a11y/control-has-associated-label': [
                'error',
                {
                    controlComponents: [],
                    depth: 5,
                    ignoreElements: ['audio', 'canvas', 'embed', 'input', 'textarea', 'tr', 'video'],
                    ignoreRoles: [
                        'grid',
                        'listbox',
                        'menu',
                        'menubar',
                        'radiogroup',
                        'row',
                        'tablist',
                        'toolbar',
                        'tree',
                        'treegrid',
                    ],
                    labelAttributes: ['label'],
                },
            ],
            'jsx-a11y/heading-has-content': [
                'error',
                {
                    components: [''],
                },
            ],
            'jsx-a11y/html-has-lang': ['error'],
            'jsx-a11y/iframe-has-title': ['error'],
            'jsx-a11y/img-redundant-alt': ['error'],
            'jsx-a11y/interactive-supports-focus': ['error'],
            'jsx-a11y/label-has-associated-control': [
                'off',
                {
                    assert: 'both',
                    controlComponents: [],
                    depth: 25,
                    labelAttributes: [],
                    labelComponents: [],
                },
            ],
            'jsx-a11y/label-has-for': [
                'off',
                {
                    allowChildren: false,
                    components: [],
                    required: {
                        every: ['nesting', 'id'],
                    },
                },
            ],
            'jsx-a11y/lang': ['error'],
            'jsx-a11y/media-has-caption': [
                'off',
                {
                    audio: [],
                    track: [],
                    video: [],
                },
            ],
            'jsx-a11y/mouse-events-have-key-events': ['error'],
            'jsx-a11y/no-access-key': ['error'],
            'jsx-a11y/no-autofocus': [
                'error',
                {
                    ignoreNonDOM: true,
                },
            ],
            'jsx-a11y/no-distracting-elements': [
                'error',
                {
                    elements: ['marquee', 'blink'],
                },
            ],
            'jsx-a11y/no-interactive-element-to-noninteractive-role': [
                'error',
                {
                    tr: ['none', 'presentation'],
                },
            ],
            'jsx-a11y/no-noninteractive-element-interactions': [
                'off',
                {
                    handlers: ['onClick', 'onMouseDown', 'onMouseUp', 'onKeyPress', 'onKeyDown', 'onKeyUp'],
                },
            ],
            'jsx-a11y/no-noninteractive-element-to-interactive-role': [
                'error',
                {
                    li: ['menuitem', 'option', 'row', 'tab', 'treeitem'],
                    ol: ['listbox', 'menu', 'menubar', 'radiogroup', 'tablist', 'tree', 'treegrid'],
                    table: ['grid'],
                    td: ['gridcell'],
                    ul: ['listbox', 'menu', 'menubar', 'radiogroup', 'tablist', 'tree', 'treegrid'],
                },
            ],
            'jsx-a11y/no-noninteractive-tabindex': [
                'error',
                {
                    roles: ['tabpanel'],
                    tags: [],
                },
            ],
            'jsx-a11y/no-onchange': ['off'],
            'jsx-a11y/no-redundant-roles': ['error'],
            'jsx-a11y/no-static-element-interactions': [
                'off',
                {
                    handlers: ['onClick', 'onMouseDown', 'onMouseUp', 'onKeyPress', 'onKeyDown', 'onKeyUp'],
                },
            ],
            'jsx-a11y/role-has-required-aria-props': ['error'],
            'jsx-a11y/role-supports-aria-props': ['error'],
            'jsx-a11y/scope': ['error'],
            'jsx-a11y/tabindex-no-positive': ['error'],
            'jsx-quotes': ['off', 'prefer-double'],
            'key-spacing': [
                'off',
                {
                    afterColon: true,
                    beforeColon: false,
                },
            ],
            'keyword-spacing': [
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
            'line-comment-position': [
                'off',
                {
                    applyDefaultPatterns: true,
                    ignorePattern: '',
                    position: 'above',
                },
            ],
            'linebreak-style': ['off', 'unix'],
            'lines-around-comment': ['off'],
            'lines-around-directive': [
                'error',
                {
                    after: 'always',
                    before: 'always',
                },
            ],
            'lines-between-class-members': [
                'error',
                'always',
                {
                    exceptAfterSingleLine: false,
                },
            ],
            'max-classes-per-file': ['error', 1],
            'max-depth': ['off', 4],
            'max-len': [
                'off',
                100,
                2,
                {
                    ignoreComments: false,
                    ignoreRegExpLiterals: true,
                    ignoreStrings: true,
                    ignoreTemplateLiterals: true,
                    ignoreUrls: true,
                },
            ],
            'max-lines': [
                'off',
                {
                    max: 300,
                    skipBlankLines: true,
                    skipComments: true,
                },
            ],
            'max-lines-per-function': [
                'off',
                {
                    IIFEs: true,
                    max: 50,
                    skipBlankLines: true,
                    skipComments: true,
                },
            ],
            'max-nested-callbacks': ['off'],
            'max-params': ['off', 3],
            'max-statements': ['off', 10],
            'max-statements-per-line': [
                'off',
                {
                    max: 1,
                },
            ],
            'media-has-caption': ['off'],
            'multiline-comment-style': ['off', 'starred-block'],
            'multiline-ternary': ['off', 'never'],
            'new-cap': [
                'error',
                {
                    capIsNew: false,
                    capIsNewExceptions: ['Immutable.Map', 'Immutable.Set', 'Immutable.List'],
                    newIsCap: true,
                    newIsCapExceptions: [],
                    properties: true,
                },
            ],
            'new-parens': ['off'],
            'newline-after-var': ['off'],
            'newline-before-return': ['off'],
            'newline-per-chained-call': [
                'off',
                {
                    ignoreChainWithDepth: 4,
                },
            ],
            'no-alert': ['warn'],
            'no-array-constructor': ['off'],
            'no-arrow-condition': ['off'],
            'no-async-promise-executor': ['error'],
            'no-await-in-loop': ['off'],
            'no-bitwise': ['error'],
            'no-buffer-constructor': ['error'],
            'no-caller': ['error'],
            'no-case-declarations': ['error'],
            'no-catch-shadow': ['off'],
            'no-class-assign': ['error'],
            'no-comma-dangle': ['off'],
            'no-compare-neg-zero': ['error'],
            'no-cond-assign': ['error', 'always'],
            'no-confusing-arrow': [
                'off',
                {
                    allowParens: true,
                    onlyOneSimpleParam: false,
                },
            ],
            'no-console': ['off'],
            'no-const-assign': ['error'],
            'no-constant-condition': ['warn'],
            'no-constructor-return': ['error'],
            'no-continue': ['error'],
            'no-control-regex': ['error'],
            'no-debugger': ['error'],
            'no-delete-var': ['error'],
            'no-div-regex': ['off'],
            'no-dupe-args': ['error'],
            'no-dupe-class-members': ['error'],
            'no-dupe-else-if': ['error'],
            'no-dupe-keys': ['error'],
            'no-duplicate-case': ['error'],
            'no-duplicate-imports': ['off'],
            'no-else-return': [
                'error',
                {
                    allowElseIf: false,
                },
            ],
            'no-empty': ['error'],
            'no-empty-character-class': ['error'],
            'no-empty-function': [
                'error',
                {
                    allow: ['arrowFunctions', 'functions', 'methods'],
                },
            ],
            'no-empty-pattern': ['error'],
            'no-eq-null': ['off'],
            'no-eval': ['error'],
            'no-ex-assign': ['error'],
            'no-extend-native': ['error'],
            'no-extra-bind': ['error'],
            'no-extra-boolean-cast': ['error'],
            'no-extra-label': ['error'],
            'no-extra-parens': [
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
            'no-extra-semi': ['off'],
            'no-fallthrough': ['error'],
            'no-floating-decimal': ['off'],
            'no-func-assign': ['error'],
            'no-global-assign': [
                'error',
                {
                    exceptions: [],
                },
            ],
            'no-implicit-coercion': [
                'off',
                {
                    allow: [],
                    boolean: false,
                    number: true,
                    string: true,
                },
            ],
            'no-implicit-globals': ['off'],
            'no-implied-eval': ['error'],
            'no-import-assign': ['error'],
            'no-inline-comments': ['off'],
            'no-inner-declarations': ['error'],
            'no-invalid-regexp': ['error'],
            'no-invalid-this': ['off'],
            'no-irregular-whitespace': ['error'],
            'no-iterator': ['error'],
            'no-label-var': ['error'],
            'no-labels': [
                'error',
                {
                    allowLoop: false,
                    allowSwitch: false,
                },
            ],
            'no-lone-blocks': ['error'],
            'no-lonely-if': ['error'],
            'no-loop-func': ['error'],
            'no-loss-of-precision': ['off'],
            'no-magic-numbers': [
                'off',
                {
                    detectObjects: false,
                    enforceConst: true,
                    ignore: [],
                    ignoreArrayIndexes: true,
                },
            ],
            'no-misleading-character-class': ['error'],
            'no-mixed-operators': [
                'off',
                {
                    allowSamePrecedence: false,
                    groups: [
                        ['%', '**'],
                        ['%', '+'],
                        ['%', '-'],
                        ['%', '*'],
                        ['%', '/'],
                        ['/', '*'],
                        ['&', '|', '<<', '>>', '>>>'],
                        ['==', '!=', '===', '!=='],
                        ['&&', '||'],
                    ],
                },
            ],
            'no-mixed-requires': ['off', false],
            'no-mixed-spaces-and-tabs': ['off'],
            'no-multi-assign': ['error'],
            'no-multi-spaces': [
                'off',
                {
                    ignoreEOLComments: false,
                },
            ],
            'no-multi-str': ['error'],
            'no-multiple-empty-lines': [
                'off',
                {
                    max: 1,
                    maxBOF: 0,
                    maxEOF: 0,
                },
            ],
            'no-native-reassign': ['off'],
            'no-negated-condition': ['off'],
            'no-negated-in-lhs': ['off'],
            'no-nested-ternary': ['error'],
            'no-new': ['error'],
            'no-new-func': ['error'],
            'no-new-object': ['error'],
            'no-new-require': ['error'],
            'no-new-symbol': ['error'],
            'no-new-wrappers': ['error'],
            'no-nonoctal-decimal-escape': ['error'],
            'no-obj-calls': ['error'],
            'no-octal': ['error'],
            'no-octal-escape': ['error'],
            'no-param-reassign': [
                'off',
                {
                    ignorePropertyModificationsFor: [
                        'acc',
                        'accumulator',
                        'e',
                        'ctx',
                        'context',
                        'req',
                        'request',
                        'res',
                        'response',
                        '$scope',
                        'staticContext',
                    ],
                    props: true,
                },
            ],
            'no-path-concat': ['error'],
            'no-plusplus': ['off'],
            'no-process-env': ['off'],
            'no-process-exit': ['off'],
            'no-promise-executor-return': ['error'],
            'no-proto': ['error'],
            'no-prototype-builtins': ['error'],
            'no-redeclare': ['error'],
            'no-regex-spaces': ['error'],
            'no-reserved-keys': ['off'],
            'no-restricted-exports': [
                'error',
                {
                    restrictedNamedExports: ['default', 'then'],
                },
            ],
            'no-restricted-globals': [
                'off',
                {
                    message:
                        'Use Number.isFinite instead https://github.com/airbnb/javascript#standard-library--isfinite',
                    name: 'isFinite',
                },
                {
                    message: 'Use Number.isNaN instead https://github.com/airbnb/javascript#standard-library--isnan',
                    name: 'isNaN',
                },
                'addEventListener',
                'blur',
                'close',
                'closed',
                'confirm',
                'defaultStatus',
                'defaultstatus',
                'event',
                'external',
                'find',
                'focus',
                'frameElement',
                'frames',
                'history',
                'innerHeight',
                'innerWidth',
                'length',
                'location',
                'locationbar',
                'menubar',
                'moveBy',
                'moveTo',
                'name',
                'onblur',
                'onerror',
                'onfocus',
                'onload',
                'onresize',
                'onunload',
                'open',
                'opener',
                'opera',
                'outerHeight',
                'outerWidth',
                'pageXOffset',
                'pageYOffset',
                'parent',
                'print',
                'removeEventListener',
                'resizeBy',
                'resizeTo',
                'screen',
                'screenLeft',
                'screenTop',
                'screenX',
                'screenY',
                'scroll',
                'scrollbars',
                'scrollBy',
                'scrollTo',
                'scrollX',
                'scrollY',
                'self',
                'status',
                'statusbar',
                'stop',
                'toolbar',
                'top',
            ],
            'no-restricted-imports': [
                'off',
                {
                    paths: [],
                    patterns: [],
                },
            ],
            'no-restricted-modules': ['off'],
            'no-restricted-properties': [
                'warn',
                {
                    message: 'Please use square brackets to access array element with index.',
                    property: 'at',
                },
            ],
            'no-restricted-syntax': [
                'off',
                {
                    message:
                        'for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.',
                    selector: 'ForInStatement',
                },
                {
                    message:
                        'iterators/generators require regenerator-runtime, which is too heavyweight for this guide to allow them. Separately, loops should be avoided in favor of array iterations.',
                    selector: 'ForOfStatement',
                },
                {
                    message:
                        'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.',
                    selector: 'LabeledStatement',
                },
                {
                    message:
                        '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.',
                    selector: 'WithStatement',
                },
            ],
            'no-return-assign': ['error', 'always'],
            'no-return-await': ['error'],
            'no-script-url': ['error'],
            'no-self-assign': [
                'error',
                {
                    props: true,
                },
            ],
            'no-self-compare': ['error'],
            'no-sequences': ['error'],
            'no-setter-return': ['error'],
            'no-shadow': ['off'],
            'no-shadow-restricted-names': ['error'],
            'no-space-before-semi': ['off'],
            'no-spaced-func': ['off'],
            'no-sparse-arrays': ['error'],
            'no-sync': ['off'],
            'no-tabs': ['off'],
            'no-template-curly-in-string': ['error'],
            'no-ternary': ['off'],
            'no-this-before-super': ['error'],
            'no-throw-literal': ['error'],
            'no-trailing-spaces': [
                'off',
                {
                    ignoreComments: false,
                    skipBlankLines: false,
                },
            ],
            'no-undef': ['off'],
            'no-undef-init': ['error'],
            'no-undefined': ['off'],
            'no-underscore-dangle': [
                'warn',
                {
                    allow: ['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'],
                    allowAfterSuper: false,
                    allowAfterThis: false,
                    allowAfterThisConstructor: false,
                    allowFunctionParams: true,
                    allowInArrayDestructuring: true,
                    allowInObjectDestructuring: true,
                    enforceInClassFields: false,
                    enforceInMethodNames: true,
                },
            ],
            'no-unexpected-multiline': ['off'],
            'no-unmodified-loop-condition': ['off'],
            'no-unneeded-ternary': [
                'error',
                {
                    defaultAssignment: false,
                },
            ],
            'no-unreachable': ['error'],
            'no-unreachable-loop': [
                'error',
                {
                    ignore: [],
                },
            ],
            'no-unsafe-finally': ['error'],
            'no-unsafe-negation': ['error'],
            'no-unsafe-optional-chaining': [
                'error',
                {
                    disallowArithmeticOperators: true,
                },
            ],
            'no-unused-expressions': [
                'error',
                {
                    allowShortCircuit: false,
                    allowTaggedTemplates: false,
                    allowTernary: false,
                    enforceForJSX: false,
                },
            ],
            'no-unused-labels': ['error'],
            'no-unused-private-class-members': ['off'],
            'no-unused-vars': 'off',
            'no-use-before-define': [
                'off',
                {
                    classes: true,
                    functions: true,
                    variables: true,
                },
            ],
            'no-useless-backreference': ['error'],
            'no-useless-call': ['off'],
            'no-useless-catch': ['error'],
            'no-useless-computed-key': ['error'],
            'no-useless-concat': ['error'],
            'no-useless-constructor': ['error'],
            'no-useless-escape': ['error'],
            'no-useless-rename': [
                'error',
                {
                    ignoreDestructuring: false,
                    ignoreExport: false,
                    ignoreImport: false,
                },
            ],
            'no-useless-return': ['error'],
            'no-var': ['error'],
            'no-void': ['error'],
            'no-warning-comments': [
                'off',
                {
                    location: 'start',
                    terms: ['todo', 'fixme', 'xxx'],
                },
            ],
            'no-whitespace-before-property': ['off'],
            'no-with': ['error'],
            'no-wrap-func': ['off'],
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
            'nonblock-statement-body-position': [
                'off',
                'beside',
                {
                    overrides: {},
                },
            ],
            'object-curly-newline': [
                'off',
                {
                    ExportDeclaration: {
                        consistent: true,
                        minProperties: 4,
                        multiline: true,
                    },
                    ImportDeclaration: {
                        consistent: true,
                        minProperties: 4,
                        multiline: true,
                    },
                    ObjectExpression: {
                        consistent: true,
                        minProperties: 4,
                        multiline: true,
                    },
                    ObjectPattern: {
                        consistent: true,
                        minProperties: 4,
                        multiline: true,
                    },
                },
            ],
            'object-curly-spacing': ['off', 'always'],
            'object-property-newline': [
                'off',
                {
                    allowAllPropertiesOnSameLine: true,
                    allowMultiplePropertiesPerLine: false,
                },
            ],
            'object-shorthand': [
                'error',
                'always',
                {
                    avoidQuotes: true,
                    ignoreConstructors: false,
                },
            ],
            'one-var': ['error', 'never'],
            'one-var-declaration-per-line': ['off', 'always'],
            'operator-assignment': ['error', 'always'],
            'operator-linebreak': [
                'off',
                'before',
                {
                    overrides: {
                        '=': 'none',
                    },
                },
            ],
            'padded-blocks': [
                'off',
                {
                    blocks: 'never',
                    classes: 'never',
                    switches: 'never',
                },
                {
                    allowSingleLineBlocks: true,
                },
            ],
            'padding-line-between-statements': [
                'warn',
                {
                    blankLine: 'always',
                    next: 'return',
                    prev: '*',
                },
            ],
            'prefer-arrow-callback': [
                'off',
                {
                    allowNamedFunctions: false,
                    allowUnboundThis: true,
                },
            ],
            'prefer-const': [
                'error',
                {
                    destructuring: 'any',
                    ignoreReadBeforeAssign: true,
                },
            ],
            'prefer-destructuring': [
                'error',
                {
                    AssignmentExpression: {
                        array: true,
                        object: false,
                    },
                    VariableDeclarator: {
                        array: false,
                        object: true,
                    },
                },
                {
                    enforceForRenamedProperties: false,
                },
            ],
            'prefer-exponentiation-operator': ['error'],
            'prefer-named-capture-group': ['off'],
            'prefer-numeric-literals': ['error'],
            'prefer-object-spread': ['error'],
            'prefer-promise-reject-errors': [
                'off',
                {
                    allowEmptyReject: true,
                },
            ],
            'prefer-reflect': ['off'],
            'prefer-regex-literals': [
                'error',
                {
                    disallowRedundantWrapping: true,
                },
            ],
            'prefer-rest-params': ['error'],
            'prefer-spread': ['error'],
            'prefer-template': ['error'],
            'prettier/prettier': ['error'],
            'quote-props': [
                'off',
                'as-needed',
                {
                    keywords: false,
                    numbers: false,
                    unnecessary: true,
                },
            ],
            quotes: [
                'off',
                'single',
                {
                    avoidEscape: true,
                },
            ],
            radix: ['error'],
            'react/boolean-prop-naming': [
                'off',
                {
                    message: '',
                    propTypeNames: ['bool', 'mutuallyExclusiveTrueProps'],
                    rule: '^(is|has)[A-Z]([A-Za-z0-9]?)+',
                },
            ],
            'react/button-has-type': [
                'error',
                {
                    button: true,
                    reset: false,
                    submit: true,
                },
            ],
            'react/default-props-match-prop-types': [
                'error',
                {
                    allowRequiredDefaults: false,
                },
            ],
            'react/destructuring-assignment': ['off', 'always'],
            'react/display-name': [
                'off',
                {
                    ignoreTranspilerName: false,
                },
            ],
            'react/forbid-component-props': [
                'off',
                {
                    forbid: [],
                },
            ],
            'react/forbid-dom-props': [
                'off',
                {
                    forbid: [],
                },
            ],
            'react/forbid-elements': [
                'off',
                {
                    forbid: [],
                },
            ],
            'react/forbid-foreign-prop-types': [
                'warn',
                {
                    allowInPropTypes: true,
                },
            ],
            'react/forbid-prop-types': [
                'off',
                {
                    checkChildContextTypes: true,
                    checkContextTypes: true,
                    forbid: ['any', 'array', 'object'],
                },
            ],
            'react/function-component-definition': [
                'off',
                {
                    namedComponents: ['function-declaration', 'function-expression'],
                    unnamedComponents: 'function-expression',
                },
            ],
            'react/jsx-boolean-value': [
                'error',
                'never',
                {
                    always: [],
                },
            ],
            'react/jsx-child-element-spacing': ['off'],
            'react/jsx-closing-bracket-location': ['off', 'line-aligned'],
            'react/jsx-closing-tag-location': ['off'],
            'react/jsx-curly-brace-presence': [
                'error',
                {
                    children: 'never',
                    props: 'never',
                },
            ],
            'react/jsx-curly-newline': [
                'off',
                {
                    multiline: 'consistent',
                    singleline: 'consistent',
                },
            ],
            'react/jsx-curly-spacing': [
                'off',
                'never',
                {
                    allowMultiline: true,
                },
            ],
            'react/jsx-equals-spacing': ['off', 'never'],
            'react/jsx-filename-extension': [
                'warn',
                {
                    extensions: ['.js', '.jsx', '.ts', '.tsx'],
                },
            ],
            'react/jsx-first-prop-new-line': ['off', 'multiline-multiprop'],
            'react/jsx-fragments': ['warn', 'syntax'],
            'react/jsx-handler-names': [
                'off',
                {
                    eventHandlerPrefix: 'handle',
                    eventHandlerPropPrefix: 'on',
                },
            ],
            'react/jsx-indent': ['off', 2],
            'react/jsx-indent-props': ['off', 2],
            'react/jsx-key': ['off'],
            'react/jsx-max-depth': ['off'],
            'react/jsx-max-props-per-line': [
                'off',
                {
                    maximum: 1,
                    when: 'multiline',
                },
            ],
            'react/jsx-newline': ['off'],
            'react/jsx-no-bind': [
                'error',
                {
                    allowArrowFunctions: true,
                    allowBind: false,
                    allowFunctions: false,
                    ignoreDOMComponents: true,
                    ignoreRefs: true,
                },
            ],
            'react/jsx-no-comment-textnodes': ['error'],
            'react/jsx-no-constructed-context-values': ['error'],
            'react/jsx-no-duplicate-props': [
                'error',
                {
                    ignoreCase: true,
                },
            ],
            'react/jsx-no-literals': [
                'off',
                {
                    noStrings: true,
                },
            ],
            'react/jsx-no-script-url': [
                'error',
                [
                    {
                        name: 'Link',
                        props: ['to'],
                    },
                ],
            ],
            'react/jsx-no-target-blank': [
                'error',
                {
                    enforceDynamicLinks: 'always',
                    forms: false,
                    links: true,
                },
            ],
            'react/jsx-no-undef': ['error'],
            'react/jsx-no-useless-fragment': ['error'],
            'react/jsx-one-expression-per-line': [
                'off',
                {
                    allow: 'single-child',
                },
            ],
            'react/jsx-pascal-case': [
                'error',
                {
                    allowAllCaps: true,
                    ignore: [],
                },
            ],
            'react/jsx-props-no-multi-spaces': ['off'],
            'react/jsx-props-no-spreading': [
                'off',
                {
                    custom: 'enforce',
                    exceptions: [],
                    explicitSpread: 'ignore',
                    html: 'enforce',
                },
            ],
            'react/jsx-sort-default-props': [
                'off',
                {
                    ignoreCase: true,
                },
            ],
            'react/jsx-sort-prop-types': ['off'],
            'react/jsx-sort-props': [
                'warn',
                {
                    locale: 'auto',
                    multiline: 'last',
                    reservedFirst: true,
                    shorthandFirst: true,
                },
            ],
            'react/jsx-space-before-closing': ['off', 'always'],
            'react/jsx-tag-spacing': [
                'off',
                {
                    afterOpening: 'never',
                    beforeClosing: 'never',
                    beforeSelfClosing: 'always',
                    closingSlash: 'never',
                },
            ],
            'react/jsx-uses-react': ['warn'],
            'react/jsx-uses-vars': ['error'],
            'react/jsx-wrap-multilines': [
                'off',
                {
                    arrow: 'parens-new-line',
                    assignment: 'parens-new-line',
                    condition: 'parens-new-line',
                    declaration: 'parens-new-line',
                    logical: 'parens-new-line',
                    prop: 'parens-new-line',
                    return: 'parens-new-line',
                },
            ],
            'react/no-access-state-in-setstate': ['error'],
            'react/no-adjacent-inline-elements': ['off'],
            'react/no-array-index-key': ['error'],
            'react/no-arrow-function-lifecycle': ['error'],
            'react/no-children-prop': ['warn'],
            'react/no-danger': ['warn'],
            'react/no-danger-with-children': ['error'],
            'react/no-deprecated': ['error'],
            'react/no-did-mount-set-state': ['off'],
            'react/no-did-update-set-state': ['error'],
            'react/no-direct-mutation-state': ['off'],
            'react/no-find-dom-node': ['error'],
            'react/no-invalid-html-attribute': ['error'],
            'react/no-is-mounted': ['error'],
            'react/no-multi-comp': ['off'],
            'react/no-namespace': ['error'],
            'react/no-redundant-should-component-update': ['error'],
            'react/no-render-return-value': ['error'],
            'react/no-set-state': ['off'],
            'react/no-string-refs': ['error'],
            'react/no-this-in-sfc': ['error'],
            'react/no-typos': ['error'],
            'react/no-unescaped-entities': ['error'],
            'react/no-unknown-property': ['error'],
            'react/no-unsafe': ['off'],
            'react/no-unstable-nested-components': ['error'],
            'react/no-unused-class-component-methods': ['error'],
            'react/no-unused-prop-types': [
                'off',
                {
                    customValidators: [],
                    skipShapeProps: true,
                },
            ],
            'react/no-unused-state': ['error'],
            'react/no-will-update-set-state': ['error'],
            'react/prefer-es6-class': ['error', 'always'],
            'react/prefer-exact-props': ['error'],
            'react/prefer-read-only-props': ['off'],
            'react/prefer-stateless-function': [
                'error',
                {
                    ignorePureComponents: true,
                },
            ],
            'react/prop-types': ['off', {}],
            'react/react-in-jsx-scope': ['off'],
            'react/require-default-props': [
                'off',
                {
                    forbidDefaultForRequired: true,
                },
            ],
            'react/require-optimization': [
                'off',
                {
                    allowDecorators: [],
                },
            ],
            'react/require-render-return': ['error'],
            'react/self-closing-comp': ['error'],
            'react/sort-comp': [
                'warn',
                {
                    order: [
                        'static-variables',
                        'static-methods',
                        'instance-variables',
                        'lifecycle',
                        'everything-else',
                        'render',
                    ],
                },
            ],
            'react/sort-prop-types': [
                'off',
                {
                    callbacksLast: false,
                    ignoreCase: true,
                    requiredFirst: false,
                    sortShapeProp: true,
                },
            ],
            'react/state-in-constructor': ['off', 'always'],
            'react/static-property-placement': ['off', 'property assignment'],
            'react/style-prop-object': ['error'],
            'react/void-dom-elements-no-children': ['error'],
            'react-hooks/exhaustive-deps': ['warn'],
            'react-hooks/rules-of-hooks': ['error'],
            'require-atomic-updates': ['off'],
            'require-await': ['off'],
            'require-jsdoc': ['off'],
            'require-unicode-regexp': ['off'],
            'require-yield': ['error'],
            'rest-spread-spacing': ['off', 'never'],
            semi: ['off', 'always'],
            'semi-spacing': [
                'off',
                {
                    after: true,
                    before: false,
                },
            ],
            'semi-style': ['off', 'last'],
            'simple-import-sort/exports': ['warn'],
            'simple-import-sort/imports': [
                'warn',
                {
                    groups: [
                        ['^react', '^@?\\w'],
                        ['^\\$app+', '^\\$pages+', '^\\$widgets+', '^\\$entities+', '^\\$shared+', '^\\$+'],
                        ['^\\.\\.(?!/?$)', '^\\.\\./?$', '^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
                        ['^\\$styles.+\\.(c|le|sa|sc|pc)ss$', '^.+\\.(c|le|sa|sc|pc)ss$'],
                    ],
                },
            ],
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
            'sort-imports': [
                'off',
                {
                    ignoreCase: false,
                    ignoreDeclarationSort: false,
                    ignoreMemberSort: false,
                    memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
                },
            ],
            'sort-keys': [
                'off',
                'asc',
                {
                    caseSensitive: false,
                    natural: true,
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
            'sort-vars': ['off'],
            'space-after-function-name': ['off'],
            'space-after-keywords': ['off'],
            'space-before-blocks': ['off'],
            'space-before-function-paren': [
                'off',
                {
                    anonymous: 'always',
                    asyncArrow: 'always',
                    named: 'never',
                },
            ],
            'space-before-function-parentheses': ['off'],
            'space-before-keywords': ['off'],
            'space-in-brackets': ['off'],
            'space-in-parens': ['off', 'never'],
            'space-infix-ops': ['off'],
            'space-return-throw-case': ['off'],
            'space-unary-ops': [
                'off',
                {
                    nonwords: false,
                    overrides: {},
                    words: true,
                },
            ],
            'space-unary-word-ops': ['off'],
            'spaced-comment': [
                'error',
                'always',
                {
                    block: {
                        balanced: true,
                        exceptions: ['-', '+'],
                        markers: ['=', '!', ':', '::'],
                    },
                    line: {
                        exceptions: ['-', '+'],
                        markers: ['=', '!', '/'],
                    },
                },
            ],
            strict: ['error', 'never'],
            'switch-colon-spacing': [
                'off',
                {
                    after: true,
                    before: false,
                },
            ],
            'symbol-description': ['error'],
            'template-curly-spacing': ['off'],
            'template-tag-spacing': ['off', 'never'],
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
            'unicode-bom': ['off', 'never'],
            'use-isnan': ['error'],
            'valid-jsdoc': ['off'],
            'valid-typeof': [
                'error',
                {
                    requireStringLiterals: true,
                },
            ],
            'vars-on-top': ['error'],
            'wrap-iife': [
                'off',
                'outside',
                {
                    functionPrototypeMethods: false,
                },
            ],
            'wrap-regex': ['off'],
            'yield-star-spacing': ['off', 'after'],
            yoda: ['error'],
        },
        settings: {
            'import/core-modules': [],
            'import/extensions': ['.js', '.ts', '.mjs', '.jsx', '.tsx', '.d.ts'],
            'import/external-module-folders': ['node_modules', 'node_modules/@types'],
            'import/ignore': ['node_modules', '\\.(coffee|scss|css|less|hbs|svg|json)$'],
            'import/parsers': {
                '@typescript-eslint/parser': ['.ts', '.tsx', '.d.ts'],
            },
            'import/resolver': {
                node: {
                    extensions: ['.js', '.ts', '.jsx', '.tsx', '.json', '.tsx', '.d.ts'],
                },
                typescript: {
                    alwaysTryTypes: true,
                    project: './tsconfig.json',
                },
            },
            propWrapperFunctions: ['forbidExtraProps', 'exact', 'Object.freeze'],
            react: {
                pragma: 'React',
                version: 'detect',
            },
        },
    },
];

export default baseConfig;
