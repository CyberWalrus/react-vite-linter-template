import type { FC } from 'react';

import type { PageLayoutProps } from './page-layout.type';

import styles from './page-layout.module.scss';

export const PageLayout: FC<PageLayoutProps> = ({ title, header, children, footer }) => (
    <section className={styles.app}>
        <h1>{title}</h1>
        <header>{header}</header>
        <section>{children}</section>
        <footer>{footer}</footer>
    </section>
);
