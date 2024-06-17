import type { FC } from 'react';
import { StrictMode } from 'react';

import { Main } from '$app/main/ui/main';
import { AppProvider } from '$shared/core/app-context';

import type { AppProps } from './app.type';

export const App: FC<AppProps> = ({ appId }) => (
    <StrictMode>
        <AppProvider appId={appId}>
            <Main />
        </AppProvider>
    </StrictMode>
);
