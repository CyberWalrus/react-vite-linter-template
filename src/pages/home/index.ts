import { createRoute } from '@tanstack/react-router';

import { rootRoute } from '$widgets/root-route';

export const homeRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: '/',
}).lazy(() => import('./ui/home-page').then((d) => d.homeLazyRoute));
