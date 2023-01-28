const { resolve } = require('path');

export const config = {
    exportType: 'default',
    exportTypeName: 'ClassesType',
    outputFolder: './lib',
    aliasPrefixes: { $styles: resolve(__dirname, './src/styles') },
    ignore: ['**/__mocks__/**', '**/__tests__/**', '**/stories/**'],
};
