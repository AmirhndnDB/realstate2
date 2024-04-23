import React from "react";

interface ShpeDeyalesFileProps {
  unitType: string;
  convType: string;
  children: React.ReactNode;
  FT: any;
}

const ShpeDeyalesFile: React.FC<ShpeDeyalesFileProps> = ({
  unitType,
  convType,
  children,
  FT,
}) => {
  // Call both useAppSelector hooks unconditionally at the beginning

  let FileType;
  if (unitType === "house" && convType === "rent") {
    FileType = 1;
  } else if (unitType === "house" && convType === "sale") {
    FileType = 2;
  } else if (unitType === "ofice" && convType === "sale") {
    FileType = 3;
  } else if (unitType === "ofice" && convType === "rent") {
    FileType = 4;
  }
  // Handle the conditional logic based on the value of RT

  if (FT === FileType) {
    return <React.Fragment>{children}</React.Fragment>;
  }
  return null;
};

export default ShpeDeyalesFile;
