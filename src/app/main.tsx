/* eslint-disable no-console */
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { envClient } from '$shared/api/env-client';

import { AppRouter } from './router/app-router';

import './styles/fonts.scss';
import './styles/main.scss';

export const Main = () => <AppRouter />;

let initWorker: () => Promise<void>;

if (envClient.NODE_ENV !== 'production') {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars, no-unused-vars
    initWorker = async () => {
        try {
            const { worker } = await import('./mocks');
            await worker.start();
        } catch (error) {
            console.error(error);
        }
    };
}

// eslint-disable-next-line @typescript-eslint/require-await
const initApp = async () => {
    // await initWorker?.();

    createRoot(document.getElementById('root') as HTMLElement).render(
        <StrictMode>
            <Main />
        </StrictMode>,
    );
};

initApp().catch(console.error);
