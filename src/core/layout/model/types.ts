export type Layout = 'desktop' | 'mobile' | 'tablet';

export type LayoutState = {
    layout: Layout;
    setLayout: (value: Layout) => void;
};
