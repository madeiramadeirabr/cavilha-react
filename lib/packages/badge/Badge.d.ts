import { HTMLAttributes } from 'react';
import { HelperMarginModifiers, HelperDisplayModifiers, HelperFloatModifiers } from '../cavilha';
export declare type BadgeColorModifier = 'primary' | 'secondary' | 'danger' | 'success' | 'white' | 'dark';
export declare type BadgeVariantModifiers = 'badge--is-primary' | 'badge--is-secondary' | 'badge--is-danger' | 'badge--is-sucess' | 'badge--is-white' | 'badge--is-dark' | 'badge--is-pill' | 'badge--is-floating' | 'badge--is-outline';
export declare type BadgeProps = {
    variants?: string[];
    helpers?: (HelperMarginModifiers | HelperDisplayModifiers | HelperFloatModifiers)[];
    hasClassName?: string;
    hasColor?: BadgeColorModifier;
    isPill?: boolean;
    isFloating?: boolean;
    isOutline?: boolean;
    href?: string;
    hasFloat?: 'left' | 'right';
} & HTMLAttributes<HTMLSpanElement | HTMLAnchorElement>;
declare function Badge({ variants, helpers, hasClassName, children, hasColor, isPill, isFloating, isOutline, href, hasFloat, ...props }: BadgeProps): JSX.Element;
export { Badge };
