import { HTMLAttributes } from 'react';

export enum TabElements {
  'block' = 'tab',
  'item' = 'tab__item',
  'tabs' = 'tab__tabs',
  'content' = 'tab__content',
}

export type TabVariants = 'tab--is-vertical';

export type TabItemVariants = 'tab__item--is-active' | 'tab__item--is-disabled';

export type TabContentVariants = 'tab__content--is-active';

export type TabProps = {
  variants?: TabItemVariants[];
  helpers?: string[];
  hasClassName?: string;
  isVertical?: boolean;
} & HTMLAttributes<HTMLDivElement>;

export type TabItemProps = {
  variants?: TabItemVariants[];
  helpers?: string[];
  hasClassName?: string;
  isDisabled?: boolean;
  href?: string;
  index: number;
} & HTMLAttributes<HTMLButtonElement | HTMLAnchorElement>;

export type TabContentProps = {
  variants?: TabItemVariants[];
  helpers?: string[];
  hasClassName?: string;
} & HTMLAttributes<HTMLDivElement>;
