import type { FC } from 'react';
import { Flex, Link as LinkRadix, Text } from '@radix-ui/themes';
import { Link, Outlet } from '@tanstack/react-router';

import { Footer } from '$shared/ui/footer';
import { PageLayout } from '$shared/ui/layouts';

export const MainLayoutRoute: FC = () => (
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
                <LinkRadix asChild>
                    <Link to='/info'>Info</Link>
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
    </PageLayout>
);
