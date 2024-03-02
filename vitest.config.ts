/* eslint-disable import/no-extraneous-dependencies */
import { resolve } from 'path';
import { mergeConfig } from 'vite';
import { defineConfig } from 'vitest/config';

import viteConfig from './vite.config';

type VitestType = 'unit' | 'unit-isolate' | 'screenshot';

const type: VitestType = (process.env.TEST_VITEST_TYPE as VitestType) ?? 'unit';

const getExcludeTest = () => {
    if (type === 'screenshot') {
        return [];
    }

    if (type === 'unit-isolate') {
        return [];
    }

    return ['**/screenshot.test.ts', '**/create-store.test.ts'];
};

const getIncludeTest = () => {
    if (type === 'screenshot') {
        return ['src/app/__tests__/screenshot.test.ts'];
    }

    if (type === 'unit-isolate') {
        return ['src/shared/lib/create-store/__tests__/**'];
    }

    return ['**/*.{test,spec}.?(c|m)[jt]s?(x)'];
};

const getExcludeCoverage = () => {
    if (type === 'screenshot') {
        return [];
    }

    if (type === 'unit-isolate') {
        return [];
    }

    return ['src/shared/lib/create-store/**'];
};

const getIncludeCoverage = () => {
    if (type === 'screenshot') {
        return [];
    }

    if (type === 'unit-isolate') {
        return ['src/shared/lib/create-store/**'];
    }

    return ['src/**'];
};

export default mergeConfig(
    viteConfig,
    defineConfig({
        test: {
            alias: {
                './src/shared/lib/create-store': resolve('./src/__mocks__/create-store.ts'),
            },
            coverage: {
                exclude: [
                    '**/__tests__/**',
                    '**/__e2e__/**',
                    '**/assets/**',
                    '**/__mocks__/**',
                    '**/public/**',
                    '**/vite-env.d.ts',
                    '**/*.type.ts',
                    ...getExcludeCoverage(),
                ],
                include: getIncludeCoverage(),
                reporter: ['text', 'lcov'],
                thresholds: {
                    branches: 95,
                    functions: 95,
                    lines: 95,
                    statements: 95,
                },
            },
            environment: 'jsdom',
            exclude: [
                '**/node_modules/**',
                '**/dist/**',
                '**/dist-test-server/**',
                '**/__e2e__/**',
                '**/cypress/**',
                '**/.{idea,git,cache,output,temp}/**',
                '**/{karma,rollup,webpack,vite,vitest,jest,ava,babel,nyc,cypress,tsup,build,eslint,prettier}.config.*',
                '**/{karma,rollup,webpack,vite,vitest,jest,ava,babel,nyc,cypress,tsup,build,eslint,prettier}.config.*',
                ...getExcludeTest(),
            ],
            globals: true,
            include: getIncludeTest(),
            setupFiles: './vitest.setup.ts',
        },
    }),
);
