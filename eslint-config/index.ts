import { base } from './lib/configs/base';
import { ignores } from './lib/configs/ignore';
import { ligastavokRu } from './lib/configs/ligastavok-ru';
import { lsFCD } from './lib/configs/ls-fcd';
import { rules } from './lib/rules';

export default {
    configs: {
        base,
        ignores,
        ligastavokRu,
        lsFCD,
    },
    ...rules,
};
