import type { FC } from 'react';
import { Text } from '@radix-ui/themes';

import styles from './footer.module.scss';

export const Footer: FC = () => (
    <div className={styles.footer}>
        <Text color='teal'>React Template</Text>
    </div>
);
