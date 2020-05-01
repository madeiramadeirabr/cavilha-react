import React from 'react';
import { TabProps, TabItemProps } from "./types";
declare function Tab({ variants, helpers, hasClassName, children, isVertical, ...props }: TabProps): JSX.Element;
declare namespace Tab {
    var Item: ({ variants, helpers, hasClassName, children, isDisabled, href, index, ...props }: TabItemProps) => JSX.Element;
    var Tabs: ({ children, current, ...props }: React.HTMLAttributes<HTMLDivElement> & {
        current: number;
    }) => JSX.Element;
    var Content: ({ children, index, ...props }: React.HTMLAttributes<HTMLDivElement> & {
        index: number;
    }) => JSX.Element;
}
export { Tab };
export declare type TabContext = {
    active: number;
    setActive: Function;
};
