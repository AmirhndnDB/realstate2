import React from "react";
interface optionProps {
  myArray: string[];
  children: React.ReactNode;
}

const CheckboxPanel: React.FC<optionProps> = ({ myArray, children }) => {
  return (
    <div>
      <h5>{children}</h5>
      <ul>
        {myArray.map((item) => (
          <li>
            <input type="checkbox" />
            <label>{item}</label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CheckboxPanel;
