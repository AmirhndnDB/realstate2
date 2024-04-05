import React from "react";
import LINK from "./Component/NavBar/LINK";
const Test: React.FC = () => {
  return (
    <div>
      <LINK activeClassName="bg-white p-6" className="bg-white" to="/one">
        one
      </LINK>
      <LINK activeClassName="bg-white p-12" className="bg-white" to="/tow">
        tow
      </LINK>
    </div>
  );
};
export default Test;
