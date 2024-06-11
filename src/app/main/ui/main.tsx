import { AppRouter } from '../../router/index';
import { useInit } from '../lib/use-init';

export const Main = () => {
    useInit();

    return <AppRouter />;
};
