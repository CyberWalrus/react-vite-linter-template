import { useLayoutStore } from '../model/store';

export const useLayout = () => {
    const layout = useLayoutStore(({ layout: _layout }) => _layout);

    return {
        isDesktop: layout === 'desktop',
        isDesktopOrTablet: layout === 'tablet' || layout === 'desktop',
        isMobile: layout === 'mobile',
        isMobileOrTablet: layout === 'tablet' || layout === 'mobile',
        isTablet: layout === 'tablet',
    };
};
