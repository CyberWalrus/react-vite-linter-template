/* eslint-disable no-console */
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Theme } from '@radix-ui/themes';

import { envClient } from '$shared/api/env-client';

import { AppRouter } from './router/app-router';

import '@radix-ui/themes/styles.css';
import './styles/main.scss';

export const Main = () => (
    <Theme
        hasBackground
        accentColor='mint'
        appearance='dark'
        grayColor='gray'
        id='app-start'
        panelBackground='solid'
        radius='large'
        scaling='100%'
    >
        <AppRouter />
    </Theme>
);

let initWorker: () => Promise<void>;

if (envClient.NODE_ENV !== 'production') {
    initWorker = async () => {
        try {
            const { worker } = await import('./mocks');
            await worker.start();
        } catch (error) {
            console.error(error);
        }
    };
}

const initApp = async () => {
    await initWorker?.();

    createRoot(document.getElementById('root') as HTMLElement).render(
        <StrictMode>
            <Main />
        </StrictMode>,
    );
};

initApp().catch(console.error);
