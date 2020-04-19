import { ReactNode, HTMLAttributes } from 'react';
import { HelperMarginModifiers, HelperGapModifiers, HelperDisplayModifiers, HelperBackgroundModifiers, HelperFlexAligmentModifiers, ElementColorProps } from '../cavilha';
export declare type HeroVariantModifiers = 'hero--has-navbar' | 'hero--has-no-radius';
export declare type HeroSizesModifiers = 'hero--has-is-auto' | 'hero--has-is-extra-small' | 'hero--has-is-small' | 'hero--has-is-large' | 'hero--has-is-extra-large';
export declare type HeroSizes = 'auto' | 'extra-small' | 'small' | 'large' | 'extra-large';
export declare type HeroProps = {
    variants?: (HeroVariantModifiers)[];
    helpers?: (HelperMarginModifiers | HelperGapModifiers | HelperDisplayModifiers | HelperBackgroundModifiers | HelperFlexAligmentModifiers)[];
    customCss?: string;
    isSize?: HeroSizes;
    hasNoRadius?: boolean;
    hasImage?: string;
    hasNavbar?: boolean;
    children: ReactNode;
} & ElementColorProps & HTMLAttributes<HTMLDivElement>;
declare function Hero({ variants, helpers, customCss, children, hasColor, isSize, hasNavbar, hasNoRadius, hasBackground, hasImage, ...props }: HeroProps): JSX.Element;
export { Hero };
