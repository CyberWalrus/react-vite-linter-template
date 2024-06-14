import { useWatchLayout } from '$shared/core/layout';
import { useWatchDeviceTheme, useWatchTheme } from '$shared/core/theme';

export const useInit = () => {
    useWatchLayout();
    useWatchTheme();
    useWatchDeviceTheme();
};
