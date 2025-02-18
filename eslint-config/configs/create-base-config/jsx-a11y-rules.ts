import type { Linter } from 'eslint';

export const jsxA11yRules: Partial<Linter.RulesRecord> = {
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
};
