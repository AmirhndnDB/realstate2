import React from "react";
import InputPanel from "../Panel/InputPanel";
import OptionPanel from "../Panel/OptionPanel";
import CheckboxPanel from "../Panel/CheckboxPanel";

const OfficeForm: React.FC = () => {
  const taradodArray: string[] = ["very", "normal", "litle", "none"];
  const tabloArray: string[] = ["yes", "no", "mojaz-mashaqel"];
  const vahedAtrafJob: string[] = [
    "amlak",
    "salon",
    "shercat",
    "daftar-kar",
    "doktor",
    "daanesh-bonian",
  ];
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
      <CheckboxPanel myArray={mojazJobArray}>mashaqel mojaz</CheckboxPanel>
      <CheckboxPanel myArray={vahedAtrafJob}>مشاغل بقیه واحد ها</CheckboxPanel>
      <OptionPanel id="taradod" name="taradod-mojaz" myArray={taradodArray}>
        taradod mojaz
      </OptionPanel>
      <InputPanel type="number" id="tedadPersenel">
        tedad Persenel mojaz
      </InputPanel>
      <OptionPanel id="tablokhor" name="tablokhor" myArray={tabloArray}>
        tablokhor
      </OptionPanel>
    </>
  );
};
export default OfficeForm;
