import { ReactNode, Ref, SFC } from 'react';
import { HelperMarginModifiers, HelperFloatModifiers, HelperWidthModifiers, HelperDisplayModifiers } from '../cavilha';
export declare type ButtonColorModifier = 'primary' | 'secondary' | 'danger' | 'success';
export declare type ButtonColorModifiers = 'button--is-primary' | 'button--is-secondary' | 'button--is-danger' | 'button--is-sucess';
export declare type ButtonSizeModifier = 'extra-small' | 'small' | 'large' | 'extra-large';
export declare type ButtonVariantModifiers = 'button--is-outline' | 'button--is-link' | 'button--is-disabled' | 'button--is-extra-small' | 'button--is-small' | 'button--is-large' | 'button--is-extra-large' | 'button--has-icon' | 'button--is-square' | 'button--is-circle';
export declare type ButtonSizeModifiers = Omit<ButtonVariantModifiers, 'button--is-outline'> | Omit<ButtonVariantModifiers, 'button--is-link'> | Omit<ButtonVariantModifiers, 'button--is-disabled'> | Omit<ButtonVariantModifiers, 'button--has-icon'>;
export declare type ButtonTypes = HTMLAnchorElement | HTMLButtonElement;
export interface ButtonProps {
    hasColor?: ButtonColorModifier;
    isOutline?: boolean;
    isLink?: boolean;
    hasSize?: ButtonSizeModifier;
    buttonRef?: Ref<ButtonTypes>;
    variants?: (ButtonVariantModifiers)[];
    helpers?: (HelperMarginModifiers | HelperFloatModifiers | HelperWidthModifiers | HelperDisplayModifiers)[];
    hasClassName?: string;
    isLoading?: boolean;
    isDisabled?: boolean;
    hasIconLeft?: ReactNode;
    hasIconRight?: ReactNode;
    hasShape?: 'square' | 'circle';
    children: ReactNode;
    href?: string;
    onClick?: any;
}
declare const Button: SFC<ButtonProps>;
export { Button };
