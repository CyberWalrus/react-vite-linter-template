export const settings: Record<string, unknown> = {
    'import/core-modules': [],
    'import/extensions': ['.js', '.ts', '.cjs', '.mjs', '.jsx', '.tsx', '.d.ts'],
    'import/external-module-folders': ['node_modules', 'node_modules/@types'],
    'import/ignore': ['node_modules', '\\.(coffee|scss|css|less|hbs|svg|json)$'],
    'import/parsers': {
        '@typescript-eslint/parser': ['.ts', '.tsx', '.d.ts'],
    },
    'import/resolver': {
        node: {
            extensions: ['.js', '.ts', '.cjs', '.mjs', '.jsx', '.tsx', '.json', '.tsx', '.d.ts'],
        },
        typescript: {
            alwaysTryTypes: true,
            project: './tsconfig.json',
        },
    },
    propWrapperFunctions: ['forbidExtraProps', 'exact', 'Object.freeze'],
    react: {
        pragma: 'React',
        version: 'detect',
    },
};
