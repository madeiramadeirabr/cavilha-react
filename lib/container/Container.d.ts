import { ReactNode, HTMLAttributes } from 'react';
import { HelperBackgroundModifiers, HelperMarginVerticalModifiers, HelperGapVerticalModifiers, HelperGapHorizontalModifiers, HelperFlexAligmentModifiers, ElementColorProps } from '../cavilha';
export declare type ContainerVariantModifiers = 'container--has-sidebar' | 'container--is-full-width' | 'container--is-full-width-tablet' | 'container--is-full-width-mobile';
export declare type ContainerProps = {
    variants?: (ContainerVariantModifiers)[];
    helpers?: (HelperBackgroundModifiers | HelperMarginVerticalModifiers | HelperGapVerticalModifiers | HelperGapHorizontalModifiers | HelperFlexAligmentModifiers)[];
    hasClassName?: string;
    children: ReactNode;
} & Pick<ElementColorProps, 'hasBackground'> & HTMLAttributes<HTMLDivElement>;
export declare const CONTAINER_BLOCK = "container";
declare function Container({ variants, helpers, hasClassName, children, hasBackground, ...props }: ContainerProps): JSX.Element;
export { Container };
