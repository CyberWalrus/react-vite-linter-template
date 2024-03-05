import { createRoute } from '@tanstack/react-router';

import { rootRoute } from '$shared/ui/root-route';

import { MainLayoutRoute } from './ui/main-layout-route';

export const mainLayoutRoute = createRoute({
    component: MainLayoutRoute,
    getParentRoute: () => rootRoute,
    id: 'layout',
});
