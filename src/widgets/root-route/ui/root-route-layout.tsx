import type { FC } from 'react';
import { Link, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';

import { PageLayout } from '$shared/ui';
import { Footer } from '$widgets/footer';

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
        <TanStackRouterDevtools />
    </PageLayout>
);
