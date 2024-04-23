// import photo from "../../Store/Imagez/house.webp";
import { PiBathtub } from "react-icons/pi";
import { LiaBedSolid } from "react-icons/lia";
import { PiCarProfile } from "react-icons/pi";
import { useAppSelector } from "../../Store/storeIndex";
import PageLink from "../LINKS/pageLink";
import CartSkeleton from "../Skeletonz/CartSkeleton";
interface ExternalApiCartProps {
  area: string | undefined;
  houseType: string | undefined;
  roomnumb: string | undefined;
  bathnumb: string | undefined;
  parking: string | undefined;
  nabor: string | undefined;
  ID: any | undefined;
}
const ExternalApiCart: React.FC<ExternalApiCartProps> = ({
  area,
  houseType,
  roomnumb,
  bathnumb,
  parking,
  nabor,
  ID,
}) => {
  const { photosdata, isLoading, error } = useAppSelector(
    (state) => state.photos
  );
  let Photo;
  if (isLoading) return <CartSkeleton />;
  if (error) return <div>fetching photo is error</div>;
  if (photosdata) {
    const photose = photosdata.data[5].link;
    Photo = <img src={photose} className="photo h-28 mb-1" alt="" />;
  }
  return (
    <PageLink
      to={`/recomend-file/filePage${ID}`}
      className="text-white "
      ID={ID}
    >
      {Photo}
      <div className="border-white border h-28 py-1 px-2">
        <p className="transactionb-type font-thin text-xs font-sans mb-1">
          Rent
        </p>
        <h3 className="fileTitle font-serif text-sm mb-1">
          {area} {nabor}
        </h3>
        <p className="house-type font-light mb-1 h-fit">
          {houseType}:the best ever {houseType} you seen
        </p>
        <ul className="flex justify-center gap-4 mt-3.5">
          <li className="flex items-center gap-1">
            <LiaBedSolid />
            <p className="description-icon text-xs	">{roomnumb}room</p>
          </li>
          <li className="flex items-center gap-1">
            <PiBathtub />
            <p className="description-icon text-xs	">{bathnumb}</p>
          </li>
          <li className="flex items-center gap-1">
            <PiCarProfile />
            <p className="description-icon text-xs	">{parking}car</p>
          </li>
        </ul>
      </div>
    </PageLink>
  );
};
export default ExternalApiCart;
