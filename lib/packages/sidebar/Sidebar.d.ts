import { ButtonHTMLAttributes, HTMLAttributes } from 'react';
import { HelperBackgroundColorModifiers, HelperShadowModifiers, ElementColorProps } from '../cavilha';
export declare type SidebarVariantModifiers = 'sidebar--has-navbar' | 'sidebar--is-half-width' | 'sidebar--is-full-width';
export declare type SidebarButtonPositionModifiers = 'sidebar__button--is-bottom-center' | 'sidebar__button--is-bottom-left' | 'sidebar__button--is-bottom-right' | 'sidebar__button--is-top-center' | 'sidebar__button--is-top-left' | 'sidebar__button--is-top-right';
export declare type SidebarButtonPosition = 'bottom-center' | 'bottom-left' | 'bottom-right' | 'top-center' | 'top-left' | 'top-right';
export declare type SidebarFloatingVariantModifiers = SidebarVariantModifiers | 'sidebar--is-floating' | 'sidebar--is-open';
export declare type SidebarProps = {
    isOpen?: boolean;
    isFloating?: boolean;
    isNavbar?: boolean;
    isHalfWidth?: boolean;
    isFullwidth?: boolean;
    variants?: SidebarVariantModifiers[];
    helpers?: (HelperBackgroundColorModifiers | HelperShadowModifiers)[];
    hasClassName?: string;
} & Omit<ElementColorProps, 'hasColor'> & HTMLAttributes<HTMLDivElement>;
export declare type SidebarButtonProps = {
    isPosition?: SidebarButtonPosition;
    isBackButton?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement> & Omit<ElementColorProps, 'hasBackground'>;
declare function Sidebar({ isFloating, isOpen, isNavbar, isHalfWidth, isFullwidth, variants, helpers, hasClassName, children, hasBackground, ...props }: SidebarProps): JSX.Element;
declare namespace Sidebar {
    var Button: ({ hasColor, isPosition, isBackButton, ...props }: SidebarButtonProps) => JSX.Element;
}
export { Sidebar };
