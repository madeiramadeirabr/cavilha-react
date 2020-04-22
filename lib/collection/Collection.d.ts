import { ReactNode, HTMLAttributes } from 'react';
import { HelperMarginModifiers, HelperDisplayModifiers, HelperGapModifiers, HelperBackgroundModifiers, HelperTextColorModifiers, HelperTextAlignModifiers, HelperFlexAligmentModifiers, ElementColorProps, HelperWidthModifiers } from '../cavilha';
export declare type CollectionVariantModifiers = 'collection--is-horizontal' | 'collection--is-vertical';
export declare type CollectionDirectionModifier = 'horizontal' | 'vertical';
export declare type CollectionProps = {
    hasDirection?: CollectionDirectionModifier;
    variants?: string[];
    helpers?: (HelperMarginModifiers | HelperGapModifiers | HelperDisplayModifiers | HelperTextAlignModifiers | HelperBackgroundModifiers | HelperTextColorModifiers | HelperFlexAligmentModifiers)[];
    hasClassName?: string;
    children?: ReactNode;
} & ElementColorProps & HTMLAttributes<HTMLUListElement>;
export declare type ItemProps = {
    variants?: string[];
    helpers?: (HelperMarginModifiers | HelperGapModifiers | HelperDisplayModifiers | HelperTextAlignModifiers | HelperBackgroundModifiers | HelperTextColorModifiers | HelperFlexAligmentModifiers | HelperWidthModifiers)[];
    hasClassName?: string;
    children?: ReactNode;
} & ElementColorProps & HTMLAttributes<HTMLLIElement>;
declare function Collection({ hasDirection, variants, helpers, hasClassName, children, hasColor, hasBackground, ...props }: CollectionProps): JSX.Element;
declare namespace Collection {
    var Item: ({ variants, helpers, hasClassName, children, hasColor, hasBackground, ...props }: ItemProps) => JSX.Element;
}
export { Collection };
