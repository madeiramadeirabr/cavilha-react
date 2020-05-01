import React from 'react';
import { LinkProps } from 'react-router-dom';
import { TabProps, TabItemVariants } from "./types";
declare function TabWithRouter({ variants, helpers, hasClassName, children, isVertical, ...props }: TabProps): JSX.Element;
declare namespace TabWithRouter {
    var Item: ({ variants, helpers, hasClassName, children, isDisabled, isActive, to }: {
        variants?: TabItemVariants[];
        helpers?: string[];
        hasClassName?: string;
        isDisabled?: boolean;
        href?: string;
        index: number;
    } & React.HTMLAttributes<HTMLButtonElement | HTMLAnchorElement> & LinkProps<{}> & {
        isActive?: boolean;
    }) => void;
    var Tabs: ({ children, current, ...props }: React.HTMLAttributes<HTMLDivElement> & {
        current: number;
    }) => JSX.Element;
}
export { TabWithRouter };
