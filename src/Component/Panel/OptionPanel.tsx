import React from "react";
import { useDataContext } from "../../hooks/useDataContext";

interface OptionPanelProps {
  myArray: string[];
  name: string;
  id: string;
  children: React.ReactNode;
}

const OptionPanel: React.FC<OptionPanelProps> = ({
  myArray,
  name,
  id,
  children,
}) => {
  const { updateDataString } = useDataContext();

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = e.target.value;
    updateDataString(name, selectedValue);
  };

  return (
    <div className="flex flex-col gap-2 insaiden-nav p-4">
      <label className="self-start">{children}:</label>
      <select
        name={name}
        id={id}
        onChange={handleSelectChange}
        className={"text-green-800 self-end font-light	px-2"}
      >
        {myArray.map((item, index) => (
          <option key={index} value={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
};

export default OptionPanel;
