/* eslint-disable import/no-extraneous-dependencies */
import react from '@vitejs/plugin-react-swc';
import dotenv from 'dotenv';
import { resolve } from 'path';
import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';
import { viteStaticCopy } from 'vite-plugin-static-copy';

dotenv.config();

export default defineConfig({
    css: {
        modules: {
            generateScopedName: '[local]_[hash:base64:4]',
            localsConvention: 'camelCaseOnly',
        },
    },
    define: {
        'process.env.BASE_PATH': JSON.stringify(process.env.BASE_PATH ?? '/'),
    },
    experimental: {
        renderBuiltUrl(filename: string) {
            return `${process.env.BASE_URL ?? '/'}${filename}`;
        },
    },
    plugins: [
        react(),
        VitePWA({
            base: `${process.env.BASE_URL ?? '/'}`,
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
                theme_color: '#ffffff',
            },
            registerType: 'autoUpdate',
        }),
        viteStaticCopy({
            targets: [{ dest: './', rename: '404.html', src: './dist/index.html' }],
        }),
    ],
    resolve: {
        alias: {
            $__mocks__: resolve(__dirname, './src/__mocks__'),
            $__tests__: resolve(__dirname, './src/__tests__'),
            $app: resolve(__dirname, './src/app'),
            $assets: resolve(__dirname, './src/assets'),
            $pages: resolve(__dirname, './src/pages'),
            $public: resolve(__dirname, './public'),
            $shared: resolve(__dirname, './src/shared'),
            $widgets: resolve(__dirname, './src/widgets'),
        },
    },
});
