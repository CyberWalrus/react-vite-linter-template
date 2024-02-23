import type { FC } from 'react';
import { Flex } from '@radix-ui/themes';

import reactLogo from '$shared/assets/react.svg';
import { getPublicURL } from '$shared/lib';
import { BaseIcon } from '$shared/ui';

import styles from './tech-link.module.scss';

export const TechLink: FC = () => (
    <Flex
        gap='8'
        mb='4'
    >
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
    </Flex>
);
