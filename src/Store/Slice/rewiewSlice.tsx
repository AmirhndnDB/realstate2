import { reviewsThunk } from "../thunk/fgetRwiw";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface ReviewsDatatypes {
  isOwner: boolean;
  key: string;
  positiveFeedbackCount: number;
  rating: number;
  submissionDate: string;
  text: string;
  title: string;
}

interface Reviewstypes {
  data: ReviewsDatatypes[];
  message: string;
  status: number;
}

interface ReviewsState {
  reviewsdata: Reviewstypes | null;
  isLoading: boolean;
  error: string | null;
}
const initialState: ReviewsState = {
  reviewsdata: null,
  isLoading: false,
  error: "",
};

export const reviewsSlice = createSlice({
  name: "reviews",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(reviewsThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(reviewsThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.reviewsdata = action.payload;
      })
      .addCase(reviewsThunk.rejected, (state, action: PayloadAction<any>) => {
        state.isLoading = false;
        state.error = action.payload;
        state.reviewsdata = null;
      });
  },
});

export default reviewsSlice.reducer;
