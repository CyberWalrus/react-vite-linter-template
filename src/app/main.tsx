import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Theme } from '@radix-ui/themes';

import { worker } from './mocks/browser';
import { AppRouter } from './router/app-router';

import '@radix-ui/themes/styles.css';
import './styles/main.scss';

if (import.meta.env.DEV) {
    await worker.start();
}

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

createRoot(document.getElementById('root') as HTMLElement).render(
    <StrictMode>
        <Main />
    </StrictMode>,
);
