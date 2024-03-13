import type { FC } from 'react';

import type { PageLayoutProps } from './page-layout.type';

import styles from './page-layout.module.scss';

export const PageLayout: FC<PageLayoutProps> = ({ title, header, children, footer, sidebar }) => (
    <section className={styles.app}>
        <header className={styles.header}>{header}</header>
        <section className={styles.main}>
            {title && <h1>{title}</h1>}
            {children}
        </section>
        <section className={styles.sidebar}>{sidebar}</section>
        <footer className={styles.footer}>{footer}</footer>
    </section>
);
