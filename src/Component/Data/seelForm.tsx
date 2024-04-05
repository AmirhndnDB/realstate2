import React from "react";
import InputPanel from "../Panel/InputPanel";

const SeelForm: React.FC = () => {
  return (
    <React.Fragment>
      <InputPanel id="your-price" type="number">
        price
      </InputPanel>
    </React.Fragment>
  );
};
export default SeelForm;
