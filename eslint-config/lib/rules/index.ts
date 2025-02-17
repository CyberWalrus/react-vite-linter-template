import { aliasToRelative } from './alias-to-relative';
import { filenameMatchRegexp } from './filename-match-regexp';
import { noBrowserStorage } from './no-browser-storage';

export const rules = {
    meta: {
        name: '@ls',
    },
    rules: {
        'alias-to-relative': aliasToRelative,
        'filename-match-regexp': filenameMatchRegexp,
        'no-browser-storage': noBrowserStorage,
    },
};
