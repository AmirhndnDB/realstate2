import React from "react";
interface optionProps {
  myArray: string[];
  name: string;
  id: string;
  children: React.ReactNode;
}

const OptionPanel: React.FC<optionProps> = ({
  myArray,
  name,
  id,
  children,
}) => {
  return (
    <div>
      <label>{children}</label>
      <br />
      <select name={name} id={id}>
        {myArray.map((item, index) => (
          <option key={index}>{item}</option>
        ))}
      </select>
    </div>
  );
};

export default OptionPanel;
