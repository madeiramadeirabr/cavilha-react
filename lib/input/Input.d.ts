import { ReactNode, HTMLAttributes } from 'react';
import { HelperMarginModifiers, HelperFloatModifiers, HelperWidthModifiers, HelperDisplayModifiers } from '../cavilha';
export declare type InputElements = 'input__radio' | 'input__checkbox';
export declare type InputVariantModifiers = 'input--is-inline' | 'input--is-block';
export declare type InputProps = {
    variants?: string[];
    helpers?: (HelperMarginModifiers | HelperFloatModifiers | HelperWidthModifiers | HelperDisplayModifiers)[];
    hasClassName?: string;
    isDisabled?: boolean;
    hasType: 'radio' | 'checkbox';
    children: ReactNode;
    name: string;
    value: string;
    isInline?: boolean;
} & HTMLAttributes<HTMLInputElement>;
declare function Input({ isDisabled, variants, helpers, hasClassName, children, hasType, isInline, ...props }: InputProps): JSX.Element;
export { Input };
