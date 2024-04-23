import React, { createContext, useContext, useState, ReactNode } from "react";

export interface DataStrings {
  [key: string]: string | null;
}

interface allowedItem {
  [key: string]: boolean;
}

export interface DataContextType {
  data: {
    dataStrings: DataStrings;
    allowedItem: allowedItem;
  };
  updateDataString: (label: string, value: string) => void;
  updateAllowedItem: (key: string, value: boolean) => void;
}

const DataContext = createContext<DataContextType | undefined>(undefined);

export const useDataContext = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error("useDataContext must be used within DataProvider");
  }
  return context;
};

interface DataProviderProps {
  children: ReactNode;
}

export interface DataObject {
  dataStrings: DataStrings;
  allowedItem: allowedItem;
}

export const DataProvider: React.FC<DataProviderProps> = ({ children }) => {
  const [data, setData] = useState<{
    dataStrings: DataStrings;
    allowedItem: allowedItem;
  }>({
    dataStrings: {
      unitType: "house",
      convType: "rent",
      owner: null,
      callNumber: null,
      nabor: null,
      adress: null,
      area: null,
      roomNumb: null,
      bathNumb: null,
      parking: null,
      elevator: null,
      balkony: null,
      anbary: null,
      numbOfFloors: null,
      numbUnitFloor: null,
      numbOfFloor: null,
      termOfVisits: null,
      dateDischarge: null,
      dischargeStatus: null,
      documentType: null,
      description: null,
    },
    allowedItem: {},
  });

  const updateDataString = (label: string, value: string) => {
    setData((prevData) => ({
      dataStrings: {
        ...prevData.dataStrings,
        [label]: value,
      },
      allowedItem: { ...prevData.allowedItem },
    }));
  };

  const updateAllowedItem = (key: string, value: boolean) => {
    setData((prevData) => ({
      dataStrings: { ...prevData.dataStrings },
      allowedItem: {
        ...prevData.allowedItem,
        [key]: value,
      },
    }));
  };

  return (
    <DataContext.Provider
      value={{
        data: data,
        updateDataString,
        updateAllowedItem,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
