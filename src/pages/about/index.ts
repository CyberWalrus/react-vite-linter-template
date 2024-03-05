import { createRoute } from '@tanstack/react-router';

import { mainLayoutRoute } from '$widgets/main-layout-route';

export const aboutRoute = createRoute({
    getParentRoute: () => mainLayoutRoute,
    path: '/about',
}).lazy(() => import('./ui/about-page').then((d) => d.aboutLazyRoute));
