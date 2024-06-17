import { createRoot } from 'react-dom/client';

import { App } from './app';

export const createReact = (appId: string) => {
    createRoot(document.getElementById('root') as HTMLElement).render(<App appId={appId} />);
};
