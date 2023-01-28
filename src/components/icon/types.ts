import type { AnchorHTMLAttributes, DetailedHTMLProps } from 'react';

export type IconProps = DetailedHTMLProps<
    AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
> & {
    src: string;
    alt?: string;
    classNameIcon?: string;
};
