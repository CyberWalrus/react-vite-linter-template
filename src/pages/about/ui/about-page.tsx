import type { FC } from 'react';
import { createLazyRoute } from '@tanstack/react-router';

import reactLogo from '$assets/react.svg';
import { BaseIcon } from '$shared/ui';

import styles from './about-page.module.scss';

export const AboutPage: FC = () => (
    <>
        <BaseIcon
            alt='Vite logo'
            href='https://vitejs.dev'
            rel='noreferrer'
            src='/vite.svg'
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
        <p className='read-the-docs'>template</p>
    </>
);

export const aboutLazyRoute = createLazyRoute('/about')({
    component: AboutPage,
});
