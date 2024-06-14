import { logError } from '$shared/core/logger';

import { initApp } from './lib/init-app';

export * from './ui/main';

initApp().catch(logError);
