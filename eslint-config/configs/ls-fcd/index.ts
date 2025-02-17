/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-ignore
import boundariesPlugin from 'eslint-plugin-boundaries';
import reactRefreshPlugin from 'eslint-plugin-react-refresh';

import { lsPlugin } from '../../rules';

/* eslint-disable no-template-curly-in-string */
export const lsFCD = (baseFolder: string = 'src') => [
    {
        files: ['**/*.{ts,tsx,mjs,cjs,js}'],
        plugins: { '@ls': lsPlugin, boundaries: boundariesPlugin, 'react-refresh': reactRefreshPlugin },
        rules: {
            'boundaries/element-types': [
                2,
                {
                    default: 'allow',
                    message: '${file.type} is not allowed to import (${dependency.type})',
                    rules: [
                        {
                            disallow: ['app', 'pages', 'widgets', 'features', 'entities', 'shared'],
                            from: ['core'],
                            message: 'Core module must not import upper layers (${dependency.type})',
                        },
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
                            disallow: ['entities'],
                            from: ['entities'],
                            message: 'Entity must not import other entity',
                        },
                        {
                            disallow: ['app', 'pages', 'widgets'],
                            from: ['features'],
                            message: 'Feature must not import upper layers (${dependency.type})',
                        },
                        {
                            disallow: ['features'],
                            from: ['features'],
                            message: 'Feature must not import other feature',
                        },
                        {
                            disallow: ['app', 'pages'],
                            from: ['widgets'],
                            message: 'Feature must not import upper layers (${dependency.type})',
                        },
                        {
                            disallow: ['widgets'],
                            from: ['widgets'],
                            message: 'Widget must not import other widget',
                        },
                        {
                            disallow: ['app'],
                            from: ['pages'],
                            message: 'Page must not import upper layers (${dependency.type})',
                        },
                        {
                            disallow: ['pages'],
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
                                        segment: 'service',
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
                            allow: '((*/*|*)/index.(ts|tsx)|types/*.ts)',
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
                                        segment: 'ui',
                                    },
                                ],
                            ],
                        },
                        {
                            allow: 'index.(ts|tsx)',
                            target: ['app'],
                        },
                        {
                            allow: 'index.(ts|tsx)',
                            target: ['widgets', 'features', 'entities', 'pages'],
                        },
                        {
                            allow: 'index.(ts|tsx|js)',
                            target: ['core'],
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
                    mode: 'folder',
                    pattern: 'pages/*',
                    type: 'pages',
                },
                {
                    mode: 'folder',
                    pattern: 'widgets/*/*',
                    type: 'widgets',
                },
                {
                    mode: 'folder',
                    pattern: 'features/*/*',
                    type: 'features',
                },
                {
                    mode: 'folder',
                    pattern: 'entities/*/*',
                    type: 'entities',
                },
                {
                    capture: ['segment'],
                    pattern: 'shared/*',
                    type: 'shared',
                },
                {
                    mode: 'folder',
                    pattern: 'core/*',
                    type: 'core',
                },
            ],
            'boundaries/include': [`${baseFolder}/**/*`],
        },
    },
    {
        files: [`${baseFolder}/app/**/*.{ts,tsx,mjs,cjs,js}`],
        rules: {
            '@ls/alias-to-relative': [
                2,
                {
                    aliases: {
                        $app: `./${baseFolder}/app`,
                    },
                },
            ],
        },
    },
    {
        files: [`${baseFolder}/pages/**/*.{ts,tsx,mjs,cjs,js}`],
        rules: {
            '@ls/alias-to-relative': [
                2,
                {
                    aliases: {
                        $pages: `./${baseFolder}/pages`,
                    },
                },
            ],
        },
    },
    {
        files: [`${baseFolder}/widgets/**/*.{ts,tsx,mjs,cjs,js}`],
        rules: {
            '@ls/alias-to-relative': [
                2,
                {
                    aliases: {
                        $widgets: `./${baseFolder}/widgets`,
                    },
                },
            ],
        },
    },
    {
        files: [`${baseFolder}/features/**/*.{ts,tsx,mjs,cjs,js}`],
        rules: {
            '@ls/alias-to-relative': [
                2,
                {
                    aliases: {
                        $features: `./${baseFolder}/features`,
                    },
                },
            ],
        },
    },
    {
        files: [`${baseFolder}/entities/**/*.{ts,tsx,mjs,cjs,js}`],
        rules: {
            'no-restricted-imports': [
                2,
                {
                    paths: [
                        {
                            message:
                                'Внутри папки src/common/entities импорт через алиас "$entities" запрещён. Используйте относительные пути.',
                            name: '$entities',
                        },
                    ],
                    patterns: ['$entities/*'],
                },
            ],
        },
    },
    {
        files: [`${baseFolder}/core/**/*.{ts,tsx,mjs,cjs,js}`],
        rules: {
            'no-restricted-imports': [
                2,
                {
                    paths: [
                        {
                            message:
                                'Внутри папки src/common/core импорт через алиас "$core" запрещён. Используйте относительные пути.',
                            name: '$core',
                        },
                    ],
                    patterns: ['$core/*/*'],
                },
            ],
        },
    },
];
