import { base } from './lib/configs/base';
import { ignores } from './lib/configs/ignore';
import { lsFCD } from './lib/configs/ls-fcd';
import aliasToRelative from './lib/rules/alias-to-relative';

export default {
    configs: {
        base,
        ignores,
        lsFCD,
    },
    meta: {
        name: '@ls',
    },
    rules: {
        'alias-to-relative': aliasToRelative,
    },
};
