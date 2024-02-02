/* eslint-disable react/no-children-prop */
import { HomePage } from '$pages/home';
import { PageLayout } from '$shared/ui';

export const AppRouter = () => <PageLayout children={<HomePage />} />;
