import { ReactNode } from 'react';
export declare type TabContext = {
    active: number;
    setActive: Function;
};
declare function TabProvider({ children }: {
    children: ReactNode;
}): JSX.Element;
declare function useTab(): {
    active: number;
    setActive: Function;
};
export { TabProvider, useTab };
