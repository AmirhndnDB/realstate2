import React from "react";
import InputPanel from "../Panel/InputPanel";
import OptionPanel from "../Panel/OptionPanel";
import CheckboxPanel from "../Panel/CheckboxPanel";

const OfficeForm: React.FC = () => {
  const taradodArray: string[] = ["very", "normal", "litle", "none"];
  const tabloArray: string[] = ["yes", "no", "mojaz-mashaqel"];
  const mojazJobArray: string[] = [
    "amlak",
    "salon",
    "shercat",
    "daftar-kar",
    "doktor",
    "daanesh-bonian",
  ];

  return (
    <>
      <CheckboxPanel myArray={mojazJobArray}>mashaqelMojaz</CheckboxPanel>
      <OptionPanel id="taradod" name="taradodMojaz" myArray={taradodArray}>
        taradodMojaz
      </OptionPanel>
      <InputPanel
        PL=""
        type="number"
        id="tedadPersenel"
        label="tedadPersenelMojaz"
      ></InputPanel>
      <OptionPanel id="tablokhor" name="tablokhor" myArray={tabloArray}>
        tablokhor
      </OptionPanel>
    </>
  );
};
export default OfficeForm;
