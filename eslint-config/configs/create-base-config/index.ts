import type { Linter } from 'eslint';

import { defaultRules } from './default-rules';
import { importRules } from './import-rules';
import { jsxA11yRules } from './jsx-a11y-rules';
import { languageOptions } from './language-options';
import { otherRules } from './other-rules';
import { overrides } from './overrides';
import { plugins } from './plugins';
import { reactRules } from './react-rules';
import { settings } from './settings';
import { sonarjsRules } from './sonarjs-rules';
import { typescriptRules } from './typescript-rules';

export const createBaseConfig = (tsconfigRootDir: string) =>
    [
        {
            files: ['**/*.{ts,tsx,mjs,cjs,js,jsx}'],
            languageOptions: languageOptions(tsconfigRootDir),
            plugins,
            rules: {
                ...defaultRules,
                ...typescriptRules,
                ...importRules,
                ...jsxA11yRules,
                ...reactRules,
                ...sonarjsRules,
                ...otherRules,
            },
            settings,
        },
        ...overrides,
    ] satisfies Linter.Config[];
