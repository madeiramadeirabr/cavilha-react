import { ReactNode, HTMLAttributes } from 'react';
import { HelperMarginModifiers, HelperDisplayModifiers } from '../cavilha';
export declare type BadgeColorModifier = 'primary' | 'secondary' | 'danger' | 'success' | 'white' | 'dark';
export declare type BadgeVariantModifiers = 'badge--is-primary' | 'badge--is-secondary' | 'badge--is-danger' | 'badge--is-sucess' | 'badge--is-white' | 'badge--is-dark' | 'badge--is-pill' | 'badge--is-floating' | 'badge--is-outline';
export declare type SectionProps = {
    variants?: (string)[];
    helpers?: (HelperMarginModifiers | HelperDisplayModifiers)[];
    hasClassName?: string;
    children?: ReactNode;
    hasColor?: BadgeColorModifier;
    isPill?: boolean;
    isFloating?: boolean;
    isOutline?: boolean;
    isLink?: boolean;
    to?: string;
} & HTMLAttributes<HTMLSpanElement | HTMLAnchorElement>;
declare function Badge({ variants, helpers, hasClassName, children, hasColor, isPill, isFloating, isOutline, isLink, ...props }: SectionProps): JSX.Element;
export { Badge };
