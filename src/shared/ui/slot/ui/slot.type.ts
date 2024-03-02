import type { HTMLAttributes, ReactNode } from 'react';

/**
 * Type definition for props of a component that accepts children and HTML attributes.
 * Suitable for components designed to pass additional attributes to an underlying HTML element.
 *
 * Определение типа свойств компонента, который принимает дочерние элементы и HTML-атрибуты.
 * Подходит для компонентов, предназначенных для передачи дополнительных атрибутов базовому HTML-элементу.
 */
export type SlotProps = {
    /**
     * Optional children to be passed into the component. Can consist of any valid React nodes.
     *
     * Необязательные дочерние элементы, которые могут быть переданы в компонент. Могут включать любые допустимые React-узлы.
     */
    children?: ReactNode;
} & HTMLAttributes<HTMLElement>;
