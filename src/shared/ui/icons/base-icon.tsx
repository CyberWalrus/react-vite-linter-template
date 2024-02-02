import type { FC } from 'react';
import { clsx } from 'clsx';

import type { BaseIconProps } from './base-icon.types';

import styles from './base-icon.module.scss';

export const BaseIcon: FC<BaseIconProps> = ({ src, alt, classNameIcon, ...props }) => (
    <a {...props}>
        <img
            alt={alt}
            className={clsx(styles.baseIcon, classNameIcon)}
            src={src}
        />
    </a>
);
