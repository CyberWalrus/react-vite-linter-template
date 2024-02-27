/* eslint-disable import/no-extraneous-dependencies */
/// <reference types="vitest" />
import { resolve } from 'path';
import { mergeConfig } from 'vite';
import { defineConfig } from 'vitest/config';

import viteConfig from './vite.config';

const isUnit = process.env.TEST_VITEST_TYPE === 'unit';

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
                ],
                include: ['src/**'],
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
                ...(isUnit ? ['**/screenshot.test.ts'] : []),
            ],
            globals: true,
            include: isUnit ? ['**/*.{test,spec}.?(c|m)[jt]s?(x)'] : ['src/app/__tests__/screenshot.test.ts'],
            setupFiles: './vitest.setup.ts',
        },
    }),
);
