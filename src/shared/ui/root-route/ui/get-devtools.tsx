import type { FC } from 'react';
import { lazy } from 'react';

import { envClient } from '$shared/core/env-client';

export const getDevtools: () => FC = () => {
    if (envClient.NODE_ENV === 'production') {
        return () => null;
    }

    return lazy(() =>
        import('@tanstack/router-devtools').then((res) => ({
            default: res.TanStackRouterDevtools,
        })),
    );
};
