import { fetchGetResources } from '$shared/api/resources/index';
import { envClient } from '$shared/core/env-client';
import { initI18n } from '$shared/core/i18n';
import { clearAppStores } from '$shared/lib/create-scoped-store';

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

export const initApp = async (appId: string, elementId: string) => {
    await prepareWorker();
    const i18n = await initI18n(fetchGetResources);

    const unmount = createReact({ appId, elementId, i18n });

    return () => {
        unmount?.();
        clearAppStores(appId);
    };
};
