import type { FC } from 'react';

import styles from './sidebar.module.scss';

export const Sidebar: FC = () => (
    <div className={styles.sidebar}>
        <h4>sidebar</h4>
        <div className={styles.scrollable}>
            <div className={styles.block} />
            <div className={styles.block} />
            <div className={styles.block} />
            <div className={styles.block} />
            <div className={styles.block} />
            <div className={styles.block} />
            <div className={styles.block} />
            <div className={styles.block} />
            <div className={styles.block} />
        </div>
        <div className={styles.controls}>
            <button type='button'>button</button>
        </div>
    </div>
);
