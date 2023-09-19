import { createContext, PropsWithChildren, useState } from 'react';

import { scrollToSection } from 'src/helpers';
import { EHeaderTypes, EScrollableSections, TAppContext, TScrollCounts } from 'src/types';

export const AppContext = createContext<TAppContext | null>(null);

export const AppContextProvider = ({ children }: PropsWithChildren) => {
  const [headerType, setHeaderType] = useState<EHeaderTypes>(EHeaderTypes.default);
  const [scrollCounts, setScrollCounts] = useState<TScrollCounts>({
    [EScrollableSections.billing]: 0,
  });

  const scrollWithCount = (targetSection: EScrollableSections) => {
    scrollToSection(targetSection);

    const newScrollCount = scrollCounts[targetSection] + 1;
    setScrollCounts((sections) => ({ ...sections, [targetSection]: newScrollCount }));

    if (targetSection === EScrollableSections.billing) {
      console.log(`Scroll To Price: ${newScrollCount}`);
    }
  };

  const contextValue: TAppContext = {
    headerType,
    setHeaderType,
    scrollCounts,
    scrollWithCount,
  };

  return <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>;
};
