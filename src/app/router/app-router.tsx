/* eslint-disable @typescript-eslint/consistent-type-definitions */
import type { FC } from 'react';
import { createRouter, RouterProvider } from '@tanstack/react-router';

import { envClient } from '$core/env-client';
import { aboutRoute } from '$pages/about';
import { homeRoute } from '$pages/home';
import { infoRoute } from '$pages/info';
import { rootRoute } from '$shared/ui/root-route';
import { mainLayoutRoute } from '$widgets/system/main-layout-route';

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
