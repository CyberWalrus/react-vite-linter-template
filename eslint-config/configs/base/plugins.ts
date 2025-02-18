/* eslint-disable @typescript-eslint/no-unsafe-assignment */

// @ts-ignore
import stylisticTs from '@stylistic/eslint-plugin-ts';
import type { ESLint } from 'eslint';
// @ts-ignore
import importPlugin from 'eslint-plugin-import';
// @ts-ignore
import jsxA11yPlugin from 'eslint-plugin-jsx-a11y';
// @ts-ignore
import nodePlugin from 'eslint-plugin-node';
import prettierPlugin from 'eslint-plugin-prettier';
import reactPlugin from 'eslint-plugin-react';
// @ts-ignore
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import simpleImportSortPlugin from 'eslint-plugin-simple-import-sort';
import sonarjsPlugin from 'eslint-plugin-sonarjs';
// @ts-ignore
import sortKeysFixPlugin from 'eslint-plugin-sort-keys-fix';
// @ts-ignore
import typescriptSortKeysPlugin from 'eslint-plugin-typescript-sort-keys';
import tseslint from 'typescript-eslint';

import { lsPlugin } from '../../rules';

export const plugins = {
    '@ls': lsPlugin,
    '@stylistic/ts': stylisticTs,
    // @ts-ignore
    '@typescript-eslint': tseslint.plugin,
    import: importPlugin,
    'jsx-a11y': jsxA11yPlugin,
    node: nodePlugin,
    prettier: prettierPlugin,
    react: reactPlugin,
    'react-hooks': reactHooksPlugin,
    'simple-import-sort': simpleImportSortPlugin,
    sonarjs: sonarjsPlugin,
    'sort-keys-fix': sortKeysFixPlugin,
    'typescript-sort-keys': typescriptSortKeysPlugin,
} as Record<string, ESLint.Plugin>;
