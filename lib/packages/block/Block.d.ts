import { HTMLAttributes } from 'react';
import { HelperMarginModifiers, HelperDisplayModifiers, HelperGapModifiers, HelperBackgroundModifiers, HelperTextColorModifiers, HelperTextAlignModifiers, HelperFlexAligmentModifiers, ElementColorProps } from '../cavilha';
export declare type SectionProps = {
    variants?: string[];
    helpers?: (HelperMarginModifiers | HelperGapModifiers | HelperDisplayModifiers | HelperTextAlignModifiers | HelperBackgroundModifiers | HelperTextColorModifiers | HelperFlexAligmentModifiers)[];
    hasClassName?: string;
} & ElementColorProps & HTMLAttributes<HTMLDivElement>;
declare function Block({ variants, helpers, hasClassName, children, hasColor, hasBackground, ...props }: SectionProps): JSX.Element;
export { Block };
