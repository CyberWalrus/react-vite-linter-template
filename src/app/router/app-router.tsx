/* eslint-disable @typescript-eslint/consistent-type-definitions */
import type { FC } from 'react';
import { createRouter, RouterProvider } from '@tanstack/react-router';

import { aboutRoute } from '$pages/about';
import { homeRoute } from '$pages/home';
import { infoRoute } from '$pages/info';
import { mainLayoutRoute } from '$widgets/main-layout-route';
import { envClient } from '$shared/core/env-client';
import { rootRoute } from '$shared/ui/root-route';

const mainTree = mainLayoutRoute.addChildren([homeRoute, aboutRoute]);
const routeTree = rootRoute.addChildren([infoRoute, mainTree]);

const router = createRouter({ defaultPreload: 'intent', routeTree });

declare module '@tanstack/react-router' {
    interface Register {
        router: typeof router;
    }
}

export const AppRouter: FC = () => (
    <RouterProvider
        basepath={envClient.VITE_BASE_PATH}
        router={router}
    />
);
