import { fetchOfficeRentFiles } from "../thunk/fOfficeRent";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { addOfficeRentFiles } from "../thunk/addOfficeRent";

export interface ofrentdata {
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
  description: string;
  houseType: string;
  nabor: string;
  allowedJob: object;
  FrameAblity: string;
  TruficAllowed: string;
  PersonelNumbAllowed: string;
}

export interface ofrentState {
  ofrentdata: ofrentdata[] | null;
  isLoading: boolean;
  error: string | null;
  FilePageID: string | number | void | null;
}
const initialState: ofrentState = {
  ofrentdata: [],
  FilePageID: null,
  isLoading: false,
  error: "eror",
};

export const OfficeRentSlice = createSlice({
  name: "ofrent",
  initialState,
  reducers: {
    setORFilePageID: (state, action: PayloadAction) => {
      state.FilePageID = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchOfficeRentFiles.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchOfficeRentFiles.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.ofrentdata = action.payload;
      })
      .addCase(
        fetchOfficeRentFiles.rejected,
        (state, action: PayloadAction<any>) => {
          state.isLoading = false;
          state.error = action.payload;
          state.ofrentdata = [];
        }
      )
      .addCase(addOfficeRentFiles.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addOfficeRentFiles.fulfilled, (state, action) => {
        state.isLoading = false;
        state.ofrentdata?.push(action.payload);
      })
      .addCase(
        addOfficeRentFiles.rejected,
        (state, action: PayloadAction<any>) => {
          state.isLoading = false;
          state.error = action.payload;
          state.ofrentdata = [];
        }
      );
  },
});
export const { setORFilePageID } = OfficeRentSlice.actions;
export default OfficeRentSlice.reducer;
