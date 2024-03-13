import type { ReactNode } from 'react';

export type PageLayoutProps = {
    children?: ReactNode;
    footer?: ReactNode;
    header?: ReactNode;
    sidebar?: ReactNode;
    title?: ReactNode;
};
