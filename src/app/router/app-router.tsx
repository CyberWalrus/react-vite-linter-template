import type { FC } from 'react';
import { createRouter, RouterProvider } from '@tanstack/react-router';

import { aboutRoute } from '$pages/about';
import { homeRoute } from '$pages/home';
import { rootRoute } from '$widgets/root-route';
import { envClient } from '$shared/api/env-client';

const routeTree = rootRoute.addChildren([homeRoute, aboutRoute]);

const router = createRouter({ defaultPreload: 'intent', routeTree });

export const AppRouter: FC = () => (
    <RouterProvider
        basepath={envClient.VITE_BASE_PATH}
        router={router}
    />
);
