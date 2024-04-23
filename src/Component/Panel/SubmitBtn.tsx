import {
  addFiles,
  useAppDispatc,
  useAppSelector,
} from "../../Store/storeIndex";
import React, { useState } from "react";
import { useDataContext } from "../../hooks/useDataContext";
import { addRentApartment } from "../../Store/thunk/addRentApartment";
import { addOfficeSaleFiles } from "../../Store/thunk/addOfficeSale";
import { addOfficeRentFiles } from "../../Store/thunk/addOfficeRent";

const SubmitBtn: React.FC = () => {
  const convType = useAppSelector((state) => state.apasel.FormType);
  const unitType = useAppSelector((state) => state.apasel.unitType);
  const [inputValue, setInputValue] = useState("");

  const dispatch = useAppDispatc();
  const { data } = useDataContext();
  console.log(data);
  const REGESTRERKEY = ["45", "12"];

  const handleClick = () => {
    if (REGESTRERKEY.includes(inputValue)) {
      if (convType === "sale" && unitType === "house") {
        return dispatch(addFiles(data));
      } else if (convType === "rent" && unitType === "house") {
        return dispatch(addRentApartment(data));
      } else if (convType === "sale" && unitType === "ofice") {
        return dispatch(addOfficeSaleFiles(data));
      } else if (convType === "rent" && unitType === "ofice") {
        return dispatch(addOfficeRentFiles(data));
      }
    } else {
      // Handle error or do nothing
      console.error("Input value is not 8");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <div className="flex flex-col insaiden-nav gap-4 p-4">
      <div className="flex flex-col gap-2 ">
        <label className="self-start">Enter your user code:</label>
        <input
          className="text-green-800 self-end w-36 font-light	px-2"
          type="text"
          placeholder="enter user-code"
          value={inputValue}
          onChange={handleChange}
        />
      </div>
      <div
        className="BTN bgShade2 AccentColor Submit-btn cursor-pointer	"
        onClick={handleClick}
      >
        Add Your File
      </div>
    </div>
  );
};

export default SubmitBtn;
