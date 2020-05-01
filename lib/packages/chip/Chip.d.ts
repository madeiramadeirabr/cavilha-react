import React, { HTMLAttributes } from 'react';
import { HelperMarginModifiers, HelperDisplayModifiers, HelperFloatModifiers } from '../cavilha';
export declare type ChipColorModifier = 'primary' | 'secondary' | 'danger' | 'success' | 'white' | 'dark';
export declare type ChipVariantModifiers = 'chip--is-primary' | 'chip--is-secondary' | 'chip--is-danger' | 'chip--is-sucess' | 'chip--is-white' | 'chip--is-dark' | 'chip--is-outline';
export declare type ChipProps = {
    variants?: string[];
    helpers?: (HelperMarginModifiers | HelperDisplayModifiers | HelperFloatModifiers)[];
    hasClassName?: string;
    hasColor?: ChipColorModifier;
    isOutline?: boolean;
    href?: string;
    hasFloat?: 'left' | 'right';
} & HTMLAttributes<HTMLSpanElement | HTMLAnchorElement>;
export declare type CloseProps = {} & HTMLAttributes<HTMLButtonElement>;
declare function Chip({ variants, helpers, hasClassName, children, hasColor, isOutline, href, hasFloat, ...props }: ChipProps): JSX.Element;
declare namespace Chip {
    var Close: ({ ...props }: React.HTMLAttributes<HTMLButtonElement>) => JSX.Element;
}
export { Chip };
