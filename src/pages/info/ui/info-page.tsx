import type { FC } from 'react';
import { Text } from '@radix-ui/themes';
import { createLazyRoute } from '@tanstack/react-router';

import { TechLink } from '$shared/ui/tech-link';

export const InfoPage: FC = () => (
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

export const infoPageLazyRoute = createLazyRoute('/info')({
    component: InfoPage,
});
