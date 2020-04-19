import React, {
  HTMLProps,
  ButtonHTMLAttributes,
  HTMLAttributes
} from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Link } from 'react-router-dom';
import { classNames } from '../core/utils/classNames';
import { ReactNode } from 'react';
import {
  HelperBackgroundColorModifiers,
  HelperShadowModifiers,
  HelperDisplayModifiers,
  ElementColorProps
} from '../cavilha';

export type NavbarVariantModifiers =
  'navbar--is-fixed-top' |
  'navbar--is-transparent';

enum NavbarElements {
  'block' = 'navbar',
  'container' = 'navbar__container',
  'logo' = 'navbar__logo',
  'menu' = 'navbar__menu',
  'items' = 'navbar__items',
  'item' = 'navbar__item'
}

export type NavbarProps = {
  isFixedTop?: boolean
  isTransparent?: boolean
  variants?: (NavbarVariantModifiers)[]
  helpers?: (HelperBackgroundColorModifiers | HelperShadowModifiers)[]
  hasClassName?: string
  children: ReactNode
} & Pick<ElementColorProps, 'hasBackground'> & HTMLAttributes<HTMLDivElement>;

export type NavbarContainerProps = {
  children: ReactNode
} & HTMLAttributes<HTMLDivElement>;

export type NavbarLogoProps = {
  src: string
  to: string
  title?: string
} & HTMLAttributes<HTMLElement>;


export type NavbarMenuProps = {
  open?: boolean
  helpers?: (HelperDisplayModifiers)[]
} & ButtonHTMLAttributes<HTMLButtonElement>


export type NavbarItemsProps = {
  isOpen?: boolean
  children: ReactNode
} & HTMLAttributes<HTMLDivElement>;

export type NavbarItemProps = {
  to: string
  isActive?: boolean
  children: ReactNode
} & HTMLAttributes<HTMLElement>;


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
  )

  if (isFixedTop) {
    document.getElementsByTagName('body')[0].setAttribute("style", "padding-top: 60px")
  }

  return (
    <nav
      {...(props as HTMLProps<HTMLDivElement>)}
      className={className}
    >
      {children}
    </nav>
  );
}

Navbar.Container = ({
  children, ...props
}: NavbarContainerProps) => {
  return (
    <div
      {...(props as HTMLProps<HTMLDivElement>)}
      className={classNames([NavbarElements.container], {})}
    >
      {children}
    </div>
  );
};

Navbar.Menu = ({
  open,
  helpers,
  ...props
}: NavbarMenuProps) => {
  const className = classNames([NavbarElements.menu], { helpers })
  return (
    <button {...(props as HTMLProps<HTMLButtonElement>)}
    type="button"
    className={className}
    dangerouslySetInnerHTML={{__html: open ? '&times;' : '&#9776;'}}
    />
  );
};

Navbar.Logo = ({
  src, title, to, ...props
}: NavbarLogoProps) => {
  return (
    <Link
      {...props}
      to={to}
      className={classNames([NavbarElements.logo], {})}
    >
      <img src={src} alt={title || ''} />
    </Link>
  );
};

Navbar.Items = ({
  children,
  isOpen,
  ...props
}: NavbarItemsProps) => {
  const hidden = isOpen ? [] : ['helper--is-hidden-tablet', 'helper--is-hidden-mobile']
  const className = classNames([NavbarElements.items], {
    helpers: hidden
  })
  return (
    <div
      {...(props as HTMLProps<HTMLDivElement>)}
      className={className}
    >
      {children}
    </div>
  );
};

Navbar.Item = ({
  to, isActive, children, ...props
}: NavbarItemProps) => {
  const className = classNames([
    NavbarElements.item, isActive ? 'navbar__item--is-active' : ''],
    {}
  )
  return (
    <Link
      {...props}
      className={className}
      to={to}
    >
      {children}
    </Link>
  );
};

export { Navbar };
