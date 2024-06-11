import { useCallback } from 'react';
import type { FallbackNs, UseTranslationOptions } from 'react-i18next';
import { useTranslation } from 'react-i18next';
import type { FlatNamespace, KeyPrefix } from 'i18next';

import { parseStringWithLinks } from './parse-string-with-links';
import { substituteVariables } from './substitute-variables';

export type Tuple<T> = readonly [T?, ...T[]];

type GetFunctionArgs = {
    key: string;
    options?: Record<string, unknown>;
    props?: Record<string, unknown>;
};

export const useI18n = <
    Ns extends FlatNamespace | Tuple<FlatNamespace> | undefined = undefined,
    KPrefix extends KeyPrefix<FallbackNs<Ns>> = undefined,
>(
    ns?: Ns,
    options?: UseTranslationOptions<KPrefix>,
) => {
    const { t: get, ...translation } = useTranslation(ns ?? 'default', options);

    const t = useCallback(
        ({ key, options: getOptions, props = {} }: GetFunctionArgs) => {
            const prevResult = get(key, getOptions);

            const value = substituteVariables({
                constant: key,
                prevResult,
                props,
                showMissingConstant: true,
            });

            return parseStringWithLinks(value);
        },
        [get],
    );

    return { ...translation, get, t };
};
