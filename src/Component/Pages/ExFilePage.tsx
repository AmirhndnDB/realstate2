import Footer from "../Sections/Footer";
import Accordion from "../Panel/Accordion";
import { LiaBedSolid } from "react-icons/lia";
import { HiOutlineDocumentCheck } from "react-icons/hi2";
import { TbBuildingCommunity } from "react-icons/tb";
import { IoCallOutline } from "react-icons/io5";
import { BiArea } from "react-icons/bi";
import { GiPositionMarker } from "react-icons/gi";
import { GoHistory } from "react-icons/go";
import { CiLight } from "react-icons/ci";
import { SiConvertio } from "react-icons/si";
import {
  MdOutlinePriceChange,
  MdOutlinePriceCheck,
  MdOutlineWarehouse,
  MdBalcony,
} from "react-icons/md";

import {
  PiCaretCircleLeftLight,
  PiElevator,
  PiCaretCircleRightLight,
  PiCarProfile,
  PiBathtub,
} from "react-icons/pi";
import { useAppSelector } from "../../Store/storeIndex";
const ExFilePage: React.FC = () => {
  const expiData = useAppSelector((state) => state.property.propertydata?.data);
  return (
    <section className="">
      <div className="File-page-sec flex justify-between items-center">
        <PiCaretCircleLeftLight className="w-12 text-white  h-12 z-50 p-file" />
        <PiCaretCircleRightLight className="w-12 text-white  h-12 z-50 p-file" />
      </div>
      <div className="p-6  text-white flex flex-col gap-4">
        <h2 className="text-3xl font-sans font-extralight	italic">
          123 Meter Hous
        </h2>
        <Accordion title="descrption">
          <p>
            this hous is a vila in sadat st and 132 meterthis hous is a vila in
            sadat st and 132 meterthis hous is a vila in sadat st and 132
            meterthis hous is a vila in sadat st and 132 meterthis hous is a
            vila in sadat st and 132 meterthis hous is a vila in sadat st and
            132 meterthis hous is a vila in sadat st and 132 meterthis hous is a
            vila in sadat st and 132 meterthis hous is a vila in sadat st and
            132 meterthis hous is a vila in sadat st and 132 meterthis hous is a
            vila in sadat st and 132 meter
          </p>
        </Accordion>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <BiArea />
            <label>housArea</label>
          </div>
          <div>
            <LiaBedSolid />
            <label>room</label>
          </div>
          <div>
            <GoHistory />
            <label>age</label>
          </div>
          <div>
            <MdOutlinePriceChange />
            <label>Price</label>
          </div>
          <div>
            <TbBuildingCommunity />
            <label> floor X units</label>
          </div>
          <div>
            <PiElevator />
            <label>Elevator</label>
          </div>
          <div>
            <MdOutlineWarehouse />
            <label>basement</label>
          </div>
          <div>
            <PiCarProfile />
            <label>Parking</label>
          </div>
          <div>
            <MdBalcony />
            <label>balcony</label>
          </div>
          <div>
            <CiLight />
            <label>Light State</label>
          </div>
          <div>
            <PiBathtub />
            <label>bathroom</label>
          </div>
          <div>
            <HiOutlineDocumentCheck />
            <label>document</label>
          </div>

          <div>
            <GiPositionMarker />
            <label>address</label>
          </div>

          <div>
            <MdOutlinePriceCheck />
            <label> ejare</label>
          </div>
          <div>
            <SiConvertio />
            <label>Convertionable</label>
          </div>
        </div>
      </div>

      <Footer />
    </section>
  );
};
export default ExFilePage;
