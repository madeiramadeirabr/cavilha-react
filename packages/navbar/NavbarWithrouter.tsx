import React, { FC } from 'react';
import { RouteComponentProps, withRouter } from 'react-router';
import { NavLink, NavLinkProps } from 'react-router-dom';
import { NavbarElements } from './Navbar';
import { classNames } from '../core/utils/classNames';

const ButtonLink: FC<RouteComponentProps & NavLinkProps> = ({
  children,
  to,
}) => {
  const className = classNames([NavbarElements.item], {});
  return (
    <NavLink
      to={to}
      className={className}
      activeClassName="navbar__item--is-active"
    >
      {children}
    </NavLink>
  );
};

const NavbarItemWithRouter = withRouter(ButtonLink);

export { NavbarItemWithRouter };
