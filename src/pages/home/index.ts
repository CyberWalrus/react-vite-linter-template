import { createRoute } from '@tanstack/react-router';

import { mainLayoutRoute } from '$widgets/main-layout-route';

export const homeRoute = createRoute({
    getParentRoute: () => mainLayoutRoute,
    path: '/',
}).lazy(() => import('./ui/home-page').then((d) => d.homeLazyRoute));
