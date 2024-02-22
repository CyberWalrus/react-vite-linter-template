import type { FC } from 'react';
import { Suspense } from 'react';
import { Link, Outlet } from '@tanstack/react-router';

import { PageLayout } from '$shared/ui';
import { Footer } from '$widgets/footer';

import { TanStackRouterDevtools } from './tan-stack-router';

export const RootRouteLayout: FC = () => (
    <PageLayout
        footer={<Footer />}
        title={<>Vite + React</>}
        header={
            <>
                <Link to='/'>Home</Link>
                <Link to='/about'>About</Link>
            </>
        }
    >
        <Outlet />
        <Suspense>
            <TanStackRouterDevtools />
        </Suspense>
    </PageLayout>
);
