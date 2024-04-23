import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const addRentApartment = createAsyncThunk(
  "aparent/postApartmentRentFiles",
  async (data: any) => {
    const response = await axios.post(
      "http://localhost:3005/ApartmentRentFiles",

      {
        convType: data.dataStrings.convType,
        unitType: data.dataStrings.unitType,
        owner: data.dataStrings.owner,
        callNumber: data.dataStrings.callNumber,
        nabor: data.dataStrings.nabor,
        adress: data.dataStrings.adress,
        area: data.dataStrings.area,
        roomNumb: data.dataStrings.roomNumb,
        bathNumb: data.dataStrings.bathNumb,
        parking: data.dataStrings.parking,
        elevator: data.dataStrings.elevator,
        balkony: data.dataStrings.balkony,
        anbary: data.dataStrings.anbary,
        numbOfFloors: data.dataStrings.numbOfFloors,
        numbUnitFloor: data.dataStrings.numbUnitFloor,
        numbOfFloor: data.dataStrings.numbOfFloor,
        termOfVisits: data.dataStrings.termOfVisits,
        dateDischarge: data.dataStrings.dateDischarge,
        dischargeStatus: data.dataStrings.dischargeStatus,
        documentType: data.dataStrings.documentType,
        minRent: data.dataStrings.minRent,
        maxRent: data.dataStrings.maxRent,
        minMortgage: data.dataStrings.minMortgage,
        maxMortgage: data.dataStrings.maxMortgage,
        sunState: data.dataStrings.sunState,
        description: data.dataStrings.description,
      }
    );
    return response.data;
  }
);
