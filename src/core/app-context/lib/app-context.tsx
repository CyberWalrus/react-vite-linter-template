import { createContext } from 'react';

export type AppContent = {
    appId: string;
};

export const AppContext = createContext<AppContent>({
    appId: '',
});
