import { useAppSelector } from "../../Store/storeIndex";
import ExSecFiles from "../Sections/ExSecFiles";
import InSecFile from "../Sections/InSecFile";
import Footer from "../Sections/Footer";
const FilePage: React.FC = () => {
  // General
  const ID: any = useAppSelector((state) => state.apasel.FilePageID);
  // General for  mach cart clicked and return that clicked cart
  const fileData: any = useAppSelector((state) => {
    if (state.apasel.FilePageID) {
      return (
        state.apasel.apaseldata?.find((item) => item.id === ID) ||
        state.aparent.aparentdata?.find((item) => item.id === ID) ||
        state.ofrent.ofrentdata?.find((item) => item.id === ID) ||
        state.ofsale.ofsaledata?.find((item) => item.id === ID) ||
        state.property.propertydata?.data.id === ID
      );
    } else return null;
  });
  //
  // General
  if (fileData === true) {
    return (
      <main className="text-slate-100	">
        <ExSecFiles />
        <Footer />
      </main>
    );
  } else {
    return (
      <main className="text-slate-100	">
        <InSecFile FileData={fileData} />
        <Footer />
      </main>
    );
  }
  //
};
export default FilePage;
