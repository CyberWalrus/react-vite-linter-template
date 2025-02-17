import { useWatchLayout } from '$core/layout';
import { useWatchDeviceTheme, useWatchTheme } from '$core/theme';

export const useInit = () => {
    useWatchLayout();
    useWatchTheme();
    useWatchDeviceTheme();
};
