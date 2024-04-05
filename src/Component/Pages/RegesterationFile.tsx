import React from "react";
import Footer from "../Sections/Footer";
import UserCode from "../Sections/UserCode";
import GeneralForm from "../Data/GeneralForm";
import RentForm from "../Data/Rentform";
import SeelForm from "../Data/seelForm";
import HousForm from "../Data/HousForm";
import OfficeForm from "../Data/officeForm";
const RegesterationFile: React.FC = () => {
  return (
    <main className="mt-32 p-0">
      <section className="form-sec p-6 text-white flex flex-col gap-4">
        <h2 className="text-center text-3xl font-serif italic font-thin ">
          file sabt form
        </h2>
        <div className="flex gap-2 justify-center bg-emerald-950 w-fit">
          <button className="start-btn">Seel</button>
          <button className="active-btn">Rent</button>
        </div>
        <div className="flex gap-2 justify-center bg-emerald-950 w-fit">
          <button className="start-btn">Maskoni</button>
          <button className="active-btn">Edary</button>
        </div>

        <form className=" flex flex-col gap-4 ">
          <GeneralForm />
          <RentForm />
          <SeelForm />
          <HousForm />
          <OfficeForm />
          <button className="start-btn">ثبت نهایی</button>
        </form>
      </section>
      <UserCode />
      <Footer />
    </main>
  );
};
export default RegesterationFile;
