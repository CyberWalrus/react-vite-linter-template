export type Layout = 'mobile' | 'tablet' | 'desktop';

export type LayoutState = {
    layout: Layout;
    setLayout: (value: Layout) => void;
};
