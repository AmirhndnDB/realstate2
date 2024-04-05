import React,{useRef} from "react";
import { useAppDispatc } from "./Store/storIndex";
import { addPerson } from "./Store/Slice/personSlice";
const Stortest: React.FC = () => {
  const name=useRef<string>("")
  const dispatch = useAppDispatc()
  return (
    <form>
        <label>person name:</label>
        <input type="text" onChange={e=>{
          name.current = e.target.value;
          e.preventDefault();
        }}/>
        <button
        onClick={()=>dispatch(addPerson({name:name.current}))}>Add</button>

    </form>
  );
};
export default Stortest;

