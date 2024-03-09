import react from '@vitejs/plugin-react-swc';
import dotenv from 'dotenv';
import { resolve } from 'path';
import { defineConfig } from 'vite';
import viteCompression from 'vite-plugin-compression';
import { VitePWA } from 'vite-plugin-pwa';
import { viteStaticCopy } from 'vite-plugin-static-copy';

import { envBuild } from './src/shared/api/env-build';

dotenv.config();

const basePath = envBuild.VITE_TEST_SERVER_BUILD ? '/' : envBuild.VITE_BASE_PATH;
const baseUrl = envBuild.VITE_TEST_SERVER_BUILD ? '/' : envBuild.VITE_BASE_URL;

export default defineConfig({
    css: {
        modules: {
            generateScopedName: '[local]_[hash:base64:4]',
            localsConvention: 'camelCaseOnly',
        },
    },
    define: {
        __CLIENT__: envBuild.NODE_ENV !== 'test',
        NODE_ENV: JSON.stringify(envBuild.NODE_ENV),
        VITE_BASE_PATH: JSON.stringify(basePath),
        VITE_BASE_URL: JSON.stringify(baseUrl),
        VITE_TEST_SERVER_BUILD: JSON.stringify(envBuild.VITE_TEST_SERVER_BUILD),
    },
    experimental: {
        renderBuiltUrl(filename: string) {
            return `${baseUrl}${filename}`;
        },
    },
    plugins: [
        react(),
        VitePWA({
            base: baseUrl,
            /* devOptions: {
                enabled: true,
                type: 'module',
            }, */
            includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'mask-icon.svg'],
            manifest: {
                description: 'React Vite Linter Template',
                icons: [
                    {
                        sizes: '192x192',
                        src: 'pwa-192x192.png',
                        type: 'image/png',
                    },
                    {
                        purpose: 'maskable',
                        sizes: '192x192',
                        src: 'pwa-192x192.png',
                        type: 'image/png',
                    },
                    {
                        sizes: '512x512',
                        src: 'pwa-512x512.png',
                        type: 'image/png',
                    },
                ],
                name: 'React Vite Linter Template',
                short_name: 'ReactTemplate',
                theme_color: '#242424',
            },
            registerType: 'autoUpdate',
        }),
        envBuild.NODE_ENV === 'production' &&
            viteCompression({
                algorithm: 'brotliCompress',
                ext: '.br',
                filter: (fileName) => /\.(js|css|html|svg)$/.test(fileName),
                threshold: 0,
            }),
        envBuild.NODE_ENV === 'production' &&
            viteCompression({
                algorithm: 'gzip',
                filter: (fileName) => /\.(js|css|html|svg)$/.test(fileName),
                threshold: 0,
            }),
        viteStaticCopy({
            targets: [
                { dest: './', rename: '404.html', src: './dist/index.html' },
                { dest: './', rename: 'mockServiceWorker.js', src: './node_modules/msw/lib/mockServiceWorker.js' },
            ],
        }),
    ],
    resolve: {
        alias: {
            $__mocks__: resolve(__dirname, './src/__mocks__'),
            $__tests__: resolve(__dirname, './src/__tests__'),
            $app: resolve(__dirname, './src/app'),
            $assets: resolve(__dirname, './src/assets'),
            $entities: resolve(__dirname, './src/entities'),
            $features: resolve(__dirname, './src/features'),
            $pages: resolve(__dirname, './src/pages'),
            $public: resolve(__dirname, './public'),
            $shared: resolve(__dirname, './src/shared'),
            $widgets: resolve(__dirname, './src/widgets'),
        },
    },
});
