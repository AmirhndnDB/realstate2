import NavigationContext from "../Component/NavBar/NavigationContext";
import { useContext } from "react";

function useNavigation() {
  return useContext(NavigationContext);
}

export default useNavigation;
