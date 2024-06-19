import { GLOBAL_STORES_MAP } from '../model/constants';

export const clearAppStores = (appId: string) => {
    if (!GLOBAL_STORES_MAP.has(appId)) {
        return;
    }

    GLOBAL_STORES_MAP.get(appId)?.forEach((clear) => {
        clear(appId);
    });

    GLOBAL_STORES_MAP.delete(appId);
};
