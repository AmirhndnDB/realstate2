import React from "react";
import { useAppSelector } from "./Store/storIndex";
const Test: React.FC = () => {
  const person =useAppSelector(state=>state.person.persons) 
  return (
    <div>
<p>this is list component</p>
<table>
  <thead>
    <tr>
      <th>ID</th>
      <th>Name</th>
    </tr>
  </thead>
  <tbody>
    {person.map(person=>(
      <tr key={person.id}>
        <td>{person.id}</td>
        <td>{person.name}</td>
      </tr>
    ))}
  </tbody>
</table>
    </div>
  );
};

export default Test;