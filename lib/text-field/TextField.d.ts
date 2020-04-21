import { HTMLAttributes, ReactNode } from 'react';
import { HelperMarginModifiers, HelperFloatModifiers, HelperWidthModifiers, HelperDisplayModifiers } from '../cavilha';
export declare enum TextFieldElements {
    'block' = "text-field",
    'label' = "text-field__label",
    'helper' = "text-field__helper",
    'icon' = "text-field__icon"
}
export declare type TextFieldVariantModifiers = 'input--is-active' | 'input--is-positive' | 'input--is-negative';
export declare type TextFieldProps = {
    variants?: (TextFieldVariantModifiers)[];
    helpers?: (HelperMarginModifiers | HelperFloatModifiers | HelperWidthModifiers | HelperDisplayModifiers)[];
    hasClassName?: string;
    isDisabled?: boolean;
    hasType?: 'input' | 'textarea';
    isInline?: boolean;
    label: string;
    helper?: string;
    hasModifier?: 'active' | 'positive' | 'negative';
    hasIconLeft?: string | ReactNode;
    hasIconRight?: string | ReactNode;
} & HTMLAttributes<HTMLInputElement | HTMLTextAreaElement>;
declare function TextField({ isDisabled, variants, helpers, hasClassName, hasType, inputMode, label, helper, hasModifier, hasIconLeft, hasIconRight, ...props }: TextFieldProps): JSX.Element;
export { TextField };
