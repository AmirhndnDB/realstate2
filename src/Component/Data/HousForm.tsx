import React from "react";
import OptionPanel from "../Panel/OptionPanel";

const HousForm: React.FC = () => {
  const SunArray: string[] = [
    "very sunny",
    "sunny",
    "a little sun",
    "dont have sun",
  ];
  return (
    <>
      <OptionPanel name="Sun" id="Sun" myArray={SunArray}>
        Sun
      </OptionPanel>
    </>
  );
};
export default HousForm;
