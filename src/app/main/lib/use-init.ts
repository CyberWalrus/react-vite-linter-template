import { useWatchLayout } from '$shared/model/layout';
import { useWatchDeviceTheme, useWatchTheme } from '$shared/model/theme';

export const useInit = () => {
    useWatchLayout();
    useWatchTheme();
    useWatchDeviceTheme();
};
