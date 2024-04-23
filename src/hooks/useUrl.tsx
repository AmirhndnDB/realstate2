import { useEffect, useState } from "react";

const useUrl = (removePart: string): string => {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const handleLocationChange = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener("popstate", handleLocationChange);

    return () => {
      window.removeEventListener("popstate", handleLocationChange);
    };
  }, []);

  const modifiedPath = currentPath.replace(new RegExp(removePart, "g"), "");

  return modifiedPath;
};

export default useUrl;
