import type { AnchorHTMLAttributes, DetailedHTMLProps } from 'react';

export type BaseIconProps = DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement> & {
    src: string;
    alt?: string;
    classNameIcon?: string;
};
