import type { FC } from 'react';
import { Flex, Text } from '@radix-ui/themes';
import { createLazyRoute } from '@tanstack/react-router';

import { Counter } from '$widgets/counter';
import { TechLink } from '$shared/ui/tech-link';

export const HomePage: FC = () => (
    <>
        <TechLink />
        <Flex
            className='card'
            justify='center'
            mb='5'
        >
            <Counter />
        </Flex>
        <Flex
            align='center'
            direction='column'
            gap='2'
            justify='center'
            mb='2'
        >
            <Text color='teal'>
                Edit <code>src/App.tsx</code> and save to test HMR
            </Text>
            <Text
                className='read-the-docs'
                color='teal'
            >
                Click on the Vite and React logos to learn more
            </Text>
        </Flex>
    </>
);

export const homeLazyRoute = createLazyRoute('/mainLayout/')({
    component: HomePage,
});
