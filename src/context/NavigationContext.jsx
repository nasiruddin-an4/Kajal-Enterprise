import { createContext, useContext, useState } from 'react';

const NavigationContext = createContext();

export const NavigationProvider = ({ children }) => {
  const [lastSection, setLastSection] = useState(null);

  return (
    <NavigationContext.Provider value={{ lastSection, setLastSection }}>
      {children}
    </NavigationContext.Provider>
  );
};

export const useNavigation = () => useContext(NavigationContext);