import type { FC, ReactNode } from 'react';
import { useMemo } from 'react';

import { AppContext } from '../lib/app-context';

type AppProviderProps = {
    appId: string;
    children: ReactNode;
};
export const AppProvider: FC<AppProviderProps> = ({ appId, children }) => {
    const appValue = useMemo(
        () => ({
            appId,
        }),
        [appId],
    );

    return <AppContext.Provider value={appValue}>{children}</AppContext.Provider>;
};
