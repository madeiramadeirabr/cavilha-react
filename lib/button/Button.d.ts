import { ReactNode, Ref, HTMLAttributes } from 'react';
import { HelperMarginModifiers, HelperFloatModifiers, HelperWidthModifiers, HelperDisplayModifiers } from '../cavilha';
import { LinkProps } from 'react-router-dom';
export declare type ButtonColorModifier = 'primary' | 'secondary' | 'danger' | 'success';
export declare type ButtonColorModifiers = 'button--is-primary' | 'button--is-secondary' | 'button--is-danger' | 'button--is-sucess';
export declare type ButtonSizeModifier = 'extra-small' | 'small' | 'large' | 'extra-large';
export declare type ButtonVariantModifiers = 'button--is-outline' | 'button--is-link' | 'button--is-disabled' | 'button--is-extra-small' | 'button--is-small' | 'button--is-large' | 'button--is-extra-large' | 'button--has-icon' | 'button--is-square' | 'button--is-circle';
export declare type ButtonTypes = HTMLAnchorElement | HTMLButtonElement;
export declare type ButtonProps = {
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
};
declare function Button({ hasColor, isLink, hasSize, isOutline, isLoading, isDisabled, hasIconLeft, hasIconRight, variants, helpers, hasClassName, children, hasShape, ...props }: ButtonProps & HTMLAttributes<HTMLButtonElement>): JSX.Element;
declare namespace Button {
    var Link: typeof ButtonLink;
    var LinkWithRouter: any;
}
declare function ButtonLink({ hasColor, isLink, hasSize, isOutline, isLoading, isDisabled, hasIconLeft, hasIconRight, variants, helpers, hasClassName, children, hasShape, ...props }: ButtonProps & HTMLAttributes<HTMLElement> & LinkProps): JSX.Element;
export { Button };
