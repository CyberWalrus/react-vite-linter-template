export type LoggerFunc = (...arg: unknown[]) => void;
export type LoggerInit = () => void;

export type CreateLogger = () => {
    initializeLogger: LoggerInit;
    logError: LoggerFunc;
    logInfo: LoggerFunc;
    logWarn: LoggerFunc;
};
