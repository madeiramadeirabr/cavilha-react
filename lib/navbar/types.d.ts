import { ButtonHTMLAttributes, HTMLAttributes, ReactNode } from 'react';
import { HelperBackgroundColorModifiers, HelperShadowModifiers, HelperDisplayModifiers, ElementColorProps } from '../cavilha';
export declare type NavbarVariantModifiers = 'navbar--is-fixed-top' | 'navbar--is-transparent';
export declare enum NavbarElements {
    'block' = "navbar",
    'container' = "navbar__container",
    'logo' = "navbar__logo",
    'menu' = "navbar__menu",
    'items' = "navbar__items",
    'item' = "navbar__item"
}
export declare type NavbarProps = {
    isFixedTop?: boolean;
    isTransparent?: boolean;
    variants?: NavbarVariantModifiers[];
    helpers?: (HelperBackgroundColorModifiers | HelperShadowModifiers)[];
    hasClassName?: string;
} & Pick<ElementColorProps, 'hasBackground'> & HTMLAttributes<HTMLDivElement>;
export declare type NavbarMenuProps = {
    isOpen?: boolean;
    helpers?: HelperDisplayModifiers[];
} & ButtonHTMLAttributes<HTMLButtonElement>;
export declare type NavbarItemProps = {
    children?: ReactNode;
    isActive?: boolean;
};
