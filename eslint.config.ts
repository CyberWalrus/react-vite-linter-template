import eslintConfig from './eslint-config';

export const baseConfig = [
    ...eslintConfig.configs.defaultIgnores,
    { ignores: ['eslint-config/rules/ssr-friendly'] },
    ...eslintConfig.configs.createBaseConfig(import.meta.dirname),
    ...eslintConfig.configs.ligastavokRu,
    ...eslintConfig.configs.createLsFcdConfig('src'),
];

export default baseConfig;
