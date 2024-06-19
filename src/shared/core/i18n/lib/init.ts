import { initReactI18next } from 'react-i18next';
import i18next from 'i18next';

import { logError } from '$shared/core/logger';

export const defaultNS = 'default';

export const initI18n = async (getInitResources: () => Promise<Record<string, string>> | Record<string, string>) => {
    const i18nextInstance = i18next.createInstance();

    let json: Record<string, string> = {};

    try {
        json = await getInitResources();
    } catch (error: unknown) {
        logError(error);
    }

    await i18nextInstance.use(initReactI18next).init({
        debug: true,
        defaultNS,
        lng: 'ru',
        resources: {
            ru: {
                default: json,
            },
        },
    });

    return i18nextInstance;
};
