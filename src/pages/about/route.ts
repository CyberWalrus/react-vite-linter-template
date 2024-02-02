import { createLazyRoute } from '@tanstack/react-router';

import { AboutPage } from './ui/about-page';

export const aboutLazyRoute = createLazyRoute('/about')({
    component: AboutPage,
});
