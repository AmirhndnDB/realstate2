import useSpeedFormValues from "../../hooks/useSpeadFormInput";
import { searchThunk } from "../../Store/thunk/fSearchProp";
import { useAppDispatc } from "../../Store/storeIndex";
import { setResulte } from "../../Store/Slice/searchSlice";

const SpeedFormPanel: React.FC = () => {
  const dispatch = useAppDispatc();
  const {
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
  } = useSpeedFormValues();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const formData = getFormData();
    console.log(formData);
    dispatch(searchThunk(formData));
    dispatch(setResulte());
  };
  return (
    <form
      className="flex flex-col gap-2 Fast-Search p-1"
      onSubmit={handleSubmit}
    >
      <nav className="insaiden-nav flex justify-center gap-9  p-2">
        <p className=" w-fit text-center">Rent- Maskoni</p>
      </nav>
      <nav className="insaiden-nav flex flex-col gap-2  justify-between p-2 text-sm ">
        <p className="justify-self-center self-start">room numb</p>
        <div className="grid grid-cols-2 gap-1">
          <input
            type={"number"}
            placeholder="min-romm"
            className="bg-slate-100 px-2"
            value={roomNumMin}
            onChange={handleRoomNumMinChange}
          />
          <input
            type={"number"}
            placeholder="max-room"
            className="bg-slate-100 px-2"
            value={roomNumMax}
            onChange={handleRoomNumMaxChange}
          />
        </div>
      </nav>
      <nav className="insaiden-nav flex justify-between  p-2 text-sm">
        <p> bath numb</p>
        <input
          placeholder="min-bath"
          type="number"
          className="w-28 bg-slate-100 px-2"
          value={bathNum}
          onChange={handleBathNumChange}
        />
      </nav>
      <nav className="insaiden-nav flex justify-between  p-2 text-sm">
        <p>min budget</p>
        <input
          placeholder="min budget"
          type="number"
          className="w-28 bg-slate-100 px-2"
          value={minBudget}
          onChange={handleMinBudgetChange}
        />
      </nav>
      <nav className="insaiden-nav flex justify-between  p-2 text-sm">
        <p>max budget</p>
        <input
          placeholder="max-budget"
          type="number"
          className="w-28 bg-slate-100 px-2"
          value={maxBudget}
          onChange={handleMaxBudgetChange}
        />
      </nav>
      <button className="BTN"> search</button>
    </form>
  );
};
export default SpeedFormPanel;
