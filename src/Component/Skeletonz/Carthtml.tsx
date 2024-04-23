import { LiaBedSolid } from "react-icons/lia";
import { PiBathtub, PiCarProfile } from "react-icons/pi";
import photo from "../../Store/Imagez/hous2.jpg";

const Carthtml: React.FC = () => {
  return (
    <div>
      <img src={photo} className="photo h-28 mb-1" alt="" />
      <div className="border-white border h-28 py-1 px-2">
        <p className="transactionb-type font-thin text-xs font-sans mb-1">
          gab
        </p>
        <h3 className="fileTitle font-serif text-sm mb-1">100 metr gozi</h3>
        <p className="house-type font-light mb-1 h-fit">
          house the best ever house you seen
        </p>
        <ul className="flex justify-center gap-4 mt-3.5">
          <li className="flex items-center gap-1">
            <LiaBedSolid /> <p className="text-xs	">n room</p>
          </li>
          <li className="flex items-center gap-1">
            <PiBathtub /> <p className="text-xs	">n bath</p>
          </li>
          <li className="flex items-center gap-1">
            <PiCarProfile /> <p className="text-xs	">4 car</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Carthtml;
