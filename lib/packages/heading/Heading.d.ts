import { ReactNode, HTMLAttributes } from 'react';
import { HelperMarginModifiers, HelperFloatModifiers, HelperDisplayModifiers, HelperTextColorModifiers, HelperTextAlignModifiers, HelperTextWeightModifiers, ElementColorProps } from '../../cavilha';
export declare type HelpersHeadingAvailable = Extract<HelperTextWeightModifiers, 'helper--has-text-semibold'> | Extract<HelperTextWeightModifiers, 'helper--has-text-light'>;
export declare type HeadingProps = {
    variants?: (string)[];
    helpers?: (HelpersHeadingAvailable | HelperMarginModifiers | HelperFloatModifiers | HelperDisplayModifiers | HelperTextColorModifiers | HelperTextAlignModifiers)[];
    customCss?: string;
    children: ReactNode;
} & Pick<ElementColorProps, 'hasColor'> & HTMLAttributes<HTMLHeadingElement>;
export declare type HeadingHeroProps = {
    isHero?: true;
};
declare function H1({ variants, helpers, customCss, isHero, children, hasColor, ...props }: HeadingProps & HeadingHeroProps): JSX.Element;
declare function H2({ variants, helpers, customCss, isHero, children, hasColor, ...props }: HeadingProps & HeadingHeroProps): JSX.Element;
declare function H3({ variants, helpers, customCss, children, hasColor, ...props }: HeadingProps): JSX.Element;
declare function H4({ variants, helpers, customCss, children, hasColor, ...props }: HeadingProps): JSX.Element;
declare function H5({ variants, helpers, customCss, children, hasColor, ...props }: HeadingProps): JSX.Element;
export { H1, H2, H3, H4, H5 };
