import type { FC } from 'react';
import { Link, Outlet } from '@tanstack/react-router';

import { Footer } from '$shared/ui/footer';
import { PageLayout } from '$shared/ui/layouts';

import { Sidebar } from './sidebar';

export const MainLayoutRoute: FC = () => (
    <PageLayout
        footer={<Footer />}
        sidebar={<Sidebar />}
        title={<div>Vite + React</div>}
        header={
            <div>
                <Link to='/'>Home</Link>
                <Link to='/about'>About</Link>
                <Link to='/info'>Info</Link>
            </div>
        }
    >
        <Outlet />
    </PageLayout>
);
