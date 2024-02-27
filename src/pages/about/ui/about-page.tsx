import type { FC } from 'react';
import { Text } from '@radix-ui/themes';
import { createLazyRoute } from '@tanstack/react-router';

import { TechLink } from '$shared/ui/tech-link';

export const AboutPage: FC = () => (
    <>
        <TechLink />
        <Text
            align='center'
            color='teal'
        >
            template
        </Text>
    </>
);

export const aboutLazyRoute = createLazyRoute('/about')({
    component: AboutPage,
});
