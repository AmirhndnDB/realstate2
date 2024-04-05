import React, { useContext } from "react";
import NavigationContext from "./NavBar/NavigationContext";

interface RouterProps {
  path: string;
  children: React.ReactNode;
}

const Router: React.FC<RouterProps> = ({ path, children }) => {
  const { currentPath } = useContext(NavigationContext)!;

  if (path === currentPath) {
    return <React.Fragment>{children}</React.Fragment>;
  }

  return null;
};

export default Router;
