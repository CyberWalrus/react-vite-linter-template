import { resolve } from 'path';

export const config = {
    aliasPrefixes: {
        $mixins: resolve(__dirname, './src/shared/styles/mixins.scss'),
    },
    outputFolder: './__generated__',
    logLevel: 'error',
    ignore: ['**/__mocks__/**', '**/__tests__/**', '**/stories/**'],
};
