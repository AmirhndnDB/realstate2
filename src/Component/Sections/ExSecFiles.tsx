import Accordion from "../Panel/Accordion";
import { LiaBedSolid } from "react-icons/lia";
import { TbBuildingCommunity } from "react-icons/tb";
import { IoCallOutline } from "react-icons/io5";
import { BiArea } from "react-icons/bi";
import { GiPositionMarker } from "react-icons/gi";
import { GoHistory } from "react-icons/go";
import {
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
import { useState } from "react";

const ExSecFiles: React.FC = () => {
  //  for ex API
  const [count, setCount] = useState(0);
  const minNumber = 0;
  const maxNumber = 10;

  const handleIncrement = () => {
    if (count < maxNumber) {
      setCount(count + 1);
    }
  };

  const handleDecrement = () => {
    if (count > minNumber) {
      setCount(count - 1);
    }
  };
  //
  //  for ex API

  const fileData: any = useAppSelector(
    (state) => state.property.propertydata?.data
  );

  let Photo;
  const { isLoading, photosdata, error } = useAppSelector(
    (state) => state.photos
  );
  if (isLoading) {
    return <div>is loading</div>;
  }
  if (error) return <div>photse error</div>;
  if (photosdata) {
    const FilePhotose = photosdata?.data[count].link;
    Photo = (
      <div
        style={{ backgroundImage: `url(${FilePhotose})` }}
        className="File-page-sec bg-cover bg-no-repeat h-96 flex justify-between items-center"
      >
        <PiCaretCircleLeftLight
          onClick={handleDecrement}
          className="w-12 text-white  h-12 z-50 p-file"
        />
        <PiCaretCircleRightLight
          onClick={handleIncrement}
          className="w-12 text-white  h-12 z-50 p-file"
        />
      </div>
    );
  }

  const call = fileData.contact.phone;
  // General
  return (
    <section className="">
      {Photo}
      <div className="p-6  text-white flex flex-col gap-4">
        <h2 className="text-3xl font-sans font-extralight	italic  ">
          {fileData?.name}
          <br />
          {fileData?.availabilities[0]?.details[0]?.area} Hous
        </h2>
        <Accordion title="Descrption:">
          <p className="font-extralight	text-sm	">{fileData?.description}</p>
        </Accordion>
        <div className="grid grid-cols-1 gap-4">
          <div className="flex justify-between	items-center	">
            <label className={"w-24"}>housArea:</label>
            <p className="font-extralight	text-sm	">
              ({fileData?.availabilities[0]?.details[0]?.area})
            </p>
            <BiArea />
          </div>
          <div className="flex justify-between	items-center">
            <label className="w-24">room:</label>
            <p className="font-extralight	text-sm	">
              {fileData?.availabilities[0]?.details[0]?.beds}
            </p>
            <LiaBedSolid />
          </div>
          <div className="flex justify-between	items-center">
            <label className="w-24">yearBuilt:</label>
            <p className="font-extralight	text-sm	"> {fileData?.yearBuilt}</p>
            <GoHistory />
          </div>
          <div className="flex justify-between	items-center">
            <label className="w-24">rentRange:</label>
            <p className="font-extralight	text-sm	">
              {fileData?.availabilities[0]?.details[0]?.rentRange}
            </p>
            <MdOutlinePriceCheck />
          </div>
          <div className="flex justify-between	items-center">
            <label className="w-24"> unitCount :</label>
            <p className="font-extralight	text-sm	">{fileData?.unitCount}</p>
            <TbBuildingCommunity />
          </div>
          <div className="flex justify-between	items-center">
            <label className="w-24">Elevator:</label>
            <p className="font-extralight	text-sm	">yes</p>
            <PiElevator />
          </div>
          <div className="flex justify-between	items-center">
            <label className="w-24">basement:</label>
            <p className="font-extralight	text-sm	">No</p>
            <MdOutlineWarehouse />
          </div>
          <div className="flex justify-between	items-center">
            <label className="w-24">Parking:</label>
            <p className="font-extralight	text-sm	">0</p>
            <PiCarProfile />
          </div>
          <div className="flex justify-between	items-center">
            <label className="w-24">balcony:</label>
            <p className="font-extralight	text-sm	">25SF</p>
            <MdBalcony />
          </div>
          <div className="flex justify-between	items-center">
            <label className="w-24">bathroom:</label>
            <p className="font-extralight	text-sm	">
              {fileData?.availabilities[0]?.details[0]?.baths}
            </p>
            <PiBathtub />
          </div>
          <div className="flex flex-col justify-between		gap-1">
            <div className=" flex justify-between	items-center">
              <label className="w-24 ">Addres:</label>
              <GiPositionMarker />
            </div>
            <p className="font-extralight	text-sm		self-start">
              {fileData?.address?.fullAddress}
            </p>
          </div>
        </div>
        <a
          className="call-btn flex items-center gap-1"
          href={"tel:" + { call }}
        >
          <h3>call</h3>
          <IoCallOutline />
        </a>
      </div>
    </section>
  );
};
export default ExSecFiles;
