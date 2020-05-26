import React, { createContext, ReactNode, useState, useContext } from 'react';

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

export { TabProvider, useTab };
