import { HTMLAttributes } from 'react';
import { HelperGapModifiers, HelperTextAlignModifiers, HelperFlexAligmentModifiers, ElementColorProps } from '../cavilha';
export declare enum DialogElements {
    'block' = "dialog",
    'container' = "dialog__container",
    'header' = "dialog__header",
    'body' = "dialog__body",
    'footer' = "dialog__footer"
}
export declare type DialogVariants = 'dialog--is-open' | 'dialog--is-transparent' | 'dialog--is-auto-width' | 'dialog--is-viewport' | 'dialog--is-relative';
export declare type DialogProps = {
    variants?: DialogVariants[];
    helpers?: string[];
    hasClassName?: string;
    isOpen?: boolean;
    isTransparent?: boolean;
    isAutoWidth?: boolean;
    isViewport?: boolean;
    isRelative?: boolean;
} & HTMLAttributes<HTMLDivElement>;
declare function Dialog({ variants, helpers, hasClassName, children, isOpen, isTransparent, isAutoWidth, isViewport, isRelative, ...props }: DialogProps): JSX.Element;
declare namespace Dialog {
    var Container: (props: DialogChildrenProps) => JSX.Element;
    var Header: (props: DialogChildrenProps) => JSX.Element;
    var Body: (props: DialogChildrenProps) => JSX.Element;
    var Footer: (props: DialogChildrenProps) => JSX.Element;
}
export declare type DialogChildrenProps = {
    variants?: string[];
    helpers?: (HelperGapModifiers | HelperTextAlignModifiers | HelperFlexAligmentModifiers)[];
    hasClassName?: string;
} & ElementColorProps & HTMLAttributes<HTMLDivElement>;
export { Dialog };
