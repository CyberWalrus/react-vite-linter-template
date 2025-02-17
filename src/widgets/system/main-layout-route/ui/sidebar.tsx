import type { FC } from 'react';

import styles from './sidebar.module.scss';

export const Sidebar: FC = () => (
    <div className={styles.sidebar}>
        <h4>sidebar</h4>
        <section className={styles.scrollable}>
            <article className={styles.block} />
            <article className={styles.block} />
            <article className={styles.block} />
            <article className={styles.block} />
            <article className={styles.block} />
            <article className={styles.block} />
            <article className={styles.block} />
            <article className={styles.block} />
            <article className={styles.block} />
        </section>
        <div className={styles.controls}>
            <button
                className={styles.button}
                type='button'
            >
                button
            </button>
        </div>
    </div>
);
