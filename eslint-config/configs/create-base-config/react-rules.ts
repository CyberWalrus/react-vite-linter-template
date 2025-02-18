import type { Linter } from 'eslint';

export const reactRules: Partial<Linter.RulesRecord> = {
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
};
