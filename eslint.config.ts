import globals from 'globals';
import tseslint from 'typescript-eslint';

import eslintConfig from './eslint-config';

export const baseConfig = [
    ...eslintConfig.configs.ignores,
    {
        files: ['**/*.{ts,tsx,mjs,cjs,js}'],
        languageOptions: {
            ecmaVersion: 2022,
            globals: {
                ...globals.browser,
                ...globals.node,
                __VERSION__: 'readonly',
                mount: true,
                myCustomGlobal: 'readonly',
                shallow: true,
            },
            parser: tseslint.parser,
            parserOptions: {
                ecmaFeatures: {
                    generators: false,
                    jsx: true,
                    objectLiteralDuplicateProperties: false,
                },
                project: './tsconfig.json',
                projectService: {
                    allowDefaultProject: ['stylelint.config.cjs', 'typed-scss-modules.config.js'],
                },
                tsconfigRootDir: import.meta.dirname,
            },
            sourceType: 'module',
        },
    },
    ...eslintConfig.configs.base,
    ...eslintConfig.configs.lsFCD('src'),
];

export default baseConfig;
