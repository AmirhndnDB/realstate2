import { fetchApartmentSellFiles } from "../thunk/fetchApartmentSellFiles";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { addFiles } from "../thunk/addFiles";

export interface apaseldata {
  id: string;
  convType: string;
  unitType: string;
  owner: string;
  callNumber: string;
  adress: string;
  area: string;
  roomNumb: string;
  bathNumb: string;
  parking: string;
  elevator: string;
  balkony: string;
  anbary: string;
  numboffloors: string;
  numbunitfloor: string;
  numboffloor: string;
  termofvisits: string;
  dischargestatus: string;
  datedischarge: string;
  documenttype: string;
  price: string;
  sunstate: string;
  description: string;
  nabor: string;
}

export interface apaselState {
  apaseldata: apaseldata[] | null;
  isLoading: boolean;
  error: string | null;
  FilePageID: string | number | void | null;
  FormType: string;
  unitType: string;
}
const initialState: apaselState = {
  apaseldata: [],
  FilePageID: null,
  FormType: "rent",
  unitType: "house",
  isLoading: false,
  error: "eror",
};

export const apartmentSaleSlice = createSlice({
  name: "apasale",
  initialState,
  reducers: {
    setASFilePageID: (state, action: PayloadAction) => {
      state.FilePageID = action.payload;
    },
    changeFormType: (state, action: PayloadAction<string>) => {
      state.FormType = action.payload;
    },
    changeunitType: (state, action: PayloadAction<string>) => {
      state.unitType = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchApartmentSellFiles.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchApartmentSellFiles.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.apaseldata = action.payload;
      })
      .addCase(
        fetchApartmentSellFiles.rejected,
        (state, action: PayloadAction<any>) => {
          state.isLoading = false;
          state.error = action.payload;
          state.apaseldata = [];
        }
      )
      .addCase(addFiles.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addFiles.fulfilled, (state, action) => {
        state.isLoading = false;
        state.apaseldata?.push(action.payload);
      })
      .addCase(addFiles.rejected, (state, action: PayloadAction<any>) => {
        state.isLoading = false;
        state.error = action.payload;
        state.apaseldata = [];
      });
  },
});
export const { setASFilePageID, changeunitType, changeFormType } =
  apartmentSaleSlice.actions;
export default apartmentSaleSlice.reducer;
