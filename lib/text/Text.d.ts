import { ReactNode, HTMLAttributes } from 'react';
import { HelperMarginModifiers, HelperDisplayModifiers, HelperTextColorModifiers, HelperTextAlignModifiers, HelperGapModifiers, ElementColorProps } from '../cavilha';
export declare type TextVariantModifiers = 'text--is-body-one-regular' | 'text--is-body-one-bold' | 'text--is-body-two-regular' | 'text--is-body-two-bold' | 'text--is-button' | 'text--is-caption' | 'text--is-overline';
export declare type TextVariantModifier = 'body-one-regular' | 'body-one-bold' | 'body-two-regular' | 'body-two-bold' | 'button' | 'caption' | 'overline';
export declare type TextProps = {
    type?: HTMLParagraphElement | HTMLSpanElement;
    isText?: TextVariantModifier;
    variants?: (TextVariantModifiers)[];
    helpers?: (HelperMarginModifiers | HelperGapModifiers | HelperDisplayModifiers | HelperTextColorModifiers | HelperTextAlignModifiers)[];
    customCss?: string;
    children: ReactNode;
} & ElementColorProps & HTMLAttributes<HTMLParagraphElement> & HTMLAttributes<HTMLSpanElement>;
declare function Text({ type, hasColor, hasBackground, isText, variants, helpers, customCss, children, ...props }: TextProps): JSX.Element;
export { Text };
