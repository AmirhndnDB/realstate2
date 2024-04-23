import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { puse } from "../../hooks/ToolForTestSkeleton";

export const searchThunk = createAsyncThunk(
  "search/fetch/pending",
  async (formData: any) => {
    const options = {
      method: "GET",
      url: "https://apartments-com1.p.rapidapi.com/properties",
      params: {
        location: "Ohio",
        minRent: formData.minBudget,
        maxRent: formData.maxBudget,
        minBed: formData.roomNumMin,
        maxBed: formData.roomNumMax,
        minBath: "1",
        maxBath: formData.bathNum,
        sort: "default",
        page: "2",
      },
      headers: {
        "X-RapidAPI-Key": "b0a6d5ef86msh81d321f9167d784p167d71jsn24094a7b9876",
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
