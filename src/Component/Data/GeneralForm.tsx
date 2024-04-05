import React from "react";
import InputPanel from "../Panel/InputPanel";
import OptionPanel from "../Panel/OptionPanel";

const GeneralForm: React.FC = () => {
  const sanadArray: string[] = ["maskony", "edary", "tejary", "nadarad"];
  const vaziatArray: string[] = ["por", "khali"];
  return (
    <React.Fragment>
      <InputPanel id="name" type="text">
        malek
      </InputPanel>
      <InputPanel id="malek-number" type="tel">
        number
      </InputPanel>
      <InputPanel id="addres" type="text">
        addres
      </InputPanel>
      <InputPanel id="meteraj" type="number">
        meteraj
      </InputPanel>
      <InputPanel id="room-n" type="number">
        room-Numb
      </InputPanel>
      <InputPanel type="number" id="parking">
        parking
      </InputPanel>
      <InputPanel type="number" id="assansor">
        asansor
      </InputPanel>
      <InputPanel type="number" id="anbar">
        anbar
      </InputPanel>
      <InputPanel type="number" id="balkon">
        balkon
      </InputPanel>
      <InputPanel type="number" id="numb-ofTabaqat">
        numb-ofTabaqat
      </InputPanel>
      <InputPanel type="number" id="N-vahed-tabaqe">
        N-vahed-tabaqe
      </InputPanel>
      <InputPanel type="number" id="n-tabaqe">
        n-tabaqe
      </InputPanel>
      <InputPanel type="text" id="sharayet-bazdid">
        sharayet-bazdid
      </InputPanel>
      <OptionPanel name="vaziat" id="vaziat" myArray={vaziatArray}>
        vaziat
      </OptionPanel>
      <InputPanel type="date" id="tarikh-Takhlie">
        tarikh Takhlie
      </InputPanel>
      <OptionPanel name="sanad" id="sanad" myArray={sanadArray}>
        sanad
      </OptionPanel>
    </React.Fragment>
  );
};
export default GeneralForm;
