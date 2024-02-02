import { createLazyRoute } from '@tanstack/react-router';

import { HomePage } from './ui/home-page';

export const homeLazyRoute = createLazyRoute('/')({
    component: HomePage,
});
