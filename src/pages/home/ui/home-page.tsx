import type { FC } from 'react';
import { createLazyRoute } from '@tanstack/react-router';

import { Counter } from '$widgets/counter';
import { TechLink } from '$shared/ui/tech-link';
import { TT } from '$shared/ui/typography';

export const HomePage: FC = () => (
    <>
        <TechLink />
        <div>
            <Counter />
        </div>
        <div>
            <p>
                Edit <code>src/App.tsx</code> and save to test HMR
            </p>
            <TT>title</TT>
            <TT>link</TT>
        </div>
    </>
);

export const homeLazyRoute = createLazyRoute('/mainLayout/')({
    component: HomePage,
});
