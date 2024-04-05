import React, { useState, useEffect } from "react";

interface NavigationContextType {
  currentPath: string;
  navigate: (to: string) => void;
}

const NavigationContext = React.createContext<
  NavigationContextType | undefined
>(undefined);

function NavProvider({ children }: { children: React.ReactNode }) {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);
  useEffect(() => {
    const handler = () => {
      setCurrentPath(window.location.pathname);
    };
    window.addEventListener("popstate", handler);

    return () => {
      window.removeEventListener("popstate", handler);
    };
  }, []);

  const navigate = (to: string) => {
    window.history.pushState({}, "", to);
    setCurrentPath(to);
  };

  return (
    <NavigationContext.Provider value={{ currentPath, navigate }}>
      {children}
    </NavigationContext.Provider>
  );
}
export { NavProvider };
export default NavigationContext;
