import type { FC } from 'react';
import { createLazyRoute } from '@tanstack/react-router';

import { TechLink } from '$shared/ui/tech-link';

export const AboutPage: FC = () => (
    <>
        <TechLink />
        <p>template</p>
    </>
);

export const aboutLazyRoute = createLazyRoute('/mainLayout/about')({
    component: AboutPage,
});
