import React from "react";
import InputPanel from "../Panel/InputPanel";
const RentForm: React.FC = () => {
  return (
    <React.Fragment>
      <InputPanel id="max-rahn" type="number">
        max-rahn
      </InputPanel>
      <InputPanel id="min-ejare" type="number">
        min-ejare
      </InputPanel>
      <InputPanel id="min-rahn" type="number">
        min-rahn
      </InputPanel>
      <InputPanel id="max-ejare" type="number">
        max-ejare
      </InputPanel>
    </React.Fragment>
  );
};
export default RentForm;
