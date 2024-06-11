import { MIN_DESKTOP_WIDTH } from '../model/constants';
import type { Layout } from '../model/types';

export const getLayout = (): Layout => {
    if (typeof window === 'undefined') {
        return 'mobile';
    }

    const width = window?.document.documentElement.clientWidth;

    if (width >= MIN_DESKTOP_WIDTH) {
        return 'desktop';
    }

    return 'mobile';
};
