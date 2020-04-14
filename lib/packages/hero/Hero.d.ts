import { ReactNode, HTMLAttributes } from 'react';
import { HelperMarginModifiers, HelperGapModifiers, HelperDisplayModifiers, HelperBackgroundModifiers, HelperFlexAligmentModifiers, ElementColorProps } from '../../cavilha';
export declare type HeroVariantModifiers = 'hero--has-navbar' | 'hero--has-no-radius';
export declare type HeroSizes = 'extra-small' | 'small' | 'large' | 'extra-large';
export declare type HeroProps = {
    variants?: (HeroVariantModifiers)[];
    helpers?: (HelperMarginModifiers | HelperGapModifiers | HelperDisplayModifiers | HelperBackgroundModifiers | HelperFlexAligmentModifiers)[];
    customCss?: string;
    isSize?: HeroSizes;
    hasImage?: string;
    children: ReactNode;
} & ElementColorProps & HTMLAttributes<HTMLDivElement>;
declare function Hero({ variants, helpers, customCss, children, hasColor, isSize, hasBackground, hasImage, ...props }: HeroProps): JSX.Element;
export { Hero };
