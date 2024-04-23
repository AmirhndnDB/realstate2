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
import { FaPersonCircleQuestion } from "react-icons/fa6";
import { FaPersonWalkingDashedLineArrowRight } from "react-icons/fa6";
import {
  PiCaretCircleLeftLight,
  PiElevator,
  PiCaretCircleRightLight,
  PiCarProfile,
  PiBathtub,
} from "react-icons/pi";
import { FaCheckDouble } from "react-icons/fa6";
import ShpeDeyalesFile from "../Routers/ShpeDeyalesFile";
import { MdFilterFrames } from "react-icons/md";
import { useState } from "react";
import { useAppSelector } from "../../Store/storeIndex";

interface InSecFileProps {
  FileData: any;
}

interface MyObject {
  [key: string]: boolean;
}

const InSecFile: React.FC<InSecFileProps> = ({ FileData }) => {
  //  for ex API
  const [count, setCount] = useState(10);
  const minNumber = 10;
  const maxNumber = 20;

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
  // General
  const fileData = FileData;
  const unitTyp = fileData?.unitType;
  const convType = fileData?.convType;
  console.log(fileData);
  const call = fileData.callNumber;

  const getKeysWithBooleanTrue = (obj: MyObject): string[] => {
    if (obj === null || obj === undefined) {
      return [];
    }

    return Object.keys(obj).filter((key) => obj[key] === true);
  };
  const AlowedJobs = getKeysWithBooleanTrue(fileData?.allowedJob);
  return (
    <section className="">
      {Photo}
      <div className="p-6  text-white flex flex-col gap-4">
        <h2 className="text-3xl font-sans font-extralight	italic">
          {fileData?.area}
          Meter Hous
        </h2>
        <Accordion title="Descrption:">
          <p className="font-extralight	text-sm	">{fileData?.description}</p>
        </Accordion>
        <div className="grid grid-cols-1 gap-4">
          <div className="flex justify-between	items-center	">
            <label className={"w-24"}>housArea:</label>
            <p className="font-extralight	text-sm	">{fileData?.area}</p>
            <BiArea />
          </div>
          <div className="flex justify-between	items-center	">
            <label className={"w-24"}>room:</label>
            <p className="font-extralight	text-sm	">{fileData.roomNumb}</p>
            <LiaBedSolid />
          </div>
          <div className="flex justify-between	items-center	">
            <label className={"w-24"}>age:</label>
            {/* <p className="font-extralight	text-sm	">{fileData?.age}</p> */}
            {/* add age prop */}
            <GoHistory />
          </div>
          <ShpeDeyalesFile FT={1} unitType={unitTyp} convType={convType}>
            <div className="flex justify-between	items-center	">
              <label className={"w-24"}> ejare:</label>
              <p className="font-extralight	text-sm	">
                {fileData.price} pish VA {fileData.price}
              </p>
              <MdOutlinePriceCheck />
            </div>
            <div className="flex justify-between	items-center	">
              <label className={"w-24"}>Convertionable:</label>
              <p className="font-extralight	text-sm	">
                ta {fileData.price} VA {fileData.price}ta
              </p>
              <SiConvertio />
            </div>
          </ShpeDeyalesFile>
          <ShpeDeyalesFile FT={2} unitType={unitTyp} convType={convType}>
            <div className="flex justify-between	items-center	">
              <label className={"w-24"}>Price:</label>
              <p className="font-extralight	text-sm	"> {fileData.price}</p>
              <MdOutlinePriceChange />
            </div>
          </ShpeDeyalesFile>
          <div className="flex justify-between	items-center	">
            <label className={"w-24"}> floor X units:</label>
            <p className="font-extralight	text-sm	">
              {fileData.numbOfFloors}X{fileData.numbUnitFloor}
            </p>
            <TbBuildingCommunity />
          </div>
          <div className="flex justify-between	items-center	">
            <label className={"w-24"}> floor numb:</label>
            <p className="font-extralight	text-sm	">{fileData.numbOfFloor}</p>
            <TbBuildingCommunity />
          </div>
          <div className="flex justify-between	items-center	">
            <label className={"w-24"}>Elevator:</label>
            <p className="font-extralight	text-sm	">{fileData.elevator} line</p>
            <PiElevator />
          </div>
          <div className="flex justify-between	items-center	">
            <label className={"w-24"}>basement:</label>
            <p className="font-extralight	text-sm	">{fileData.anbary} meter</p>
            <MdOutlineWarehouse />
          </div>
          <div className="flex justify-between	items-center	">
            <label className={"w-24"}>Parking:</label>
            <p className="font-extralight	text-sm	">{fileData.parking}</p>
            <PiCarProfile />
          </div>
          <div className="flex justify-between	items-center	">
            <label className={"w-24"}>balcony:</label>
            <p className="font-extralight	text-sm	">{fileData.balkony} meter</p>
            <MdBalcony />
          </div>
          <ShpeDeyalesFile FT={2} unitType={unitTyp} convType={convType}>
            <div className="flex justify-between	items-center	">
              <label className={"w-24"}>Light State:</label>
              <p className="font-extralight	text-sm	">{fileData.sunState}</p>
              <CiLight />
            </div>
          </ShpeDeyalesFile>
          <ShpeDeyalesFile FT={1} unitType={unitTyp} convType={convType}>
            <div className="flex justify-between	items-center	">
              <label className={"w-24"}>Light State:</label>
              <p className="font-extralight	text-sm	">{fileData.sunState}</p>
              <CiLight />
            </div>
          </ShpeDeyalesFile>
          <div className="flex justify-between	items-center	">
            <label className={"w-24"}>bathroom:</label>
            <p className="font-extralight	text-sm	">{fileData.bathNumb}</p>
            <PiBathtub />
          </div>
          <div className="flex justify-between	items-center	">
            <label className={"w-24"}>document:</label>
            <p className="font-extralight	text-sm	">{fileData.documenttype}</p>
            <HiOutlineDocumentCheck />
          </div>
          <div className="flex flex-col justify-between		gap-1">
            <div className=" flex justify-between	items-center">
              <label className={"w-24 "}>address:</label>
              <GiPositionMarker />
            </div>
            <p className="font-extralight	text-sm		self-start		">
              {fileData.adress}
            </p>
          </div>
          <ShpeDeyalesFile FT={3} unitType={unitTyp} convType={convType}>
            <div className="flex justify-between	items-center	">
              <label className="w-24">Framability:</label>
              <p className="font-extralight	text-sm	">{fileData?.FrameAblity}</p>
              <MdFilterFrames />
            </div>
            <div className="flex flex-col justify-between	gap-1">
              <div className=" flex justify-between	items-center">
                <label className="w-24">Allowed jobs:</label>
                <FaCheckDouble />
              </div>
              <p className="font-extralight	text-sm	self-start		">
                {AlowedJobs.join(" ,")}
              </p>
            </div>
          </ShpeDeyalesFile>

          <ShpeDeyalesFile FT={4} unitType={unitTyp} convType={convType}>
            <div className="flex justify-between	items-center	">
              <label className="w-24">Framability:</label>
              <p className="font-extralight	text-sm	">{fileData?.FrameAblity}</p>
              <MdFilterFrames />
            </div>
            <div className="flex flex-col justify-between	gap-1">
              <div className=" flex justify-between	items-center">
                <label className="w-24">Allowed jobs:</label>
                <FaCheckDouble />
              </div>
              <p className="font-extralight	text-sm	self-start		">
                {AlowedJobs.join(" ,")}
              </p>
            </div>
          </ShpeDeyalesFile>

          <ShpeDeyalesFile FT={4} unitType={unitTyp} convType={convType}>
            <div className="flex flex-col justify-between	gap-1">
              <div className=" flex justify-between	items-center">
                <label className="">Allowed trufic:</label>
                <FaPersonWalkingDashedLineArrowRight />
              </div>
              <p className="font-extralight	text-sm	self-start		">
                {fileData?.TruficAllowed}
              </p>
            </div>
            <div className="flex flex-col justify-between	gap-1	">
              <div className="flex justify-between items-center">
                <label className="">Allowed persenel number:</label>
                <FaPersonCircleQuestion />
              </div>
              <p className="font-extralight	text-sm	">
                {fileData?.PersonelNumbAllowed}
              </p>
            </div>
          </ShpeDeyalesFile>
        </div>
        <a className="call-btn flex items-center	gap-1" href={"tel:" + { call }}>
          <h5>call</h5>
          <IoCallOutline />
        </a>
      </div>
    </section>
  );
};
export default InSecFile;
