import { ReactNode, HTMLAttributes } from 'react';
import { HelperMarginModifiers, HelperFloatModifiers, HelperDisplayModifiers, HelperTextColorModifiers, HelperTextAlignModifiers, ElementColorProps } from '../cavilha';
export declare type HelpersHeading = 'light' | 'regular' | 'semibold' | 'bold';
export declare type HeadingProps = {
    variants?: string[];
    helpers?: (HelperMarginModifiers | HelperFloatModifiers | HelperDisplayModifiers | HelperTextColorModifiers | HelperTextAlignModifiers)[];
    hasClassName?: string;
    children?: string | ReactNode;
    withPlaceholder?: boolean;
} & Pick<ElementColorProps, 'hasColor'> & HTMLAttributes<HTMLHeadingElement>;
export declare type HeadingHeroProps = {
    isHero?: true;
};
export declare type HeadingWeightProps = {
    hasWeight?: HelpersHeading;
};
declare function H1({ variants, helpers, hasClassName, isHero, children, hasColor, withPlaceholder, ...props }: HeadingProps & HeadingHeroProps): JSX.Element;
declare function H2({ variants, helpers, hasClassName, isHero, children, hasColor, withPlaceholder, ...props }: HeadingProps & HeadingHeroProps): JSX.Element;
declare function H3({ variants, helpers, hasClassName, children, hasColor, hasWeight, withPlaceholder, ...props }: HeadingProps & HeadingWeightProps): JSX.Element;
declare function H4({ variants, helpers, hasClassName, children, hasColor, hasWeight, withPlaceholder, ...props }: HeadingProps & HeadingWeightProps): JSX.Element;
declare function H5({ variants, helpers, hasClassName, children, hasColor, hasWeight, withPlaceholder, ...props }: HeadingProps & HeadingWeightProps): JSX.Element;
declare const Heading: {
    (): void;
    H1: typeof H1;
    H2: typeof H2;
    H3: typeof H3;
    H4: typeof H4;
    H5: typeof H5;
};
export { Heading, H1, H2, H3, H4, H5 };
