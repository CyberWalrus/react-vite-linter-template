import { nanoid } from 'nanoid';

import { fetchGetResources } from '$shared/api/resources/index';
import { initI18n } from '$shared/core/i18n';
import { clearAppStores } from '$shared/lib/create-scoped-store';

import { createReact } from '../ui/create-react';
import { prepareWorker } from './prepare-worker';

export const initApp = async () => {
    const appId = nanoid();
    await prepareWorker();
    const i18n = await initI18n(fetchGetResources);

    const unmount = createReact({ appId, elementId: 'root', i18n });

    return () => {
        unmount?.();
        clearAppStores(appId);
    };
};
