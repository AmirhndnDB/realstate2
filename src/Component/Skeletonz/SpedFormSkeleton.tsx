import { Skeleton } from "@mui/material";

const SpedFormSkeleton: React.FC = () => {
  return (
    <form className="flex flex-col gap-2 Fast-Search p-1">
      <nav className="insaiden-nav flex justify-center gap-9  p-2">
        <p className=" w-fit text-center">Rent- Maskoni</p>
      </nav>
      <nav className="insaiden-nav flex flex-col gap-2  justify-between p-2 text-sm ">
        <p className="justify-self-center self-start">room numb</p>
        <div className="grid grid-cols-2 gap-1">
          <span className="bg-slate-100 px-2">
            <Skeleton />
          </span>
          <span className="bg-slate-100 px-2">
            <Skeleton />
          </span>
        </div>
      </nav>
      <nav className="insaiden-nav flex justify-between  p-2 text-sm">
        <p> bath numb</p>
        <span className="w-28 bg-slate-100 px-2">
          <Skeleton />
        </span>
      </nav>
      <nav className="insaiden-nav flex justify-between  p-2 text-sm">
        <p>min budget</p>
        <span className="w-28 bg-slate-100 px-2">
          <Skeleton />
        </span>
      </nav>
      <nav className="insaiden-nav flex justify-between  p-2 text-sm">
        <p>max budget</p>
        <span className="w-28 bg-slate-100 px-2">
          <Skeleton />
        </span>
      </nav>
      <div className="BTN cursor-pointer	"> search</div>
    </form>
  );
};
export default SpedFormSkeleton;
