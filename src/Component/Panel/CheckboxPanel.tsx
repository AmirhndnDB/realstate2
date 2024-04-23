import React from "react";
import { useDataContext } from "../../hooks/useDataContext";

interface CheckboxPanelProps {
  myArray: string[];
  children: React.ReactNode;
}

const CheckboxPanel: React.FC<CheckboxPanelProps> = ({ myArray, children }) => {
  const { updateAllowedItem } = useDataContext();

  const handleCheckboxChange = (item: string) => {
    updateAllowedItem(item, true); // یا می‌توانید از مقدار وضعیت چک باکس که از داخل چک باکس دریافت می‌شود، استفاده نمایید.
  };

  return (
    <div className="flex flex-col gap-2 insaiden-nav p-4">
      <h5>{children}:</h5>
      <ul className="grid grid-cols-2	text-sm	font-extralight	">
        {myArray.map((item, index) => (
          <li key={index}>
            <input
              type="checkbox"
              onChange={() => handleCheckboxChange(item)}
              className={"text-green-800"}
            />
            <label>{item}</label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CheckboxPanel;
