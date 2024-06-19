import { createRoot } from 'react-dom/client';
import type { i18n as I18n } from 'i18next';

import { App } from './app';

export const createReact = ({ appId, elementId, i18n }: { appId: string; elementId: string; i18n: I18n }) => {
    const root = createRoot(document.getElementById(elementId) as HTMLElement);
    root.render(
        <App
            appId={appId}
            i18n={i18n}
        />,
    );

    return root.unmount.bind(root);
};
