import { debounce } from 'lodash-es';

import { useIsomorphicLayoutEffect } from '$shared/lib/hooks';

import { DEBOUNCE_TIMEOUT, HTML_ATTRIBUTE } from '../model/constants';
import { useLayoutStore } from '../model/store';
import { getLayout } from './get-layout';

export const useWatchLayout = () => {
    const setLayout = useLayoutStore(({ setLayout: set }) => set);

    useIsomorphicLayoutEffect(() => {
        if (typeof window === 'undefined') {
            return;
        }

        const handleResize = debounce(() => {
            const layout = getLayout();

            setLayout(layout);

            if (typeof document === 'undefined') {
                return;
            }

            document.documentElement.setAttribute(HTML_ATTRIBUTE, layout);
        }, DEBOUNCE_TIMEOUT);

        handleResize();

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
