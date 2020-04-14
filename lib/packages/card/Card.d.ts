import { ReactNode, HTMLAttributes } from 'react';
import { HelperMarginModifiers, HelperGapModifiers, HelperDisplayModifiers, HelperFlexAligmentModifiers, ElementColorProps } from '../../cavilha';
export declare type CardVariantModifiers = 'card--has-no-shadow' | 'card--has-no-border-radius';
export declare type CardProps = {
    variants?: (CardVariantModifiers)[];
    helpers?: (HelperMarginModifiers | HelperGapModifiers | HelperDisplayModifiers | HelperFlexAligmentModifiers)[];
    customCss?: string;
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
