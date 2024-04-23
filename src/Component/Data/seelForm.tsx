import React from "react";
import InputPanel from "../Panel/InputPanel";

const SeelForm: React.FC = () => {
  return (
    <React.Fragment>
      <InputPanel
        PL=" enter your price"
        id="your-price"
        type="number"
        label="price"
      />
    </React.Fragment>
  );
};
export default SeelForm;
