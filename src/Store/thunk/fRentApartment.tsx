import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { puse } from "../../hooks/ToolForTestSkeleton";

export const fetchApartmentRentFiles = createAsyncThunk(
  "aparent/fetch/pending",
  async () => {
    const options = {
      method: "GET",
      url: "http://localhost:3005/ApartmentRentFiles",
    };
    await puse(1000);

    try {
      const response = await axios.request(options);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }
);
