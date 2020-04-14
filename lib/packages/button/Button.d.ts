import React, { ReactNode, Ref, ButtonHTMLAttributes } from 'react';
import { HelperMarginModifiers, HelperFloatModifiers, HelperWidthModifiers, HelperDisplayModifiers } from '../../cavilha';
export declare type ButtonColorModifier = 'primary' | 'secondary' | 'danger' | 'success';
export declare type ButtonSizeModifiers = 'extra-small' | 'small' | 'large' | 'extra-large';
export declare type ButtonVariantModifiers = 'button--is-outline' | 'button--is-link' | 'button--is-disabled' | 'button--is-extra-small' | 'button--is-small' | 'button--is-large' | 'button--is-extra-large' | 'button--has-icon';
export declare type ButtonTypes = HTMLAnchorElement | HTMLButtonElement;
export declare type ButtonProps = {
    isColor?: ButtonColorModifier;
    isOutline?: boolean;
    isLink?: boolean;
    isSize?: ButtonSizeModifiers;
    buttonRef?: Ref<ButtonTypes>;
    variants?: (ButtonVariantModifiers)[];
    helpers?: (HelperMarginModifiers | HelperFloatModifiers | HelperWidthModifiers | HelperDisplayModifiers)[];
    customCss?: string;
    isLoading?: boolean;
    isDisabled?: boolean;
    iconLeft?: ReactNode;
    iconRight?: ReactNode;
    href?: string;
};
export interface IButtonProps<T extends ButtonTypes> extends ButtonHTMLAttributes<T>, ButtonProps {
}
declare const Button: <T extends ButtonTypes>({ isColor, isLink, isSize, isOutline, isLoading, isDisabled, iconLeft, iconRight, variants, helpers, customCss, children, href, ...props }: IButtonProps<T>, ref?: React.Ref<HTMLButtonElement>) => JSX.Element;
declare const ButtonWithRef: <T extends ButtonTypes>({ buttonRef, ...props }: IButtonProps<T> & {
    buttonRef: React.Ref<HTMLButtonElement>;
}) => JSX.Element;
export { Button, ButtonWithRef };
