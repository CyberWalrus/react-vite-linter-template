import { useLayoutEffect } from 'react';
import { debounce } from 'lodash-es';

import { useLayoutStore } from '../model/store';
import { DEBOUNCE_TIMEOUT } from './constants';
import { getLayout } from './get-layout';

export const useWatchLayout = () => {
    const setLayout = useLayoutStore(({ setLayout: set }) => set);

    useLayoutEffect(() => {
        if (!window) {
            return;
        }

        const handleResize = debounce((event: Event) => {
            const target = event?.target as Window;
            const layout = getLayout(target);

            setLayout(layout);
        }, DEBOUNCE_TIMEOUT);

        window.addEventListener('resize', handleResize);
        window.addEventListener('orientationchange', handleResize);
        window.addEventListener('visibilitychange', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('orientationchange', handleResize);
            window.removeEventListener('visibilitychange', handleResize);
        };
    }, [setLayout]);
};
