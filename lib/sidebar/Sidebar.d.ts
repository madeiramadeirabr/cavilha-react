/// <reference types="react" />
import { SidebarProps, SidebarButtonProps } from './types';
declare function Sidebar({ isFloating, isOpen, isNavbar, isHalfWidth, isFullwidth, variants, helpers, hasClassName, children, hasBackground, ...props }: SidebarProps): JSX.Element;
declare namespace Sidebar {
    var Button: ({ hasColor, isPosition, isBackButton, ...props }: SidebarButtonProps) => JSX.Element;
}
export { Sidebar };
