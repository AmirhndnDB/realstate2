import { searchThunk } from "../thunk/fSearchProp";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { propertydatatypes } from "./PropertySlice";

interface searchTypes {
  data: propertydatatypes[];
  message: string;
  status: number;
}

interface searchState {
  searchdata: searchTypes | null;
  isLoading: boolean;
  error: string | null;
  searchBTN: boolean;
}

const initialState: searchState = {
  searchdata: null,
  isLoading: false,
  searchBTN: true,
  error: "",
};

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setResulte: (state) => {
      state.searchBTN = false;
    },
    setDefult: (state) => {
      state.searchBTN = true;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(searchThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(searchThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.searchdata = action.payload;
      })
      .addCase(searchThunk.rejected, (state, action: PayloadAction<any>) => {
        state.isLoading = false;
        state.error = action.payload;
        state.searchdata = null;
      });
  },
});

export const { setResulte, setDefult } = searchSlice.actions;
export default searchSlice.reducer;
