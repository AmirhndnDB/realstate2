import React from "react";
import Footer from "../Sections/Footer";
import RecomendFile from "../Sections/RecomendFile";
import { useEffect } from "react";
import {
  fetchApartmentSellFiles,
  useAppDispatc,
  propertyThunk,
  PhotosThunk,
  useAppSelector,
} from "../../Store/storeIndex";
import SearchResult from "../Sections/SearchResult";
import { setDefult } from "../../Store/Slice/searchSlice";
import { fetchApartmentRentFiles } from "../../Store/thunk/fRentApartment";
import { fetchOfficeRentFiles } from "../../Store/thunk/fOfficeRent";
import { fetchOfficeSaleFiles } from "../../Store/thunk/fOfficeSale";

const AvalableFile: React.FC = () => {
  const dispatch = useAppDispatc();
  useEffect(() => {
    dispatch(fetchApartmentSellFiles());
    dispatch(fetchApartmentRentFiles());
    dispatch(fetchOfficeRentFiles());
    dispatch(fetchOfficeSaleFiles());
    dispatch(propertyThunk());
    dispatch(PhotosThunk());
    dispatch(setDefult());
  }, []);

  const SearchBTN = useAppSelector((state) => state.search.searchBTN);

  // Handle the conditional logic based on the value of RT
  if (SearchBTN) {
    return (
      <main className="mt-32 p-0 text-slate-100">
        <RecomendFile />
        <Footer />
      </main>
    );
  } else {
    return (
      <main className="mt-32 p-0 text-slate-100">
        <SearchResult />
        <Footer />
      </main>
    );
  }
};
export default AvalableFile;
