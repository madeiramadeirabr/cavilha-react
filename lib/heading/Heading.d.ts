import { ReactNode, HTMLAttributes } from 'react';
import { HelperMarginModifiers, HelperFloatModifiers, HelperDisplayModifiers, HelperTextColorModifiers, HelperTextAlignModifiers, ElementColorProps } from '../cavilha';
export declare type HelpersHeading = 'light' | 'regular' | 'semibold' | 'bold';
export declare type HeadingProps = {
    variants?: (string)[];
    helpers?: (HelperMarginModifiers | HelperFloatModifiers | HelperDisplayModifiers | HelperTextColorModifiers | HelperTextAlignModifiers)[];
    hasClassName?: string;
    children: ReactNode;
} & Pick<ElementColorProps, 'hasColor'> & HTMLAttributes<HTMLHeadingElement>;
export declare type HeadingHeroProps = {
    isHero?: true;
};
export declare type HeadingWeightProps = {
    hasWeight?: HelpersHeading;
};
declare function H1({ variants, helpers, hasClassName, isHero, children, hasColor, ...props }: HeadingProps & HeadingHeroProps): JSX.Element;
declare function H2({ variants, helpers, hasClassName, isHero, children, hasColor, ...props }: HeadingProps & HeadingHeroProps): JSX.Element;
declare function H3({ variants, helpers, hasClassName, children, hasColor, hasWeight, ...props }: HeadingProps & HeadingWeightProps): JSX.Element;
declare function H4({ variants, helpers, hasClassName, children, hasColor, hasWeight, ...props }: HeadingProps & HeadingWeightProps): JSX.Element;
declare function H5({ variants, helpers, hasClassName, children, hasColor, hasWeight, ...props }: HeadingProps & HeadingWeightProps): JSX.Element;
export { H1, H2, H3, H4, H5 };
