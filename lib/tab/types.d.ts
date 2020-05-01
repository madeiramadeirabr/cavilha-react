import { HTMLAttributes } from 'react';
export declare enum TabElements {
    'block' = "tab",
    'item' = "tab__item",
    'tabs' = "tab__tabs",
    'content' = "tab__content"
}
export declare type TabVariants = 'tab--is-vertical';
export declare type TabItemVariants = 'tab__item--is-active' | 'tab__item--is-disabled';
export declare type TabContentVariants = 'tab__content--is-active';
export declare type TabProps = {
    variants?: TabItemVariants[];
    helpers?: string[];
    hasClassName?: string;
    isVertical?: boolean;
} & HTMLAttributes<HTMLDivElement>;
export declare type TabItemProps = {
    variants?: TabItemVariants[];
    helpers?: string[];
    hasClassName?: string;
    isDisabled?: boolean;
    href?: string;
    index: number;
} & HTMLAttributes<HTMLButtonElement | HTMLAnchorElement>;
export declare type TabContentProps = {
    variants?: TabItemVariants[];
    helpers?: string[];
    hasClassName?: string;
} & HTMLAttributes<HTMLDivElement>;
