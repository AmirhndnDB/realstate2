import { Skeleton } from "@mui/material";
const QoutSkeleton: React.FC = () => {
  return (
    <blockquote className="coment-box border border-slate-100	border-solid	h-fit flex flex-col p-4	gap-2">
      <h2>
        <Skeleton width={222} height={21} />
      </h2>
      <q className="quot  text-xs font-thin">
        <Skeleton width={222} height={208} />
      </q>
      <div className="text-xs flex  gap-4">
        <p>
          <Skeleton width={92} />
        </p>
        <p>
          <Skeleton width={16} />
        </p>
      </div>
      <div>
        <div className="text-xs flex flex-col justify-center items-center	 gap-1">
          <p className="self-start	">
            <Skeleton width={77} />
          </p>
          <p>
            <Skeleton width={165} />
          </p>
        </div>
      </div>
      <h5 className="quoter text-sm p-2">
        <Skeleton width={120} />
      </h5>
    </blockquote>
  );
};
export default QoutSkeleton;
