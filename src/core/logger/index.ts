import { createLogger } from './lib/creat-logger';

const { logError, logInfo, logWarn, initializeLogger } = createLogger();

export { initializeLogger, logError, logInfo, logWarn };
