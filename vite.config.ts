import react from '@vitejs/plugin-react-swc';
import { resolve } from 'path';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
    css: {
        modules: {
            generateScopedName: '[local]_[hash:base64:4]',
            localsConvention: 'camelCaseOnly',
        },
    },
    plugins: [react()],
    resolve: {
        alias: {
            $__mocks__: resolve(__dirname, './src/__mocks__'),
            $__tests__: resolve(__dirname, './src/__tests__'),
            $assets: resolve(__dirname, './src/assets'),
            $components: resolve(__dirname, './src/components'),
            $constants: resolve(__dirname, './src/constants'),
            $core: resolve(__dirname, './src/core'),
            $helpers: resolve(__dirname, './src/helpers'),
            $hooks: resolve(__dirname, './src/hooks'),
            $pages: resolve(__dirname, './src/pages'),
            $stories: resolve(__dirname, './src/stories'),
            $styles: resolve(__dirname, './src/styles'),
            $types: resolve(__dirname, './src/types'),
            $widgets: resolve(__dirname, './src/widgets'),
        },
    },
});
