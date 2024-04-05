import React from "react";
import classNames from "classnames";
import useNavigation from "../../hooks/useNavigation";

interface LinkProps {
  to: string;
  children: React.ReactNode;
  className: string;
  activeClassName: string;
}

function LINK({ to, children, className, activeClassName }: LinkProps) {
  const { navigate, currentPath } = useNavigation() || { navigate: () => {} };
  const classes = classNames(
    "",
    className,
    currentPath === to && activeClassName
  );
  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    if (event.metaKey || event.ctrlKey) {
      return;
    }
    event.preventDefault();
    navigate(to);
  };

  return (
    <a className={classes} href={to} onClick={handleClick}>
      {children}
    </a>
  );
}

export default LINK;
