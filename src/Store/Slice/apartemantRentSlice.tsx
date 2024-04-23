import { addRentApartment } from "../thunk/addRentApartment";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchApartmentRentFiles } from "../thunk/fRentApartment";

export interface aparentdata {
  id: string;
  transitoinType: string;
  owner: string;
  callNumber: string;
  adress: string;
  area: string;
  roomnumb: string;
  bathnumb: string;
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
  minRent: string;
  maxRent: string;
  minMortgage: string;
  maxMortgage: string;
  sunstate: string;
  description: string;
  houseType: string;
  nabor: string;
}

export interface aparentState {
  aparentdata: aparentdata[] | null;
  isLoading: boolean;
  error: string | null;
  FilePageID: string | number | void | null;
}
const initialState: aparentState = {
  FilePageID: null,
  aparentdata: [],
  isLoading: false,
  error: "eror",
};

export const apartmentRentSlice = createSlice({
  name: "aparent",
  initialState,
  reducers: {
    setARFilePageID: (state, action: PayloadAction) => {
      state.FilePageID = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchApartmentRentFiles.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchApartmentRentFiles.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.aparentdata = action.payload;
      })
      .addCase(
        fetchApartmentRentFiles.rejected,
        (state, action: PayloadAction<any>) => {
          state.isLoading = false;
          state.error = action.payload;
          state.aparentdata = [];
        }
      )
      .addCase(addRentApartment.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addRentApartment.fulfilled, (state, action) => {
        state.isLoading = false;
        state.aparentdata?.push(action.payload);
      })
      .addCase(
        addRentApartment.rejected,
        (state, action: PayloadAction<any>) => {
          state.isLoading = false;
          state.error = action.payload;
          state.aparentdata = [];
        }
      );
  },
});
export const { setARFilePageID } = apartmentRentSlice.actions;
export default apartmentRentSlice.reducer;
