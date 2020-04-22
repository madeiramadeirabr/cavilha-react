import { ReactNode, HTMLAttributes } from 'react';
import { HelperMarginModifiers, HelperDisplayModifiers, HelperTextColorModifiers, HelperTextAlignModifiers, HelperGapModifiers, ElementColorProps } from '../cavilha';
export declare type TextVariantModifiers = 'text--is-body-one-regular' | 'text--is-body-one-bold' | 'text--is-body-two-regular' | 'text--is-body-two-bold' | 'text--is-button' | 'text--is-caption' | 'text--is-overline';
export declare type TextVariantModifier = 'body-one-regular' | 'body-one-bold' | 'body-two-regular' | 'body-two-bold' | 'button' | 'caption' | 'overline';
export declare type TextProps = {
    hasElement?: 'span' | 'p' | 'strong' | 'i';
    withMarginFix?: boolean;
    hasText?: TextVariantModifier;
    variants?: TextVariantModifiers[];
    helpers?: (HelperMarginModifiers | HelperGapModifiers | HelperDisplayModifiers | HelperTextColorModifiers | HelperTextAlignModifiers)[];
    hasClassName?: string;
    children: ReactNode;
} & ElementColorProps & HTMLAttributes<HTMLParagraphElement> & HTMLAttributes<HTMLSpanElement>;
declare function Text({ hasElement, hasColor, hasBackground, hasText, variants, helpers, hasClassName, children, withMarginFix, ...props }: TextProps): JSX.Element;
export { Text };
