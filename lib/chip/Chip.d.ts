import React, { ReactNode, HTMLAttributes } from 'react';
import { HelperMarginModifiers, HelperDisplayModifiers } from '../cavilha';
export declare type ChipColorModifier = 'primary' | 'secondary' | 'danger' | 'success' | 'white' | 'dark';
export declare type ChipVariantModifiers = 'chip--is-primary' | 'chip--is-secondary' | 'chip--is-danger' | 'chip--is-sucess' | 'chip--is-white' | 'chip--is-dark' | 'chip--is-outline';
export declare type ChipProps = {
    variants?: (string)[];
    helpers?: (HelperMarginModifiers | HelperDisplayModifiers)[];
    hasClassName?: string;
    children?: ReactNode;
    hasColor?: ChipColorModifier;
    isOutline?: boolean;
    isLink?: boolean;
    to?: string;
} & HTMLAttributes<HTMLSpanElement | HTMLAnchorElement>;
export declare type CloseProps = {} & HTMLAttributes<HTMLButtonElement>;
declare function Chip({ variants, helpers, hasClassName, children, hasColor, isOutline, isLink, ...props }: ChipProps): JSX.Element;
declare namespace Chip {
    var Close: ({ ...props }: React.HTMLAttributes<HTMLButtonElement>) => JSX.Element;
}
export { Chip };
