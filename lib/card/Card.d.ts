import { ReactNode, HTMLAttributes } from 'react';
import { HelperMarginModifiers, HelperGapModifiers, HelperDisplayModifiers, HelperFlexAligmentModifiers, ElementColorProps } from '../cavilha';
export declare type CardVariantModifiers = 'card--has-no-shadow' | 'card--has-no-radius' | 'card--has-shadow-extra-small' | 'card--has-shadow-small' | 'card--has-shadow-large' | 'card--has-shadow-extra-large';
export declare type CardProps = {
    variants?: (CardVariantModifiers)[];
    helpers?: (HelperMarginModifiers | HelperGapModifiers | HelperDisplayModifiers | HelperFlexAligmentModifiers)[];
    hasClassName?: string;
    hasShadow?: 'no-shadow' | 'extra-small' | 'small' | 'large' | 'extra-large';
    children: ReactNode;
} & ElementColorProps & HTMLAttributes<HTMLDivElement>;
export declare type CardHeaderProps = CardProps;
export declare type CardContentProps = CardProps;
export declare type CardFooterProps = CardProps;
declare const Card: {
    (props: CardProps): JSX.Element;
    Header(props: CardProps): JSX.Element;
    Content(props: CardProps): JSX.Element;
    Footer(props: CardProps): JSX.Element;
};
export { Card };
