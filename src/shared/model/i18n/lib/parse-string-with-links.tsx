import type { ReactNode } from 'react';
import { Link } from '@tanstack/react-router';

import { VARIABLES_RX_LINK } from './constants';

export const parseStringWithLinks = (value: string, index = 0): ReactNode[] | string => {
    if (!VARIABLES_RX_LINK.test(value)) return value;

    const result: ReactNode[] = [];
    const match = value.match(VARIABLES_RX_LINK);

    if (!match) return value;

    const [fullMatch, linkText, linkHref, attributesString] = match;
    const split = value.split(fullMatch);
    const attributes: Record<string, unknown> = {};

    if (split[0]) {
        result.push(split[0]);
    }

    if (attributesString) {
        const attributesArray = attributesString.split(';');
        attributesArray.forEach((item) => {
            const [key, val] = item.split('=');
            attributes[key] = val;
        });
    }

    result.push(
        <Link
            key={index++}
            {...attributes}
            to={linkHref}
        >
            {linkText}
        </Link>,
    );

    if (split[1]) {
        const additionalLinks = parseStringWithLinks(split[1], index);
        if (Array.isArray(additionalLinks)) {
            result.push(...additionalLinks);
        } else {
            result.push(additionalLinks);
        }
    }

    return result;
};
