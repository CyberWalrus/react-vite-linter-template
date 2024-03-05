import type { FC } from 'react';
import { createRouter, RouterProvider } from '@tanstack/react-router';

import { aboutRoute } from '$pages/about';
import { homeRoute } from '$pages/home';
import { rootRoute } from '$widgets/root-route';

const basepath = String(process.env.VITE_BASE_PATH);

const routeTree = rootRoute.addChildren([homeRoute, aboutRoute]);

const router = createRouter({ defaultPreload: 'intent', routeTree });

export const AppRouter: FC = () => (
    <RouterProvider
        basepath={basepath}
        router={router}
    />
);
