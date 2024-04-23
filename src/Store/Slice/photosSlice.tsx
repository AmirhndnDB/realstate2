import { PhotosThunk } from "../thunk/fPhoto";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface photosDatatypes {
  width: number;
  height: number;
  link: string;
  virtualTourLink: string;
}

interface Photostypes {
  data: photosDatatypes[];
  message: string;
  status: number;
}

interface photosState {
  photosdata: Photostypes | null;
  isLoading: boolean;
  error: string | null;
}
const initialState: photosState = {
  photosdata: null,
  isLoading: false,
  error: "",
};

export const photosSlice = createSlice({
  name: "photos",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(PhotosThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(PhotosThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.photosdata = action.payload;
      })
      .addCase(PhotosThunk.rejected, (state, action: PayloadAction<any>) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export default photosSlice.reducer;
