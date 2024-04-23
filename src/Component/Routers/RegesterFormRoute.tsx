import React from "react";
import { useAppSelector } from "../../Store/storeIndex";

interface RegesterFormRouteProps {
  FormType: string;
  children: React.ReactNode;
  RT: number;
}

const RegesterFormRoute: React.FC<RegesterFormRouteProps> = ({
  FormType,
  children,
  RT,
}) => {
  // Call both useAppSelector hooks unconditionally at the beginning
  const formType = useAppSelector((state) => state.apasel.FormType);
  const unitType = useAppSelector((state) => state.apasel.unitType);

  // Handle the conditional logic based on the value of RT
  const currentFormType = RT === 1 ? formType : RT === 2 ? unitType : null;

  if (currentFormType === FormType) {
    return <React.Fragment>{children}</React.Fragment>;
  }

  return null;
};

export default RegesterFormRoute;
