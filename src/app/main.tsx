import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { AppRouter } from './router/app-router';

import './styles/vars.scss';
import './styles/main.scss';

createRoot(document.getElementById('root') as HTMLElement).render(
    <StrictMode>
        <AppRouter />
    </StrictMode>,
);
