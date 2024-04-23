import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { puse } from "../../hooks/ToolForTestSkeleton";

export const reviewsThunk = createAsyncThunk(
  "reviews/fetch/pending",
  async () => {
    const options = {
      method: "GET",
      url: "https://apartments-com1.p.rapidapi.com/properties/v07q4kg/reviews",
      params: { page: "1" },
      headers: {
        "X-RapidAPI-Key": "39f1d947dcmsh2b94c7c16913b95p12337cjsn575ec4a3ede9",
        "X-RapidAPI-Host": "apartments-com1.p.rapidapi.com",
      },
    };

    await puse(2000);

    try {
      const response = await axios.request(options);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }
);

//        "X-RapidAPI-Key": "39f1d947dcmsh2b94c7c16913b95p12337cjsn575ec4a3ede9",
