import { HTMLAttributes } from 'react';
import { HelperMarginModifiers, HelperGapModifiers, HelperDisplayModifiers, HelperFlexAligmentModifiers, ElementColorProps } from '../cavilha';
export declare enum CardElements {
    'card' = "card",
    'header' = "card__header",
    'image' = "card__image",
    'content' = "card__content",
    'footer' = "card__footer"
}
export declare type CardVariantModifiers = 'card--has-no-shadow' | 'card--has-no-radius' | 'card--has-shadow-extra-small' | 'card--has-shadow-small' | 'card--has-shadow-large' | 'card--has-shadow-extra-large';
export declare type CardProps = {
    variants?: CardVariantModifiers[];
    helpers?: (HelperMarginModifiers | HelperGapModifiers | HelperDisplayModifiers | HelperFlexAligmentModifiers)[];
    hasClassName?: string;
    hasShadow?: 'no-shadow' | 'extra-small' | 'small' | 'large' | 'extra-large';
    href?: string;
} & ElementColorProps & HTMLAttributes<HTMLDivElement | HTMLAnchorElement>;
export declare type CardHeaderProps = CardProps;
export declare type CardContentProps = CardProps;
export declare type CardFooterProps = CardProps;
