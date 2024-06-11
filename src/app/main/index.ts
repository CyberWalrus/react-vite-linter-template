import { logError } from '$shared/lib/logger';

import { initApp } from './lib/init-app';

export * from './ui/main';

initApp().catch(logError);
