import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Theme } from '@radix-ui/themes';

import { AppRouter } from './router/app-router';

import '@radix-ui/themes/styles.css';
import './styles/main.scss';

createRoot(document.getElementById('root') as HTMLElement).render(
    <StrictMode>
        <Theme
            accentColor='grass'
            appearance='dark'
            grayColor='gray'
            radius='large'
        >
            <AppRouter />
        </Theme>
    </StrictMode>,
);
