/* eslint-disable no-template-curly-in-string */
export default [
    {
        extends: [],
        plugins: ['react-refresh', 'boundaries'],
        rules: {
            'boundaries/element-types': [
                2,
                {
                    default: 'allow',
                    message: '${file.type} is not allowed to import (${dependency.type})',
                    rules: [
                        {
                            disallow: ['app', 'pages', 'widgets', 'features', 'entities'],
                            from: ['shared'],
                            message: 'Shared module must not import upper layers (${dependency.type})',
                        },
                        {
                            disallow: ['app', 'pages', 'widgets', 'features'],
                            from: ['entities'],
                            message: 'Entity must not import upper layers (${dependency.type})',
                        },
                        {
                            disallow: [
                                [
                                    'entities',
                                    {
                                        entity: '!${entity}',
                                    },
                                ],
                            ],
                            from: ['entities'],
                            message: 'Entity must not import other entity',
                        },
                        {
                            disallow: ['app', 'pages', 'widgets'],
                            from: ['features'],
                            message: 'Feature must not import upper layers (${dependency.type})',
                        },
                        {
                            disallow: [
                                [
                                    'features',
                                    {
                                        feature: '!${feature}',
                                    },
                                ],
                            ],
                            from: ['features'],
                            message: 'Feature must not import other feature',
                        },
                        {
                            disallow: ['app', 'pages'],
                            from: ['widgets'],
                            message: 'Feature must not import upper layers (${dependency.type})',
                        },
                        {
                            disallow: [
                                [
                                    'widgets',
                                    {
                                        widget: '!${widget}',
                                    },
                                ],
                            ],
                            from: ['widgets'],
                            message: 'Widget must not import other widget',
                        },
                        {
                            disallow: ['app'],
                            from: ['pages'],
                            message: 'Page must not import upper layers (${dependency.type})',
                        },
                        {
                            disallow: [
                                [
                                    'pages',
                                    {
                                        page: '!${page}',
                                    },
                                ],
                            ],
                            from: ['pages'],
                            message: 'Page must not import other page',
                        },
                    ],
                },
            ],
            'boundaries/entry-point': [
                2,
                {
                    default: 'disallow',
                    rules: [
                        {
                            allow: '**',
                            target: [
                                [
                                    'shared',
                                    {
                                        segment: 'assets',
                                    },
                                ],
                            ],
                        },
                        {
                            allow: '*/index.(ts|tsx)',
                            target: [
                                [
                                    'shared',
                                    {
                                        segment: 'core',
                                    },
                                ],
                            ],
                        },
                        {
                            allow: '(*/*|*)/index.(ts|tsx)',
                            target: [
                                [
                                    'shared',
                                    {
                                        segment: 'lib',
                                    },
                                ],
                            ],
                        },
                        {
                            allow: '(*/*|*)/index.(ts|tsx)',
                            target: [
                                [
                                    'shared',
                                    {
                                        segment: 'api',
                                    },
                                ],
                            ],
                        },
                        {
                            allow: '(*/*|*)/index.(ts|tsx)',
                            target: [
                                [
                                    'shared',
                                    {
                                        segment: 'model',
                                    },
                                ],
                            ],
                        },
                        {
                            allow: '(*/*|*)/index.(ts|tsx)',
                            target: [
                                [
                                    'shared',
                                    {
                                        segment: 'ui', // ("ui"|"constants")
                                    },
                                ],
                            ],
                        },
                        {
                            allow: 'index.(ts|tsx)',
                            target: ['app'],
                        },
                        {
                            allow: '(*/|)index.(ts|tsx)',
                            target: ['pages', 'widgets', 'features', 'entities'],
                        },
                    ],
                },
            ],
            'react-refresh/only-export-components': 0,
        },
        settings: {
            'boundaries/elements': [
                {
                    pattern: 'app',
                    type: 'app',
                },
                {
                    capture: ['page'],
                    pattern: 'pages/*',
                    type: 'pages',
                },
                {
                    capture: ['widget'],
                    pattern: 'widgets/*',
                    type: 'widgets',
                },
                {
                    capture: ['feature'],
                    pattern: 'features/*',
                    type: 'features',
                },
                {
                    capture: ['entity'],
                    pattern: 'entities/*',
                    type: 'entities',
                },
                {
                    capture: ['segment'],
                    pattern: 'shared/*',
                    type: 'shared',
                },
            ],
            'boundaries/include': ['src/**/*'],
        },
    },
];
