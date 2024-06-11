import { initReactI18next } from 'react-i18next';
import i18next from 'i18next';
import ky from 'ky';

export const defaultNS = 'default';

export const initI18n = async () => {
    const json: { result: Record<string, string> } = await ky
        .post('/rest/getResources', { json: { lang: 'ru' } })
        .json();

    await i18next.use(initReactI18next).init({
        // if you're using a language detector, do not define the lng option
        debug: true,
        defaultNS,
        lng: 'ru',
        resources: {
            ru: {
                default: json.result,
            },
        },
    });
};
