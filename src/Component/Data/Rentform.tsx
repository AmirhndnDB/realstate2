import React from "react";
import InputPanel from "../Panel/InputPanel";
const RentForm: React.FC = () => {
  return (
    <React.Fragment>
      <InputPanel
        PL={"enter max Mortgage"}
        id="maxRahn"
        type="number"
        label="maxMortgage"
      />
      <InputPanel
        PL={"enter min Rent"}
        id="minEjare"
        type="number"
        label="minRent"
      />
      <InputPanel
        PL={"enter min Mortgage"}
        id="minRahn"
        type="number"
        label="minMortgage"
      />
      <InputPanel
        PL={"enter max Rent"}
        id="maxEjare"
        type="number"
        label="maxRent"
      />
    </React.Fragment>
  );
};
export default RentForm;
