/* eslint-disable simple-import-sort/imports */
import './styles/reset.scss';
import './styles/fonts.scss';
import './styles/main.scss';

import { logError } from '$shared/core/logger';

import { initApp } from './lib/init-app';

initApp().catch(logError);
