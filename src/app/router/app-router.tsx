import type { FC } from 'react';
import { createRouter, RouterProvider } from '@tanstack/react-router';

import { aboutRoute } from '$pages/about';
import { homeRoute } from '$pages/home';
import { rootRoute } from '$widgets/root-route';

const basepath = String(process.env.BASE_PATH) ?? '/';

console.log(basepath);

const routeTree = rootRoute.addChildren([homeRoute, aboutRoute]);

export const router = createRouter({ defaultPreload: 'intent', routeTree });

export const AppRouter: FC = () => (
    <RouterProvider
        basepath={basepath}
        router={router}
    />
);
