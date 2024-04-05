import photo from "../../Store/Imagez/house.webp";
import { PiBathtub } from "react-icons/pi";
import { LiaBedSolid } from "react-icons/lia";
import { PiCarProfile } from "react-icons/pi";
import LINK from "../NavBar/LINK";

const Cart: React.FC = () => {
  return (
    <LINK
      to="/recomend-file/filePage"
      activeClassName=""
      className="text-white "
    >
      <img src={photo} className="photo h-28 mb-1" alt="" />
      <div className="border-white border h-28 py-1 px-2">
        <p className="transactionb-type font-thin text-xs font-sans mb-1">
          RENT
        </p>
        <h3 className="fileTitle font-serif text-sm mb-1">
          123 metr saadat.st
        </h3>
        <p className="house-type font-light mb-1">
          vila :the best ever vila you seen
        </p>
        <ul className="flex justify-center gap-4 mt-3.5">
          <li className="flex items-center gap-1">
            <LiaBedSolid /> <p className="description-icon">2 room</p>
          </li>
          <li className="flex items-center gap-1">
            <PiBathtub /> <p className="description-icon">1 bath</p>
          </li>
          <li className="flex items-center gap-1">
            <PiCarProfile /> <p className="description-icon">1 car</p>
          </li>
        </ul>
      </div>
    </LINK>
  );
};
export default Cart;
