import type { Layout } from '../model/store.type';
import { MIN_DESKTOP_WIDTH, MIN_TABLET_WIDTH } from './constants';

export const getLayout = (target: Window): Layout => {
    if (!target) {
        return 'mobile';
    }

    const width = target?.document.documentElement.clientWidth;

    if (width >= MIN_DESKTOP_WIDTH) {
        return 'desktop';
    }

    if (width >= MIN_TABLET_WIDTH) {
        return 'tablet';
    }

    return 'mobile';
};
