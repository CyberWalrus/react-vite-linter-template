import { createRootRoute } from '@tanstack/react-router';

import { RootRouteLayout } from './ui/root-route-layout';

export const rootRoute = createRootRoute({
    component: () => <RootRouteLayout />,
});
