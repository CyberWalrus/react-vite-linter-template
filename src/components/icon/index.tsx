import type { FC } from 'react';
import { clsx } from 'clsx';

import type { IconProps } from './types';

import classes from './styles.module.scss';

const Icon: FC<IconProps> = ({ src, alt, classNameIcon, ...props }) => (
    <a {...props}>
        <img alt={alt} className={clsx(classes.icon, classNameIcon)} src={src} />
    </a>
);

export default Icon;
