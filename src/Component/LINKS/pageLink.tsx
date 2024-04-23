import React from "react";
import classNames from "classnames";
import useNavigation from "../../hooks/useNavigation";
import { useAppDispatc } from "../../Store/storeIndex";
import { setASFilePageID } from "../../Store/Slice/apartmentSaleSlice";

interface LinkProps {
  to: string;
  children: React.ReactNode;
  className: string;
  ID: any;
}

function PageLink({ to, children, className, ID }: LinkProps) {
  const dispatch = useAppDispatc();
  const { navigate, currentPath } = useNavigation() || { navigate: () => {} };
  const classes = classNames("", className, currentPath === to);
  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    if (event.metaKey || event.ctrlKey) {
      return;
    }
    event.preventDefault();
    navigate(to);
    dispatch(setASFilePageID(ID));
  };

  return (
    <a className={classes} href={to} onClick={handleClick}>
      {children}
    </a>
  );
}

export default PageLink;
