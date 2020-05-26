import { ReactNode, HTMLAttributes } from 'react';
import { HelperMarginModifiers, HelperDisplayModifiers, HelperGapModifiers, HelperBackgroundModifiers, HelperTextColorModifiers, HelperTextAlignModifiers, HelperFlexAligmentModifiers, HelperScrollModifiers, ElementColorProps } from '../cavilha';
export declare type SectionProps = {
    variants?: string[];
    helpers?: (HelperMarginModifiers | HelperGapModifiers | HelperDisplayModifiers | HelperTextAlignModifiers | HelperBackgroundModifiers | HelperTextColorModifiers | HelperFlexAligmentModifiers | HelperScrollModifiers)[];
    hasClassName?: string;
    children?: ReactNode;
} & ElementColorProps & HTMLAttributes<HTMLDivElement>;
