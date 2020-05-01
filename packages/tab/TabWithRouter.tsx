import React, { HTMLProps, HTMLAttributes } from 'react';
import { classNames } from '../core/utils/classNames';
import { LinkProps, Link } from 'react-router-dom';
import {
  TabProps,
  TabElements,
  TabItemProps,
  TabItemVariants,
  TabVariants,
} from './types';

function TabWithRouter({
  variants,
  helpers,
  hasClassName,
  children,
  isVertical,
  ...props
}: TabProps) {
  const className = classNames(
    [
      TabElements.block,
      isVertical ? ('tab--is-vertical' as TabVariants) : null,
    ],
    {
      variants,
      helpers,
      hasClassName,
    }
  );
  return (
    <div {...(props as HTMLProps<HTMLDivElement>)} className={className}>
      {children}
    </div>
  );
}

function Tabs({
  children,
  current,
  ...props
}: HTMLAttributes<HTMLDivElement> & { current: number }) {
  return (
    <div {...(props as HTMLProps<HTMLDivElement>)} className={TabElements.tabs}>
      {children}
    </div>
  );
}

function Item({
  variants,
  helpers,
  hasClassName,
  children,
  isDisabled,
  isActive,
  to,
}: TabItemProps & LinkProps & { isActive?: boolean }) {
  const className = classNames(
    [
      TabElements.item,
      isActive ? ('tab__item--is-active' as TabItemVariants) : null,
      isDisabled ? ('tab__item--is-disabled' as TabItemVariants) : null,
    ],
    {
      variants,
      helpers,
      hasClassName,
    }
  );

  <Link to={to} className={className}>
    {children}
  </Link>;
}

TabWithRouter.Item = Item;
TabWithRouter.Tabs = Tabs;

export { TabWithRouter };
