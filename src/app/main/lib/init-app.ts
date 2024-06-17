import { nanoid } from 'nanoid/non-secure';

import { fetchGetResources } from '$shared/api/resources/index';
import { envClient } from '$shared/core/env-client';
import { initI18n } from '$shared/core/i18n';
import { logError } from '$shared/core/logger';

import { createReact } from '../ui/create-react';

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

export const initApp = async () => {
    await prepareWorker();
    try {
        const { result } = await fetchGetResources();
        await initI18n({ json: result });
    } catch (error: unknown) {
        logError(error);
    }
    const appId = nanoid();

    createReact(appId);
};
