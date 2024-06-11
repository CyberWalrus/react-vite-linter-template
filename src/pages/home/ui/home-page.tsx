import type { FC } from 'react';
import { createLazyRoute } from '@tanstack/react-router';

import { Counter } from '$widgets/counter';
import { TechLink } from '$shared/ui/tech-link';

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
            <p>Click on the Vite and React logos to learn more</p>
        </div>
    </>
);

export const homeLazyRoute = createLazyRoute('/mainLayout/')({
    component: HomePage,
});
