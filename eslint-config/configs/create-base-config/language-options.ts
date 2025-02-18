import type { Linter } from 'eslint';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export const languageOptions = (tsconfigRootDir: string): Linter.LanguageOptions => ({
    ecmaVersion: 2022,
    globals: {
        ...globals.browser,
        ...globals.node,
        __VERSION__: 'readonly',
        mount: true,
        myCustomGlobal: 'readonly',
        shallow: true,
    },
    // @ts-ignore
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
        tsconfigRootDir,
    },
    sourceType: 'module',
});
