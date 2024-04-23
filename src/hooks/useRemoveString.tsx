import { useEffect, useState } from "react";

function useRemoveString(str: string, removeStr: string): string {
  const [modifiedStr, setModifiedStr] = useState(str);

  useEffect(() => {
    const newString = modifiedStr.replace(removeStr, "");
    setModifiedStr(newString);
  }, [modifiedStr, removeStr]);

  return modifiedStr;
}

export default useRemoveString;

// import React from 'react';
// import useRemoveString from './useRemoveString';

// function YourComponent() {
//   const myString = 'Hello, world!'; // رشته اصلی
//   const modifiedString = useRemoveString(myString, ','); // حذف کاراکتر ',' از رشته

//   return (
//     <div>
//       <p>Original string: {myString}</p>
//       <p>Modified string: {modifiedString}</p>
//     </div>
//   );
// }

// export default YourComponent;
