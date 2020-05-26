import React, { HTMLProps, HTMLAttributes } from 'react';
import { classNames } from '../core/utils/classNames';
import {
  TabProps,
  TabElements,
  TabItemProps,
  TabItemVariants,
  TabVariants,
  TabContentVariants,
} from './types';
import { TabProvider, useTab } from './context';

function Tab({
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
    <TabProvider>
      <div {...(props as HTMLProps<HTMLDivElement>)} className={className}>
        {children}
      </div>
    </TabProvider>
  );
}

function Tabs({
  children,
  current,
  ...props
}: HTMLAttributes<HTMLDivElement> & { current: number }) {
  const { active, setActive } = useTab();

  if (active === 0) {
    setActive(current);
  }

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
  href,
  index,
  ...props
}: TabItemProps) {
  const { active, setActive } = useTab();

  const className = classNames(
    [
      TabElements.item,
      active === index ? ('tab__item--is-active' as TabItemVariants) : null,
      isDisabled ? ('tab__item--is-disabled' as TabItemVariants) : null,
    ],
    {
      variants,
      helpers,
      hasClassName,
    }
  );

  if (href) {
    return (
      <a
        {...(props as HTMLProps<HTMLAnchorElement>)}
        href={href}
        className={className}
        onClick={isDisabled ? null : () => setActive(index)}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      {...(props as HTMLProps<HTMLButtonElement>)}
      type="button"
      className={className}
      onClick={isDisabled ? null : () => setActive(index)}
    >
      {children}
    </button>
  );
}

function Content({
  children,
  index,
  ...props
}: HTMLAttributes<HTMLDivElement> & { index: number }) {
  const { active } = useTab();

  const className = classNames(
    [
      TabElements.content,
      active === index
        ? (`${TabElements.content}--is-active` as TabContentVariants)
        : null,
    ],
    {}
  );

  return (
    <div {...(props as HTMLProps<HTMLDivElement>)} className={className}>
      {children}
    </div>
  );
}

Tab.Item = Item;
Tab.Tabs = Tabs;
Tab.Content = Content;

export { Tab };
