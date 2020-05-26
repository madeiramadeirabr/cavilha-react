import React from 'react';
import { NavbarMenuProps, NavbarProps, NavbarItemProps } from './types';
declare function Navbar({ isFixedTop, isTransparent, variants, helpers, hasClassName, children, hasBackground, ...props }: NavbarProps): JSX.Element;
declare namespace Navbar {
    var Container: ({ children, ...props }: React.HTMLAttributes<HTMLDivElement>) => JSX.Element;
    var Menu: ({ isOpen, helpers, ...props }: NavbarMenuProps) => JSX.Element;
    var Logo: ({ title, src, ...props }: React.HTMLProps<HTMLAnchorElement> & {
        title?: string;
        src: string;
    }) => JSX.Element;
    var LogoHOC: ({ title, src, ...props }: {
        title?: string;
        src: string;
    }) => (Component: React.ElementType<any>) => JSX.Element;
    var Items: ({ children, isOpen, ...props }: {
        isOpen?: boolean;
    } & React.HTMLAttributes<HTMLDivElement>) => JSX.Element;
    var Item: ({ isActive, children, ...props }: React.HTMLProps<HTMLAnchorElement> & {
        isActive?: boolean;
    }) => JSX.Element;
    var ItemHOC: ({ isActive, children, ...props }: NavbarItemProps) => (Component: React.ElementType<any>) => JSX.Element;
}
export { Navbar };
