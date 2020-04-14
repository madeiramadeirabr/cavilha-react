import { ButtonHTMLAttributes, HTMLAttributes } from 'react';
import { ReactNode } from 'react';
import { HelperBackgroundColorModifiers, HelperShadowModifiers, HelperDisplayModifiers, ElementColorProps } from '../cavilha';
export declare type NavbarVariantModifiers = 'navbar--is-fixed-top';
export declare type NavbarProps = {
    isFixedTop?: boolean;
    variants?: (NavbarVariantModifiers)[];
    helpers?: (HelperBackgroundColorModifiers | HelperShadowModifiers)[];
    customCss?: string;
    children: ReactNode;
} & Pick<ElementColorProps, 'hasBackground'> & HTMLAttributes<HTMLDivElement>;
export declare type NavbarContainerProps = {
    children: ReactNode;
} & HTMLAttributes<HTMLDivElement>;
export declare type NavbarLogoProps = {
    src: string;
    title?: string;
} & HTMLAttributes<HTMLDivElement>;
export declare type NavbarMenuProps = {
    open?: boolean;
    helpers?: (HelperDisplayModifiers)[];
} & ButtonHTMLAttributes<HTMLButtonElement>;
export declare type NavbarItemsProps = {
    isOpen?: boolean;
    children: ReactNode;
} & HTMLAttributes<HTMLDivElement>;
export declare type NavbarItemProps = {
    to: string;
    isActive?: boolean;
    children: ReactNode;
} & HTMLAttributes<HTMLElement>;
declare function Navbar({ isFixedTop, variants, helpers, customCss, children, hasBackground, ...props }: NavbarProps): JSX.Element;
declare namespace Navbar {
    var Container: ({ children, ...props }: NavbarContainerProps) => JSX.Element;
    var Menu: ({ open, helpers, ...props }: NavbarMenuProps) => JSX.Element;
    var Logo: ({ src, title, ...props }: NavbarLogoProps) => JSX.Element;
    var Items: ({ children, isOpen, ...props }: NavbarItemsProps) => JSX.Element;
    var Item: ({ to, isActive, children, ...props }: NavbarItemProps) => JSX.Element;
}
export { Navbar };
