import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { puse } from "../../hooks/ToolForTestSkeleton";

export const propertyThunk = createAsyncThunk(
  "property/fetch/pending",
  async () => {
    const options = {
      method: "GET",
      url: "https://apartments-com1.p.rapidapi.com/properties/v07q4kg",
      headers: {
        "X-RapidAPI-Key": "39f1d947dcmsh2b94c7c16913b95p12337cjsn575ec4a3ede9",
        "X-RapidAPI-Host": "apartments-com1.p.rapidapi.com",
      },
    };
    await puse(10000);

    try {
      const response = await axios.request(options);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }
);
//        "X-RapidAPI-Key": "39f1d947dcmsh2b94c7c16913b95p12337cjsn575ec4a3ede9",
