import { createRoute } from '@tanstack/react-router';

import { rootRoute } from '$widgets/root-route';

export const aboutRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: '/about',
}).lazy(() => import('./ui/about-page').then((d) => d.aboutLazyRoute));
