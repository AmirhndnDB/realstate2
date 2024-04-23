import { Skeleton } from "@mui/material";
import { LiaBedSolid } from "react-icons/lia";
import { PiBathtub, PiCarProfile } from "react-icons/pi";

const CartSkeleton: React.FC = () => {
  return (
    <div>
      <div className="photo h-28 mb-1">
        <Skeleton sx={{ bgcolor: "grey.900" }} height={135} />
      </div>
      <div className="border-white border h-28 py-1 px-2">
        <p className="transactionb-type mb-1 ">
          <Skeleton sx={{ bgcolor: "grey.900" }} width={90} height={16} />
        </p>
        <h3 className="fileTitle font-serif text-sm mb-1">
          <Skeleton sx={{ bgcolor: "grey.900" }} width={135} height={20} />
        </h3>
        <p className="house-type font-light mb-1 h-fit">
          <Skeleton sx={{ bgcolor: "grey.900" }} width={210} height={15} />
        </p>
        <ul className="flex justify-center gap-4 mt-3.5">
          <li className="flex items-center gap-1">
            <LiaBedSolid />
            <p className="text-xs	">
              <Skeleton
                sx={{ bgcolor: "grey.900" }}
                width={29.01}
                height={16}
              />
            </p>
          </li>
          <li className="flex items-center gap-1">
            <PiBathtub />
            <p className="text-xs	">
              <Skeleton
                sx={{ bgcolor: "grey.900" }}
                width={29.01}
                height={16}
              />
            </p>
          </li>
          <li className="flex items-center gap-1">
            <PiCarProfile />
            <p className="text-xs	">
              <Skeleton
                sx={{ bgcolor: "grey.900" }}
                width={29.01}
                height={16}
              />
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default CartSkeleton;
