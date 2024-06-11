import type { FC } from 'react';
import { createLazyRoute } from '@tanstack/react-router';

import { TechLink } from '$shared/ui/tech-link';

export const InfoPage: FC = () => (
    <>
        <TechLink />
        <p>template</p>
    </>
);

export const infoPageLazyRoute = createLazyRoute('/info')({
    component: InfoPage,
});
