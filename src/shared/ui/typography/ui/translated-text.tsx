import type { FC } from 'react';

import { useI18n } from '$shared/model/i18n';

import type { TranslatedTextProps } from './translated-text.types';

export const TT: FC<TranslatedTextProps> = ({ children, resources = 'default', ...props }) => {
    const { t } = useI18n(resources);

    return <p {...props}>{t({ key: children, props })}</p>;
};
