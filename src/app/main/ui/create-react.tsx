import { createRoot } from 'react-dom/client';

import { App } from './app';

export const createReact = (appId: string, elementId: string) => {
    const root = createRoot(document.getElementById(elementId) as HTMLElement);
    root.render(<App appId={appId} />);

    return root.unmount.bind(root);
};
