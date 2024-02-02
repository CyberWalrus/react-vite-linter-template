import React from 'react';
import ReactDOM from 'react-dom/client';

import { AppRouter } from './router/app-router';

import './styles/vars.scss';
import './styles/main.scss';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <AppRouter />
    </React.StrictMode>,
);
