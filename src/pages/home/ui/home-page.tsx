import type { FC } from 'react';
import { createLazyRoute } from '@tanstack/react-router';

import reactLogo from '$shared/assets/react.svg';
import { getPublicURL } from '$shared/lib';
import { BaseIcon } from '$shared/ui';
import { Counter } from '$features/counter';

import styles from './home-page.module.scss';

export const HomePage: FC = () => (
    <>
        <BaseIcon
            alt='Vite logo'
            classNameIcon={styles.img}
            href='https://vitejs.dev'
            rel='noreferrer'
            src={getPublicURL('vite.svg')}
            target='_blank'
        />
        <BaseIcon
            alt='React logo'
            classNameIcon={styles.react}
            href='https://reactjs.org'
            rel='noreferrer'
            src={reactLogo}
            target='_blank'
        />
        <div className='card'>
            <Counter />
            <p>
                Edit <code>src/App.tsx</code> and save to test HMR
            </p>
        </div>
        <p className='read-the-docs'>Click on the Vite and React logos to learn more</p>
    </>
);

export const homeLazyRoute = createLazyRoute('/')({
    component: HomePage,
});
