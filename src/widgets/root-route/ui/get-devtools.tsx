import type { FC } from 'react';
import { lazy } from 'react';

export const getDevtools: () => FC = () => {
    if (process.env.NODE_ENV === 'production') {
        return () => null;
    }

    return lazy(() =>
        import('@tanstack/router-devtools').then((res) => ({
            default: res.TanStackRouterDevtools,
        })),
    );
};
