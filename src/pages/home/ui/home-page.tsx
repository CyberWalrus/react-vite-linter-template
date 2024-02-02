import type { FC } from 'react';
import { useState } from 'react';
import { createLazyRoute } from '@tanstack/react-router';

import reactLogo from '$assets/react.svg';
import { BaseIcon } from '$shared/ui';

import styles from './home-page.module.scss';

export const HomePage: FC = () => {
    const [count, setCount] = useState(0);
    const handleClick = () => setCount((prev) => prev + 1);

    return (
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
            <div className='card'>
                <button
                    className={styles.button}
                    onClick={handleClick}
                    type='button'
                >
                    count is {count}
                </button>
                <p>
                    Edit <code>src/App.tsx</code> and save to test HMR
                </p>
            </div>
            <p className='read-the-docs'>Click on the Vite and React logos to learn more</p>
        </>
    );
};

export const homeLazyRoute = createLazyRoute('/')({
    component: HomePage,
});
