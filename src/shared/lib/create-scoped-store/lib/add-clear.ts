import { GLOBAL_STORES_MAP } from '../model/constants';

export const addClear = (appId: string, clear: (value: string) => void) => {
    if (GLOBAL_STORES_MAP.has(appId)) {
        GLOBAL_STORES_MAP.get(appId)?.push(clear);

        return;
    }

    GLOBAL_STORES_MAP.set(appId, [clear]);
};
