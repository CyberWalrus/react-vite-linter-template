import { createRoute } from '@tanstack/react-router';

import { rootRoute } from '$widgets/root-route';

export const homeRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: '/',
}).lazy(() => import('./route').then((d) => d.homeLazyRoute));
