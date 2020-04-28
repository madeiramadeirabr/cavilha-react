import React, { ButtonHTMLAttributes, HTMLAttributes } from 'react';
import { HelperBackgroundColorModifiers, HelperShadowModifiers, HelperDisplayModifiers, ElementColorProps } from '../cavilha';
export declare type NavbarVariantModifiers = 'navbar--is-fixed-top' | 'navbar--is-transparent';
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
declare function Navbar({ isFixedTop, isTransparent, variants, helpers, hasClassName, children, hasBackground, ...props }: NavbarProps): JSX.Element;
declare namespace Navbar {
    var Container: ({ children, ...props }: React.HTMLAttributes<HTMLDivElement>) => JSX.Element;
    var Menu: ({ isOpen, helpers, ...props }: NavbarMenuProps) => JSX.Element;
    var Logo: ({ title, src, ...props }: React.HTMLProps<HTMLAnchorElement> & {
        title?: string;
        src: string;
    }) => JSX.Element;
    var Items: ({ children, isOpen, ...props }: {
        isOpen?: boolean;
    } & React.HTMLAttributes<HTMLDivElement>) => JSX.Element;
    var Item: ({ isActive, children, ...props }: React.HTMLProps<HTMLAnchorElement> & {
        isActive?: boolean;
    }) => JSX.Element;
}
export { Navbar };
