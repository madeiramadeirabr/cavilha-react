import React, { ElementType, HTMLProps, HTMLAttributes } from 'react';
import { classNames } from '../core/utils/classNames';
import {
  NavbarElements,
  NavbarMenuProps,
  NavbarProps,
  NavbarItemProps,
} from './types';

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
 * Logo HOC component
 */
Navbar.LogoHOC = function ({
  title,
  src,
  ...props
}: {
  title?: string;
  src: string;
}) {
  const className = classNames([NavbarElements.logo], {});
  return (Component: ElementType) => (
    <Component {...props} className={className}>
      <img src={src} alt={title || ''} />
    </Component>
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

/**
 * Item HOC component
 */
Navbar.ItemHOC = function ({ isActive, children, ...props }: NavbarItemProps) {
  const className = classNames(
    [NavbarElements.item, isActive ? 'navbar__item--is-active' : null],
    {}
  );
  return (Component: ElementType) => (
    <Component {...props} className={className}>
      {children}
    </Component>
  );
};

export { Navbar };
