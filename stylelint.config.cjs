module.exports = {
    customSyntax: require('postcss-scss'),
    extends: [
        'stylelint-config-css-modules',
        'stylelint-prettier/recommended',
        '@greenly/stylelint-config-rational-order',
    ],
    plugins: [
        'stylelint-csstree-validator',
        'stylelint-declaration-block-no-ignored-properties',
        'stylelint-z-index-value-constraint',
        'stylelint-prettier',
        'stylelint-order',
        '@greenly/stylelint-config-rational-order/plugin',
    ],
    rules: {
        'at-rule-disallowed-list': ['document', 'viewport', 'counter-style', 'font-feature-values'],

        'at-rule-empty-line-before': [
            'always',
            {
                except: [
                    'after-same-name',
                    'inside-block',
                    'blockless-after-same-name-blockless',
                    'blockless-after-blockless',
                    'first-nested',
                ],
            },
        ],

        'at-rule-name-case': 'lower',

        'at-rule-name-space-after': 'always',

        // Supported features
        'at-rule-no-unknown': null,

        'at-rule-no-vendor-prefix': true,

        'at-rule-semicolon-newline-after': 'always',

        'at-rule-semicolon-space-before': 'never',

        'block-closing-brace-empty-line-before': 'never',

        'block-closing-brace-newline-after': 'always',

        'block-closing-brace-newline-before': 'always-multi-line',

        'block-no-empty': true,

        'block-opening-brace-newline-after': 'always-multi-line',

        'block-opening-brace-space-after': 'always-single-line',

        'block-opening-brace-space-before': 'always',

        'color-hex-case': 'lower',

        'color-named': 'never',

        'color-no-invalid-hex': true,

        'comment-empty-line-before': [
            'always',
            {
                except: ['first-nested'],
                ignore: ['after-comment', 'stylelint-commands'],
            },
        ],

        'comment-no-empty': true,

        'comment-whitespace-inside': 'always',

        'comment-word-disallowed-list': ['/^TODO:/', '/^@TODO:/'],

        'csstree/validator': {
            syntaxExtensions: ['sass', 'less'],
        },

        'custom-property-empty-line-before': [
            'always',
            {
                except: ['after-comment', 'after-custom-property', 'first-nested'],
                ignore: ['first-nested'],
            },
        ],

        'declaration-bang-space-after': 'always',

        'declaration-bang-space-before': 'always',

        // Invalid code
        'declaration-block-no-duplicate-properties': [
            true,
            {
                ignoreProperties: ['/background\\-/'],
            },
        ],

        'declaration-block-no-redundant-longhand-properties': true,

        'declaration-block-no-shorthand-property-overrides': true,

        'declaration-block-semicolon-newline-after': 'always',

        'declaration-block-semicolon-newline-before': 'never-multi-line',

        'declaration-block-semicolon-space-after': 'always-single-line',

        'declaration-block-semicolon-space-before': 'never',

        'declaration-block-single-line-max-declarations': 1,

        'declaration-block-trailing-semicolon': 'always',

        'declaration-colon-space-after': 'always',

        'declaration-colon-space-before': 'never',

        'declaration-empty-line-before': [
            'never',
            {
                ignore: ['after-comment', 'after-declaration'],
            },
        ],

        'declaration-no-important': true,

        'font-family-name-quotes': 'always-where-recommended',

        'font-family-no-duplicate-names': true,

        'font-family-no-missing-generic-family-keyword': true,

        'function-calc-no-unspaced-operator': true,

        'function-comma-newline-after': 'never-multi-line',

        'function-comma-newline-before': 'never-multi-line',

        'function-comma-space-after': 'always',

        'function-comma-space-before': 'never',

        'function-disallowed-list': [
            'hsl',
            'hsla',
            'repeating-linear-gradient',
            'repeating-radial-gradient',
            'hwb',
            'inset',
            'matrix3d',
            'perspective',
            'polygon',
            'rotate3d',
            'scale3d',
            'symbols',
            'translate3d',
        ],

        'function-linear-gradient-no-nonstandard-direction': true,

        'function-max-empty-lines': 0,

        'function-name-case': 'lower',

        'function-parentheses-newline-inside': 'never-multi-line',

        'function-parentheses-space-inside': 'never',

        'function-url-no-scheme-relative': true,

        'function-url-quotes': 'always',

        'function-url-scheme-disallowed-list': ['data', 'ftp', 'file', '/^http/'],

        'function-whitespace-after': 'always',

        // Indentation style
        indentation: 4,

        'keyframe-declaration-no-important': true,

        'max-empty-lines': 1,

        'max-nesting-depth': [
            5,
            {
                ignore: ['blockless-at-rules'],
            },
        ],

        'media-feature-colon-space-after': 'always',

        'media-feature-colon-space-before': 'never',

        'media-feature-name-case': 'lower',

        'media-feature-name-disallowed-list': [
            'any-hover',
            'any-pointer',
            'color-gamut',
            'grid',
            'inverted-colors',
            'max-monochrome',
            'min-monochrome',
            'monochrome',
            'scripting',
            'update',
        ],

        'media-feature-name-no-unknown': true,

        'media-feature-name-no-vendor-prefix': true,

        'media-feature-parentheses-space-inside': 'never',

        'media-feature-range-operator-space-after': 'always',

        'media-feature-range-operator-space-before': 'always',

        'media-query-list-comma-newline-after': 'never-multi-line',

        'media-query-list-comma-newline-before': 'never-multi-line',

        'media-query-list-comma-space-after': 'always',

        'media-query-list-comma-space-before': 'never',

        'no-duplicate-at-import-rules': true,

        'no-duplicate-selectors': true,

        // TODO: remove
        'no-empty-source': true,

        'no-eol-whitespace': true,

        'no-extra-semicolons': true,

        'no-invalid-double-slash-comments': true,

        'no-missing-end-of-source-newline': true,

        'number-leading-zero': 'always',

        'number-max-precision': 2,

        'number-no-trailing-zeros': true,

        // Code style
        'order/properties-order': [],

        'plugin/declaration-block-no-ignored-properties': true,

        'plugin/rational-order': [
            true,
            {
                'border-in-box-model': false,
                'empty-line-between-groups': true,
                'no-empty-lines-between-properties': true,
                severity: 'warning',
            },
        ],

        'plugin/z-index-value-constraint': [
            {
                max: 10,
                min: 0,
            },
            {
                ignoreValues: [20, 30, 100, 1000],
            },
        ],

        // System
        'prettier/prettier': true,

        'property-case': 'lower',

        'property-disallowed-list': [
            'property-blacklist',
            'box-decoration-break',
            'break-after',
            'break-before',
            'break-inside',
            'clip',
            'hyphens',
            'hanging-punctuation',
            'image-orientation',
            'image-rendering',
            'image-resolution',
            'orphans',
            'perspective',
            'perspective-origin',
            'text-combine-upright',
        ],

        'property-no-unknown': true,

        'property-no-vendor-prefix': [
            true,
            {
                ignoreProperties: ['line-clamp', 'box-orient', 'tap-highlight-color'],
            },
        ],

        'rule-empty-line-before': [
            'always',
            {
                except: ['first-nested'],
                ignore: ['after-comment'],
            },
        ],

        'selector-attribute-brackets-space-inside': 'never',

        'selector-attribute-operator-space-after': 'never',

        'selector-attribute-operator-space-before': 'never',

        'selector-attribute-quotes': 'always',

        'selector-class-pattern': [
            '^.[a-z\\d-]+(?:__[a-z\\d-]+)?(?:_[a-z\\d-]+)?$',
            {
                resolveNestedSelectors: true,
            },
        ],
        'selector-combinator-space-after': 'always',
        'selector-combinator-space-before': 'always',
        'selector-descendant-combinator-no-non-space': true,
        'selector-id-pattern': '^[a-z]+(?:[a-z\\d-]+)?$',
        'selector-list-comma-newline-after': 'always',
        'selector-list-comma-newline-before': 'never-multi-line',
        'selector-list-comma-space-after': 'always-single-line',
        'selector-list-comma-space-before': 'never',
        'selector-max-attribute': 2,
        'selector-max-class': 3,
        'selector-max-combinators': 3,
        'selector-max-compound-selectors': 3,
        'selector-max-empty-lines': 0,
        'selector-max-id': 0,
        'selector-max-pseudo-class': 6,
        'selector-max-specificity': [
            '0,5,3',
            {
                ignoreSelectors: [':global', ':local'],
            },
        ],
        'selector-max-universal': 1,
        'selector-no-qualifying-type': [
            true,
            {
                ignore: ['attribute'],
            },
        ],
        'selector-no-vendor-prefix': true,
        'selector-pseudo-class-case': 'lower',
        'selector-pseudo-class-disallowed-list': [
            'any',
            'any-link',
            'default',
            'defined',
            'dir',
            'host',
            'left',
            'right',
            'scope',
        ],
        'selector-pseudo-class-no-unknown': [
            true,
            {
                ignorePseudoClasses: ['local', 'global'],
            },
        ],
        'selector-pseudo-class-parentheses-space-inside': 'never',
        'selector-pseudo-element-case': 'lower',
        'selector-pseudo-element-colon-notation': 'double',
        'selector-pseudo-element-disallowed-list': [
            '/^-moz-/i',
            '/^-ms-/i',
            '/^-webkit-/i',
            'backdrop',
            'cue',
            'grammar-error',
            'spelling-error',
        ],
        'selector-pseudo-element-no-unknown': true,
        'selector-type-case': 'lower',
        'selector-type-no-unknown': true,
        'string-no-newline': true,
        'string-quotes': 'single',
        'time-min-milliseconds': 100,
        'unit-case': 'lower',
        'unit-disallowed-list': ['ex', 'cm', 'mm', 'in', 'pt', 'pc', 'ch'],
        'unit-no-unknown': [
            true,
            {
                ignoreUnits: ['x'],
            },
        ],
        'value-keyword-case': [
            'lower',
            {
                ignoreKeywords: ['/^U\\+[\\w-]+$/'],
            },
        ],
        'value-list-comma-newline-before': 'never-multi-line',
        'value-list-comma-space-before': 'never',
        'value-list-max-empty-lines': 0,
        'value-no-vendor-prefix': [
            true,
            {
                ignoreValues: ['box'],
            },
        ],
    },
};
