import React, {
  HTMLProps,
  HTMLAttributes,
  createContext,
  ReactNode,
  useState,
  useContext,
} from 'react';
import { classNames } from '../core/utils/classNames';
import {
  TabProps,
  TabElements,
  TabItemProps,
  TabItemVariants,
  TabVariants,
  TabContentVariants,
} from './types';

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
    <a
      {...(props as HTMLProps<HTMLAnchorElement>)}
      href={href}
      className={className}
      onClick={isDisabled ? null : () => setActive(index)}
    >
      {children}
    </a>;
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

export type TabContext = {
  active: number;
  setActive: Function;
};

const TabContext = createContext({} as TabContext);

function TabProvider({ children }: { children: ReactNode }) {
  const [active, setActive] = useState<number>(0 as number);
  return (
    <TabContext.Provider value={{ active, setActive }}>
      {children}
    </TabContext.Provider>
  );
}

function useTab() {
  const context = useContext(TabContext);
  const { active, setActive } = context;
  return { active, setActive };
}
