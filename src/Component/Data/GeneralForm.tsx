import React from "react";
import InputPanel from "../Panel/InputPanel";
import OptionPanel from "../Panel/OptionPanel";

const GeneralForm: React.FC = () => {
  const sanadArray: string[] = ["maskony", "edary", "tejary", "nadarad"];
  const vaziatArray: string[] = ["por", "khali"];

  return (
    <>
      <InputPanel PL={"enter your name"} id="name" type="text" label="owner" />
      <InputPanel
        PL={"enter your Phone"}
        id="malek-number"
        type="tel"
        label="callNumber"
      />
      <InputPanel PL={"enter nabor"} id="nabor" type="text" label="nabor" />
      <InputPanel PL={"enter addres"} id="addres" type="text" label="adress" />
      <InputPanel PL={"enter Area"} id="meteraj" type="number" label="area" />
      <InputPanel
        PL={"enter rooms numb"}
        id="room-n"
        type="number"
        label="roomNumb"
      />
      <InputPanel
        PL={"enter baths numb"}
        id="bath-n"
        type="number"
        label="bathNumb"
      />
      <InputPanel
        PL={"enter Parking numb"}
        type="number"
        id="parking"
        label="parking"
      />
      <InputPanel
        PL={"enter elev numb"}
        type="number"
        id="elevator"
        label="elevator"
      />
      <InputPanel
        PL={"enter basement area"}
        type="number"
        id="anbar"
        label="anbary"
      />
      <InputPanel
        PL={"enter balkony area"}
        type="number"
        id="balkon"
        label="balkony"
      />
      <InputPanel
        PL={"enter numb of Floors"}
        type="number"
        id="numb-ofTabaqat"
        label="numbOfFloors"
      />
      <InputPanel
        PL={"enter numb unit in floor "}
        type="number"
        id="N-vahed-tabaqe"
        label="numbUnitFloor"
      />
      <InputPanel
        PL={"enter numb your floor"}
        type="number"
        id="n-tabaqe"
        label="numbOfFloor"
      />
      <InputPanel
        PL={"enter vist condition"}
        type="text"
        id="sharayet-bazdid"
        label="termOfVisits"
      />
      <OptionPanel name="dischargeStatus" id="vaziat" myArray={vaziatArray}>
        dischargeStatus
      </OptionPanel>
      <InputPanel
        PL={"enter Date discharge"}
        type="date"
        id="tarikh-Takhlie"
        label="dateDischarge"
      />
      <OptionPanel name="documentType" id="sanad" myArray={sanadArray}>
        documentType
      </OptionPanel>
      <InputPanel
        PL={"enter your description"}
        type="text"
        id="description"
        label="description"
      />
    </>
  );
};
export default GeneralForm;
