import { propertyThunk } from "../thunk/fProperty";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
export interface propertydatatypes {
  address: any;
  amenities: object[];
  availabilities: any;
  bedRange: string;
  contact: object;
  description: string;
  id: string;
  isFurnished: boolean;
  isMultifamily: boolean;
  lastModifiedDate: string;
  leaseTerms: string;
  name: string;
  onetimeExpenses: object[];
  petPolicies: object[];
  rating: number;
  recurringExpenses: object[];
  rentRange: string;
  schools: object[];
  storyCount: number;
  transits: object[];
  unitCount: number;
  yearBuilt: number;
  message: string;
  status: number;
}
interface propertytypes {
  data: propertydatatypes;
  message: string;
  status: number;
}

interface propertyState {
  propertydata: propertytypes | null;
  isLoading: boolean;
  error: string | null;
  ExFilePageID: number | null | void;
}
const initialState: propertyState = {
  propertydata: null,
  isLoading: false,
  error: "",
  ExFilePageID: null,
};

export const propertySlice = createSlice({
  name: "property",
  initialState,
  reducers: {
    setExFilePageID: (state, action: PayloadAction) => {
      state.ExFilePageID = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(propertyThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(propertyThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.propertydata = action.payload;
      })
      .addCase(propertyThunk.rejected, (state, action: PayloadAction<any>) => {
        state.isLoading = false;
        state.error = action.payload;
        state.propertydata = null;
      });
  },
});
export const { setExFilePageID } = propertySlice.actions;

export default propertySlice.reducer;
