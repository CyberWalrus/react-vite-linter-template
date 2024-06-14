import { initReactI18next } from 'react-i18next';
import i18next from 'i18next';

export const defaultNS = 'default';

export const initI18n = async ({ json }: { json: Record<string, string> }) => {
    await i18next.use(initReactI18next).init({
        // if you're using a language detector, do not define the lng option
        debug: true,
        defaultNS,
        lng: 'ru',
        resources: {
            ru: {
                default: json,
            },
        },
    });
};
