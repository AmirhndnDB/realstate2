import Cart from "../Crts/cart";
import { useAppSelector } from "../../Store/storeIndex";
import SpeedFormPanel from "../Panel/SpeedFormPanel";
import ExternalApiCart from "../Crts/ExternalApiCart";
import MainSkeleton from "../Skeletonz/MainSkeleton";

const RecomendFile: React.FC = () => {
  const ofrent = useAppSelector((state) => state.ofrent);
  const ofsale = useAppSelector((state) => state.ofsale);
  const aparent = useAppSelector((state) => state.aparent);
  const apasel = useAppSelector((state) => state.apasel);
  const { isLoading, error, propertydata } = useAppSelector((state) => {
    return state.property;
  });
  if (isLoading) {
    return <MainSkeleton />;
  }
  if (error) {
    return <div>fetching data has error</div>;
  }
  if (propertydata) {
    const apartmants = propertydata.data;

    const renderedASFiles = apasel.apaseldata?.map((item, index) => {
      return (
        <Cart
          key={item?.id}
          ID={item?.id}
          transitoinType={item?.convType}
          area={item?.area}
          houseType={item?.unitType}
          roomnumb={item?.roomNumb}
          bathnumb={item?.bathNumb}
          parking={item?.parking}
          nabor={item?.nabor}
          imgNumb={index}
        />
      );
    });
    const renderedARFiles = aparent.aparentdata?.map((item, index) => {
      return (
        <Cart
          key={item?.id}
          ID={item?.id}
          transitoinType={item?.transitoinType}
          area={item?.area}
          houseType={item?.houseType}
          roomnumb={item?.roomnumb}
          bathnumb={item?.bathnumb}
          parking={item?.parking}
          nabor={item?.nabor}
          imgNumb={index}
        />
      );
    });
    const renderedOSFiles = ofsale.ofsaledata?.map((item, index) => {
      return (
        <Cart
          key={item?.id}
          ID={item?.id}
          transitoinType={item?.transitoinType}
          area={item?.area}
          houseType={item?.houseType}
          roomnumb={item?.roomnumb}
          bathnumb={item?.bathnumb}
          parking={item?.parking}
          nabor={item?.nabor}
          imgNumb={index}
        />
      );
    });
    const renderedORFiles = ofrent.ofrentdata?.map((item, index) => {
      return (
        <Cart
          key={item?.id}
          ID={item?.id}
          transitoinType={item?.transitoinType}
          area={item?.area}
          houseType={item?.houseType}
          roomnumb={item?.roomnumb}
          bathnumb={item?.bathnumb}
          parking={item?.parking}
          nabor={item?.nabor}
          imgNumb={index}
        />
      );
    });

    return (
      <section className="AvalableFile p-12 h-fit pt-24 pb-8 flex flex-col gap-4">
        <SpeedFormPanel />
        <label className="AccentColor	text-center bgShade2">apartmantRent</label>
        <ExternalApiCart
          key={apartmants?.id}
          ID={apartmants?.id}
          area={apartmants?.availabilities[0]?.details[0]?.area}
          houseType={apartmants?.availabilities[0]?.details[5]?.modelName}
          roomnumb={apartmants?.availabilities[0]?.details[0]?.bedNum}
          bathnumb={apartmants?.availabilities[0]?.details[0]?.baths}
          parking={apartmants?.storyCount.toString()}
          nabor={apartmants?.address?.lineOne}
        />
        {renderedARFiles}
        <label className="AccentColor	text-center bgShade2">apartmantSale</label>
        {renderedASFiles}
        <label className="AccentColor	text-center bgShade2">Office Rent</label>
        {renderedORFiles}
        <label className="AccentColor	text-center bgShade2">Office Sale</label>
        {renderedOSFiles}
      </section>
    );
  }
  return (
    <section className="AvalableFile p-12 h-fit pt-24 pb-8 flex flex-col gap-4">
      <SpeedFormPanel />
      <label className="AccentColor	text-center bgShade2">apartmantRent</label>
      <div className="text-center">No Data for</div>
      <label className="AccentColor	text-center bgShade2">apartmantSale</label>
      <div className="text-center">No Data for</div>
      <label className="AccentColor	text-center bgShade2">Office Rent</label>
      <div className="text-center">No Data for</div>
      <label className="AccentColor	text-center bgShade2">Office Sale</label>
      <div className="text-center">No Data for</div>
    </section>
  );
};
export default RecomendFile;
