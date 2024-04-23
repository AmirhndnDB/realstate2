import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { searchSlice } from "./Slice/searchSlice";
import { reviewsSlice } from "./Slice/rewiewSlice";
import { propertySlice } from "./Slice/PropertySlice";
import { photosSlice } from "./Slice/photosSlice";
import { apartmentSaleSlice } from "./Slice/apartmentSaleSlice";
import { apartmentRentSlice } from "./Slice/apartemantRentSlice";
import { OfficeRentSlice } from "./Slice/OfficeRentSlice";
import { OfficeSaleSlice } from "./Slice/OfficeSaleSlice";
export const storIndex = configureStore({
  reducer: {
    photos: photosSlice.reducer,
    property: propertySlice.reducer,
    reviews: reviewsSlice.reducer,
    search: searchSlice.reducer,
    apasel: apartmentSaleSlice.reducer,
    aparent: apartmentRentSlice.reducer,
    ofsale: OfficeSaleSlice.reducer,
    ofrent: OfficeRentSlice.reducer,
  },
});
export * from "./thunk/fetchApartmentSellFiles";
export * from "./thunk/addFiles";
export * from "./thunk/fProperty";
export * from "./thunk/fPhoto";
export * from "./thunk/fgetRwiw";
export * from "./thunk/fSearchProp";

export const useAppDispatc: () => typeof storIndex.dispatch = useDispatch;

export const useAppSelector: TypedUseSelectorHook<
  ReturnType<typeof storIndex.getState>
> = useSelector;
