import { ButtonHTMLAttributes, HTMLAttributes } from 'react';
import {
  HelperBackgroundColorModifiers,
  HelperShadowModifiers,
  ElementColorProps,
} from '../cavilha';

export enum SidebarElements {
  'block' = 'sidebar',
  'button' = 'sidebar__button',
}

export type SidebarVariantModifiers =
  | 'sidebar--has-navbar'
  | 'sidebar--is-half-width'
  | 'sidebar--is-full-width';

export type SidebarButtonPositionModifiers =
  | 'sidebar__button--is-bottom-center'
  | 'sidebar__button--is-bottom-left'
  | 'sidebar__button--is-bottom-right'
  | 'sidebar__button--is-top-center'
  | 'sidebar__button--is-top-left'
  | 'sidebar__button--is-top-right';

export type SidebarButtonPosition =
  | 'bottom-center'
  | 'bottom-left'
  | 'bottom-right'
  | 'top-center'
  | 'top-left'
  | 'top-right';

export type SidebarFloatingVariantModifiers =
  | SidebarVariantModifiers
  | 'sidebar--is-floating'
  | 'sidebar--is-open';

export type SidebarProps = {
  isOpen?: boolean;
  isFloating?: boolean;
  isNavbar?: boolean;
  isHalfWidth?: boolean;
  isFullwidth?: boolean;
  variants?: SidebarVariantModifiers[];
  helpers?: (HelperBackgroundColorModifiers | HelperShadowModifiers)[];
  hasClassName?: string;
} & Omit<ElementColorProps, 'hasColor'> &
  HTMLAttributes<HTMLDivElement>;

export type SidebarButtonProps = {
  isPosition?: SidebarButtonPosition;
  isBackButton?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement> &
  Omit<ElementColorProps, 'hasBackground'>;
