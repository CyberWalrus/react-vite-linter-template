import type { FC } from 'react';
import { StrictMode } from 'react';
import { I18nextProvider } from 'react-i18next';

import { Main } from '$app/main/ui/main';
import { AppProvider } from '$shared/core/app-context';

import type { AppProps } from './app.type';

export const App: FC<AppProps> = ({ appId, i18n }) => (
    <StrictMode>
        <AppProvider appId={appId}>
            <I18nextProvider i18n={i18n}>
                <Main />
            </I18nextProvider>
        </AppProvider>
    </StrictMode>
);
