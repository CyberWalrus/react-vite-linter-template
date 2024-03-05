import { createRoute } from '@tanstack/react-router';

import { rootRoute } from '$shared/ui/root-route';

export const infoRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: '/info',
}).lazy(() => import('./ui/info-page').then((d) => d.infoPageLazyRoute));
