import React from "react";
import { useDataContext } from "../../hooks/useDataContext";

interface InputPanelProps {
  label: string;
  id: string;
  type: string;
  PL: string;
}

const InputPanel: React.FC<InputPanelProps> = ({ label, id, type, PL }) => {
  const { updateDataString } = useDataContext();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    updateDataString(label, value);
  };

  return (
    <div className="flex flex-col gap-2 insaiden-nav p-4">
      <label className="self-start	">{label}: </label>
      <input
        type={type}
        id={id}
        onChange={handleChange}
        placeholder={PL}
        className={"text-green-800	self-end font-light	px-2"}
      />
    </div>
  );
};

export default InputPanel;
