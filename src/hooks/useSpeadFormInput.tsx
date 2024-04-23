import { useState } from "react";

const useSpeedFormValues = () => {
  const [roomNumMin, setRoomNumMin] = useState("");
  const [roomNumMax, setRoomNumMax] = useState("");
  const [bathNum, setBathNum] = useState("");
  const [minBudget, setMinBudget] = useState("");
  const [maxBudget, setMaxBudget] = useState("");

  const handleRoomNumMinChange = (e: any) => {
    setRoomNumMin(e.target.value);
  };

  const handleRoomNumMaxChange = (e: any) => {
    setRoomNumMax(e.target.value);
  };

  const handleBathNumChange = (e: any) => {
    setBathNum(e.target.value);
  };

  const handleMinBudgetChange = (e: any) => {
    setMinBudget(e.target.value);
  };

  const handleMaxBudgetChange = (e: any) => {
    setMaxBudget(e.target.value);
  };

  const getFormData = () => {
    return {
      roomNumMin,
      roomNumMax,
      bathNum,
      minBudget,
      maxBudget,
    };
  };

  return {
    roomNumMin,
    roomNumMax,
    bathNum,
    minBudget,
    maxBudget,
    handleRoomNumMinChange,
    handleRoomNumMaxChange,
    handleBathNumChange,
    handleMinBudgetChange,
    handleMaxBudgetChange,
    getFormData,
  };
};

export default useSpeedFormValues;
