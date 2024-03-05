import type { FC } from 'react';
import { Suspense } from 'react';
import { Outlet } from '@tanstack/react-router';

import { getDevtools } from './get-devtools';

export const Devtools = getDevtools();
export const RootRouteLayout: FC = () => (
    <>
        <Outlet />
        <Suspense>
            <Devtools />
        </Suspense>
    </>
);
