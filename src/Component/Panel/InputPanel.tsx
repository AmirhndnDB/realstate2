import { ReactNode } from "react";

function InputPanel({
  type,
  id,
  children,
}: {
  type: string;
  id: string;
  children: ReactNode;
}) {
  return (
    <div>
      <label>{children}</label>
      <br />
      <input type={type} id={id} />
    </div>
  );
}

export default InputPanel;
