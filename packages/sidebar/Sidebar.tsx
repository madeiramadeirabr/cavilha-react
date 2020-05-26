import React, { HTMLProps } from 'react';
import { classNames } from '../core/utils/classNames';
import {
  HelperWidthModifiers,
  HelperHeightModifiers,
  HelperScrollModifiers,
} from '../cavilha';
import {
  SidebarElements,
  SidebarVariantModifiers,
  SidebarButtonPositionModifiers,
  SidebarFloatingVariantModifiers,
  SidebarProps,
  SidebarButtonProps,
} from './types';

const SIDEBAR_IS_FLOATING: SidebarFloatingVariantModifiers =
  'sidebar--is-floating';
const SIDEBAR_IS_OPEN: SidebarFloatingVariantModifiers = 'sidebar--is-open';
const SIDEBAR_IS_HALF_WIDTH: SidebarVariantModifiers = 'sidebar--is-half-width';
const SIDEBAR_IS_FULL_WIDTH: SidebarVariantModifiers = 'sidebar--is-full-width';
const SIDEBAR_HAS_NAVBAR: SidebarVariantModifiers = 'sidebar--has-navbar';

const HELPER_FULL_VIEW_WIDTH: HelperWidthModifiers =
  'helper--is-full-view-width';
const HELPER_FULL_VIEW_HEIGHT: HelperHeightModifiers =
  'helper--is-full-view-height';
const HELPER_NO_SCROLL: HelperScrollModifiers = 'helper--has-no-scroll';

function Sidebar({
  isFloating,
  isOpen,
  isNavbar,
  isHalfWidth,
  isFullwidth,
  variants,
  helpers,
  hasClassName,
  children,
  hasBackground,
  ...props
}: SidebarProps) {
  const className = classNames(
    [
      SidebarElements.block,
      isFloating ? SIDEBAR_IS_FLOATING : '',
      isOpen ? SIDEBAR_IS_OPEN : '',
      isHalfWidth ? SIDEBAR_IS_HALF_WIDTH : '',
      isFullwidth ? SIDEBAR_IS_FULL_WIDTH : '',
      isNavbar ? SIDEBAR_HAS_NAVBAR : '',
    ],
    { variants, helpers, hasClassName, hasBackground }
  );

  if (isFullwidth) {
    const body = document.getElementsByTagName('body')[0];
    if (isOpen && !body.classList.contains(HELPER_FULL_VIEW_WIDTH)) {
      body.classList.add(HELPER_FULL_VIEW_WIDTH);
    } else {
      body.classList.remove(HELPER_FULL_VIEW_WIDTH);
    }

    if (isOpen && !body.classList.contains(HELPER_FULL_VIEW_HEIGHT)) {
      body.classList.add(HELPER_FULL_VIEW_HEIGHT);
    } else {
      body.classList.remove(HELPER_FULL_VIEW_HEIGHT);
    }

    if (isOpen && !body.classList.contains(HELPER_NO_SCROLL)) {
      body.classList.add(HELPER_NO_SCROLL);
    } else {
      body.classList.remove(HELPER_NO_SCROLL);
    }
  }

  return (
    <div {...(props as HTMLProps<HTMLDivElement>)} className={className}>
      {children}
    </div>
  );
}

function Button({
  hasColor,
  isPosition,
  isBackButton,
  ...props
}: SidebarButtonProps) {
  const className = classNames([SidebarElements.button], {
    variants: [
      `sidebar__button--is-${isPosition}` as SidebarButtonPositionModifiers,
    ],
    hasColor,
  });
  return (
    <button
      {...(props as HTMLProps<HTMLButtonElement>)}
      type="button"
      className={className}
      dangerouslySetInnerHTML={{ __html: isBackButton ? '&larr;' : '&times;' }}
    />
  );
}

Sidebar.Button = Button;

export { Sidebar };
