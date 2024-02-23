import type { FC } from 'react';
import { Suspense } from 'react';
import { Flex, Link as LinkRadix, Text } from '@radix-ui/themes';
import { Link, Outlet } from '@tanstack/react-router';

import { PageLayout } from '$shared/ui';
import { Footer } from '$shared/ui/footer';

import { TanStackRouterDevtools } from './tan-stack-router';

export const RootRouteLayout: FC = () => (
    <PageLayout
        footer={<Footer />}
        header={
            <Flex
                gap='3'
                justify='center'
                mb='4'
            >
                <LinkRadix asChild>
                    <Link to='/'>Home</Link>
                </LinkRadix>
                <LinkRadix asChild>
                    <Link to='/about'>About</Link>
                </LinkRadix>
            </Flex>
        }
        title={
            <Text
                color='teal'
                size='9'
            >
                Vite + React
            </Text>
        }
    >
        <Outlet />
        <Suspense>
            <TanStackRouterDevtools />
        </Suspense>
    </PageLayout>
);
