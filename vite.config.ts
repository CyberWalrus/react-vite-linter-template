/* eslint-disable import/no-extraneous-dependencies */
import react from '@vitejs/plugin-react-swc';
import dotenv from 'dotenv';
import { resolve } from 'path';
import { defineConfig } from 'vite';

dotenv.config();

console.log('process.env.BASE_PATH', process.env.BASE_PATH);

export default defineConfig({
    css: {
        modules: {
            generateScopedName: '[local]_[hash:base64:4]',
            localsConvention: 'camelCaseOnly',
        },
    },
    define: {
        'process.env.BASE_PATH': JSON.stringify(process.env.BASE_PATH),
    },
    plugins: [react()],
    resolve: {
        alias: {
            $__mocks__: resolve(__dirname, './src/__mocks__'),
            $__tests__: resolve(__dirname, './src/__tests__'),
            $app: resolve(__dirname, './src/app'),
            $assets: resolve(__dirname, './src/assets'),
            $pages: resolve(__dirname, './src/pages'),
            $shared: resolve(__dirname, './src/shared'),
            $widgets: resolve(__dirname, './src/widgets'),
        },
    },
});
