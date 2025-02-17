import { baseConfig } from './lib/configs/base';
import aliasToRelative from './lib/rules/alias-to-relative';

export default {
    configs: {
        base: baseConfig,
    },
    meta: {
        name: '@ls',
    },
    rules: {
        'alias-to-relative': aliasToRelative,
    },
};
