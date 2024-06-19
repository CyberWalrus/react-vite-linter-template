/* eslint-disable simple-import-sort/imports */
import './styles/reset.scss';
import './styles/fonts.scss';
import './styles/main.scss';

import { logError } from '$shared/core/logger';

import { initApp } from './lib/init-app';
import { nanoid } from 'nanoid/non-secure';

const appId = nanoid();
const appId2 = nanoid();
const promiseApp = initApp(appId, 'root').catch(logError);
initApp(appId2, 'app').catch(logError);

setTimeout(() => {
    const appClear = async () => {
        const clear = await promiseApp;
        clear?.();
    };

    appClear().catch(logError);
}, 5000);
