import React, { HTMLProps, ButtonHTMLAttributes, HTMLAttributes } from 'react';
import { classNames } from '../core/utils/classNames';
import {
  HelperBackgroundColorModifiers,
  HelperShadowModifiers,
  HelperDisplayModifiers,
  ElementColorProps,
} from '../cavilha';

export type NavbarVariantModifiers =
  | 'navbar--is-fixed-top'
  | 'navbar--is-transparent';

export enum NavbarElements {
  'block' = 'navbar',
  'container' = 'navbar__container',
  'logo' = 'navbar__logo',
  'menu' = 'navbar__menu',
  'items' = 'navbar__items',
  'item' = 'navbar__item',
}

export type NavbarProps = {
  isFixedTop?: boolean;
  isTransparent?: boolean;
  variants?: NavbarVariantModifiers[];
  helpers?: (HelperBackgroundColorModifiers | HelperShadowModifiers)[];
  hasClassName?: string;
} & Pick<ElementColorProps, 'hasBackground'> &
  HTMLAttributes<HTMLDivElement>;

export type NavbarMenuProps = {
  isOpen?: boolean;
  helpers?: HelperDisplayModifiers[];
} & ButtonHTMLAttributes<HTMLButtonElement>;

function Navbar({
  isFixedTop,
  isTransparent,
  variants,
  helpers,
  hasClassName,
  children,
  hasBackground,
  ...props
}: NavbarProps) {
  const className = classNames(
    [
      NavbarElements.block,
      isFixedTop ? 'navbar--is-fixed-top' : '',
      isTransparent ? 'navbar--is-transparent' : '',
    ],
    { variants, helpers, hasClassName, hasBackground }
  );

  if (isFixedTop) {
    document
      .getElementsByTagName('body')[0]
      .setAttribute('style', 'padding-top: 60px');
  }

  return (
    <nav {...(props as HTMLProps<HTMLDivElement>)} className={className}>
      {children}
    </nav>
  );
}

/**
 * Container component
 */
Navbar.Container = function ({
  children,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      {...(props as HTMLProps<HTMLDivElement>)}
      className={classNames([NavbarElements.container], {})}
    >
      {children}
    </div>
  );
};

/**
 * Menu component
 */
Navbar.Menu = function ({ isOpen, helpers, ...props }: NavbarMenuProps) {
  const className = classNames([NavbarElements.menu], { helpers });
  return (
    <button
      {...(props as HTMLProps<HTMLButtonElement>)}
      type="button"
      className={className}
      dangerouslySetInnerHTML={{ __html: isOpen ? '&times;' : '&#9776;' }}
    />
  );
};

/**
 * Logo component
 */
Navbar.Logo = function ({
  title,
  src,
  ...props
}: HTMLProps<HTMLAnchorElement> & { title?: string; src: string }) {
  const className = classNames([NavbarElements.logo], {});
  return (
    <a {...(props as HTMLProps<HTMLAnchorElement>)} className={className}>
      <img src={src} alt={title || ''} />
    </a>
  );
};

/**
 * Items component
 */
Navbar.Items = function ({
  children,
  isOpen,
  ...props
}: {
  isOpen?: boolean;
} & HTMLAttributes<HTMLDivElement>) {
  const hidden = isOpen
    ? []
    : ['helper--is-hidden-tablet', 'helper--is-hidden-mobile'];
  const className = classNames([NavbarElements.items], {
    helpers: hidden,
  });
  return (
    <div {...(props as HTMLProps<HTMLDivElement>)} className={className}>
      {children}
    </div>
  );
};

/**
 * Item component
 */
Navbar.Item = function ({
  isActive,
  children,
  ...props
}: HTMLProps<HTMLAnchorElement> & { isActive?: boolean }) {
  const className = classNames(
    [NavbarElements.item, isActive ? 'navbar__item--is-active' : null],
    {}
  );
  return (
    <a {...(props as HTMLProps<HTMLAnchorElement>)} className={className}>
      {children}
    </a>
  );
};

export { Navbar };
