import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { Main } from './main';

export const createReact = () => {
    createRoot(document.getElementById('root') as HTMLElement).render(
        <StrictMode>
            <Main />
        </StrictMode>,
    );
};
