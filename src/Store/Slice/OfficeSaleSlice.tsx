import { fetchOfficeSaleFiles } from "../thunk/fOfficeSale";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { addOfficeSaleFiles } from "../thunk/addOfficeSale";

export interface ofsaledata {
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
  price: string;
  sunstate: string;
  description: string;
  houseType: string;
  nabor: string;
  allowedJob: object;
  FrameAblity: string;
}

export interface ofsaleState {
  ofsaledata: ofsaledata[] | null;
  isLoading: boolean;
  error: string | null;
  FilePageID: string | number | void | null;
}
const initialState: ofsaleState = {
  ofsaledata: [],
  FilePageID: null,
  isLoading: false,
  error: "eror",
};

export const OfficeSaleSlice = createSlice({
  name: "ofsale",
  initialState,
  reducers: {
    setOSFilePageID: (state, action: PayloadAction) => {
      state.FilePageID = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchOfficeSaleFiles.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchOfficeSaleFiles.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.ofsaledata = action.payload;
      })
      .addCase(
        fetchOfficeSaleFiles.rejected,
        (state, action: PayloadAction<any>) => {
          state.isLoading = false;
          state.error = action.payload;
          state.ofsaledata = [];
        }
      )
      .addCase(addOfficeSaleFiles.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addOfficeSaleFiles.fulfilled, (state, action) => {
        state.isLoading = false;
        state.ofsaledata?.push(action.payload);
      })
      .addCase(
        addOfficeSaleFiles.rejected,
        (state, action: PayloadAction<any>) => {
          state.isLoading = false;
          state.error = action.payload;
          state.ofsaledata = [];
        }
      );
  },
});
export const { setOSFilePageID } = OfficeSaleSlice.actions;
export default OfficeSaleSlice.reducer;
