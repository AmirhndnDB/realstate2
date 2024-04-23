import React from "react";
import Footer from "../Sections/Footer";
import UserCode from "../Sections/UserCode";
import GeneralForm from "../Data/GeneralForm";
import RentForm from "../Data/Rentform";
import SeelForm from "../Data/seelForm";
import HousForm from "../Data/HousForm";
import OfficeForm from "../Data/officeForm";
import RegesterFormRoute from "../Routers/RegesterFormRoute";
import { useAppDispatc, useAppSelector } from "../../Store/storeIndex";
import {
  changeFormType,
  changeunitType,
} from "../../Store/Slice/apartmentSaleSlice";
import { useDataContext } from "../../hooks/useDataContext";
import SubmitBtn from "../Panel/SubmitBtn";
const RegesterationFile: React.FC = () => {
  const dispatch = useAppDispatc();
  const convType = useAppSelector((state) => state.apasel.FormType);
  const unitType = useAppSelector((state) => state.apasel.unitType);
  const { updateDataString } = useDataContext();
  const handleConvType = (convType: string) => {
    dispatch(changeFormType(convType));
    updateDataString("convType", convType);
  };
  const handleUnitType = (unitType: string) => {
    dispatch(changeunitType(unitType));
    updateDataString("unitType", unitType);
  };

  // console.log(convType);
  // console.log(unitType);

  return (
    <main className="mt-32 text-slate-100	">
      <section className="form-sec bgShade2  p-6 pt-24 text-white flex flex-col gap-8 	">
        <h2 className="text-center italic font-thin	text-3xl">File Sabt Form</h2>
        <div className="flex gap-2 justify-center bg-emerald-950 w-fit">
          <button
            className={convType === "sale" ? "active-btn" : "BTN"}
            onClick={() => handleConvType("sale")}
          >
            Seel
          </button>
          <button
            className={convType === "rent" ? "active-btn" : "BTN"}
            onClick={() => handleConvType("rent")}
          >
            Rent
          </button>
        </div>
        <div className="flex gap-2 justify-center bg-emerald-950 w-fit">
          <button
            className={unitType === "house" ? "active-btn" : "BTN"}
            onClick={() => handleUnitType("house")}
          >
            Maskoni
          </button>
          <button
            className={unitType === "ofice" ? "active-btn" : "BTN"}
            onClick={() => handleUnitType("ofice")}
          >
            Edary
          </button>
        </div>

        <form className=" flex flex-col gap-4 bg-Shade3 p-1">
          <GeneralForm />
          <RegesterFormRoute RT={1} FormType="rent">
            <RentForm />
          </RegesterFormRoute>
          <RegesterFormRoute RT={1} FormType="sale">
            <SeelForm />
          </RegesterFormRoute>
          <RegesterFormRoute RT={2} FormType="ofice">
            <OfficeForm />
          </RegesterFormRoute>
          <RegesterFormRoute RT={2} FormType="house">
            <HousForm />
          </RegesterFormRoute>
          <SubmitBtn />
        </form>
      </section>
      <UserCode />
      <Footer />
    </main>
  );
};
export default RegesterationFile;
