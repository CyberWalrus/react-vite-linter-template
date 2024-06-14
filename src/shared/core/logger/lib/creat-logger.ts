/* eslint-disable no-console */
import type { CreateLogger } from '../model/types';

export const createLogger: CreateLogger = () => {
    const logInfo = console.log;

    const logWarn = console.warn;

    const logError = console.error;

    const initializeLogger = () => {};

    return { initializeLogger, logError, logInfo, logWarn };
};
