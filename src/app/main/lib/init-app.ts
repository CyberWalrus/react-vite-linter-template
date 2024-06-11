/* eslint-disable simple-import-sort/imports */
import '../styles/reset.scss';
import '../styles/fonts.scss';
import '../styles/main.scss';

import { envClient } from '$shared/api/env-client';

import { createReact } from '../ui/create-react';
import { initI18n } from '$shared/model/i18n';

const prepareWorker = async () => {
    if (envClient.NODE_ENV !== 'production') {
        const { worker } = await import('../../mocks');

        return worker.start({
            onUnhandledRequest(req, print) {
                const url = new URL(req.url);
                const excludedRoutes = ['/src/', '/node_modules/'];

                if (excludedRoutes.some((path) => url.pathname.startsWith(path))) {
                    return;
                }

                print.warning();
            },
        });
    }
};

// eslint-disable-next-line @typescript-eslint/require-await
export const initApp = async () => {
    await prepareWorker();
    await initI18n();

    createReact();
};