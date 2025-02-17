import aliasToRelative from './alias-to-relative';
import filenameMatchRegexp from './filename-match-regexp';

export default {
    meta: {
        name: '@ls',
    },
    rules: {
        'alias-to-relative': aliasToRelative,
        'filename-match-regexp': filenameMatchRegexp,
    },
};
