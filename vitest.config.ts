/* eslint-disable import/no-extraneous-dependencies */
/// <reference types="vitest" />
import { mergeConfig } from 'vite';
import { defineConfig } from 'vitest/config';

import viteConfig from './vite.config';

export default mergeConfig(
    viteConfig,
    defineConfig({
        test: {
            coverage: {
                exclude: ['__tests__/**', '__e2e__/**', 'assets/**', '__mocks__/**', 'vite-env.d.ts'],
                include: ['src/**'],
                reporter: ['text', 'lcov'],
                thresholds: {
                    branches: 25,
                    functions: 25,
                    lines: 25,
                    statements: 25,
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
            ],
            globals: true,
            setupFiles: './vitest.setup.ts',
        },
    }),
);
