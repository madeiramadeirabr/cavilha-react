import { ReactNode, HTMLAttributes } from 'react';
import { HelperMarginModifiers, HelperDisplayModifiers, HelperGapModifiers, HelperBackgroundModifiers, HelperTextColorModifiers, HelperTextAlignModifiers, HelperFlexAligmentModifiers, ElementColorProps, HelperWidthModifiers } from '../../cavilha';
export declare type CollectionVariantModifiers = 'collection--is-horizontal' | 'collection--is-vertical';
export declare type CollectionDirectionModifier = 'horizontal' | 'vertical';
export declare type CollectionProps = {
    isDirection?: CollectionDirectionModifier;
    variants?: (string)[];
    helpers?: (HelperMarginModifiers | HelperGapModifiers | HelperDisplayModifiers | HelperTextAlignModifiers | HelperBackgroundModifiers | HelperTextColorModifiers | HelperFlexAligmentModifiers)[];
    customCss?: string;
    children?: ReactNode;
} & ElementColorProps & HTMLAttributes<HTMLUListElement>;
export declare type ItemProps = {
    variants?: (string)[];
    helpers?: (HelperMarginModifiers | HelperGapModifiers | HelperDisplayModifiers | HelperTextAlignModifiers | HelperBackgroundModifiers | HelperTextColorModifiers | HelperFlexAligmentModifiers | HelperWidthModifiers)[];
    customCss?: string;
    children?: ReactNode;
} & ElementColorProps & HTMLAttributes<HTMLLIElement>;
declare function Collection({ isDirection, variants, helpers, customCss, children, hasColor, hasBackground, ...props }: CollectionProps): JSX.Element;
declare namespace Collection {
    var Item: ({ variants, helpers, customCss, children, hasColor, hasBackground, ...props }: ItemProps) => JSX.Element;
}
export { Collection };
